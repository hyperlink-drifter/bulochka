import { type ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Tile } from '@/components/tiles/tile-base';

export const TileText = ({ className, children }: ComponentProps<'div'>) => {
  return (
    <Tile className={cn('bg-orange-200 p-4 sm:p-6', className)}>
      {children}
    </Tile>
  );
};
