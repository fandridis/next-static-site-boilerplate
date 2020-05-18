import React from 'react';
import '../styles/reset.scss';
import '../styles/global.scss';

const Noop = ({ children }) => children;

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.layout || Noop;
  const layoutProps = Component.layoutProps || {};

  return (
    <Layout {...layoutProps}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;
