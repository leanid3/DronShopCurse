import Layout from '../Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Product({product, auth} ) {
    return (
        <Layout auth={auth}>
            <Head title={product.title }></Head>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <img src={product.image} alt={product.image} class="w-full"/>
                </div>
                <div>
                    <h1 class="text-3xl font-bold mb-2">{product.title}</h1>
                    <p class="text-gray-700 mb-4">{product.description}</p>
                    <div class="mb-4">
                        <p class="font-bold">Category:</p>
                        <p>{product.category.categoryName}</p>
                    </div>
                    <div class="mb-4">
                        <p class="font-bold">Brand:</p>
                        <p>{product.brand.brand}</p>
                    </div>
                    <div class="mb-4">
                        <p class="font-bold">Status:</p>
                        <p>{product.status}</p>
                    </div>
                    <div class="mb-4">
                        <p class="font-bold">Rating:</p>
                        <p>{product.rating}</p>
                    </div>
                    <div class="mb-4">
                        <p class="font-bold">Price:</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
            <div class="mt-8">
                <h2 class="text-2xl font-bold mb-4">Characteristics</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="font-bold">Video Transmission:</p>
                        <p>1080p HD</p>
                    </div>
                    <div>
                        <p class="font-bold">Battery:</p>
                        <p>3000mAh LiPo</p>
                    </div>
                </div>
            </div>
    </Layout>
  )
}
