'use client'; // rend tout le layout côté client

import { useEffect, useState } from 'react';

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div>{children}</div>;
}
