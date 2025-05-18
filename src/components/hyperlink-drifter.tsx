import { Section } from './layouts/section';

export const HyperlinkDrifter = () => {
  return (
    <div className="center sticky left-0 right-0 bottom-0 overflow-clip z-0 w-full bg-black">
      <Section>
        <a
          href="https://hyperlink-drifter.com/"
          target="_blank"
          className="mt-4 inline-block underline text-white"
        >
          hyperlink-drifter
        </a>
      </Section>
    </div>
  );
};
