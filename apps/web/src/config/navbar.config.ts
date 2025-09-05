import { TNavbar } from '@/config/models/navbar.model';
import { routes } from '@/config/routes.config';
import { FaBlogger, FaQuestion, FaTachometerAlt } from 'react-icons/fa';
import { appConfig } from '@/config/app.config';

export const navbar: TNavbar[] = [
  {
    label: 'À propos de moi',
    href: routes.public.aProposDeMoi.getHref()
  },
  {
    label: 'Consultations',
    href: '/consultations',
    subItems: [
      {
        label: 'Tarifs',
        href: routes.public.tarifs.getHref()
      }
    ]
  },
  {
    label: 'Blog',
    href: routes.public.blog.getHref()
  },
  {
    label: 'Contact',
    href: routes.public.contact.getHref()
  },
  {
    label: 'Rendez-vous',
    type: 'button',
    href: appConfig.calendlyUrl
  }
];
export const navigationAdmin = [
  {
    path: routes.admin.dashboard.path,
    name: 'Tableau de bord',
    icon: FaTachometerAlt
  },
  { title: 'Gestion' },
  { path: routes.admin.blogs.path, name: 'Blogs', icon: FaBlogger },
  // { path: routes.admin.users.path, name: 'Utilisateurs', icon: FaUsers },
  { path: routes.admin.faqs.path, name: 'Faq', icon: FaQuestion }
];
