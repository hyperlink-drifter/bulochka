import { Link } from 'waku';

export const Footer = () => {
  return (
    <footer className="center sticky left-0 right-0 bottom-0 overflow-clip z-0 w-full bg-black grid grid-cols-1 grid-rows-1">
      <div className="col-span-full row-span-full">
        <picture className="block w-full object-contain object-bottom z-0">
          <source
            srcSet="/images/cinema-seat-row--2xl.jpg"
            media="(min-width: 1536px)"
          />
          <source
            srcSet="/images/cinema-seat-row--xl.jpg"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="/images/cinema-seat-row--lg.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/images/cinema-seat-row--md.jpg"
            media="(min-width: 768px)"
          />
          <img src="/images/cinema-seat-row.jpg" className="block w-full" />
        </picture>
      </div>
      <div className="col-span-full row-span-full">
        <Link to="/" className="mt-4 inline-block underline text-white">
          <span className="sr-only">Return to The Markup's homepage</span>
          WatchWithDaria
        </Link>
      </div>
    </footer>
  );
};
