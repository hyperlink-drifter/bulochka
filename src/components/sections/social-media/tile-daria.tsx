import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const TileDaria = ({ className }: ComponentProps<'div'>) => {
  return (
    <div className={cn('relative', className)}>
      <img
        src="/images/daria-and-the-popcorn.jpg"
        className="rounded-md h-full object-cover object-left"
      />
    </div>
  );
};
