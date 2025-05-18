import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconTikTok from '@/assets/svg/social-media/tiktok/logo--colorful.svg?react';

export const TileTikTok = ({ className }: ComponentProps<'div'>) => {
  return (
    <div className={cn('grid rounded-md bg-black group', className)}>
      <div className="place-self-center transition-[width,height,scale] duration-420 size-20 group-hover:scale-120">
        <IconTikTok />
      </div>
    </div>
  );
};
