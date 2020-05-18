/**
 * This layout is not used (taken from HeaderFooterLayout)
 * It can be updated and be used in pages that require a different layout
 */

import React from 'react';
import Head from 'next/head';

interface GreenLayoutProps {
  htmlTitle: string
}

GreenLayout.defaultProps = {
  htmlTitle: 'Application'
}

function GreenLayout(props: React.PropsWithChildren<GreenLayoutProps>) {
  return (
    <>
      <Head>
        <title>{props.htmlTitle}</title>
        <meta name="description" content="Description of the site"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        This is a navbar - layout: Green
      </nav>

      <main style={{ border: '4px dashed blue' }}>
        {props.children}
      </main>

      <footer>
        This is a footer
      </footer>
    </>
  )
}

export default GreenLayout;
