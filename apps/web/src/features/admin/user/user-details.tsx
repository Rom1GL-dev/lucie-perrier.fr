'use client';
import LayoutAdmin from '@/components/layout/admin/layout-admin';
import { routes } from '@/config/routes.config';

export function UserDetails() {
  return (
    <LayoutAdmin
      breadcrumbs={[
        {
          name: 'Utilisateurs',
          href: routes.admin.users.getHref()
        },
        {
          name: "Détail de l\'utilisateur",
          current: true
        }
      ]}
      title={'Détail du blogs'}
      description={'Détail du blogs'}
    >
      Blog
    </LayoutAdmin>
  );
}
