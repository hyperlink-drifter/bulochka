import { Link } from 'waku';
import { Section } from '@/components/layouts/section';
import { Center } from '@/components/layouts/center';
import { HyperlinkDrifter } from '@/components/hyperlink-drifter';

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-clip w-full bg-[url(/images/cinema-pattern--006.svg)] bg-orange-400 bg-size-[160px_160px] bg-repeat bg-center">
      <Section>
        <Center>
          <div className="relative bg-white rounded-md p-3 sm:p-4 z-100">
            <Link to="/">
              <div className="">
                <h3>Watch With Daria</h3>
                <span className="sr-only">Return to The Markup's homepage</span>
              </div>
            </Link>
            <div>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home Alone</Link>
                    </li>
                    <li>
                      <Link to="/">Shrek</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Faq</Link>
                    </li>
                    <li>
                      <Link to="/">Imprint</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Instagram</Link>
                    </li>
                    <li>
                      <Link to="/">TikTok</Link>
                    </li>
                    <li>
                      <Link to="/">Telegram</Link>
                    </li>
                    <li>
                      <Link to="/">Newsletter</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <HyperlinkDrifter />
          </div>
        </Center>
      </Section>
    </footer>
  );
};
