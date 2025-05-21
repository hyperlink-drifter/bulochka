'use client';

import { Tile } from '@/components/tiles/tile-base';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { ComponentProps } from 'react';

export const DariaCarousel = ({ className }: ComponentProps<'div'>) => {
  return (
    <Carousel
      className={cn('', className)}
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
            <img
              src="/images/about-daria--001.jpg"
              className="w-full h-full object-cover"
            />
          </Tile>
        </CarouselItem>
        <CarouselItem>
          <Tile className="aspect-3/4">
            <img
              src="/images/about-daria--002.jpg"
              loading="lazy"
              fetchPriority="low"
              className="w-full h-full object-cover"
            />
          </Tile>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
