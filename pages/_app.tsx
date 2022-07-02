import React from 'react';
import type { AppProps } from 'next/app';
import ProductsProvider from '../context/ProductsContext';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ProductsProvider>
    <Component { ...pageProps } />
  </ProductsProvider>
);

export default App;
