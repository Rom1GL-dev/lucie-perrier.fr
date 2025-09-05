import { AboutMeFormationCard } from '@/features/aboutme/components/about-me-formation-card';
import { AboutMeSkillsCard } from '@/features/aboutme/components/about-me-skills-card';

export function AboutMeFormationsSection() {
  return (
    <div
      className="mx-auto mt-16 max-w-7xl"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#58684E]">
          Mes formations
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Des formations spécialisées pour vous offrir un accompagnement expert
          et personnalisé
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <AboutMeFormationCard />
        <AboutMeSkillsCard />
      </div>
    </div>
  );
}
