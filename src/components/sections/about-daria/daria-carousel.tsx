'use client';

import { Tile } from '@/components/tiles/tile-base';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

export const DariaCarousel = () => {
  return (
    <Carousel
      className="col-span-8 md:col-span-4"
      opts={{
        watchDrag: false,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
        Fade(),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Tile className="aspect-3/4">
            <img src="/images/about-daria--001.jpg" />
          </Tile>
        </CarouselItem>
        <CarouselItem>
          <Tile className="aspect-3/4">
            <img
              src="/images/about-daria--002.jpg"
              loading="lazy"
              fetchPriority="low"
            />
          </Tile>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
