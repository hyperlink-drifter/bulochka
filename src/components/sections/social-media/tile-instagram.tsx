import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconInstagram from '@/assets/svg/social-media/instagram/logo--white.svg?react';

export const TileInstagram = ({ className }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'grid rounded-md bg-linear-(--gradient-ig) bg-transparent group',
        className
      )}
    >
      <div className="place-self-center transition-[width,height,scale] duration-420 size-16 group-hover:scale-120">
        <IconInstagram />
      </div>
    </div>
  );
};
