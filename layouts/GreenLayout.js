import React from 'react'
import { useRouter } from 'next/router'

export default ({ children }) => {
  const router = useRouter()
  console.log('router: ', router)


  return <main style={{ border: '4px dashed green' }}>{children}</main>
}