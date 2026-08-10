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
  ["/media/hero-before-after.jpg", "Color transformation", "сложное окрашивание"],
  ["/media/work-blonde.jpg", "Clean blonde", "чистый блонд"],
  ["/media/work-braid.jpg", "Braided detail", "плетение"],
  ["/media/style-dark-updo.jpg", "Evening shape", "собранный вечер"],
  ["/media/style-tiara.jpg", "Occasion hair", "праздничный образ"],
  ["/media/work-kids.jpg", "Kids cut", "детская стрижка"],
  ["/media/work-evening.jpg", "Glossy finish", "укладка"],
];

const faqs = [
  ["Как записаться?", "Оставьте контакт, администратор уточнит услугу, район и предложит ближайшее свободное окно."],
  ["Стоимость будет известна заранее?", "Да. Мастер проговаривает стоимость до начала услуги, особенно если нужен цвет, уход или сложная техника."],
  ["Можно прийти с фото?", "Да. Референс помогает быстрее понять желаемый образ и объяснить, что получится именно на ваших волосах."],
  ["Форма уже рабочая?", "Пока это дизайн-макет для согласования. После утверждения подключим отправку заявок и нужную логику."],
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
        <div className="hero-media" aria-label="Премиальная работа салона">
          <img src="/media/style-dark-updo.jpg" alt="Вечерняя прическа в салоне Хочу Так" />
          <div className="hero-media-overlay">
            <span>7 салонов</span>
            <span>70K+ клиентов</span>
            <span>цена до услуги</span>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Сеть салонов красоты в Казани</p>
          <h1>Beauty house для образа, который хочется показать мастеру.</h1>
          <p>
            Стрижки, окрашивания, уходы и прически в салонах, где можно прийти с
            фото, быстро выбрать ближайший филиал и заранее понять стоимость.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#booking">Подобрать салон</a>
            <a className="secondary-button" href="#lookbook">Смотреть работы</a>
          </div>
        </div>

        <aside className="booking-card" aria-label="Быстрая заявка">
          <span className="card-label">quick booking</span>
          <h2>Хочу так</h2>
          <p>Оставьте контакт. Администратор подберет филиал, мастера и время.</p>
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
          <span>Hair</span>
          <span>Color</span>
          <span>Care</span>
          <span>Makeup mood</span>
          <span>7 locations</span>
          <span>Hair</span>
          <span>Color</span>
          <span>Care</span>
          <span>Makeup mood</span>
          <span>7 locations</span>
        </div>
      </section>

      <section className="manifest">
        <div className="manifest-title">
          <p className="eyebrow">Как у сильных салонных брендов</p>
          <h2>Сайт должен продавать не стрижку, а уверенность: «здесь меня поймут».</h2>
        </div>
        <div className="manifest-copy">
          <p>
            Поэтому в новом макете на первом месте атмосфера, реальное фото,
            понятный путь к записи, меню услуг и адреса. Меньше случайных карточек,
            больше ощущения салона, куда хочется записаться.
          </p>
          <div className="manifest-stats" aria-label="Факты о сети">
            <strong>7</strong>
            <span>салонов в Казани</span>
            <strong>70K+</strong>
            <span>клиентов сети</span>
          </div>
          <div className="manifest-points">
            <span>фото впереди текста</span>
            <span>запись всегда рядом</span>
            <span>услуги с длительностью</span>
            <span>сеть видно сразу</span>
          </div>
        </div>
      </section>

      <section className="experience">
        <figure>
          <img src="/media/style-tiara.jpg" alt="Праздничная прическа с тиарой" />
        </figure>
        <div>
          <span>01</span>
          <h2>Покажите референс. Мастер переведет его в реальную услугу.</h2>
          <p>
            Что можно повторить, что лучше адаптировать, сколько времени займет
            процедура и как сохранить результат после визита.
          </p>
        </div>
        <figure>
          <img src="/media/work-braid.jpg" alt="Плетение в салоне Хочу Так" />
        </figure>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-title">
          <span>service menu</span>
          <h2>Услуги без лишней витрины</h2>
          <p>Как в хороших барбершопах: понятно, что выбрать, сколько заложить времени и когда спросить цену у мастера.</p>
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
          <span>lookbook</span>
          <h2>Реальные работы как главный аргумент</h2>
          <p>Фото не прячутся в маленькую галерею. Они создают настроение и сразу показывают уровень результата.</p>
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
          <span>locations</span>
          <h2>Семь салонов в Казани</h2>
          <p>Выбор филиала становится частью записи, а не отдельным поиском адреса внизу сайта.</p>
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
          <span className="card-label">final step</span>
          <h2>Записаться без долгой переписки</h2>
          <p>
            Пока форма работает как дизайн-прототип. После утверждения подключим
            отправку заявок, уведомления и нужную CRM или таблицу.
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
