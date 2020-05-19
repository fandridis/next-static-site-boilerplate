import Link from 'next/link';
import styles from './index.module.scss';
import { Section } from 'components';
import { HeaderFooterLayout } from 'layouts';

function About() {
  return (
    <>
      <Section fullPageWithHeader className={styles.blue}>
        <h1 className={styles.title}>ABOUT PAGE</h1>
        <Link href="/"><a>Go home</a></Link>
        <h1 className={styles.title}>ABOUT PAGE</h1>
        <Link href="/"><a>Go home</a></Link>
        <h1 className={styles.title}>ABOUT PAGE</h1>
        <Link href="/"><a>Go home</a></Link>
        <h1 className={styles.title}>ABOUT PAGE</h1>
        <Link href="/"><a>Go home</a></Link>
        <h1 className={styles.title}>ABOUT PAGE</h1>
        <Link href="/"><a>Go home</a></Link>
      </Section>

      <Section fullPage className={styles.green}>
        SECTION 2
      </Section>

      <Section halfPage className={styles.blue}>
        SECTION 3
      </Section>

      <Section fullPage className={styles.green}>
        SECTION 4
      </Section>
    </>
  );
}

About.layout = HeaderFooterLayout
About.layoutProps = { htmlTitle: 'About us' }

export default About;

