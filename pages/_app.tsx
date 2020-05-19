/**
 * This component is automatically used by NextJS.
 * We have extended it to dynamically wrap our Layouts
 */

import React from 'react';
import 'styles/reset.scss';
import 'styles/global.scss';

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
