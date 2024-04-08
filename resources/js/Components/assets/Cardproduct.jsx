import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgCheckO, CgCloseO  } from "react-icons/cg";
import { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
export default function Cardproduct({product}) {


    // const [imageLoad, setImageLoad] = useState(true)

    const {post} = useForm({
        product_id: product.id
    })

    // const handleImageLoad = () => {
    //     console.log('функ загрузки отрпботала')
    //     setImageLoad(false)
    // }

    const addToCart = (e) => {
        e.preventDefault()
        post(route('addCart'))
    };
  return (

      <article key={product.id} className='flex flex-col border border-darkblue rounded-md shadow-lg hover:-translate-y-1 transition-transform duration-300'>
        {product.image &&
            <img  src={product.image} alt={product.id}  className='rounded-t-lg'/>
        }
        {/* {imageLoad ? (
            <div className="w-full mt-5 animate-pulse flex items-center justify-center">
                Загрузка...
            </div>
            ) : (
            <img  src={product.image} alt={product.id} onLoad={handleImageLoad}   className='rounded-t-lg'/>
        )} */}

        <div className="p-4 flex flex-col justify-between flex-1">
            <div>
                <p className='text-sm text-gray-600'>{product.brend.brend}</p>

                <Link
                    href={route('showProduct', {id: product.id})}
                    className='text-lg mb-2 hover:outline font-semibold'
                >
                    {product.title}
                </Link>

                <p className=' text-dar-400 text-lg'>{product.rating}</p>

                <p className=' text-darkblue text-lg'>{product.price} руб.</p>

                <p className={`text-sm flex gap-2 items-center font-semibold ${product.status ==='в наличии'? 'text-green-500': 'text-red-500'}`}>
                {product.status ==='в наличии' ? <CgCheckO/> : <CgCloseO/> }
                {product.status}
                </p>
            </div>
                    <button
                        onClick={addToCart}
                        className='flex gap-2 item-center mt-4 px-4 py-2 text-lightgrey font-semibold rounded-md shadow-md bg-darkblue hover:bg-opacity-80 focus:outline-none' >
                        <HiOutlineShoppingCart className='text-2xl pt-1' />В корзину
                    </button>
            </div>
        </article>
    )
}
