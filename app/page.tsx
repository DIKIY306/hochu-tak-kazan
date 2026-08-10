const services = [
  ["Женские стрижки", "форма, укладка, консультация"],
  ["Мужские стрижки", "мойка бесплатно"],
  ["Детские стрижки", "от 3 лет"],
  ["Окрашивание", "тон, сложные техники, блонд"],
  ["Уходы", "блеск, плотность, восстановление"],
  ["Завивка", "текстура и долговременная форма"],
  ["Укладки", "день, вечер, событие"],
  ["Прически", "выпускной, свадьба, праздник"],
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

const faqs = [
  ["Как записаться?", "Оставьте телефон, администратор подберет филиал и свободное окно."],
  ["Цена будет известна заранее?", "Да, мастер проговаривает стоимость до начала услуги."],
  ["Можно показать фото?", "Да, покажите референс, а мастер объяснит, как повторить образ."],
];

const gallery = [
  ["/media/hero-before-after.jpg", "Окрашивание и укладка"],
  ["/media/work-blonde.jpg", "Блонд"],
  ["/media/work-braid.jpg", "Плетение"],
  ["/media/style-dark-updo.jpg", "Вечерняя прическа"],
  ["/media/style-tiara.jpg", "Праздничный образ"],
  ["/media/work-kids.jpg", "Детская стрижка"],
  ["/media/work-evening.jpg", "Собранная укладка"],
  ["/media/work-blonde.jpg", "Сложное окрашивание"],
];

const stats = [
  ["7", "салонов"],
  ["70K+", "клиентов"],
  ["6 лет", "в Казани"],
  ["40 мин", "на стрижку"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Главная навигация">
        <a className="brand" href="#top" aria-label="Хочу Так">
          <strong>Хочу Так</strong>
          <small>сеть салонов красоты</small>
        </a>
        <nav className="nav-links" aria-label="Разделы сайта">
          <a href="#services">Услуги</a>
          <a href="#works">Работы</a>
          <a href="#salons">Салоны</a>
          <a href="#booking">Запись</a>
        </nav>
        <div className="header-socials" aria-label="Социальные сети">
          <a href="https://vk.com/hochutak_kzn">ВК</a>
          <a href="https://www.instagram.com/hochutak_kzn">Instagram</a>
          <a href="https://t.me/Salon_Hochu_Tak">Telegram</a>
        </div>
        <a className="topbar-cta" href="#booking">Хочу так</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-main">
          <div className="hero-kicker">
            <span>Казань</span>
            <span>7 салонов</span>
            <span>запись в 2 клика</span>
          </div>
          <h1>Не объясняй. Просто скажи: «Хочу так».</h1>
          <div className="hero-bottom">
            <p>
              Стрижки, окрашивания, уходы и прически в сети салонов, где мастер
              понимает запрос, цена известна заранее, а ближайший филиал уже рядом.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#booking">Записаться</a>
              <a className="ghost-button" href="#works">Смотреть работы</a>
            </div>
          </div>
        </div>

        <div className="hero-media-grid" aria-label="Работы салона">
          <figure className="media-tile media-tall">
            <img src="/media/hero-before-after.jpg" alt="Окрашивание волос" />
            <figcaption>Окрашивание · укладка</figcaption>
          </figure>
          <figure className="media-tile">
            <video autoPlay muted loop playsInline poster="/media/work-blonde.jpg">
              <source src="/media/salon-motion-1.mp4" type="video/mp4" />
            </video>
            <figcaption>Живой формат</figcaption>
          </figure>
          <figure className="media-tile">
            <img src="/media/style-tiara.jpg" alt="Праздничная прическа" />
            <figcaption>События</figcaption>
          </figure>
          <figure className="media-tile media-wide">
            <img src="/media/work-blonde.jpg" alt="Сложное окрашивание" />
            <figcaption>Блонд · тон · блеск</figcaption>
          </figure>
        </div>
      </section>

      <section className="ticker" aria-label="Короткие преимущества">
        <div className="ticker-track">
          <span>Никаких очередей</span>
          <span>Только время для себя</span>
          <span>Цена заранее</span>
          <span>Мужская мойка бесплатно</span>
          <span>Гарантия качества</span>
          <span>Никаких очередей</span>
          <span>Только время для себя</span>
          <span>Цена заранее</span>
          <span>Мужская мойка бесплатно</span>
          <span>Гарантия качества</span>
        </div>
      </section>

      <section className="stats-strip" aria-label="Факты о сети">
        {stats.map(([number, text]) => (
          <div key={text}>
            <strong>{number}</strong>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section className="services-section" id="services">
        <div className="section-heading spread-heading services-heading">
          <p className="eyebrow">Меню услуг</p>
          <div className="spread-words" aria-label="Быстро выбрать. Легко записаться. Прийти рядом.">
            <span>Быстро</span>
            <span>выбрать</span>
            <span>Легко</span>
            <span>записаться</span>
            <span>Прийти</span>
            <span>рядом</span>
          </div>
        </div>
        <div className="services-board">
          {services.map(([title, text], index) => (
            <article className="service-row" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visual-band" aria-label="Видео салона">
        <video autoPlay muted loop playsInline poster="/media/work-braid.jpg">
          <source src="/media/salon-motion-2.mp4" type="video/mp4" />
        </video>
        <div className="visual-band-copy">
          <p>Хочу вот так, получится?</p>
          <span>Покажите фото. Мастер подберет технику, стоимость и время.</span>
        </div>
      </section>

      <section className="works-section" id="works">
        <div className="section-heading spread-heading works-heading">
          <p className="eyebrow">Работы</p>
          <div className="spread-words works-words" aria-label="Результаты, которые хочется сохранить в галерею.">
            <span>Результаты</span>
            <span>которые</span>
            <span>хочется</span>
            <span>сохранить</span>
            <span>в галерею</span>
          </div>
        </div>
        <div className="gallery-grid">
          {gallery.map(([src, title], index) => (
            <figure className={index === 0 ? "gallery-tile large" : "gallery-tile"} key={`${src}-${index}`}>
              <img src={src} alt={title} />
              <figcaption>{title}</figcaption>
            </figure>
          ))}
          <article className="gallery-note">
            <strong>До / после</strong>
            <span>В шаблоне можно повторять фото, позже заменим на обработанные работы.</span>
          </article>
        </div>
      </section>

      <section className="benefit-section">
        <div className="benefit-copy">
          <p className="eyebrow">Почему Хочу Так</p>
          <h2>
            <span>Понятно</span>
            <span>до услуги.</span>
            <span>Красиво</span>
            <span>после.</span>
          </h2>
        </div>
        <div className="benefit-grid">
          <article>
            <strong>Мастер под запрос</strong>
            <p>Подберем специалиста под стрижку, цвет, уход или прическу.</p>
          </article>
          <article>
            <strong>Стоимость без сюрпризов</strong>
            <p>До начала услуги понятно, из чего складывается цена.</p>
          </article>
          <article>
            <strong>Рядом с маршрутом</strong>
            <p>Семь филиалов в разных районах Казани.</p>
          </article>
          <article>
            <strong>Бонусы сети</strong>
            <p>Акции, сертификаты и лояльность для постоянных клиентов.</p>
          </article>
        </div>
      </section>

      <section className="salons-section" id="salons">
        <div className="section-heading spread-heading salons-heading">
          <p className="eyebrow">Адреса</p>
          <div className="spread-words salons-words" aria-label="Выберите ближайший салон.">
            <span>Выберите</span>
            <span>ближайший</span>
            <span>салон</span>
            <span>в Казани</span>
          </div>
        </div>
        <div className="salons-grid">
          {addresses.map((address, index) => (
            <article className="salon-card" key={address}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{address}</h3>
              <p>Казань</p>
              <a href="#booking">Выбрать</a>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-copy">
          <p className="eyebrow">Запись</p>
          <h2>Оставьте контакт. Администратор подберет филиал и свободное время.</h2>
          <div className="booking-note">
            <span>Имя</span>
            <span>Телефон</span>
            <span>Услуга</span>
            <span>Салон</span>
          </div>
        </div>
        <form className="booking-form" aria-label="Форма записи">
          <label>
            Имя
            <input type="text" name="name" placeholder="Например, Алина" />
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
          <button type="button">Хочу так</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-title">
          <strong>Хочу Так</strong>
          <span>Сеть салонов красоты в Казани</span>
        </div>
        <div className="footer-grid">
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
            <a href="#booking">Политика обработки данных</a>
            <a href="#booking">Согласие на обработку персональных данных</a>
            <a href="#booking">Подарочные сертификаты</a>
          </section>
          <section>
            <h2>Контакты</h2>
            <a href="#salons">7 салонов в Казани</a>
            <a href="#booking">Записаться</a>
            <a href="https://t.me/Salon_Hochu_Tak">Telegram администратора</a>
          </section>
        </div>
      </footer>
    </main>
  );
}
