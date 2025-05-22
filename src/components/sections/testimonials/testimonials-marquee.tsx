import { Marquee } from '@/components/magicui/marquee';
import { ReviewCard, reviews } from './review-card';
import { Section } from '@/components/layouts/section';
import H from '@/components/layouts/headings';
import { TileText } from '@/components/tiles/tile-text';

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function TestimonialsMarquee() {
  return (
    <Section>
      <div className="grid gap-3 sm:gap-4">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-4">
          <H as="h2" className="col-span-full">
            Ви наш особливий гість 🧡
          </H>
          <TileText className="col-span-full md:col-span-3 lg:col-span-2">
            <p>
              With WWD, you’ll learn practical and useful skills that you can
              apply right away — so you can reach your goal of having real-life
              conversations faster.
            </p>
            <p>What others say about us:</p>
          </TileText>
        </div>
        <div className="grid gap-3 sm:gap-4">
          <Marquee
            pauseOnHover
            className="p-0 [--duration:20s] [--gap:12px] sm:[--gap:16px]"
          >
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="p-0 [--duration:20s] [--gap:12px] sm:[--gap:16px]"
          >
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </Section>
  );
}
