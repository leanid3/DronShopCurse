import React from 'react'
import Footer from '@/Components/assets/Footer.jsx'
import Header from '@/Components/assets/Header.jsx';

export default function Layout({children, auth}) {
  return (
    <>
      <Header auth={auth}/>
      <main className="container my-20 mx-auto bg-lightgrey">
        {children}
      </main>
      <Footer/>
    </>
  )
}
