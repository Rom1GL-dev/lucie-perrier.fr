import Image from 'next/image';
import { AboutMeWhoIAm } from '@/features/aboutme/components/about-me-who-i-am';
import { AboutMeObjectives } from '@/features/aboutme/components/about-me-objectives';

export function AboutMePresentationSection() {
  return (
    <div
      className="mx-auto mt-12 max-w-7xl"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white/80 shadow-xl backdrop-blur-sm">
        <div className="lg:grid lg:grid-cols-2 lg:gap-0">
          <div className="relative lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <Image
                alt="Lucie Perrier"
                src="/images/lucie.jpeg"
                width={1184}
                height={1376}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#353F34]/20 to-transparent"></div>
            </div>
          </div>

          <div className="p-8 lg:order-1 lg:p-12">
            <h2 className="mb-6 text-3xl font-bold text-[#58684E] lg:text-4xl">
              Qui suis-je ?
            </h2>

            <AboutMeWhoIAm />
            <AboutMeObjectives />
          </div>
        </div>
      </div>
    </div>
  );
}
