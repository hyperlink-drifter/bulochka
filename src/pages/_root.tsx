import type { ReactNode } from 'react';

type RootProps = { children: ReactNode };

export default async function RootElement({ children }: RootProps) {
  return (
    <html lang="en" className="overscroll-none overflow-x-clip bg-black">
      <head></head>
      <body
        data-version="1.0"
        className="bg-[url(/images/cinema-pattern--006.svg)] bg-orange-400 bg-fixed bg-size-[160px_160px] bg-repeat bg-center"
      >
        {children}
      </body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
