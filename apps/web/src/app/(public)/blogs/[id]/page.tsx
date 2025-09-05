'use client';

import BlogDetails from '@/features/blog/blog-details';
import { use } from 'react';
import { observer } from 'mobx-react-lite';
import { useListBlogs } from '@/features/blog/usecases/list-blogs/use-list-blog';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes.config';

interface BlogProps {
  params: Promise<{ id: string }>;
}

const Blog: React.FC<BlogProps> = observer(({ params }) => {
  const { data: blogs } = useListBlogs();
  const router = useRouter();

  const resolvedParams = use(params);

  const blog = blogs?.find((b) => b.id === resolvedParams.id) || null;

  if (!blog) {
    router.push(routes.public.blog.getHref());
    return;
  }

  return <BlogDetails blog={blog} />;
});

export default Blog;
