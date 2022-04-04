import type { NextPage } from 'next';
import Head from 'next/head';

import Questions from '@components/Questions';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Frequently asked questions</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <main>
      <div className="flex justify-center">
        <h1 id="title" className="mb-10">
          Frequently Asked Questions
        </h1>
      </div>
      <Questions />
    </main>
  </div>
);

export default Home;
