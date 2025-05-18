import { Section } from '@/components/layouts/section';
import { SocialMedia } from '@/components/sections/social-media/social-media';
import { TestimonialsMarquee } from '@/components/sections/testimonials/testimonials-marquee';
import { Link } from 'waku';

export default async function HomePage() {
  return (
    <>
      <Section>
        <TestimonialsMarquee />
      </Section>
      <Section>
        <SocialMedia />
      </Section>
    </>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
