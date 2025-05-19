import type { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
  return <main className="relative z-10">{children}</main>;
};
