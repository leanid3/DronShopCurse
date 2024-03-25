import React from 'react'
import Footer from '@/Components/assets/Footer.jsx'
import Header from '@/Components/assets/Header.jsx';

export default function Welcome({ children}) {
  return (
    <React.Fragment>
      <Header/>
      <main className="container my-20 mx-auto">
        {children}
      </main>
      <Footer/>
    </React.Fragment>
  )
}
