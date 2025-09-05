'use client';
import LayoutAdmin from '@/components/layout/admin/layout-admin';
import { routes } from '@/config/routes.config';
import BlogForm from '@/features/blog/components/admin/blog-form';
import { TBlogModel } from '@/features/blog/types/blogs.type';
import { useUploadImage } from '@/features/blog/usecases/upload-image/use-upload-image';
import { generateImageName, renameFile } from '@/lib/utils';
import { useToast } from '@/providers/toast-provider';
import { useRouter } from 'next/navigation';
import { useAddBlog } from '@/features/blog/usecases/add-blog/use-add-blog';
import { AddBlogDto } from '@/features/blog/usecases/add-blog/add-blog.dto';

export default function BlogNewPage() {
  const addBlogMutation = useAddBlog();
  const uploadImageMutation = useUploadImage();
  const router = useRouter();
  const { showToast } = useToast();

  const handleSaveBlog = async (blogData: TBlogModel) => {
    const imageName = generateImageName(blogData.title, blogData.image as File);

    const renamedImage = renameFile(blogData.image as File, imageName);

    try {
      await uploadImageMutation.mutateAsync({
        file: renamedImage,
        category: 'blogs'
      });

      const payload: AddBlogDto = {
        title: blogData.title,
        subtitle: blogData.subtitle ?? '',
        description: blogData.description,
        image: imageName,
        published: blogData.published
      };

      addBlogMutation.mutate(payload, {
        onSuccess: () => {
          showToast({
            type: 'success',
            message: 'Blog ajouté avec succès !'
          });
          router.push(routes.admin.blogs.getHref());
        },
        onError: () => {
          showToast({
            type: 'success',
            message: "Erreur lors de l'ajout du blogs."
          });
        }
      });
    } catch (error) {
      showToast({
        type: 'error',
        message: "Erreur lors de l'upload de l'image." + error
      });
    }
  };

  return (
    <LayoutAdmin
      title={'Nouveau blogs'}
      breadcrumbs={[
        {
          name: 'Blogs',
          href: routes.admin.blogs.getHref(),
          current: false
        },
        {
          name: 'Nouveau blogs',
          href: routes.admin.blogsNew.getHref(),
          current: true
        }
      ]}
    >
      <BlogForm onSave={handleSaveBlog} />
    </LayoutAdmin>
  );
}
