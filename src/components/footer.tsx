import { Link } from 'waku';
import { Section } from './layouts/section';

export const Footer = () => {
  return (
    <footer className="center relative z-10 left-0 right-0 bottom-0 overflow-clip w-full bg-orange-400 grid grid-cols-1 grid-rows-1">
      <Section>
        <div className="">
          <Link to="/">
            <div className="size-42 place-self-center">
              <img src="/images/animated-emojis/popcorn.webp" />
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
        </div>
      </Section>
    </footer>
  );
};
