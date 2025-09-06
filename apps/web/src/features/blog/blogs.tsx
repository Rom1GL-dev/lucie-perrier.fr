'use client';
import Title from '@/components/ux/title';
import Image from 'next/image';
import { routes } from '@/config/routes.config';
import dayjs from 'dayjs';
import { stripHtmlTags } from '@/lib/utils';
import { useListBlogs } from '@/features/blog/usecases/list-blogs/use-list-blog';
import { appConfig } from '@/config/app.config';
import Link from 'next/link';
import { LoadingBlogs } from '@/features/blog/components/loading-blogs';
import { ArrowRight, Calendar } from 'lucide-react';

export const Blogs = () => {
  const { data: blogs, isLoading } = useListBlogs();

  if (isLoading) {
    return <LoadingBlogs />;
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full opacity-10"
            style={{ backgroundColor: '#353F34' }}
          ></div>
          <div
            className="absolute top-1/2 -left-20 h-60 w-60 rounded-full opacity-5"
            style={{ backgroundColor: '#667467' }}
          ></div>
          <div
            className="absolute right-1/4 bottom-20 h-40 w-40 rounded-full opacity-8"
            style={{ backgroundColor: '#353F34' }}
          ></div>
        </div>

        <div className="relative p-10">
          <div className="mb-12 text-center">
            <Title title="Blogs" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Découvrez nos derniers articles et conseils
            </p>
          </div>

          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div
              className="mb-6 flex h-24 w-24 items-center justify-center rounded-full"
              style={{ backgroundColor: '#353F34' }}
            >
              <Calendar className="h-12 w-12 text-white" />
            </div>
            <p className="mb-2 text-xl font-semibold text-gray-700">
              Aucun blog disponible pour le moment
            </p>
            <p className="text-gray-500">
              Revenez bientôt pour découvrir nos nouveaux articles
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full opacity-10"
          style={{ backgroundColor: '#353F34' }}
        ></div>
        <div
          className="absolute top-1/2 -left-20 h-60 w-60 rounded-full opacity-5"
          style={{ backgroundColor: '#667467' }}
        ></div>
        <div
          className="absolute right-1/4 bottom-20 h-40 w-40 rounded-full opacity-8"
          style={{ backgroundColor: '#353F34' }}
        ></div>
        <div
          className="absolute top-1/4 left-1/3 h-32 w-32 rounded-full opacity-6"
          style={{ backgroundColor: '#667467' }}
        ></div>
      </div>

      <div className="relative p-10">
        <div className="mb-12 text-center">
          <Title title="Blogs" />
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Découvrez nos derniers articles, conseils et actualités pour vous
            accompagner dans votre parcours
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog, index) => {
            return (
              <Link
                href={routes.public.blog.getHref() + `/${blog.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                key={blog.id}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="relative shrink-0 overflow-hidden">
                  <Image
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={`${appConfig.apiUrl}/images/blogs/${blog.image}`}
                    alt={blog.title}
                    height={200}
                    width={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#353F34]">
                      {blog.title}
                    </h3>
                    <p className="line-clamp-3 leading-relaxed text-gray-600">
                      {stripHtmlTags(blog.description)}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <Image
                            className="size-10 rounded-full ring-2 ring-gray-100"
                            src="/images/lucie.jpeg"
                            alt="Auteur"
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-semibold text-gray-900">
                            Lucie PERRIER
                          </p>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <time
                              dateTime={dayjs(blog.createdAt).format(
                                'DD/MM/YYYY HH:mm'
                              )}
                            >
                              {dayjs(blog.createdAt).format('DD/MM/YYYY')}
                            </time>
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: '#353F34' }}
                      >
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
