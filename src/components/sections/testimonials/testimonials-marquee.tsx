import { Marquee } from '@/components/magicui/marquee';
import { ReviewCard, reviews } from './review-card';
import { Section } from '@/components/layouts/section';

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function TestimonialsMarquee() {
  return (
    <Section>
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
    </Section>
  );
}
