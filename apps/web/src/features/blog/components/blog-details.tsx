'use client';

import LayoutAdmin from '@/components/layout/admin/layout-admin';
import { useUploadImage } from '@/features/blog/usecases/upload-image/use-upload-image';
import { useToast } from '@/providers/toast-provider';
import { routes } from '@/config/routes.config';
import { Blog } from '@/features/blog/usecases/list-blogs/blog';
import { generateImageName, renameFile } from '@/lib/utils';
import BlogForm from '@/features/blog/components/admin/blog-form';
import { useParams, useRouter } from 'next/navigation';
import { useUpdateBlog } from '@/features/blog/usecases/update-blog/use-update-blog';
import { useDeleteBlog } from '@/features/blog/usecases/delete-blog/use-delete-blog';
import { useListBlogs } from '@/features/blog/usecases/list-blogs/use-list-blog';

export function BlogDetails() {
  const router = useRouter();
  const params = useParams();
  const { showToast } = useToast();
  const uploadImageMutation = useUploadImage();
  const updateBlogMutation = useUpdateBlog();
  const deleteBlogMutation = useDeleteBlog();
  const { data: blogs, isLoading } = useListBlogs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const blog = blogs?.find((b) => b.id === params.id);

  if (!params.id) {
    router.push(routes.admin.blogs.getHref());
    return null;
  }

  const handleSaveBlog = async (blogData: Blog, isImageChanged: boolean) => {
    let imageName = blogData.image;

    if (isImageChanged) {
      imageName = generateImageName(blogData.title, blogData.image as File);
      const renamedImage = renameFile(blogData.image as File, imageName);

      try {
        await uploadImageMutation.mutateAsync({
          file: renamedImage,
          category: 'blogs'
        });
      } catch (error) {
        showToast({
          type: 'error',
          message: "Erreur lors de l'upload de l'image." + error
        });
        return;
      }
    }

    const payload = {
      id: blogData.id,
      title: blogData.title,
      subtitle: blogData.subtitle,
      description: blogData.description,
      image: imageName as string,
      published: blogData.published
    };

    updateBlogMutation.mutate(payload, {
      onSuccess: () => {
        showToast({
          type: 'success',
          message: 'Blog modifié avec succès !'
        });
        router.push(routes.admin.blogDetails.getHref(payload.id));
      },
      onError: () => {
        showToast({
          type: 'error',
          message: 'Une erreur est survenue lors de la modification du blog.'
        });
      }
    });
  };

  const handleRemoveBlog = (blogId: string) => {
    const payload = {
      id: blogId
    };

    deleteBlogMutation.mutate(payload, {
      onSuccess: () => {
        showToast({
          type: 'success',
          message: 'Blog supprimé avec succès !'
        });
        router.push(routes.admin.blogs.getHref());
      },
      onError: () => {
        showToast({
          type: 'error',
          message: 'Erreur lors de la suppression du blog !'
        });
      }
    });
  };

  return (
    <LayoutAdmin
      title={'Détail du Blog'}
      breadcrumbs={[
        {
          name: 'Blogs',
          href: routes.admin.blogs.getHref(),
          current: false
        },
        { name: 'Détail du blog', href: '', current: true }
      ]}
    >
      <BlogForm
        blog={blog}
        onSave={handleSaveBlog}
        onDelete={handleRemoveBlog}
      />
    </LayoutAdmin>
  );
}
