import { Book, Check } from 'lucide-react';

export function AboutMeFormationCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
      <div className="mb-6 flex items-center">
        <div
          className={
            'mr-4 flex items-center justify-center rounded-xl bg-[#667467] p-3'
          }
        >
          <Book className={'text-white'} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Formations</h3>
      </div>

      <div className="space-y-4">
        {[
          'BTS Diététique - CNED',
          'Diplôme Universitaire en Alimentations Végétariennes - Faculté de médecine de La Sorbonne Paris',
          'Formation en pleine santé digestive (SII, SIBO…) - EduForm',
          'Formation en chirurgie bariatrique - EduForm',
          'Formation en maladies rénales chroniques - EduForm',
          'Formation pour la femme enceinte, allaitante et le jeune enfant - OREKA Formation',
          'Formation en diabète gestationnel - Medic Formation'
        ].map((formation, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#353F34]" />
            <span className="leading-relaxed text-gray-600">{formation}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
