import { Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function ProductsiCart({item}) {
    const {delete:destroyCartItem} = useForm({
        item_id: item.id
    })
    const cartDelete = () =>{
        destroyCartItem(route('destroyCart'))
    }
    return (
        
        <div className="p-3">
                <img className='w-10 h-10' src={item.product.image} alt={item.product.image} />
                <Link className='text-xl font-semibold hover:underline' href={route('showProduct', {id: item.product.id})}>{item.product.title}</Link>
                <p>{item.product.description}</p>
                <button className='bg-red-700 font-semibold text-white text-lg px-3 py-2 rounded-lg' onClick={cartDelete}>Удалить из корзины</button>
            </div>
  )
}
