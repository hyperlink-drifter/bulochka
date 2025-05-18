import '@/assets/css/tailwind.css';

import type { ReactNode } from 'react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Main } from '@/components/main';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <>
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
