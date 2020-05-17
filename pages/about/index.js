import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import BlueLayout from '../../layouts/BlueLayout';

function About(props) {
  return (
    <>
      <h1 className={styles.title}>ABOUT PAGE</h1>
      <Link href="/"><a>Go home</a></Link>
    </>
  );
}

About.Layout = BlueLayout;

export default About;

