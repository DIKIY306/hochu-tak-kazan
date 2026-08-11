const services = [
  {
    title: "Женская стрижка",
    text: "Форма, консультация и легкая укладка после услуги.",
    meta: "40-60 мин",
  },
  {
    title: "Мужская стрижка",
    text: "Мойка головы бесплатно, аккуратная форма и укладка.",
    meta: "35-50 мин",
  },
  {
    title: "Детская стрижка",
    text: "Спокойно, быстро и без лишнего ожидания.",
    meta: "от 3 лет",
  },
  {
    title: "Окрашивание",
    text: "Тон, блонд, сложные техники и консультация по уходу.",
    meta: "цена заранее",
  },
  {
    title: "Уходы",
    text: "Блеск, плотность, восстановление и мягкость волос.",
    meta: "под задачу",
  },
  {
    title: "Завивка",
    text: "Долговременная текстура и форма после диагностики.",
    meta: "по консультации",
  },
  {
    title: "Укладки",
    text: "Образ на день, вечер, свидание, выпускной или съемку.",
    meta: "в день записи",
  },
  {
    title: "Прически",
    text: "Свадьба, праздник, тиара, плетение, собранный образ.",
    meta: "по референсу",
  },
];

const addresses = [
  "Белинского, 18",
  "Галимджана Баруди, 8",
  "Юлиуса Фучика, 105а",
  "Лиственная, 23а",
  "Дубравная, 51г",
  "Рауиса Гареева, 92",
  "Песчаные Ковали, Октябрьская, 29в",
];

const works = [
  ["/media/hero-before-after.jpg", "Сложный цвет", "окрашивание"],
  ["/media/work-blonde.jpg", "Чистый блонд", "тон и уход"],
  ["/media/work-braid.jpg", "Плетение", "деталь образа"],
  ["/media/style-dark-updo.jpg", "Вечерняя форма", "собранный образ"],
  ["/media/style-tiara.jpg", "Празднично", "прическа с тиарой"],
  ["/media/work-kids.jpg", "Детская стрижка", "спокойный визит"],
  ["/media/work-evening.jpg", "Гладкий финиш", "укладка"],
];

const proofPoints = ["7 салонов в Казани", "70K+ клиентов", "стоимость до начала", "можно с референсом"];

