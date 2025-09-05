'use client';
import LayoutAdmin from '@/components/layout/admin/layout-admin';
import { useAddUser } from '@/features/user/usecases/add-user/use-add-user';
import { useToast } from '@/providers/toast-provider';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes.config';
import { TUserModel } from '@/features/user/types/user';
import UserForm from '@/features/user/components/user-form';

export default function Page() {
  const addUserMutation = useAddUser();
  const { showToast } = useToast();
  const router = useRouter();

  const handleSaveUser = (userData: TUserModel) => {
    const payload: TUserModel = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role
    };

    addUserMutation.mutate(payload, {
      onSuccess: () => {
        showToast({
          type: 'success',
          message: 'Utilisateur ajouté avec succès !'
        });
        router.push(routes.admin.users.getHref());
      },
      onError: () => {
        showToast({
          type: 'error',
          message: "Erreur lors de l'ajout du blogs."
        });
      }
    });
  };

  return (
    <LayoutAdmin
      title={'Nouvel utilisateur'}
      breadcrumbs={[
        {
          name: 'Utilisateurs',
          href: routes.admin.users.getHref(),
          current: false
        },
        { name: 'Nouvel utilisateur', href: '', current: true }
      ]}
    >
      <UserForm onSave={handleSaveUser} />
    </LayoutAdmin>
  );
}
