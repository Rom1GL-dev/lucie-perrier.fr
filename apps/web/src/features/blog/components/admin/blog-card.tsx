import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes.config';
import {
  statusColor,
  StatusKey,
  statusText,
  TBlogModel
} from '@/features/blog/types/blogs.type';

export const BlogCard = ({ blog }: { blog: TBlogModel }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(routes.admin.blogDetails.getHref(blog.id));
  };

  const blogStatus: StatusKey = blog.published ? 'published' : 'notPublished';

  return (
    <div
      className="flex cursor-pointer flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg"
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div
          className={`h-2 w-2 rounded-full ${statusColor[blogStatus] || 'bg-gray-400'}`}
        ></div>
        <div className="ml-2 text-sm text-slate-600">
          {statusText[blogStatus] || 'Blog'}
        </div>
      </div>
      <div className="mt-2 text-lg font-semibold">{blog.title}</div>
      {blog.subtitle && (
        <div className="font-medium text-slate-500">{blog.subtitle}</div>
      )}
    </div>
  );
};
