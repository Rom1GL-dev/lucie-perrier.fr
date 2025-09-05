import Image from 'next/image';
import { params } from '@/config/params.config';
import Link from 'next/link';
import { routes } from '@/config/routes.config';

export function HomeAboutCard() {
  return (
    <div
      className="rounded-3xl border border-gray-100 bg-white/80 p-8 shadow-2xl backdrop-blur-sm lg:p-12"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-start">
        <div className="group relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#353F34]/20 to-[#667467]/20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
          <div className={'h-60 w-60'}>
            <Image
              src="/images/lucie.jpeg"
              title={'Lucie'}
              alt="lucie"
              width={280}
              height={280}
              className="relative h-full w-full transform rounded-2xl object-cover shadow-xl transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div
            className="text-lg leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: params.aboutMeText }}
          />

          <div className="pt-4">
            <Link
              href={routes.public.aProposDeMoi.getHref()}
              className="inline-flex transform items-center gap-2 rounded-2xl bg-[#353F34] px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#667467] hover:shadow-xl"
            >
              En savoir plus
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
