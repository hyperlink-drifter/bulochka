import IconTelegram from '@/assets/svg/social-media/telegram/logo--white.svg?react';
import { cn } from '@/lib/utils';

export const TileTelegram = ({ className }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('grid rounded-md bg-blue-telegram group', className)}>
      <div className="place-self-center transition-[width,height,scale] duration-420 size-24 group-hover:scale-120">
        <IconTelegram />
      </div>
    </div>
  );
};
