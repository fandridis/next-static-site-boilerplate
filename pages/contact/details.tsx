import React from 'react'
import Link from 'next/link';
import { HeaderFooterLayout } from '../../layouts';

function Details() {
  return (
    <div>
      <h1>DETAILS</h1>
      <Link href="/contact"><a>Go to contacts</a></Link>
    </div>
  );
}

Details.layout = HeaderFooterLayout;

export default Details;
