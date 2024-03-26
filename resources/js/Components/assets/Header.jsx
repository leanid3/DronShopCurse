import { IoLogInSharp   } from "react-icons/io5";
import { BsBookmarkStar } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { HiOutlineSearch, HiOutlineUser, HiOutlineShoppingCart   } from "react-icons/hi";
import { Link} from "@inertiajs/react";
export default function Header() {
  // const { auth } = usePage();
  // const user = props.user;
  return (

     
    <header className=' flex fixed items-center top-0 justify-evenly bg-gradient-to-r from-lightblue to-50% w-full md:w-screen  to-darkblue from-30% p-4 z-10'>
      <Link href={route('home')} className="text-lightgrey text-center md:text-left text-xl md:text-3xl font-bold">DronShop</Link>
      <form action="#" className='flex rounded-full border-2 shadow-lg *:bg-lightgrey'>
       <input placeholder="Поиск..." type='text' className="text-md lg:w-96 ps-10 rounded-s-full  placeholder:italic placeholder:text-darkblue placeholder:opacity-50 text-darkblue p-3"/>
        <button onClick={e=> e.preventDefault} className=' w-8 rounded-e-full text-center hover:bg-darkblue hover:text-lightgrey ps-1'><HiOutlineSearch/></button>
      </form>
      <div className='flex text-center md:text-left gap-3 *:text-lightgrey *:flex *:flex-col *:items-center '>
        <Link href={route('cart')}><HiOutlineShoppingCart className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Корзина</p></Link>
        <Link href="#"><BsBookmarkStar className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Избранное</p></Link>
        <Link href="#"><FaPercent className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Акция</p></Link>
          
          {/* {auth.user
            ? 
            <Link  href={route('dashboard')}><HiOutlineUser  className='text-xl md:text-3xl'/> <p className='hidden lg:block'>{user.name}</p></Link> */}

            
            {/* : <> */}
                <Link href={route('register')}><HiOutlineUser className='text-xl md:text-3xl'/></Link>
                {/* <Link href={route('login')}><IoLogInSharp className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Вход</p></Link> */}
              {/* </> */}
        {/* } */}
      </div>
    </header>

  )
}
