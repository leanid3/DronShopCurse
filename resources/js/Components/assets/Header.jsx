import { IoLogInSharp } from "react-icons/io5";
import { BsBookmarkStar } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { HiOutlineUser, HiOutlineShoppingCart, HiChat, HiBookOpen   } from "react-icons/hi";
import { Link, useForm, usePage } from "@inertiajs/react";
import InputSearch from "../InputSearch";
export default function Header({ auth }) {
    return (
        <header className="flex flex-wrap items-center justify-between bg-gradient-to-r from-lightblue to-blue-500 w-full md:w-screen p-4 z-10">
            <Link
                href={route("home")}
                className="text-lightgrey text-center md:text-left text-xl md:text-3xl font-bold"
            >
                DronShop
            </Link>
            <InputSearch />
            <div className="flex items-center gap-3 text-lightgrey text-center md:text-left">
                <Link href={route("cart")} className="flex items-center">
                    <HiOutlineShoppingCart className="text-xl md:text-3xl" />
                    <span className="hidden lg:block">Корзина</span>
                </Link>
                <Link href={route("cart")} className="flex items-center">
                    <HiChat  className="text-xl md:text-3xl" />
                    <span className="hidden lg:block">Обратная связь</span>
                </Link>
                <Link href={route("cart")} className="flex items-center">
                    <HiBookOpen className="text-xl md:text-3xl" />
                    <span className="hidden lg:block">О нас</span>
                </Link>
                {auth && auth.user ? (
                    <Link
                        href={route("dashboard")}
                        className="flex items-center"
                    >
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
                    <Link
                        href={route("register")}
                        className="flex items-center"
                    >
                        <HiOutlineUser className="text-xl md:text-3xl" />
                        <span>Регистрация</span>
                    </Link>
                )}
            </div>
        </header>
    );
}
