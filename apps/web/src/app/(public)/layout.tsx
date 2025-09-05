'use client';
import React, { useEffect } from 'react';
import { Banner } from '@/components/ux/banner';
import Navbar from '@/components/ux/navbar';
import { Footer } from '@/components/ux/footer';

export default function VitrineLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Masque le logo Next.js Dev en bas à gauche */
      .next-dev-overlay-button {
        display: none !important;
      }

      /* Masque les toasts de dev si besoin */
      .nextjs-toast {
        display: none !important;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Banner />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
