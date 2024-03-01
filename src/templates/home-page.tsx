import { Link, getEnv } from 'waku';

import { Counter } from '../components/counter.js';

export const HomePage = async () => {
  const data = await getData();
  const someEnv = getEnv('SOME_ENV');

  return (
    <div>
      <h1>someEnv: {someEnv}</h1>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Counter />
      <Link to="/about" className="mt-4 inline-block underline">
        Learn more
      </Link>
    </div>
  );
};

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};
