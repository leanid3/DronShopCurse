import React from 'react'
import Footer from '@/Components/assets/Footer.jsx'
import Header from '@/Components/assets/Header.jsx';

export default function Welcome({auth, children}) {
  return (
    <React.Fragment>
      <Header auth={auth}/>
      <main className="container mx-auto">
        {children}
      </main>
      <Footer/>
    </React.Fragment>
  )
}