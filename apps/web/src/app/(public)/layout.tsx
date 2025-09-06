'use client';
import React from 'react';
import { Banner } from '@/components/ux/banner';
import Navbar from '@/components/ux/navbar';
import { Footer } from '@/components/ux/footer';

export default function VitrineLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Banner />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
