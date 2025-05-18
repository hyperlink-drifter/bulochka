import IconTikTok from '@/assets/svg/social-media/tiktok/logo--colorful.svg?react';
import { cn } from '@/lib/utils';

export const TileTikTok = ({ className }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('grid rounded-md bg-black group', className)}>
      <div className="place-self-center transition-[width,height,scale] duration-420 w-[48px] h-[48px] group-hover:scale-120">
        <IconTikTok />
      </div>
    </div>
  );
};
