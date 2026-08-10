const services = [
  ["Женские стрижки", "форма, консультация, укладка", "от 40 мин"],
  ["Мужские стрижки", "мойка головы бесплатно", "без очередей"],
  ["Детские стрижки", "спокойно и быстро, от 3 лет", "рядом с домом"],
  ["Окрашивание", "тон, блонд, сложные техники", "цена заранее"],
  ["Уходы", "блеск, плотность, восстановление", "под задачу"],
  ["Завивка", "текстура и долговременная форма", "после консультации"],
  ["Укладки", "день, вечер, свидание, съемка", "в день записи"],
  ["Прически", "свадьба, выпускной, праздник", "по референсу"],
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
  ["/media/hero-before-after.jpg", "До / после", "сложное окрашивание"],
  ["/media/work-blonde.jpg", "Блонд", "чистый тон"],
  ["/media/work-braid.jpg", "Плетение", "образ на событие"],
  ["/media/style-dark-updo.jpg", "Вечер", "собранная прическа"],
  ["/media/style-tiara.jpg", "Праздник", "акцентные детали"],
  ["/media/work-kids.jpg", "Дети", "быстро и спокойно"],
  ["/media/work-evening.jpg", "Укладка", "форма держится"],
];

const facts = [
  ["7", "салонов в Казани"],
  ["70K+", "клиентов сети"],
  ["6 лет", "делаем стрижки, цвет и уходы"],
  ["2 клика", "до заявки на запись"],
];

