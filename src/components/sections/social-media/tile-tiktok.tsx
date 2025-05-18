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
        'grid relative rounded-md bg-black group hover:rotate-1 transition-[rotate]',
        className
      )}
    >
      <div className="place-self-center transition-[width,height,scale] duration-420 size-20 group-hover:scale-120">
        <IconTikTok />
      </div>
      <ExternalLinkIcon
        className="text-white absolute bottom-2 right-2"
        size={16}
      />
    </a>
  );
};
