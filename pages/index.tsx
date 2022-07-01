import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Wine</title>
      <meta name="description" content="Wine products list page" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <div>Home page</div>
  </div>
);

export default Home;
