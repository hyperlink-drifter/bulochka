import H from '@/components/layouts/headings';
import A from '@/components/layouts/links';

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <H as="h1" className="text-4xl font-bold tracking-tight">
        {data.headline}
      </H>
      <p>{data.body}</p>
      <A to="/" className="mt-4 inline-block underline">
        Return home
      </A>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'About',
    headline: 'About Waku',
    body: 'The minimal React framework',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
