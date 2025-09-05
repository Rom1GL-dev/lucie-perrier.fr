'use client';
import { navigationAdmin } from '@/config/navbar.config';
import { usePathname, useRouter } from 'next/navigation';
import { LogOutIcon } from 'lucide-react';
import Link from 'next/link';
import { authService } from '@/features/auth/store/auth-service';
import { routes } from '@/config/routes.config';

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

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
    <div className="relative flex hidden h-screen w-64 flex-col justify-between border-r border-gray-300 bg-white md:block">
      <div className="flex-grow p-6">
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
                href={item.path ?? '#'}
                className={`flex items-center text-gray-600 hover:text-gray-800 ${isActive(item.path ?? '')}`}
              >
                {item.icon && <item.icon className="mr-2" />}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div
        onClick={onLogout}
        className="absolute bottom-0 flex w-full cursor-pointer items-center justify-center space-x-2 bg-gray-100 p-4 text-center text-gray-600"
      >
        <LogOutIcon className="cursor-pointer" />
        <p>Déconnexion</p>
      </div>
    </div>
  );
};
