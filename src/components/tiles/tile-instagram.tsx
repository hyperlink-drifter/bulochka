import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconInstagram from '@/assets/svg/social-media/instagram/logo--white.svg?react';
import { FaExternalLinkAlt as IconFaExternalLinkAlt } from 'react-icons/fa';
import { Tile } from '@/components/tiles/tile-base';
import A from '@/components/layouts/links';

export const TileInstagram = ({ className }: ComponentProps<'div'>) => {
  return (
    <Tile
      className={cn(
        'bg-linear-(--gradient-ig) hover:rotate-1 transition-[rotate] h-full',
        className
      )}
    >
      <A
        href="https://www.instagram.com/watch.with.daria/"
        className="grid col-span-full row-span-full"
      >
        <IconInstagram className="place-self-center size-16" />
        <IconFaExternalLinkAlt className="text-white absolute bottom-2 right-2 size-3" />
      </A>
    </Tile>
  );
};
