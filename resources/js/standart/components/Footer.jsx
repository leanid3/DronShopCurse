import Mylink from "./UI/Mylink/Mylink"

export default function Footer() {
  return (
    <footer className=" mt-5 bg-gradient-to-r text-lightgrey to-darkblue to-40$ from-lightblue to-50% ">
        <div className="flex *:flex *:flex-col justify-evenly gap-7 lg:gap-0  mx-32 py-10">

            <div>
                <span className="font-bold">Покупателям</span>
                <ul className="*:mt-2">
                    <li><Mylink>О компании</Mylink></li>
                    <li><Mylink>Вакансии</Mylink></li>
                    <li><Mylink>Доставка</Mylink></li>
                    <li><Mylink>Для прессы</Mylink></li>
                    <li><Mylink>Новости</Mylink></li>
                </ul>
            </div>

            <div>
                <span className="font-bold mb-2">Покупателям</span>
                <ul className=" *:mt-2 gap-3">
                    <li><Mylink>Сервисные центры</Mylink></li>
                    <li><Mylink>Услуги</Mylink></li>
                    <li><Mylink>Корпоративным клиентам</Mylink></li>
                    <li><Mylink>Аренда помещений</Mylink></li>
                    <li><Mylink>Для вебмастеров</Mylink></li>
                    <li><Mylink>Правила продажи</Mylink></li>
                    <li><Mylink>Обзоры</Mylink></li>
                </ul>
            </div>
            <div>
                <span className="font-bold">Партнёрам</span>
                <ul className="*:mt-2">
                    <li><Mylink>Сервисные центры</Mylink></li>
                    <li><Mylink>Поставщикам упаковки</Mylink></li>
                    <li><Mylink>Поддержка бизнеса</Mylink></li>
                    <li><Mylink>Создание сайтов</Mylink></li>
                    <li><Mylink>Тендеры на перевозки</Mylink></li>
                    <li><Mylink>Открыть пункт выдачи</Mylink></li>
                </ul>
            </div>
            <div>
                <span className=" font-bold">Контакты</span>
                <ul className="*:mt-2">
                    <li><p>Телефон: <Mylink>8 800 234 1000</Mylink></p></li>
                    <li><p>Екатеринбург, ул. Черняховского, 86/8</p></li>
                    <li><p>Москва, Новоданиловская набережная, д.4, оф.31</p></li>
                    <li><Mylink>Все контакты</Mylink></li>
                </ul>
            </div>
            
            
          
            
        </div>


    </footer>
  )
}
