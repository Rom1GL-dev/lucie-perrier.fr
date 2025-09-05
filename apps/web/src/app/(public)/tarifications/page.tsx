import React from 'react';
import Title from '@/components/ux/title';
import { InformationCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { appConfig } from '@/config/app.config';

export default function Tarifications() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#667467] opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#353F34] opacity-10"></div>
      </div>
      <div className={'p-10'}>
        <Title title={'Tarifications'} />
        <div
          className="mb-14 rounded-md bg-blue-50 p-4 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex">
            <div className="shrink-0">
              <InformationCircleIcon
                aria-hidden="true"
                className="size-5 text-blue-400"
              />
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <div>
                <p className="text-sm text-blue-700">
                  Le règlement peut se faire par espèces, chèques ou virement.
                </p>

                <p className="mt-2 text-sm text-blue-700">
                  Un message de rappel vous est envoyé 24h avant la
                  consultation, suivi d’un lien pour accéder à la
                  visioconférence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={'grid grid-cols-1 gap-10 md:grid-cols-2'}>
          <div
            className={'bg-gray-100 p-5 shadow-lg'}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className={'mb-3 text-2xl font-semibold text-[#444444]'}>
              Première consultation
            </h2>
            <div className={'flex items-center'}>
              <div className={'h-14 w-1 rounded bg-[#58684E]'}></div>
              <div className={'ml-3'}>
                <div className={'flex'}>
                  <Image
                    src={'/icons/clock.svg'}
                    title={'clock'}
                    alt={'clock'}
                    width={20}
                    height={20}
                    className={'mr-2'}
                  />
                  1h-1h15
                </div>
                <div className={'flex'}>
                  <Image
                    src={'/icons/price.svg'}
                    title={'price'}
                    alt={'price'}
                    width={20}
                    height={20}
                    className={'mr-2'}
                  />
                  50€
                </div>
              </div>
            </div>
          </div>
          <div
            className={'bg-gray-100 p-5 shadow-lg'}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className={'mb-3 text-2xl font-semibold text-[#444444]'}>
              Consultation de suivi
            </h2>
            <div className={'flex items-center'}>
              <div className={'h-14 w-1 rounded bg-[#58684E]'}></div>
              <div className={'ml-3'}>
                <div className={'flex'}>
                  <Image
                    src={'/icons/clock.svg'}
                    alt={'clock'}
                    width={20}
                    height={20}
                    className={'mr-2'}
                  />
                  45min
                </div>
                <div className={'flex'}>
                  <Image
                    src={'/icons/price.svg'}
                    alt={'price'}
                    width={20}
                    height={20}
                    className={'mr-2'}
                  />
                  40€
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={'mt-10 flex justify-center'}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link
            href={appConfig.calendlyUrl}
            className={'rounded-lg bg-[#667467] p-2 text-white'}
          >
            Je prends rendez-vous
          </Link>
        </div>
      </div>
    </div>
  );
}
