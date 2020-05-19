/**
 * This is the root component "ex: www.site-name.com/"
 * A single-page website would only have this page
 */
import { HeaderFooterLayout } from 'layouts';
import { Button, Section, Animation } from 'components';
import styles from './index.module.scss';
import Barbecue from 'assets/icons/barbecue';
import boxAnim from 'assets/json-animations/box.json';
import heartAnim from 'assets/json-animations/heart.json';
import ribbonAnim from 'assets/json-animations/ribbon.json';

function Home() {
  return (
    <>
      <Section fullPageWithHeader className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>Cook in style!</h1>
            <p>The finest barbecue supplies at your doorstep.</p>
            <Button>Start here</Button>
          </div>

          <div className={styles.right}>
            <Barbecue />
          </div>
        </div>
      </Section>

      <Section halfPage className={styles.whyUsSection}>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className={styles.card}>
                <Animation
                  animationData={boxAnim}
                  size={160}
                  playOnHoverAndReverse
                />
                <h2>Amazing packaging</h2>
                <p>Receive all the awesome stuff in the dopest box.
                Our packages are environmental friendly and wrapped by hand by 18 years old virgins.
                </p>
              </div>
            </div>
            <div className="col-md">
              <div className={styles.card}>
                <Animation
                  animationData={heartAnim}
                  size={160}
                  playOnHoverAndReverse
                />
                <h2>Made with Love</h2>
                <p>Environmental friendly, vegan and gluten-free. Our patties are the most disgusting thing
                you have ever eaten. But the packaging rocks.
                </p>
              </div>
            </div>
            <div className="col-md">
              <div className={styles.card}>
                <Animation
                  animationData={ribbonAnim}
                  size={160}
                  playOnHoverAndReverse
                />
                <h2>Be awesome</h2>
                <p>Just wait until your neighbors see the boxes being delivered. They will think you are
                the dopest dude in the block. Guaranteed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

Home.layout = HeaderFooterLayout;

export default Home;
