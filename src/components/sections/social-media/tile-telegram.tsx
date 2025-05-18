import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconTelegram from '@/assets/svg/social-media/telegram/logo--white.svg?react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

export const TileTelegram = ({ className }: ComponentProps<'div'>) => {
  return (
    <a
      href="/"
      target="_blank"
      className={cn(
        'grid relative rounded-md bg-blue-telegram group hover:rotate-1 transition-[rotate]',
        className
      )}
    >
      <div className="place-self-center transition-[width,height,scale] duration-420 size-24 group-hover:scale-120">
        <IconTelegram />
      </div>
      <ExternalLinkIcon
        className="text-white absolute bottom-2 right-2"
        size={16}
      />
    </a>
  );
};
