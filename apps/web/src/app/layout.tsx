import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import AosProvider from '@/providers/aos-provider';
import { SessionProvider } from '@/providers/session-provider';
import { ClientProvider } from '@/providers/client-provider';
import { ToastProvider } from '@/providers/toast-provider';

export const metadata: Metadata = {
  title: 'Lucie Perrier - Diététicienne Nutritionniste',
  description:
    'Je suis Lucie Perrier, diététicienne passionnée par le bien-être et la santé. Mon approche repose sur une vision globale de la nutrition, où chaque individu est unique et mérite une attention personnalisée. Mon objectif est de...',
  keywords: [
    'Lucie Perrier',
    'Diététicienne',
    'Nutritionniste',
    'Diététique',
    'Nutrition',
    'Alimentation',
    'Équilibre alimentaire',
    'Santé',
    'Bien-être',
    'Perte de poids',
    'Gestion du poids',
    'Nutrition sportive',
    'Troubles alimentaires',
    'Conseils alimentaires',
    'Consultation diététique',
    'Suivi nutritionnel',
    'Lucie Perrier diététicienne',
    'Lucie Perrier nutritionniste',
    'Lucie Perrier nutrition',
    'Lucie Perrier santé',
    'Lucie Perrier bien-être',
    'Lucie Perrier Paris',
    'Lucie Perrier France',
    'Lucie Perrier expert nutrition',
    'Lucie Perrier alimentation saine',
    'Lucie Perrier régime alimentaire',
    'Lucie Perrier diététique personnalisée',
    'Lucie Perrier coaching nutritionnel',
    'diététicien',
    'aliments',
    'alimentation équilibrée',
    'bonne santé',
    'sain',
    'nourriture',
    'manger',
    'émotions',
    'faim',
    'satiété',
    'rassasiement',
    'vitalité',
    'vitamines',
    'minéraux',
    'oligoéléments',
    'diabète',
    'diabète gestationnel',
    'cholestérol',
    'végétal',
    'végétarien',
    'végétarienne',
    'vegan',
    'végétalien',
    'végétalienne',
    'prise de poids',
    'rééquilibrage alimentaire'
  ],
  authors: [{ name: 'Romain GILOT', url: 'https://romain-gilot.fr/' }],
  openGraph: {
    title: 'Lucie Perrier - Diététicienne Nutritionniste',
    description:
      "Lucie Perrier est une diététicienne nutritionniste spécialisée dans la gestion du poids, la nutrition sportive et les troubles alimentaires. Prenez rendez-vous dès aujourd'hui pour améliorer votre santé et votre bien-être.",
    images: [
      {
        url: '/images/home-logo.svg',
        width: 500,
        height: 300,
        alt: 'Lucie Perrier - Diététicienne Nutritionniste'
      }
    ],
    url: 'https://lucie-perrier.fr',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucie Perrier - Diététicienne Nutritionniste',
    description:
      "Lucie Perrier est une diététicienne nutritionniste spécialisée dans la gestion du poids, la nutrition sportive et les troubles alimentaires. Prenez rendez-vous dès aujourd'hui pour améliorer votre santé et votre bien-être.",
    images: '/images/home-logo.svg'
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Lucie Perrier',
            description:
              'Je suis Lucie Perrier, diététicienne passionnée par le bien-être et la santé. Mon approche repose sur une vision globale de la nutrition, où chaque individu est unique et mérite une attention personnalisée. Mon objectif est de...',
            url: 'https://lucie-perrier.fr',
            logo: '/images/home-logo.svg',
            image: '/images/home-logo.svg',
            telephone: '+33648769451',
            email: 'contact-diet@lucie-perrier.fr',
            openingHours: 'Mo-Fr 09:00-18:00',
            sameAs: [
              'https://www.linkedin.com/in/lucie-perrier',
              'https://www.instagram.com/lucie_perrier'
            ]
          })}
        </script>
      </head>
      <body>
        <ClientProvider>
          <SessionProvider>
            <ToastProvider>
              <AosProvider>{children}</AosProvider>
            </ToastProvider>
          </SessionProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
