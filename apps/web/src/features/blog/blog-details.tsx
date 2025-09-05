'use client';
import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import Title from '@/components/ux/title';
import { useListBlogs } from '@/features/blog/usecases/list-blogs/use-list-blog';
import { Blog } from '@/features/blog/usecases/list-blogs/blog';
import { appConfig } from '@/config/app.config';
import { BlogDetailsOther } from '@/features/blog/components/blog-details-other';
import { BlogShare } from '@/features/blog/components/blog-share';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import BlogBreadcrumb from '@/features/blog/components/blog-breadcrumb';

interface Props {
  blog: Blog;
}

export default function BlogDetails({ blog }: Props) {
  const { data: blogs, isLoading } = useListBlogs();

  if (isLoading) {
    return (
      <div className="p-10">
        <Title title="Blogs" />
        <p className="mt-4 text-gray-500">Chargement des blogs...</p>
      </div>
    );
  }

  return (
    <div className={'px-10 py-10 lg:px-20'}>
      <Title title="Blog" />
      <BlogBreadcrumb title={blog?.title} />
      <div className={'mt-12 flex items-center gap-x-3'}>
        <Image src={'/icons/stars.svg'} alt={'stars'} width={40} height={20} />
        <h1 className={'text-xl font-medium md:text-2xl lg:text-4xl'}>
          {blog?.title}
        </h1>
      </div>
      <div className={'mt-5 grid gap-x-10 lg:grid-cols-3'}>
        <div className={'lg:col-span-2'}>
          <div className={'flex items-center justify-between'}>
            <div className="flex items-center">
              <Avatar>
                <AvatarImage
                  src="/images/lucie.jpeg"
                  title={'Auteur'}
                  alt="Auteur"
                />
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 hover:underline">
                  Lucie PERRIER
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time
                    dateTime={dayjs(blog?.createdAt).format('DD/MM/YYYY HH:mm')}
                  >
                    Publié le{' '}
                    {dayjs(blog?.createdAt).format('DD/MM/YYYY HH:mm')}
                  </time>
                </div>
              </div>
            </div>
            <BlogShare />
          </div>

          <Image
            src={`${appConfig.apiUrl}/images/blogs/${blog?.image}`}
            alt="Image"
            className="mt-5 h-64 w-full rounded-lg object-cover"
            width={700}
            height={400}
          />
          <div
            className={'mt-5'}
            dangerouslySetInnerHTML={{
              __html: blog?.description
            }}
          />
        </div>
        <BlogDetailsOther blog={blog} blogs={blogs || []} />
      </div>
    </div>
  );
}
