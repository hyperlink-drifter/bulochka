import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import IconInstagram from '@/assets/svg/social-media/instagram/logo--white.svg?react';
import { ExternalLink as IconExternalLink } from 'lucide-react';

export const TileInstagram = ({ className }: ComponentProps<'div'>) => {
  return (
    <a
      href="https://www.instagram.com/watch.with.daria/"
      target="_blank"
      className={cn(
        'grid relative rounded-md bg-linear-(--gradient-ig) bg-transparent hover:rotate-1 transition-[rotate]',
        className
      )}
    >
      <IconInstagram className="place-self-center duration-420 size-16" />
      <IconExternalLink
        className="text-white absolute bottom-2 right-2"
        size={16}
      />
    </a>
  );
};
