import Head from 'next/head';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="red">
          Welcome to NEXT js
        </h1>

        <p className="description">
          Get started by editing stuff
        </p>

        <div>
          <Link href="/about"><a>Go to about page</a></Link>
        </div>

        <div>
          <Link href="/contact"><a>Go to contact page</a></Link>
        </div>
      </main>

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
    </div>
  )
}
