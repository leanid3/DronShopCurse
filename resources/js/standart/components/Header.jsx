import Mylink from './UI/Mylink/Mylink'
import { IoLogInSharp   } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsBookmarkStar } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <header className=' flex fixed items-center justify-evenly bg-gradient-to-r from-lightblue to-50% w-full md:w-screen  to-darkblue from-30% p-4 z-10'>
        <Mylink className="text-lightgrey text-center md:text-left text-xl md:text-3xl font-bold">DronShop</Mylink>
        <form action="#" className='flex rounded-full border-2 shadow-lg *:bg-lightgrey'>
          <input placeholder="Поиск..." type='text' className="text-md lg:w-96 ps-10 rounded-s-full  placeholder:italic placeholder:text-darkblue placeholder:opacity-50 text-darkblue p-3"/>
          <button onClick={e=> e.preventDefault} className=' w-8 rounded-e-full text-center hover:bg-darkblue hover:text-lightgrey ps-1'><HiOutlineSearch/></button>
        </form>
        <ul className='flex text-center md:text-left gap-3 *:text-lightgrey '>
            <li><Mylink className="flex flex-col items-center" href="#"><HiOutlineShoppingCart className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Корзина</p></Mylink></li>
            <li><Mylink className="flex flex-col items-center" href="#"><BsBookmarkStar className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Избранное</p></Mylink></li>
            <li><Mylink className="flex flex-col items-center" href="#"><FaPercent className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Акция</p></Mylink></li>
            <li><Mylink className="flex flex-col items-center" href="#"><IoLogInSharp className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Регистрация</p></Mylink></li>
        </ul>
    </header>
  )
}
