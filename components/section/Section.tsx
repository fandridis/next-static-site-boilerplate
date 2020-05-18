import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  halfPage?: boolean,
  fullPage?: boolean,
  fullPageWithHeader?: boolean,
  fullPageWithHeaderAndFooter?: boolean,
  className?: string,
}

Section.defaultProps = {
  className: ''
}

function Section(props: React.PropsWithChildren<SectionProps>) {
  const classes = [
    styles.container,
    props.halfPage && styles.halfPage,
    props.fullPage && styles.fullPage,
    props.fullPageWithHeader && styles.fullPageHeader,
    props.fullPageWithHeaderAndFooter && styles.fullPageHeaderFooter,
    props.className && props.className
  ].filter(c => !!c).join(' ');

  return (
    <section className={classes}>
      {props.children}
    </section>
  )
}

export default Section;