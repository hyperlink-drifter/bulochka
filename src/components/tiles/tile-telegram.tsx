import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconTelegram from '@/assets/svg/social-media/telegram/logo--white.svg?react';
import { FaExternalLinkAlt as IconFaExternalLinkAlt } from 'react-icons/fa';
import A from '@/components/layouts/links';

import { Tile } from '@/components/tiles/tile-base';

export const TileTelegram = ({ className }: ComponentProps<'div'>) => {
  return (
    <Tile
      className={cn(
        'bg-blue-telegram hover:rotate-1 transition-[rotate] h-full',
        className
      )}
    >
      <A
        href="https://telegram.org/"
        className="grid col-span-full row-span-full"
      >
        <IconTelegram className="place-self-center duration-420 size-24" />
        <IconFaExternalLinkAlt className="text-white absolute bottom-2 right-2 size-3" />
      </A>
    </Tile>
  );
};
