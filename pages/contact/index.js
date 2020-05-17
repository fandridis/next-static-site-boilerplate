import React from 'react'
import Link from 'next/link';
import styles from './index.module.css'
import GreenLayout from '../../layouts/GreenLayout';

function Contact(props) {
  return (
    <>
      <h1 className={styles.title}>CONTACT PAGE</h1>
      <Link href="/contact/details"><a>Go to details</a></Link>
      <br />
      <Link href="/"><a>Go home</a></Link>
    </>
  )
}

Contact.Layout = GreenLayout;

export default Contact;

