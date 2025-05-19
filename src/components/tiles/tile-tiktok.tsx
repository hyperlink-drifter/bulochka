import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconTikTok from '@/assets/svg/social-media/tiktok/logo--colorful.svg?react';
import { ExternalLink as IconExternalLink } from 'lucide-react';
import { Tile } from '@/components/tiles/tile-base';

export const TileTikTok = ({ className }: ComponentProps<'div'>) => {
  return (
    <Tile
      className={cn('bg-black hover:rotate-1 transition-[rotate]', className)}
    >
      <a
        href="https://www.tiktok.com/@watch.with.ddaria"
        target="_blank"
        className="grid col-span-full row-span-full"
      >
        <IconTikTok className="place-self-center size-20" />
        <IconExternalLink
          className="text-white absolute bottom-2 right-2"
          size={16}
        />
      </a>
    </Tile>
  );
};
