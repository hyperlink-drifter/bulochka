import { Link } from 'waku';
import { Section } from '@/components/layouts/section';
import { Center } from '@/components/layouts/center';
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
            <Link to="/" className="text-center">
              <h3 className="font-black text-2xl sm:text-4xl">
                WATCH WITH DARIA
              </h3>
              <span className="sr-only">Return to homepage</span>
            </Link>
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-medium">
                <li>
                  <Link to="/">Courses</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="flex justify-center gap-4">
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="block p-1 rounded-md hover:bg-blue-telegram hover:text-white"
                  >
                    <IconFaTelegram className="size-7" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/watch.with.daria/"
                    target="_blank"
                    className="block p-1 rounded-md hover:bg-linear-(--gradient-ig) hover:text-white"
                  >
                    <IconFaInstagram className="size-7" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@watch.with.ddaria"
                    target="_blank"
                    className="block p-1 rounded-md hover:bg-black hover:text-white"
                  >
                    <IconFaTiktok className="size-7" />
                  </a>
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
