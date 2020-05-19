import 'styles/reset.scss';
import 'styles/bootstrap-grid.scss';
import 'styles/global.scss';

/**
 * This component is automatically used by NextJS.
 * We have extended it to dynamically wrap our Layouts
 */

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
