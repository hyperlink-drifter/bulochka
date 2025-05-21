import { Section } from '@/components/layouts/section';
import { Tile } from '@/components/tiles/tile-base';
import H from '@/components/layouts/headings';
import { DariaCarousel } from './daria-carousel';

export const AboutDaria = () => {
  return (
    <Section>
      <div className="grid grid-cols-12 grid-flow-row-dense gap-3 sm:gap-4">
        <Tile className="col-span-full md:col-span-8 md:order-last border border-gray-200 h-full bg-gray-50 p-3 sm:p-4">
          <div>
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
                Якщо ви в Європі, то походи в кіно(де фільми англійською або
                мовою країни), більше не будуть стресовими
              </li>
              <li>Слова перестануть звучати одним потоком, а набудуть сенсу</li>
            </ul>
          </div>
        </Tile>

        <DariaCarousel />
        <Tile className="col-span-4 md:hidden bg-[url(/images/cinema-pattern--006.svg)] bg-orange-400 bg-size-[160px_160px] bg-repeat bg-center"></Tile>
      </div>
    </Section>
  );
};
