import { Link } from "@inertiajs/react";
import NavLink from "../NavLink";

export default function Footer() {
    return (
        <footer className="bg-darkblue text-lightgrey p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 flex">
                            О нас
                        </h3>
                        <p className="text-sm flex-grow">
                            Мы компания, специализирующаяся на продаже
                            квадракоптеров. Наш ассортимент включает в себя
                            широкий выбор квадрокоптеров различных марок,
                            моделей и ценовых категорий. Мы стремимся
                            предоставить нашим клиентам высококачественные
                            продукты и отличный сервис.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Связаться с нами
                        </h3>
                        <p>example@example.com</p>
                        <p>+1234567890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Ссылки</h3>
                        <ul>
                            <li>
                                <NavLink href={route("home")}>Главная</NavLink>
                            </li>
                            <li>
                                <NavLink href="/about">О нас</NavLink>
                            </li>
                            <li>
                                <NavLink href="/products">Продукты</NavLink>
                            </li>
                            <li>
                                <NavLink href="/contact">Контакты</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Подписаться на рассылку
                        </h3>
                        <form>
                            <input
                                type="email"
                                placeholder="Введите ваш email"
                                className="w-full py-2 px-3 rounded bg-darkblue text-lightgrey "
                            />
                            <button
                                type="submit"
                                className="mt-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded text-lightgrey "
                            >
                                Подписаться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
