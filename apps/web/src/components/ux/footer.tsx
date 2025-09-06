'use client';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { routes } from '@/config/routes.config';
import { params } from '@/config/params.config';
import React from 'react';
import FooterItem from '@/components/ux/footer-item';
import { getPhoneForm } from '@/lib/utils';
import Image from 'next/image';

export const Footer = observer(() => {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#667467] p-5">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center">
          <Link href={routes.public.home.getHref()}>
            <Image
              src="/images/home-logo.svg"
              title="Logo home"
              alt="Logohome"
              width={350}
              height={350}
              style={{ width: '100%', height: 'auto' }}
              sizes="(max-width: 768px) 150px, 350px"
            />
          </Link>
          <div className="mt-5 flex items-center justify-center md:mt-8">
            <Link href={params.instagram ?? ''} className="mr-2">
              <Image
                src="/icons/instagram.svg"
                title={'instagram'}
                alt="instagram"
                height={25}
                width={25}
              />
            </Link>
            <Link href={params.linkedin ?? ''}>
              <Image
                src="/icons/linkedin.svg"
                title={'linkedin'}
                alt="linkedin"
                height={20}
                width={20}
              />
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col md:w-3/4 lg:w-auto">
          <div className="font-500 mb-4 text-2xl text-white">Contact</div>
          <FooterItem
            alt="calendar"
            size={25}
            image="/icons/calendar.svg"
            description="Prise de rendez-vous par mail ou téléphone, ou directement via la plateforme Calendly"
          />
          <FooterItem
            alt="mail"
            size={25}
            image="/icons/mail.svg"
            description={
              <Link href={`mailto:${params.email}`}>
                {params.email ?? 'Aucun email'}
              </Link>
            }
          />
          <FooterItem
            alt="phone"
            size={25}
            image="/icons/phone.svg"
            description={
              <Link href={`tel:${params.phone}`}>
                {getPhoneForm(params.phone)}
              </Link>
            }
          />
        </div>
        <div className="flex w-full flex-col md:w-3/4 lg:w-auto">
          <div className="font-500 mt-12 text-white">
            <FooterItem
              alt="rpps"
              size={25}
              image="/icons/identifiant.svg"
              description={
                <>
                  <b className="mr-1">N° RPPS:</b> {params.no_rpps}
                </>
              }
            />
            <FooterItem
              alt="siret"
              size={25}
              image="/icons/identifiant.svg"
              description={
                <>
                  <b className="mr-1">N° SIRET:</b> {params.no_siret}
                </>
              }
            />
          </div>
        </div>
        <div className="flex w-full flex-col md:w-3/4 lg:w-auto">
          <div className="font-500 mb-4 text-2xl text-white">
            Une consultation ?
          </div>
          <FooterItem
            alt="calendar"
            size={25}
            image="/icons/location.svg"
            description={
              <div className="flex justify-start gap-x-1">
                <div className="font-500">Consultations à distance (visio)</div>
              </div>
            }
          />
        </div>
      </div>
      <div className="mt-10 flex w-full flex-col justify-center text-center text-white">
        <div>© 2025 - Lucie Perrier - Diététicienne - Nutritionniste</div>
        <div>
          Site réalisé par{' '}
          <Link href="https://romain-gilot.fr/" className="underline">
            Romain GILOT
          </Link>
        </div>
        <div className="mt-3 flex justify-center space-x-5 text-sm text-[#CFCFCF] underline">
          <Link href={routes.public.mentionLegale.getHref()}>
            Mentions Légales
          </Link>
          <Link href={routes.public.politiqueDeConfidentialite.getHref()}>
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
});
