import { env } from '../../env.mjs';

export type AppConfig = {
  name: string;
  logo: string;
  apiUrl: string;
  appUrl: string;
  commission: number;
  calendlyUrl: string;
};
export const appConfig: AppConfig = {
  name: 'lucie-perrier.fr',
  logo: '/logo.png',
  apiUrl: env.NEXT_PUBLIC_API_URL,
  appUrl: env.NEXT_PUBLIC_APP_URL,
  commission: 0.2,
  calendlyUrl: 'https://calendly.com/lucie-perrier-diet'
};
