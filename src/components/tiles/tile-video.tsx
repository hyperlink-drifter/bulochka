import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Tile } from '@/components/tiles/tile-base';

export const TileVideo = ({ className }: ComponentProps<'div'>) => {
  return (
    <Tile className={cn('', className)}>
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/videos/daria-92.mp4" type="video/mp4" />
      </video>
    </Tile>
  );
};
