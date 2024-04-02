import Layout from '@/Layouts/Layout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function AnswerSearch({auth, products, searchQuery }) {
  return (
    <Layout auth={auth}>
        <Head title='Результат поска'/>
        <div className="flex flex-col items-center space-y-3">
        <h1> Найдено по запросу: <strong>{searchQuery}</strong></h1>
        {
          <p className='px-3 py-2 bottom-1 bg-red-400 font-medium'>ничего не найдено</p>
          &&(

          products.map(product=> 
          <div className="p-3">
                    <img className='w-10 h-10' src={product.image} alt={product.image} />
                    <Link className='text-xl font-semibold hover:underline' href={route('showProduct', {id: product.id})}>{product.title}</Link>
                    <p>{product.description}</p>
                </div>
              
              )
            
          )
        }
        </div>
    </Layout>
  )
}
