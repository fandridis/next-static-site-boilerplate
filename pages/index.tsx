import { HeaderFooterLayout } from '../layouts';
import { Button, Section } from '../components';
import styles from './index.module.scss';

function Home() {
  return (
    <>
      <Section fullPageWithHeader className={styles.heroSection}>
        <h1>This is awesome</h1>
        <Button>Click me</Button>
      </Section>

      <Section halfPage className={styles.whyUsSection}>
        <Button outlined>Click me too</Button>
      </Section>
    </>
  );
}

Home.layout = HeaderFooterLayout;

export default Home;
