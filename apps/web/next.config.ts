import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // <-- Ajouté pour la build standalone

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**'
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001', // <-- ajoute ton port d'API ici
        pathname: '/v1/images/**'
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3001', // idem si tu testes en local
        pathname: '/v1/images/**'
      }
    ]
  }
};

export default nextConfig;
