import { TileInstagram } from '@/components/tiles/tile-instagram';
import { TileTikTok } from '@/components/tiles/tile-tiktok';
import { TileTelegram } from '@/components/tiles/tile-telegram';
import { TileVideo } from '@/components/tiles/tile-video';
import { TileDaria } from '@/components/tiles/tile-daria';
import { TileNewsletter } from '@/components/tiles/tile-newsletter';
import { Section } from '@/components/layouts/section';
import H from '@/components/layouts/headings';
import A from '@/components/layouts/links';

export const SocialMedia = () => {
  return (
    <Section>
      <H as="h2">Stay in touch, give us a follow</H>
      <p>You need content? We have content content content</p>
      <p>
        Check out our <A href="https://telegram.org/">Telegram</A>,{' '}
        <A href="https://www.instagram.com/watch.with.daria/">Instagram</A> and{' '}
        <A href="https://www.tiktok.com/@watch.with.ddaria">TikTok</A> to stay
        up to date.
      </p>
      <p>
        You need more? We got you covered: Subscribe to our{' '}
        <A to="/">Newsletter</A> for the latest tasty treats!
      </p>
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
