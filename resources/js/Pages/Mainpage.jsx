import Layout from "@/Layouts/Layout.jsx";
import Myslider from "../Components/assets/slider/Myslider.jsx"
import Catalog from "../Components/assets/Сatalog.jsx";
import { Head, usePage } from "@inertiajs/react";
export default function Mainpage({arrayProduct, auth}) {
  const slides =[
    'https://pngimg.com/uploads/drone/drone_PNG139.png', 
    'https://images-na.ssl-images-amazon.com/images/I/81LbQx2IA+L.png', 
    'https://www.cined.com/content/uploads/2018/01/Mavic-Air_Flame-Red_side-2-featured.jpg'
  ]


  return (

        <Layout auth={auth}>
          <Head title="Главная страница"/>
          <section className=" flex flex-col items-center">
            <div className=" w-full lg:w-[60%] lg:mx-auto md:p-11">
              <Myslider slides={slides} />
            </div>
            <Catalog arrayProduct={arrayProduct} />
          </section>
         </Layout>
   

  )
}
