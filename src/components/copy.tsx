import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

export const Copy = ({ className }: ComponentProps<'small'>) => {
  return (
    <small className={cn('', className)}>
      Watch With Daria &copy; {new Date().getFullYear()}
    </small>
  );
};
