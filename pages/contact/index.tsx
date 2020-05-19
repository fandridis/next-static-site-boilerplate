import React from 'react';
import Link from 'next/link';
import styles from './index.module.css'
import { HeaderFooterLayout } from 'layouts';

function Contact() {
  return (
    <>
      <h1 className={styles.title}>CONTACT PAGE</h1>
      <Link href="/contact/details"><a>Go to details</a></Link>
      <br />
      <Link href="/"><a>Go home</a></Link>
    </>
  )
}

Contact.layout = HeaderFooterLayout
Contact.layoutProps = { htmlTitle: 'Contact' }

export default Contact;

