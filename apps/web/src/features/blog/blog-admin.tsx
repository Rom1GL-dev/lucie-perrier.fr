'use client';
import LayoutAdmin from '@/components/layout/admin/layout-admin';
import { routes } from '@/config/routes.config';
import clsx from 'clsx';
import Link from 'next/link';
import { useListBlogs } from '@/features/blog/usecases/list-blogs/use-list-blog';
import { BlogCard } from '@/features/blog/components/admin/blog-card';
import { BlogFilter } from './components/blog-filter';
import { useEffect, useState } from 'react';
import { getBlogType } from '@/features/blog/types/blog';

export function BlogAdmin() {
  const { data: blogs } = useListBlogs();
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    const saved = localStorage.getItem('blogType');
    if (saved) setSelectedType(saved);
  }, []);

  const handleSelect = (type: string) => {
    setSelectedType(type);
    localStorage.setItem('blogType', type);
  };

  const filteredBlogs = blogs
    ? blogs.filter((b) => {
        if (selectedType === 'published') return b.published;
        if (selectedType === 'unpublished') return !b.published;
        return true; // "all"
      })
    : [];

  return (
    <LayoutAdmin
      breadcrumbs={[
        { name: 'Blogs', href: routes.admin.blogs.getHref(), current: true }
      ]}
      title={'Blogs'}
      description={'Liste de tous les blogs'}
      button={
        <Link
          href={routes.admin.blogsNew.getHref()}
          className={
            'cursor-pointer rounded-md border border-2 border-dashed border-[#667467] p-1 text-center text-sm text-[#667467] hover:border-slate-400 hover:bg-slate-200 md:p-2 md:text-left md:text-base'
          }
        >
          Nouveau Blog
        </Link>
      }
    >
      <div className="mb-5">
        <BlogFilter
          selectedType={selectedType}
          blogTypes={getBlogType(blogs ?? [])}
          onSelect={handleSelect}
        />
      </div>

      <div
        className={clsx('grid grid-cols-1 gap-2 md:gap-5', {
          'lg:grid-cols-2 xl:grid-cols-3':
            filteredBlogs && filteredBlogs.length > 0
        })}
      >
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <div>Aucun Blog trouvé.</div>
        )}
      </div>
    </LayoutAdmin>
  );
}
