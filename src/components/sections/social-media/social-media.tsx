import { TileInstagram } from './tile-instagram';
import { TileTikTok } from './tile-tiktok';
import { TileTelegram } from './tile-telegram';
import { TileVideo } from './tile-video';
import { TileDaria } from './tile-daria';
import { TileNewsletter } from './tile-newsletter';

export const SocialMedia = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-3 sm:gap-4">
      <TileVideo className="col-span-1 row-span-2" />
      <TileTelegram className="col-span-1 row-span-1 aspect-square" />
      <TileInstagram className="col-span-1 row-span-1 aspect-square " />
      <TileTikTok className="col-span-1 row-span-1 aspect-square" />
      <TileNewsletter className="col-span-2 md:col-span-2 row-span-1" />
      <TileDaria className="col-span-1 row-span-1" />
    </div>
  );
};
