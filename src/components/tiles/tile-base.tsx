import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Tile = ({ className, children }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('group grid relative rounded-md overflow-clip', className)}
    >
      {children}
    </div>
  );
};
