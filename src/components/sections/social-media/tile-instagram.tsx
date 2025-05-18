import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconInstagram from '@/assets/svg/social-media/instagram/logo--white.svg?react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

export const TileInstagram = ({ className }: ComponentProps<'div'>) => {
  return (
    <a
      href="https://www.instagram.com/watch.with.daria/"
      target="_blank"
      className={cn(
        'grid relative rounded-md bg-linear-(--gradient-ig) bg-transparent group hover:rotate-1 transition-[rotate]',
        className
      )}
    >
      <div className="place-self-center transition-[width,height,scale] duration-420 size-16 group-hover:scale-120">
        <IconInstagram />
      </div>
      <ExternalLinkIcon
        className="text-white absolute bottom-2 right-2"
        size={16}
      />
    </a>
  );
};
