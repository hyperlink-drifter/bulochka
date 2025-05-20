import { TileInstagram } from '@/components/tiles/tile-instagram';
import { TileTikTok } from '@/components/tiles/tile-tiktok';
import { TileTelegram } from '@/components/tiles/tile-telegram';
import { TileVideo } from '@/components/tiles/tile-video';
import { TileDaria } from '@/components/tiles/tile-daria';
import { TileNewsletter } from '@/components/tiles/tile-newsletter';
import { Section } from '@/components/layouts/section';

export const SocialMedia = () => {
  return (
    <Section>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-3 sm:gap-4">
        <TileVideo className="col-span-1 row-span-2" />
        <TileTelegram className="col-span-1 row-span-1 aspect-square" />
        <TileInstagram className="col-span-1 row-span-1 aspect-square " />
        <TileTikTok className="col-span-1 row-span-1 aspect-square" />
        <TileNewsletter className="col-span-2 md:col-span-2 row-span-1" />
        <TileDaria className="col-span-1 row-span-1 aspect-square" />
      </div>
    </Section>
  );
};
