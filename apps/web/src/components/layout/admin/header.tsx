'use client';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import SidebarMobile from '@/components/layout/admin/sidebar-mobile';
import Breadcrumbs from '@/components/layout/admin/breadcrumb';
import { useMe } from '@/providers/session-provider';

interface HeaderProps {
  breadcrumbs: {
    name: string;
    href?: string;
    current?: boolean;
  }[];
}

export const Header = ({ breadcrumbs }: HeaderProps) => {
  const { me } = useMe();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      if (
        (isMac && e.metaKey && e.key === 'k') ||
        (!isMac && e.ctrlKey && e.key === 'k')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="relative flex w-full items-center justify-between bg-[#667467] p-3">
        <FaBars
          className="cursor-pointer text-2xl text-white md:hidden"
          onClick={handleSidebarToggle}
        />

        <div className="flex w-full items-center justify-between">
          <Breadcrumbs breadcrumbs={breadcrumbs ?? []} />
          <div className={'flex w-full items-center justify-end space-x-3'}>
            <div
              className="relative cursor-pointer rounded-full bg-white p-2 text-[#667467]"
              onClick={handleDropdownToggle}
            >
              {me?.name.split(' ')[0]?.charAt(0).toUpperCase() ?? ''}
              {me?.name.split(' ')[1]?.charAt(0).toUpperCase() ?? ''}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 rounded-md border border-gray-200 bg-white shadow-lg">
                  <div className="p-3">
                    <p className="text-gray-800">{me?.name}</p>
                    <p className="text-gray-600">{me?.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {isSidebarOpen && (
        <SidebarMobile handleSidebarToggle={handleSidebarToggle} />
      )}
    </>
  );
};
