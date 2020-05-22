/**
 * This component is automatically used by NextJS.
 * We have extended it to dynamically wrap our Layouts
 */

import { useState } from 'react';
import { PageTransition } from 'next-page-transitions';
import 'styles/reset.scss';
import 'styles/bootstrap-grid.scss';
import 'styles/global.scss';

export interface GlobalState {
  user: object | null,
  theme: string
  isLoading: false;
}

const initialGlobalState: GlobalState = {
  user: null,
  theme: 'light',
  isLoading: false
}

const Noop = ({ children }) => children;

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.layout || Noop;
  const layoutProps = Component.layoutProps || {};
  const [globalState, setGlobalState] = useState<GlobalState>(initialGlobalState);

  return (
    <Layout {...layoutProps}>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route} globalState={globalState} setGlobalState={setGlobalState} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translateY(10px);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translateY(0px);
          transition: ALL 300ms;
        }
        .page-transition-exit {
          opacity: 1;
          transform: translateY(0px);
        }
        .page-transition-exit-active {
          opacity: 0;
          transform: translateY(10px);
          transition: all 300ms;
        }
      `}</style>
    </Layout>

  );
}

export default MyApp;