const faqs = [
  ["Как записаться?", "Оставьте контакт в форме. Администратор уточнит услугу, район и предложит ближайшее свободное время."],
  ["Стоимость будет известна заранее?", "Да. Мастер проговаривает итоговую стоимость до начала услуги, чтобы не было сюрпризов в чеке."],
  ["Можно прийти с фото?", "Да. Покажите референс, а мастер объяснит, как аккуратно приблизиться к нему с учетом ваших волос."],
  ["Есть гарантия?", "Если результат объективно не соответствует согласованному запросу, салон помогает исправить ситуацию."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Главная навигация">
        <a className="brand" href="#top" aria-label="Хочу Так">
          <strong>Хочу Так</strong>
          <small>сеть салонов красоты в Казани</small>
        </a>
        <nav className="nav-links" aria-label="Разделы сайта">
          <a href="#services">Услуги</a>
          <a href="#works">Работы</a>
          <a href="#salons">Адреса</a>
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
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>Казань</span>
            <span>7 салонов</span>
            <span>цена заранее</span>
          </div>
          <h1 aria-label="Не объясняй. Просто скажи: Хочу так.">
            <span>Не</span>
            <span>объясняй.</span>
            <span>Просто</span>
            <span>скажи:</span>
            <span>«Хочу</span>
            <span>так».</span>
          </h1>
          <div className="hero-footer">
            <p>
              Стрижки, окрашивания, уходы и прически в сети салонов, где мастер
              понимает запрос, ближайший филиал уже рядом, а запись не превращается
              в долгую переписку.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#booking">Записаться</a>
              <a className="ghost-button" href="#works">Смотреть работы</a>
            </div>
          </div>
        </div>

        <div className="hero-media" aria-label="Работы и атмосфера салона">
          <figure className="media-frame media-main">
            <img src="/media/hero-before-after.jpg" alt="Окрашивание волос до и после" />
            <figcaption>До / после · окрашивание</figcaption>
          </figure>
          <figure className="media-frame">
            <video autoPlay muted loop playsInline poster="/media/work-blonde.jpg">
              <source src="/media/salon-motion-1.mp4" type="video/mp4" />
            </video>
            <figcaption>Живой формат</figcaption>
          </figure>
          <figure className="media-frame">
            <img src="/media/style-tiara.jpg" alt="Праздничная прическа" />
            <figcaption>Праздник</figcaption>
          </figure>
          <article className="hero-note">
            <strong>Покажите фото.</strong>
            <span>Мастер подберет технику, стоимость и время.</span>
          </article>
        </div>
      </section>

      <section className="ticker" aria-label="Короткие преимущества">
        <div className="ticker-track">
          <span>Никаких очередей</span>
          <span>Только время для себя</span>
          <span>Мойка бесплатно</span>
          <span>Гарантия качества</span>
          <span>Цена заранее</span>
          <span>Никаких очередей</span>
          <span>Только время для себя</span>
          <span>Мойка бесплатно</span>
          <span>Гарантия качества</span>
          <span>Цена заранее</span>
        </div>
      </section>

      <section className="facts-strip" aria-label="Факты о сети">
        {facts.map(([number, text]) => (
          <div key={text}>
            <strong>{number}</strong>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section className="spread-section services-intro" id="services">
        <p className="eyebrow">Меню услуг</p>
        <div className="spread-words" aria-label="Быстро выбрать, легко записаться, прийти рядом">
          <span>Быстро</span>
          <span>выбрать</span>
          <span>легко</span>
          <span>записаться</span>
          <span>прийти</span>
          <span>рядом</span>
        </div>
      </section>

      <section className="services-board">
        {services.map(([title, text, accent], index) => (
          <article className="service-card" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <em>{accent}</em>
          </article>
        ))}
      </section>

      <section className="video-band" aria-label="Видео салона">
        <video autoPlay muted loop playsInline poster="/media/work-braid.jpg">
          <source src="/media/salon-motion-2.mp4" type="video/mp4" />
        </video>
        <div className="video-copy">
          <p className="eyebrow">Как это звучит для клиента</p>
          <h2>«Хочу вот так, получится?»</h2>
          <p>
            Да. С фото, примером из Pinterest или идеей на словах. Мастер разложит
            образ на понятные шаги: что можно сделать сейчас, сколько времени займет
            услуга и как сохранить результат дома.
          </p>
        </div>
      </section>

      <section className="spread-section works-intro" id="works">
        <p className="eyebrow">Работы</p>
        <div className="spread-words" aria-label="Результаты, которые хочется сохранить в галерею">
          <span>Результаты</span>
          <span>которые</span>
          <span>хочется</span>
          <span>сохранить</span>
          <span>в галерею</span>
        </div>
      </section>

      <section className="works-grid">
        {works.map(([src, title, text], index) => (
          <figure className={index === 0 ? "work-tile work-large" : "work-tile"} key={`${src}-${title}`}>
            <img src={src} alt={`${title}: ${text}`} />
            <figcaption>
              <strong>{title}</strong>
              <span>{text}</span>
            </figcaption>
          </figure>
        ))}
        <article className="work-note">
          <strong>Без пустых обещаний.</strong>
          <span>Сейчас это дизайн-макет на реальных фото клиента. После утверждения заменим или расширим галерею и подключим рабочую запись.</span>
        </article>
      </section>

      <section className="promise-section">
        <div className="promise-title">
          <p className="eyebrow">Почему выбирают</p>
          <h2>
            <span>Понятно</span>
            <span>до услуги.</span>
            <span>Красиво</span>
            <span>после.</span>
          </h2>
        </div>
        <div className="promise-grid">
          <article>
            <strong>Мастер под запрос</strong>
            <p>Подберем специалиста под стрижку, цвет, уход или прическу.</p>
          </article>
          <article>
            <strong>Цена без сюрпризов</strong>
            <p>Стоимость проговаривается до начала работы, а не после услуги.</p>
          </article>
          <article>
            <strong>Семь точек в городе</strong>
            <p>Можно выбрать салон рядом с домом, работой или маршрутом.</p>
          </article>
          <article>
            <strong>Сервис сети</strong>
            <p>Акции, сертификаты, гарантия качества и единый уровень заботы.</p>
          </article>
        </div>
      </section>

      <section className="spread-section salons-intro" id="salons">
        <p className="eyebrow">Адреса</p>
        <div className="spread-words" aria-label="Выберите ближайший салон в Казани">
          <span>Выберите</span>
          <span>ближайший</span>
          <span>салон</span>
          <span>в Казани</span>
        </div>
      </section>

      <section className="salons-grid">
        {addresses.map((address, index) => (
          <article className="salon-card" key={address}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{address}</h2>
            <p>Казань · подберем свободное окно</p>
            <a href="#booking">Выбрать</a>
          </article>
        ))}
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-copy">
          <p className="eyebrow">Запись</p>
          <h2>Оставьте контакт. Администратор подберет филиал, мастера и свободное время.</h2>
          <div className="booking-tags" aria-label="Поля будущей записи">
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
          <h2>Юридическое</h2>
          <a href="#booking">Политика обработки персональных данных</a>
          <a href="#booking">Согласие на обработку персональных данных</a>
          <a href="#booking">Правила использования подарочных сертификатов</a>
          <a href="#booking">Публичная информация об услугах</a>
        </section>
        <section>
          <h2>Служебная информация</h2>
          <p>Казань, 7 салонов сети. Точные часы работы и свободные окна уточняются при записи.</p>
          <p>Дизайн-макет подготовлен для согласования. Функционал формы подключается следующим этапом.</p>
        </section>
      </footer>
    </main>
  );
}
