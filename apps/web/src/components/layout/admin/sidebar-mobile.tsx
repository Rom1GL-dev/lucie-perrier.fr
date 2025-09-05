'use client';
import { navigationAdmin } from '@/config/navbar.config';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { routes } from '@/config/routes.config';
import { LogOutIcon } from 'lucide-react';
import { authService } from '@/features/auth/store/auth-service';

export default function SidebarMobile({
  handleSidebarToggle
}: {
  handleSidebarToggle: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => {
    return pathname.includes(path)
      ? 'bg-slate-100 p-2 border-r-4 border-[#667467]'
      : '';
  };

  const onLogout = async () => {
    try {
      await authService.logout();
      router.push(routes.admin.login.getHref());
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <div
        className={'fixed z-50 h-full w-full bg-black opacity-75'}
        onClick={() => handleSidebarToggle()}
      ></div>
      <div className="fixed top-0 left-0 z-50 flex h-full w-64 flex-col justify-between border-r border-gray-300 bg-white lg:hidden">
        <div className="p-6">
          <h1 className="mb-1 text-center text-3xl font-bold text-[#667467]">
            Lucie Perrier
          </h1>
          <h2 className="mb-10 text-center text-base font-light">
            Administration
          </h2>
          <nav className="space-y-4 text-gray-500">
            {navigationAdmin.map((item) => {
              if (item.title) {
                return (
                  <div
                    key={item.title}
                    className="mt-10 mb-3 text-sm font-bold text-gray-600"
                  >
                    {item.title}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  href={item.path ?? ''}
                  className={`flex items-center text-sm text-gray-600 hover:text-gray-800 ${isActive(item.path ?? '')}`}
                >
                  {item.icon && <item.icon className="mr-2" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        <button
          onClick={onLogout}
          className="absolute bottom-0 flex w-full cursor-pointer items-center justify-center space-x-2 bg-gray-100 p-4 text-center text-gray-600"
        >
          <LogOutIcon className="cursor-pointer" />
          <p>Déconnexion</p>
        </button>
      </div>
    </>
  );
}
