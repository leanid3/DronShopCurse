import ShowCommentsComponent from '@/Components/assets/ShowCommentsComponent'
import Layout from '../Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import CommentComponent from '@/Components/assets/CommentComponent'

export default function Product({product, auth, comments} ) {
    return (
        <Layout auth={auth}>
            <Head title={product.title }></Head>
            <div class="grid grid-cols-2 gap-4 p-5">
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
                        <p class="font-bold">Brend:</p>
                        <p>{product.brend.brend}</p>
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
            {/* <div class="mt-8">
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
            </div> */}
            <CommentComponent auth={auth} productId={product.id}/>
            <ShowCommentsComponent comments={comments} />
    </Layout>
  )
}
