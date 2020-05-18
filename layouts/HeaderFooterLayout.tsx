import React from 'react';
import Head from 'next/head';
import { Header, Footer } from '../components';
import styles from './HeaderFooterLayout.module.scss';

interface HeaderFooterLayoutProps {
  htmlTitle: string
}

HeaderFooterLayout.defaultProps = {
  htmlTitle: 'Application'
}

function HeaderFooterLayout(props: React.PropsWithChildren<HeaderFooterLayoutProps>) {
  return (
    <>
      <Head>
        <title>{props.htmlTitle}</title>
        <meta name="description" content="Description of the site"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        {props.children}
      </main>

      <Footer />
    </>
  )
}

export default HeaderFooterLayout;
