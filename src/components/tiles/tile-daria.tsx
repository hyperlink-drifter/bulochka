import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Tile } from '@/components/tiles/tile-base';

export const TileDaria = ({ className }: ComponentProps<'div'>) => {
  return (
    <Tile className={cn('', className)}>
      <img
        src="/images/daria-and-the-popcorn.jpg"
        className="h-full object-cover object-left"
      />
      <img
        src="/images/daria-and-the-popcorn--hover.jpg"
        loading="lazy"
        fetchPriority="low"
        className="opacity-0 group-hover:pointer-fine:opacity-100 transition-[opacity] absolute top-0 w-full h-full object-cover object-left"
      />
    </Tile>
  );
};
