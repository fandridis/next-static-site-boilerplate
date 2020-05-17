import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

function About(props) {
  return (
    <>
      <h1 className={styles.title}>ABOUT PAGE</h1>
      <Link href="/"><a>Go home</a></Link>
    </>
  )
}

export default About

