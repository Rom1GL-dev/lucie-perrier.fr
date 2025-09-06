'use client';
import Image from 'next/image';
import Title from '@/components/ux/title';
import { Faq } from '@/features/faq/faq';
import { HomeAboutCard } from '@/features/home/components/home-about-card';
import { HomeCardSkills } from '@/features/home/components/home-card-skills';

export const Home = () => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 mx-auto flex w-[400px] justify-center md:w-1/2">
          <Image
            src="/images/home-logo.svg"
            alt="Logo"
            title="HomeLogo"
            width={300}
            height={150}
            className={'h-full w-full'}
            priority
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
        <Image
          src="/images/home-image.svg"
          alt="Image"
          title={'Home background'}
          width={1200}
          height={600}
          className="w-full object-cover"
          priority
        />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-[#353F34]/10"></div>
          <div
            className="absolute top-40 right-20 h-24 w-24 animate-bounce rounded-full bg-[#667467]/15"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-60 left-1/4 h-16 w-16 animate-pulse rounded-full bg-[#353F34]/20"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute right-10 bottom-40 h-40 w-40 animate-bounce rounded-full bg-[#667467]/10"
            style={{ animationDelay: '0.5s' }}
          ></div>
        </div>

        <div className="relative p-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <Title title={'À propos de moi'} />
            </div>
            <HomeAboutCard />
            <HomeCardSkills />
          </div>
        </div>
      </div>
      <Faq />
    </>
  );
};
