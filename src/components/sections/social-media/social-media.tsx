import { Link } from 'waku';
import { TileInstagram } from './tile-instagram';
import { TileTikTok } from './tile-tiktok';

export const SocialMedia = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      <div className="col-span-1 row-span-2">video</div>
      <Link to="/" className="col-span-1 row-span-2">
        telegram
      </Link>
      <Link to="/">
        <TileInstagram />
      </Link>
      <Link to="/">
        <TileTikTok />
      </Link>
      <div className="col-span-2 row-span-1">newsletter</div>
    </section>
  );
};
