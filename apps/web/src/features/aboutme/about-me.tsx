import Title from '@/components/ux/title';
import { AboutMePresentationSection } from '@/features/aboutme/components/about-me-presentation-section';
import { AboutMeFormationsSection } from '@/features/aboutme/components/about-me-formations-section';
import { AboutMeMessage } from '@/features/aboutme/components/about-me-message';

export default function AboutMe() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#353F34]/5 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 h-60 w-60 rounded-full bg-[#667467]/5 blur-2xl"></div>
        <div className="absolute right-1/4 bottom-20 h-40 w-40 rounded-full bg-[#353F34]/3 blur-xl"></div>
      </div>

      <div className="relative p-10">
        <Title title="À propos de moi" />
        <AboutMePresentationSection />
        <AboutMeFormationsSection />
        <AboutMeMessage />
      </div>
    </div>
  );
}
