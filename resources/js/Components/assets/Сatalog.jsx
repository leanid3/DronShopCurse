import Cardproduct from './Cardproduct'


function Catalog({arrayProduct}) {
  return (
    <div className="max-w-full">
      <h2 className='text-darkblue text-3xl font-bold p-3'>Новинки:</h2>
      <div className='mx-10 md:mx-0  gap-5 grid md:grid-cols-2 lg:grid-cols-5'>
          {arrayProduct.map(product =>
            <Cardproduct key={product.id} product={product}/>
         )}
      </div>
    </div>
  )
}


export default Catalog
