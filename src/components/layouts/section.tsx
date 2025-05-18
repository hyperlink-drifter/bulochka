import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Section = ({ children, className }: ComponentProps<'section'>) => {
  return (
    <section className={cn('relative px-2 sm:px-4 py-6 sm:py-8', className)}>
      {children}
    </section>
  );
};
