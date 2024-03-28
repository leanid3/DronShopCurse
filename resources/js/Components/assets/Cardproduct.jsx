import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgCheckO, CgCloseO  } from "react-icons/cg";
import { useState } from "react";
import { Link } from "@inertiajs/react";
function Cardproduct({product}) {

    const [isCart, setIsCart] = useState(false)
    const addCart = () =>{
        localStorage.setItem('product', JSON.stringify(product))
        setIsCart(true)
    }
  return (

        <article key={product.id} className='flex flex-col border border-darkblue rounded-md shadow-lg hover:-translate-y-1 transition-transform duration-300'>
        <img  src={product.image} alt="{product.image}"  className='rounded-t-lg' />
        <div className="p-4 flex flex-col justify-between flex-1">
        <div>
            {/* <p className='text-sm text-gray-600'>{product.brand.brand}</p> */}
            <Link href={route('showProduct', {id: product.id})} className='text-lg mb-2 hover:outline font-semibold'>{product.title}</Link>
            <p className=' text-dar-400 text-lg'>{product.rating}</p>
            <p className=' text-darkblue text-lg'>{product.price} руб.</p>
            <p className={`text-sm flex gap-2 items-center font-semibold ${product.status ==='в наличии'? 'text-green-500': 'text-red-500'}`}>
            {product.status ==='в наличии' ? <CgCheckO/> : <CgCloseO/> }
            {product.status} 
            </p>
            </div>
                {!isCart && 
                
                    <button 
                        onClick={addCart}
                        className='flex gap-2 item-center mt-4 px-4 py-2 text-lightgrey font-semibold rounded-md shadow-md bg-darkblue hover:bg-opacity-80 focus:outline-none' >
                        <HiOutlineShoppingCart className='text-2xl pt-1'/>В корзину
                    </button>
                }
                
            </div>
        </article>
    )
}



export default Cardproduct