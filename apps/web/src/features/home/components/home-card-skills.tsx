export function HomeCardSkills() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
      <div
        className="rounded-2xl border border-gray-100 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#353F34]/10">
          <svg
            className="h-8 w-8 text-[#353F34]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[#353F34]">
          Je vous écoute
        </h3>
        <p className="text-gray-600">
          Je prends le temps de comprendre vos habitudes et vos envies
        </p>
      </div>

      <div
        className="rounded-2xl border border-gray-100 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#667467]/10">
          <svg
            className="h-8 w-8 text-[#667467]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[#353F34]">
          On prend le temps
        </h3>
        <p className="text-gray-600">
          Ensemble, on avance à votre rythme vers vos objectifs
        </p>
      </div>

      <div
        className="rounded-2xl border border-gray-100 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#353F34]/10">
          <svg
            className="h-8 w-8 text-[#353F34]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[#353F34]">
          Je vous accompagne
        </h3>
        <p className="text-gray-600">
          Des petits changements qui font une grande différence au quotidien
        </p>
      </div>
    </div>
  );
}
