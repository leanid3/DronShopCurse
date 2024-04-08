import { router } from '@inertiajs/react'
import Cardproduct from './Cardproduct'

function Catalog({arrayProduct}) {
    return (
    <div className="max-w-full">
      <h2 className='text-darkblue text-3xl font-bold p-3'>Новинки:</h2>

      <div className='mx-10 md:mx-0  gap-5 grid md:grid-cols-2 lg:grid-cols-5'>
          {arrayProduct.data.map(product =>
            <Cardproduct key={product.id}  product={product}/>
         )}
         <div className="flex items-center space-x-1 justify-start ">
            {arrayProduct.links.map(link =>
                <button
                    className={`border-2 border-darkblue p-2 rounded-lg ${link.active ?`bg-lightgrey text-darkblue` : `text-lightgrey bg-darkblue hover:bg-darkblue/70`}`}
                    onClick={()=> router.visit(link.url)}
                    disabled={link.active===true}
                >
                    {link.label}
                </button>
            )}
        </div>
      </div>
    </div>
  )
}


export default Catalog
