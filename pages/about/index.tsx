import { useEffect } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { Section } from 'components';
import { HeaderFooterLayout } from 'layouts';
import { GlobalState } from '../_app';

type AboutProps = {
  globalState: GlobalState,
  setGlobalState: Function
}

function About({ globalState, setGlobalState }: AboutProps) {

  useEffect(() => {
    console.log('globalState @ About: ', globalState)
  }, [globalState])

  const handleClick = () => {
    setGlobalState({ ...globalState, theme: 'dark' })
  }

  return (
    <>
      <Section fullPageWithHeader className={styles.blue}>
        <h1 className={styles.title}>ABOUT PAGE - theme: {globalState.theme}</h1>
        <Link href="/"><a>Go home</a></Link>
        <button onClick={handleClick}>Toggle theme</button>
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

