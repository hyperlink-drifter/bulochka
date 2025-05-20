import { Section } from '@/components/layouts/section';
import { Center } from '@/components/layouts/center';
import H from '@/components/layouts/headings';
import A from '@/components/layouts/links';
import { HyperlinkDrifter } from '@/components/hyperlink-drifter';
import {
  FaTiktok as IconFaTiktok,
  FaInstagram as IconFaInstagram,
  FaTelegram as IconFaTelegram,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-clip w-full bg-[url(/images/cinema-pattern--006.svg)] bg-orange-400 bg-size-[160px_160px] bg-repeat bg-center">
      <Section as="div">
        <Center>
          <div className="relative bg-white rounded-md p-3 sm:p-4 z-100">
            <A to="/" className="text-center">
              <H as="h3" looksLike="h1">
                WATCH WITH DARIA
              </H>
              <span className="sr-only">Return to homepage</span>
            </A>
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-medium">
                <li>
                  <A to="/">Courses</A>
                </li>
                <li>
                  <A to="/">About</A>
                </li>
                <li>
                  <A to="/">FAQ</A>
                </li>
                <li>
                  <A to="/">Blog</A>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="flex justify-center gap-4">
                <li>
                  <A
                    href="https://web.telegram.org/"
                    className="block p-1 rounded-md hover:bg-blue-telegram hover:text-white"
                  >
                    <IconFaTelegram className="size-7" />
                  </A>
                </li>
                <li>
                  <A
                    href="https://www.instagram.com/watch.with.daria/"
                    className="block p-1 rounded-md hover:bg-linear-(--gradient-ig) hover:text-white"
                  >
                    <IconFaInstagram className="size-7" />
                  </A>
                </li>
                <li>
                  <A
                    href="https://www.tiktok.com/@watch.with.ddaria"
                    className="block p-1 rounded-md hover:bg-black hover:text-white"
                  >
                    <IconFaTiktok className="size-7" />
                  </A>
                </li>
              </ul>
            </nav>
            <HyperlinkDrifter />
          </div>
        </Center>
      </Section>
    </footer>
  );
};
