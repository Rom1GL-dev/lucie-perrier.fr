'use client';
import React, { useState } from 'react';
import { navbar } from '@/config/navbar.config';
import Link from 'next/link';
import { routes } from '@/config/routes.config';
import Image from 'next/image';

export default function Navbar() {
  const [, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setHoveredItem(label);
    }, 300); // Délai de 300ms
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // Délai de 300ms
    setTimeoutId(id);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-10 flex items-center justify-between bg-white p-4 px-11 text-[#353F34] shadow-xl`}
    >
      <Link href={routes.public.home.getHref()} className="navbar-logo">
        <Image
          src="/logo-navbar.svg"
          title={'Logo Lucie Perrier'}
          alt="Logo"
          width={175}
          height={175}
        />
      </Link>
      <div className="lg:hidden" onClick={toggleMenu}>
        <Image
          src="/icons/menu.svg"
          title={'Menu Burger'}
          alt="Menu"
          width={32}
          height={32}
        />
      </div>
      <ul className="hidden items-center space-x-8 lg:flex">
        {navbar.map((item) => (
          <li
            key={item.label}
            className="group relative"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={item.href}
              className={`flex items-center text-lg ${item.type && 'rounded-lg bg-[#58684E] p-1 px-3 text-white duration-150 hover:bg-[#667467]'}`}
              title={item.label}
              onClick={(e) => {
                if (item.subItems) {
                  e.preventDefault();
                  toggleDropdown(item.label);
                }
              }}
            >
              {item.label}
              {item.subItems && (
                <Image
                  src="/icons/chevron-down.svg"
                  title={'Chevron down'}
                  alt="Chevron Down"
                  width={16}
                  height={16}
                  className="ml-1"
                />
              )}
            </a>
            {item.subItems && openDropdown === item.label && (
              <ul className="absolute left-0 mt-2 translate-y-0 transform rounded bg-white p-2 text-[#353F34] shadow-lg transition-transform duration-300 ease-in-out">
                {item.subItems.map((subItem) => (
                  <li key={subItem.label} className="py-1">
                    <a
                      href={subItem.href}
                      className="block px-4 py-2 hover:bg-gray-200"
                      title={subItem.label}
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {isMenuOpen && (
        <div className="fixed inset-0 z-20 translate-x-0 transform bg-white transition-transform duration-300 ease-in-out lg:hidden">
          <div className="flex justify-end p-4">
            <Image
              src="/icons/close.svg"
              alt="Close"
              width={24}
              height={24}
              onClick={toggleMenu}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/logo-navbar.svg" alt="Logo" width={208} height={52} />
          </div>
          <ul className="mt-8 flex flex-col items-center space-y-8">
            {navbar.map((item) => (
              <li
                key={item.label}
                className="group relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className={`flex items-center text-lg ${item.type && 'rounded-lg bg-[#353F34] p-1 px-3 text-white duration-150 hover:bg-[#667467]'}`}
                  onClick={(e) => {
                    if (item.subItems) {
                      e.preventDefault();
                      toggleDropdown(item.label);
                    }
                  }}
                >
                  {item.label}
                  {item.subItems && (
                    <Image
                      src="/icons/chevron-down.svg"
                      alt="Chevron Down"
                      width={16}
                      height={16}
                      className="ml-1"
                    />
                  )}
                </a>
                {item.subItems && openDropdown === item.label && (
                  <ul className="absolute left-0 mt-2 translate-y-0 transform rounded bg-white p-2 text-[#353F34] shadow-lg transition-transform duration-300 ease-in-out">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label} className="py-1">
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
