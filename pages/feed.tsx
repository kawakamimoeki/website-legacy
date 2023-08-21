import { GetServerSidePropsContext } from 'next';
import { getFeed } from '../lib/get-feed';

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await getFeed();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;
