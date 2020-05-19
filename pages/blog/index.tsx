import styles from './index.module.scss';
import { Section } from 'components';
import { HeaderFooterLayout } from 'layouts';

function Blog() {
  return (
    <>
      <Section fullPageWithHeader className={styles.blue}>
        <h1 className={styles.title}>Blog PAGE</h1>
      </Section>

    </>
  );
}

Blog.layout = HeaderFooterLayout
Blog.layoutProps = { htmlTitle: 'Our Blog' }

export default Blog;

