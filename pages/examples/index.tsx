import { GetStaticProps } from 'next';
import data from '@public/data.json';

export { default } from '@views/Example/landing';

export const getStaticProps: GetStaticProps = async () => {
  const examples = data
    .find((d) => d.title === 'examples')
    .examples.map((ex) => ex.name);

  return {
    props: { examples },
    revalidate: 60,
  };
};
