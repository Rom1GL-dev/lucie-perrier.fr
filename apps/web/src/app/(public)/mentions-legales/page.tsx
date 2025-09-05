'use client';
import React from 'react';
import Link from 'next/link';
import Title from '@/components/ux/title';
import { getPhoneForm } from '@/lib/utils';
import { observer } from 'mobx-react-lite';
import { params } from '@/config/params.config';

const MentionLegale = observer(() => {
  return (
    <div className={'p-10'}>
      <Title title={'Mentions Légales'} />
      <div
        className={'mt-14 flex flex-col items-center'}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className={'w-full md:w-3/4'}>
          <div className={'mb-10 flex flex-col'}>
            <h2 className={'mb-5 text-2xl font-semibold text-[#58684E]'}>
              1. Éditeur du site
            </h2>
            <p className={'mb-7'}>
              Le site{' '}
              <Link
                href={'https://lucie-perrier.fr/'}
                className={'font-semibold'}
              >
                https://lucie-perrier.fr/
              </Link>{' '}
              est édité par <b>Lucie PERRIER</b>, diététicienne diplômée,
              inscrite au répertoire RPPS sous le numéro <b>10110416962</b>.
            </p>
            <p className={'mb-2'}>Téléphone : {getPhoneForm(params.phone)}</p>
            <p className={'mb-2'}>Email : contact-diet@lucie-perrier.fr</p>
          </div>
          <div className={'mb-10 flex flex-col'}>
            <h2 className={'mb-5 text-2xl font-semibold text-[#58684E]'}>
              2. Hébergement
            </h2>
            <p className={'mb-2'}>Le Site est hébergé par la société : OVH</p>
            <p className={'mb-2'}>
              Adresse : 2 rue Kellermann BP 80157 59053 ROUBAIX Cedex 1
            </p>
            <p className={'mb-2'}>Email : support@ovh.com</p>
          </div>
          <div className={'mb-10 flex flex-col'}>
            <h2 className={'mb-5 text-2xl font-semibold text-[#58684E]'}>
              3. Propriété intellectuelle
            </h2>
            <p className={'mb-2'}>
              Tous les éléments du site{' '}
              <Link
                href={'https://lucie-perrier.fr/'}
                className={'font-semibold'}
              >
                https://lucie-perrier.fr/
              </Link>
              , y compris les textes, images, graphismes, logos, icônes, sons,
              logiciels, sont la propriété exclusive de <b>Lucie PERRIER</b> ou
              font l&apos;objet d&apos;une autorisation spécifique
              d&apos;utilisation. Toute reproduction, représentation,
              modification, publication, adaptation de tout ou partie des
              éléments du site, quel que soit le moyen ou le procédé utilisé,
              est interdite, sauf autorisation écrite préalable de{' '}
              <b>Lucie PERRIER</b>.
            </p>
          </div>
          <div className={'mb-10 flex flex-col'}>
            <h2 className={'mb-5 text-2xl font-semibold text-[#58684E]'}>
              4. Cookies
            </h2>
            <p className={'mb-2'}>
              Le site{' '}
              <Link
                href={'https://lucie-perrier.fr/'}
                className={'font-semibold'}
              >
                https://lucie-perrier.fr/
              </Link>{' '}
              peut utiliser des cookies pour améliorer l&apos;expérience
              utilisateur. Les cookies sont des fichiers stockés sur
              l&apos;ordinateur de l&apos;utilisateur pour enregistrer des
              informations relatives à la navigation sur le site.
              L&apos;tilisateur peut configurer son navigateur pour refuser les
              cookies, mais cela peut limiter l&apos;accès à certaines
              fonctionnalités du site.
            </p>
          </div>
          <div className={'mb-10 flex flex-col'}>
            <h2 className={'mb-5 text-2xl font-semibold text-[#58684E]'}>
              5. Liens hypertextes
            </h2>
            <p className={'mb-2'}>
              Le site{' '}
              <Link
                href={'https://lucie-perrier.fr/'}
                className={'font-semibold'}
              >
                https://lucie-perrier.fr/
              </Link>{' '}
              contient un certain nombre de liens hypertextes vers d&apos;autres
              sites, mis en place avec l&apos;autorisation de{' '}
              <b>Lucie PERRIER</b>. Cependant, <b>Lucie PERRIER</b> n&apos;a pas
              la possibilité de vérifier le contenu des sites ainsi visités, et
              n&apos;assumera en conséquence aucune responsabilité de ce fait.
              ou le procédé utilisé, est interdite, sauf autorisation écrite
              préalable de <b>Lucie PERRIER</b>.
            </p>
          </div>
          <div className={'mb-10 flex flex-col'}>
            <h2 className={'mb-5 text-2xl font-semibold text-[#58684E]'}>
              6. Contact
            </h2>
            <p className={'mb-2'}>
              Pour toute question ou demande d&apos;information concernant le
              site{' '}
              <Link
                href={'https://lucie-perrier.fr/'}
                className={'font-semibold'}
              >
                https://lucie-perrier.fr/
              </Link>
              , veuillez contacter <b>Lucie PERRIER</b> à l&apos;adresse email
              suivante : contact-diet@lucie-perrier.fr.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MentionLegale;
