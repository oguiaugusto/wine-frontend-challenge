import React from 'react';
import type { AppProps } from 'next/app';
import ProductsProvider from '../context/ProductsContext';
import '../styles/globals.css';
import '../styles/animations.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ProductsProvider>
    <Component { ...pageProps } />
  </ProductsProvider>
);

export default App;
