import { IoLogInSharp } from "react-icons/io5";
import { BsBookmarkStar } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useForm, usePage } from "@inertiajs/react";
import InputSearch from "../InputSearch";
export default function Header({ auth }) {
    return (
        <header className="flex flex-wrap items-center justify-between bg-gradient-to-r from-lightblue to-blue-500 w-full md:w-screen p-4 z-10">
            <Link
                to="/"
                className="text-lightgrey text-center md:text-left text-xl md:text-3xl font-bold"
            >
                DronShop
            </Link>
            <InputSearch />
            <div className="flex items-center gap-3 text-lightgrey text-center md:text-left">
                <Link to="/cart" className="flex items-center">
                    <HiOutlineShoppingCart className="text-xl md:text-3xl" />
                    <span className="hidden lg:block">Корзина</span>
                </Link>
                <Link to="/favorites" className="flex items-center">
                    <BsBookmarkStar className="text-xl md:text-3xl" />
                    <span className="hidden lg:block">Избранное</span>
                </Link>
                <Link to="/sales" className="flex items-center">
                    <FaPercent className="text-xl md:text-3xl" />
                    <span className="hidden lg:block">Акция</span>
                </Link>
                {auth && auth.user ? (
                    <Link to="/dashboard" className="flex items-center">
                        <img
                            className="w-8 h-8 rounded-full"
                            src={auth.user.avatar}
                            alt={auth.user.name}
                        />
                        <span className="hidden lg:block">
                            {auth.user.name}
                        </span>
                    </Link>
                ) : (
                    <Link to="/register" className="flex items-center">
                        <HiOutlineUser className="text-xl md:text-3xl" />
                        <span>Регистрация</span>
                    </Link>
                )}
            </div>
        </header>

        // <header className=' flex fixed items-center top-0 justify-evenly bg-gradient-to-r from-lightblue to-50% w-full md:w-screen  to-darkblue from-30% p-4 z-10'>
        //   <Link href={route('home')} className="text-lightgrey text-center md:text-left text-xl md:text-3xl font-bold">DronShop</Link>

        // <InputSearch/>

        //   <div className='flex text-center md:text-left gap-3 *:text-lightgrey *:flex *:flex-col *:items-center '>
        //     <Link href={route('cart')}><HiOutlineShoppingCart className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Корзина</p></Link>
        //     <Link href="#"><BsBookmarkStar className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Избранное</p></Link>
        //     <Link href="#"><FaPercent className='text-xl md:text-3xl'/> <p className='hidden lg:block'>Акция</p></Link>
        //     {auth && auth.user ? (
        //       <Link href={route('dashboard')}><img className=' w-8 h-8 rounded-full' src={auth.user.avatar} /> <p className='hidden lg:block'>{auth.user.name}</p></Link>
        //     ) : (
        //       <Link href={route('register')}><HiOutlineUser className='text-xl md:text-3xl' />Регистрация</Link>
        //     )}
        //   </div>
        // </header>
    );
}
