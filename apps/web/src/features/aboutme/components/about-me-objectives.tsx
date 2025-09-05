import { Check } from 'lucide-react';

export function AboutMeObjectives() {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold text-[#58684E]">
        Mes objectifs pour vous :
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {[
          'Adopter des habitudes alimentaires saines et durables',
          'Améliorer votre énergie et votre vitalité',
          'Gérer les troubles digestifs et les intolérances alimentaires',
          'Optimiser votre alimentation végétale',
          'Atteindre et maintenir un poids de forme'
        ].map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#353F34]">
              <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-gray-600">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
