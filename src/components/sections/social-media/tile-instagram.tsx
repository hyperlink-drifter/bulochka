import IconInstagram from '@/assets/svg/social-media/instagram/logo--white.svg?react';
import { cn } from '@/lib/utils';

export const TileInstagram = ({ className }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'grid rounded-md bg-linear-(--gradient-ig) bg-transparent group',
        className
      )}
    >
      <div className="place-self-center transition-[width,height,scale] duration-420 w-[48px] h-[48px] group-hover:scale-120">
        <IconInstagram />
      </div>
    </div>
  );
};
