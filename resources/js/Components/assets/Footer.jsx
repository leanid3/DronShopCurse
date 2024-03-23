import { Link } from "@inertiajs/react"

export default function Footer() {
  return (
    <footer className=" mt-5 bg-gradient-to-r text-lightgrey to-darkblue to-40$ from-lightblue to-50% ">
        <div className="flex *:flex *:flex-col justify-evenly gap-7 lg:gap-0  mx-32 py-10">

            <div>
                <span className="font-bold">Покупателям</span>
                <ul className="*:mt-2">
                    <li><Link>О компании</Link></li>
                    <li><Link>Вакансии</Link></li>
                    <li><Link>Доставка</Link></li>
                    <li><Link>Для прессы</Link></li>
                    <li><Link>Новости</Link></li>
                </ul>
            </div>

            <div>
                <span className="font-bold mb-2">Покупателям</span>
                <ul className=" *:mt-2 gap-3">
                    <li><Link>Сервисные центры</Link></li>
                    <li><Link>Услуги</Link></li>
                    <li><Link>Корпоративным клиентам</Link></li>
                    <li><Link>Аренда помещений</Link></li>
                    <li><Link>Для вебмастеров</Link></li>
                    <li><Link>Правила продажи</Link></li>
                    <li><Link>Обзоры</Link></li>
                </ul>
            </div>
            <div>
                <span className="font-bold">Партнёрам</span>
                <ul className="*:mt-2">
                    <li><Link>Сервисные центры</Link></li>
                    <li><Link>Поставщикам упаковки</Link></li>
                    <li><Link>Поддержка бизнеса</Link></li>
                    <li><Link>Создание сайтов</Link></li>
                    <li><Link>Тендеры на перевозки</Link></li>
                    <li><Link>Открыть пункт выдачи</Link></li>
                </ul>
            </div>
            <div>
                <span className=" font-bold">Контакты</span>
                <ul className="*:mt-2">
                    <li><p>Телефон: <Link>8 800 234 1000</Link></p></li>
                    <li><p>Екатеринбург, ул. Черняховского, 86/8</p></li>
                    <li><p>Москва, Новоданиловская набережная, д.4, оф.31</p></li>
                    <li><Link>Все контакты</Link></li>
                </ul>
            </div>
            
            
          
            
        </div>


    </footer>
  )
}
