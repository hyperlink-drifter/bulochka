import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconTikTok from '@/assets/svg/social-media/tiktok/logo--colorful.svg?react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

export const TileTikTok = ({ className }: ComponentProps<'div'>) => {
  return (
    <a
      href="https://www.tiktok.com/@watch.with.ddaria"
      target="_blank"
      className={cn(
        'grid relative rounded-md bg-black hover:rotate-1 transition-[rotate]',
        className
      )}
    >
      <IconTikTok className="place-self-center duration-420 size-20" />
      <ExternalLinkIcon
        className="text-white absolute bottom-2 right-2"
        size={16}
      />
    </a>
  );
};
