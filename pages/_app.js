import React from 'react'
import '../styles/variables.scss';
import '../styles/global.scss';

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
