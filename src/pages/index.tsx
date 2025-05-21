import { AboutDaria } from '@/components/sections/about-daria/about-daria';
import { SocialMedia } from '@/components/sections/social-media';
import { TestimonialsMarquee } from '@/components/sections/testimonials/testimonials-marquee';

export default async function HomePage() {
  return (
    <>
      <AboutDaria />
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
