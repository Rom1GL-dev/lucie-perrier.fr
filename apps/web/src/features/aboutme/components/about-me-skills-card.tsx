import { Check, CheckCircle } from 'lucide-react';

export function AboutMeSkillsCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
      <div className="mb-6 flex items-center">
        <div
          className={
            'mr-4 flex items-center justify-center rounded-xl bg-[#667467] p-3'
          }
        >
          <CheckCircle className={'text-white'} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Compétences</h3>
      </div>

      <p className="mb-6 text-gray-600">
        Mes expériences et mes formations m&apos;ont donné les compétences
        nécessaires pour prendre en charge diverses situations :
      </p>

      <div className="space-y-4">
        {[
          'Prise/perte pondérale',
          'Alimentation végétarienne ou végétalienne',
          'Diabète de type 1 et 2',
          'Diabète gestationnel',
          'Pathologies cardio-vasculaires',
          "Suivi pré et post opératoire dans le cadre d'une chirurgie bariatrique"
        ].map((competence, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#667467]" />
            <span className="leading-relaxed text-gray-600">{competence}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
