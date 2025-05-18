import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconTelegram from '@/assets/svg/social-media/telegram/logo--white.svg?react';
import { ExternalLink as IconExternalLink } from 'lucide-react';

export const TileTelegram = ({ className }: ComponentProps<'div'>) => {
  return (
    <a
      href="/"
      target="_blank"
      className={cn(
        'grid relative rounded-md bg-blue-telegram hover:rotate-1 transition-[rotate]',
        className
      )}
    >
      <IconTelegram className="place-self-center duration-420 size-24" />
      <IconExternalLink
        className="text-white absolute bottom-2 right-2"
        size={16}
      />
    </a>
  );
};
