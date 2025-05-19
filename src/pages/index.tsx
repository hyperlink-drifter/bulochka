import { SocialMedia } from '@/components/sections/social-media/social-media';
import { TestimonialsMarquee } from '@/components/sections/testimonials/testimonials-marquee';

export default async function HomePage() {
  return (
    <>
      <TestimonialsMarquee />
      <SocialMedia />
    </>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
