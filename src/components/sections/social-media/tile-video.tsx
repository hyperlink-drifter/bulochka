import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const TileVideo = ({ className }: ComponentProps<'div'>) => {
  return (
    <div className={cn('', className)}>
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover rounded-md"
      >
        <source src="/videos/daria-92.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
