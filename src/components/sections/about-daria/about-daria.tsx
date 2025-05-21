import { Section } from '@/components/layouts/section';
import { Tile } from '@/components/tiles/tile-base';
import H from '@/components/layouts/headings';
import { DariaCarousel } from './daria-carousel';
import { TileDaria } from '@/components/tiles/tile-daria';

export const AboutDaria = () => {
  return (
    <Section>
      <div className="grid gap-3 sm:gap-4 grid-cols-12 grid-flow-row-dense">
        <div className="h-fit grid gap-3 sm:gap-4 grid-cols-subgrid col-span-full md:col-span-8 grid-flow-row-dense lg:col-span-6">
          <H as="h2" className="col-span-full">
            Hello! <br /> На зв'язку Дар'я Кононенко🧡
          </H>
          <Tile className="bg-orange-200 p-3 sm:p-4 col-span-full">
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
                Якщо ви в Європі, то походи в кіно(де фільми англійською або
                мовою країни), більше не будуть стресовими
              </li>
              <li>Слова перестануть звучати одним потоком, а набудуть сенсу</li>
            </ul>
          </Tile>
        </div>
        <div className="grid gap-3 sm:gap-4 grid-flow-row-dense grid-cols-subgrid col-span-full md:col-span-4 md:order-first lg:col-span-6">
          <DariaCarousel className="aspect-4/3 col-span-8 row-span-2 md:col-span-full md:row-span-1 lg:col-span-4 lg:col-start-3 lg:row-span-2" />
          <Tile className="aspect-3/4 w-full h-full col-span-4 row-span-1 md:col-span-2 md:row-start-1 lg:col-span-2 lg:col-start-1 lg:row-start-auto lg:row-span-1">
            <img
              src="/images/daria-and-the-mac.jpg"
              loading="lazy"
              fetchPriority="low"
              className="w-full h-full object-cover"
            />
          </Tile>
          <Tile className="aspect-3/4 w-full h-full col-span-4 row-span-1 md:col-span-2 md:row-start-1 lg:col-span-2 lg:col-start-1 lg:row-start-auto lg:row-span-1">
            <img
              src="/images/daria-and-the-pointy.jpg"
              loading="lazy"
              fetchPriority="low"
              className="w-full h-full object-cover"
            />
          </Tile>
        </div>
      </div>
    </Section>
  );
};
