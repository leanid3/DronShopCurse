import React from 'react'
import Header from '@/standart/components/Header'
import Footer from '@/standart/components/Footer'
import Mainpage from '@/standart/page/Mainpage'
export default function Welcome() {
  return (
    <>
    <Header />
    <div className="container mx-auto">
       <Mainpage />
    </div>
   <Footer/>
 </>
  )
}
