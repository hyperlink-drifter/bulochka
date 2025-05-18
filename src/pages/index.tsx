import { SocialMedia } from '@/components/sections/social-media/social-media';
import { Link } from 'waku';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">WatchWithDaria</h1>
      <div>
        <p>
          Our journalism is actionable and drives real-world{' '}
          <a href="#impact">impact</a>. Explore our{' '}
          <a href="#investigations">investigations</a>,{' '}
          <a href="#tools">tools</a>, and <a href="#resources">blueprints</a> to
          see how.
        </p>
      </div>
      <div className="article__description">
        <div className="article__description-main ">
          <h3 className="article__hed">
            <a
              href="https://themarkup.org/pixel-hunt/2025/04/28/how-california-sent-residents-personal-health-data-to-linkedin"
              data-id="81170"
            >
              How California sent residents’ personal health data to LinkedIn
            </a>
          </h3>
          <p className="article__dek">
            The state’s health insurance exchange transmitted pregnancy and
            domestic abuse data during a marketing campaign. It is reviewing its
            website practices.
          </p>
        </div>
        <div className="article__connections">
          <div className="visually-hidden">Related links:</div>

          <p className="article__connection">
            <svg
              className="article__connection-category-icon"
              aria-hidden="true"
            ></svg>
            <strong className="article__connection-category">Tool:</strong>
            <a href="https://themarkup.org/blacklight">
              Blacklight: A real-time website privacy inspector{' '}
            </a>
          </p>

          <p className="article__connection">
            <svg
              className="article__connection-category-icon"
              aria-hidden="true"
            ></svg>
            <strong className="article__connection-category">Related:</strong>
            <a href="https://themarkup.org/pixel-hunt/2022/06/16/facebook-is-receiving-sensitive-medical-information-from-hospital-websites">
              Facebook Is Receiving Sensitive Medical Information from Hospital
              Websites
            </a>
          </p>

          <p className="article__connection">
            <svg
              className="article__connection-category-icon"
              aria-hidden="true"
            ></svg>
            <strong className="article__connection-category">Related:</strong>
            <a href="https://themarkup.org/pixel-hunt/2022/04/28/applied-for-student-aid-online-facebook-saw-you">
              Applied for Student Aid Online? Facebook Saw You
            </a>
          </p>
        </div>
        <div className="article__connections">
          <div className="visually-hidden">Related links:</div>

          <p className="article__connection">
            <svg
              className="article__connection-category-icon"
              aria-hidden="true"
            ></svg>
            <strong className="article__connection-category">Tool:</strong>
            <a href="https://themarkup.org/blacklight">
              Blacklight: A real-time website privacy inspector{' '}
            </a>
          </p>

          <p className="article__connection">
            <svg
              className="article__connection-category-icon"
              aria-hidden="true"
            ></svg>
            <strong className="article__connection-category">Related:</strong>
            <a href="https://themarkup.org/pixel-hunt/2022/06/16/facebook-is-receiving-sensitive-medical-information-from-hospital-websites">
              Facebook Is Receiving Sensitive Medical Information from Hospital
              Websites
            </a>
          </p>

          <p className="article__connection">
            <svg
              className="article__connection-category-icon"
              aria-hidden="true"
            ></svg>
            <strong className="article__connection-category">Related:</strong>
            <a href="https://themarkup.org/pixel-hunt/2022/04/28/applied-for-student-aid-online-facebook-saw-you">
              Applied for Student Aid Online? Facebook Saw You
            </a>
          </p>
        </div>
      </div>
      <p>{data.body}</p>
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
      <SocialMedia />
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
