import { Tile } from '@/components/tiles/tile-base';
import { cn } from '@/lib/utils';

export const TileEmoji = ({ className }: React.ComponentProps<'div'>) => {
  return (
    <Tile className={cn('bg-white group', className)}>
      <div className="place-self-center transition-[width,height,scale] duration-420 size-24 group-hover:scale-120">
        <img src="/images/animated-emojis/mobile-phone-with-arrow.webp" />
      </div>
    </Tile>
  );
};