const faqs = [
  ["Как записаться?", "Оставьте контакт, администратор уточнит услугу, район и предложит ближайшее свободное окно."],
  ["Стоимость будет известна заранее?", "Да. Мастер проговаривает стоимость до начала услуги, особенно если нужен цвет, уход или сложная техника."],
  ["Можно прийти с фото?", "Да. Референс помогает быстрее понять желаемый образ и объяснить, что получится именно на ваших волосах."],
  ["Есть гарантия?", "Если результат не соответствует согласованному запросу, администратор поможет разобраться и предложит решение."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Главная навигация">
        <a className="brand" href="#top" aria-label="Хочу Так">
          <strong>Хочу Так</strong>
          <span>beauty house · Казань</span>
        </a>
        <nav className="nav-links" aria-label="Разделы сайта">
          <a href="#menu">Услуги</a>
          <a href="#lookbook">Работы</a>
          <a href="#salons">Салоны</a>
          <a href="#booking">Запись</a>
        </nav>
        <a className="topbar-cta" href="#booking">Записаться</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Сеть салонов красоты в Казани</p>
          <h1>Хочу Так</h1>
          <p>
            Стрижки, окрашивания, уходы и прически. Приходите с фото, выбирайте
            удобный филиал, а стоимость обсудим до начала услуги.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#booking">Записаться</a>
            <a className="secondary-button" href="#lookbook">Смотреть работы</a>
          </div>
          <div className="hero-proof" aria-label="Коротко о салонах">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>

        <div className="hero-media" aria-label="Атмосфера салона Хочу Так">
          <img src="/media/work-blonde.jpg" alt="Окрашивание и уход в салоне Хочу Так" />
          <figure>
            <img src="/media/style-dark-updo.jpg" alt="Вечерняя прическа в салоне Хочу Так" />
            <figcaption>beauty house · kazan</figcaption>
          </figure>
        </div>

        <aside className="booking-card" aria-label="Быстрая заявка">
          <span className="card-label">Быстрая запись</span>
          <h2>Подберем окно</h2>
          <p>Оставьте контакт. Администратор уточнит услугу, район и удобное время.</p>
          <form aria-label="Форма быстрой записи">
            <label>
              Имя
              <input type="text" name="name" placeholder="Например, Алина" />
            </label>
            <label>
              Телефон
              <input type="tel" name="phone" placeholder="+7 ___ ___-__-__" />
            </label>
            <button type="button">Жду звонка</button>
          </form>
          <div className="booking-highlights">
            <span>Ближайший филиал</span>
            <span>Стоимость до услуги</span>
            <span>Мужская мойка бесплатно</span>
            <span>Гарантия качества</span>
          </div>
        </aside>
      </section>

      <section className="marquee" aria-label="Преимущества">
        <div>
          <span>Стрижка</span>
          <span>Окрашивание</span>
          <span>Уход</span>
          <span>Укладка</span>
          <span>7 адресов</span>
          <span>Стрижка</span>
          <span>Окрашивание</span>
          <span>Уход</span>
          <span>Укладка</span>
          <span>7 адресов</span>
        </div>
      </section>

      <section className="experience">
        <figure>
          <img src="/media/style-tiara.jpg" alt="Праздничная прическа с тиарой" />
        </figure>
        <div>
          <span>01</span>
          <h2>Приходите с фото. Мы подскажем, как повторить образ.</h2>
          <p>
            Мастер объяснит, что получится именно на ваших волосах, сколько
            времени заложить и какой уход сохранить после визита.
          </p>
        </div>
        <figure>
          <img src="/media/work-braid.jpg" alt="Плетение в салоне Хочу Так" />
        </figure>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-title">
          <span>Услуги</span>
          <h2>Меню услуг</h2>
          <p>Коротко и понятно: что выбрать, сколько времени заложить и когда уточнить цену у мастера.</p>
          <div className="section-points">
            <span>стрижки</span>
            <span>цвет</span>
            <span>уход</span>
            <span>укладки</span>
          </div>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <em>{service.meta}</em>
            </article>
          ))}
        </div>
      </section>

      <section className="lookbook" id="lookbook">
        <div className="section-title invert">
          <span>Работы</span>
          <h2>Работы клиентов</h2>
          <p>Сохраните понравившийся образ или принесите свой референс на консультацию.</p>
          <div className="section-points">
            <span>блонд</span>
            <span>плетения</span>
            <span>детские</span>
            <span>вечерние</span>
          </div>
        </div>
        <div className="lookbook-grid">
          {works.map(([src, title, text], index) => (
            <figure className={index === 0 ? "lookbook-main" : ""} key={`${src}-${title}`}>
              <img src={src} alt={`${title}: ${text}`} />
              <figcaption>
                <strong>{title}</strong>
                <span>{text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="salons" id="salons">
        <div className="section-title">
          <span>Адреса</span>
          <h2>Салоны рядом</h2>
          <p>Выберите район, а администратор предложит ближайшее свободное время.</p>
          <div className="section-points">
            <span>7 филиалов</span>
            <span>подбор по району</span>
            <span>звонок администратора</span>
          </div>
        </div>
        <div className="salon-strip">
          {addresses.map((address, index) => (
            <article key={address}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{address}</h3>
              <p>Казань · свободное окно уточнит администратор</p>
              <a href="#booking">Выбрать салон</a>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div>
          <span className="card-label">Запись</span>
          <h2>Запись на сегодня</h2>
          <p>
            Оставьте телефон. Мы уточним услугу, филиал и подберем свободное окно
            у подходящего мастера.
          </p>
        </div>
        <form className="full-form" aria-label="Форма записи">
          <label>
            Имя
            <input type="text" name="name" placeholder="Ваше имя" />
          </label>
          <label>
            Телефон
            <input type="tel" name="phone" placeholder="+7 ___ ___-__-__" />
          </label>
          <label>
            Услуга
            <select name="service" defaultValue="">
              <option value="" disabled>Выберите услугу</option>
              <option>Стрижка</option>
              <option>Окрашивание</option>
              <option>Уход</option>
              <option>Укладка или прическа</option>
            </select>
          </label>
          <label>
            Салон
            <select name="salon" defaultValue="">
              <option value="" disabled>Выберите филиал</option>
              {addresses.map((address) => (
                <option key={address}>{address}</option>
              ))}
            </select>
          </label>
          <button type="button">Отправить заявку</button>
        </form>
      </section>

      <footer className="footer">
        <section>
          <h2>FAQ</h2>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>
        <section>
          <h2>Документы</h2>
          <a href="#booking">Политика обработки персональных данных</a>
          <a href="#booking">Согласие на обработку персональных данных</a>
          <a href="#booking">Подарочные сертификаты</a>
          <a href="#booking">Публичная информация об услугах</a>
        </section>
        <section>
          <h2>Контакты</h2>
          <p>Казань · 7 салонов сети «Хочу Так».</p>
          <p>Точные часы работы, мастера и свободные окна уточняются при записи.</p>
        </section>
      </footer>
    </main>
  );
}
