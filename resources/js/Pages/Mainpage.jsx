import Welcome from "@/Components/assets/Welcome.jsx";
import Myslider from "../Components/assets/slider/Myslider.jsx"
import Catalog from "../Components/assets/Сatalog.jsx";
import { Head, usePage } from "@inertiajs/react";
export default function Mainpage({arrayProduct}) {
  const slides =[
    'https://pngimg.com/uploads/drone/drone_PNG139.png', 
    'https://images-na.ssl-images-amazon.com/images/I/81LbQx2IA+L.png', 
    'https://www.cined.com/content/uploads/2018/01/Mavic-Air_Flame-Red_side-2-featured.jpg'
  ]
  const {auth} = usePage().props
  // const arrayProduct = [
  //   {
  //     id: 1,
  //     name: "DJI Mavic Air 2",
  //     image: "https://cdn.shopify.com/s/files/1/0480/3146/5632/files/Copy-of-Copy-of-COMMERCIAL-PAGE-40-1-1.png",
  //     status: "в наличии",
  //     brand: "DJI",
  //     rating: 4.7,
  //     price: 999
  //   },
  //   {
  //     id: 2,
  //     name: "DJI Phantom 4 Pro V2.0",
  //     image: "https://www.dronexpert.hu/upload/userupload/2/images/halkabb-es-hosszabb-repulest-iger-a-dji-mavic-pro-platinum_1%281%29.jpg",
  //     status: "в наличии",
  //     brand: "DJI",
  //     rating: 4.9,
  //     price: 1499
  //   },
  //   {
  //     id: 3,
  //     name: "Parrot Anafi",
  //     image: "https://cdn.shopify.com/s/files/1/0480/3146/5632/files/1463648958inspire1_V2_VR_049.png",
  //     status: "в наличии",
  //     brand: "Parrot",
  //     rating: 4.5,
  //     price: 699
  //   },
  //   {
  //     id: 4,
  //     name: "Holy Stone HS720",
  //     image: "https://tienda.stockrc.com/WebRoot/StoreES2/Shops/eb0140/5655/C1CD/31D1/79DA/9805/52DF/D07D/8FB4/inspire_V2_png_002.png",
  //     status: "в наличии",
  //     brand: "Holy Stone",
  //     rating: 4.3,
  //     price: 399
  //   },
  //   {
  //     id: 5,
  //     name: "Potensic T25",
  //     image: "https://fotografiaydrones.com/wp-content/uploads/2019/01/A07-5-Claver-sensores-de-un-dron-1920x1080.png",
  //     status: "в наличии",
  //     brand: "Potensic",
  //     rating: 4.1,
  //     price: 299
  //   },
  //   {
  //     id: 6,
  //     name: "Syma X5C-1",
  //     image: "https://www.staynerd.com/wp-content/uploads/1.Parrot_Bebop2.jpg",
  //     status: "в наличии",
  //     brand: "Syma",
  //     rating: 4.0,
  //     price: 59
  //   },
  //   {
  //     id: 7,
  //     name: "EACHINE E520S",
  //     image: "https://img3.goodfon.com/original/1920x1080/5/b0/dji-phantom-3-drone.jpg",
  //     status: "нет в наличии",
  //     brand: "EACHINE",
  //     rating: 4.2,
  //     price: 199
  //   },
  //   {
  //     id: 8,
  //     name: "Ryze Tello",
  //     image: "https://kalastus-shop.ru/wp-content/uploads/2019/05/wpostleeee.jpg",
  //     status: "в наличии",
  //     brand: "Ryze",
  //     rating: 4.6,
  //     price: 99
  //   },
  //   {
  //     id: 9,
  //     name: "Hubsan Zino Pro",
  //     image: "https://www.hausblick.ch/wp-content/uploads/sites/3/2019/05/fotodrohne-dji-mavic-2-pro-luftaufnahmen.jpg",
  //     status: "в наличии",
  //     brand: "Hubsan",
  //     rating: 4.4,
  //     price: 499
  //   },
  //   {
  //     id: 10,
  //     name: "JJRC X12",
  //     image: "https://fotografiyazabiznesa.com/wp-content/uploads/2019/04/osnovna-dron-shop.jpg",
  //     status: "в наличии",
  //     brand: "JJRC",
  //     rating: 4.0,
  //     price: 149
  //   }
  // ];
 console.log(auth.user)
  return (

        <>
          <Head title="Главная страница"/>
          <section className=" flex flex-col items-center">
          
            <div className=" w-full lg:w-[60%] lg:mx-auto md:p-11">
              <Myslider slides={slides} />
            </div>
            <Catalog arrayProduct={arrayProduct} />
          </section>
         </>
   

  )
}
