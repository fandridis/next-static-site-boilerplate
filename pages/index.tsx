import Head from 'next/head';
import Link from 'next/link'
import { HeaderFooterLayout } from '../layouts';

function Home() {
  return (
    <>
      <section className="hero">
        HOME
      </section>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer> */}
    </>
  );
}

Home.layout = HeaderFooterLayout;

export default Home;
