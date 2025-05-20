'use client';

import { Section } from '@/components/layouts/section';
import { Tile } from '@/components/tiles/tile-base';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import H from '@/components/layouts/headings';

export const AboutDaria = () => {
  return (
    <Section>
      <div className="grid grid-cols-12 grid-flow-row-dense gap-3 sm:gap-4">
        <div className="col-span-full md:col-span-8 md:order-last">
          <H as="h2">
            Hello! <br /> На зв'язку Дар'я Кононенко🧡
          </H>
          <p>
            Я викладаю англійську мову вже 7 років. За допомогою фільмів в
            оригіналі, я допомогаю вам:
          </p>
          <ul>
            <li>
              <strong>Заговорити фразами з кіно</strong>, у вашому житті
            </li>
            <li>
              ЗНАЧНО покращити <strong>listening, vocabulary</strong> and{' '}
              <strong>speaking</strong>
            </li>
            <li>
              Ви <strong>перестанете боятися оригіналу</strong> ,бо зі мною ви
              звикнете до нього
            </li>
            <li>Зможете проходити легше зарубіжне навчання, курси</li>
            <li>
              Якщо ви в Європі, то походи в кіно(де фільми англійською або мовою
              країни), більше не будуть стресовими
            </li>
            <li>Слова перестануть звучати одним потоком, а набудуть сенсу</li>
          </ul>
        </div>
        <Carousel
          className="col-span-full md:col-span-4"
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
      </div>
    </Section>
  );
};
