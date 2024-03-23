import Welcome from '@/Components/assets/Welcome'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Product({auth, product} ) {
  return (
    <Welcome auth={auth}>
        <Head title={product.title }></Head>
        <ul>
            <li>Name: {product.title}</li>
            {/* <li>Brand:{product.brand.brand}</li> */}
            <li>price:{product.price}</li>
            <li>description: {product.description}</li>
        </ul>    
    </Welcome>
  )
}
