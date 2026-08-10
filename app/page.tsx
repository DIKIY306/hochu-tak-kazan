const services = [
  {
    title: "Стрижки",
    text: "Женские, мужские и детские стрижки с понятной ценой до начала работы.",
    accent: "До 40 минут",
  },
  {
    title: "Окрашивание",
    text: "Подбор оттенка, сложные техники, восстановление качества волос после процедуры.",
    accent: "Цена заранее",
  },
  {
    title: "Уходы",
    text: "Процедуры для блеска, плотности и мягкости волос после консультации мастера.",
    accent: "Под задачу",
  },
  {
    title: "Укладки и прически",
    text: "Быстрый образ на день, вечер, праздник, выпускной или важную встречу.",
    accent: "Хочу так",
  },
];

const works = [
  {
    src: "/media/hero-before-after.jpg",
    title: "Окрашивание и укладка",
    text: "Мягкий переход оттенка и аккуратная форма без ощущения перегруза.",
  },
  {
    src: "/media/work-blonde.jpg",
    title: "Сложный блонд",
    text: "Чистый тон, визуальная плотность и салонный блеск после окрашивания.",
  },
  {
    src: "/media/work-braid.jpg",
    title: "Прическа на событие",
    text: "Собранный образ с деталями, который держится и выглядит естественно.",
  },
  {
    src: "/media/work-kids.jpg",
    title: "Детская стрижка",
    text: "Быстро, спокойно и без лишнего ожидания для родителей и ребенка.",
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

const proof = [
  ["7", "салонов в разных районах Казани"],
  ["70 тыс.+", "клиентов доверили нам свои волосы"],
  ["6 лет", "работаем как сеть салонов красоты"],
  ["2 клика", "до записи в удобный филиал"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Главная навигация">
        <a className="brand" href="#top" aria-label="Хочу Так">
          <span className="brand-mark">ХТ</span>
          <span>
            <strong>Хочу Так</strong>
            <small>сеть салонов красоты</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Разделы сайта">
          <a href="#services">Услуги</a>
          <a href="#works">Работы</a>
          <a href="#addresses">Адреса</a>
          <a href="#booking">Запись</a>
        </nav>
        <a className="topbar-cta" href="#booking">Записаться</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Казань · 7 салонов рядом с домом и работой</p>
          <h1>Не объясняй. Просто скажи: «Хочу так».</h1>
          <p className="hero-lead">
            Стрижки, окрашивания, уходы и прически в салонах, где цену называют
            заранее, мастера подбирают услугу под запрос, а запись занимает пару
            минут.
          </p>
          <div className="hero-actions" aria-label="Основные действия">
            <a className="primary-button" href="#booking">Выбрать салон</a>
            <a className="secondary-button" href="#works">Смотреть работы</a>
          </div>
          <div className="hero-benefits" aria-label="Преимущества">
            <span>Никаких очередей</span>
            <span>Мужская мойка бесплатно</span>
            <span>Гарантия качества</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Пример работы салона">
          <img
            src="/media/hero-before-after.jpg"
            alt="Окрашивание и укладка в салоне Хочу Так"
          />
          <div className="hero-card">
            <strong>Хочу вот так, получится?</strong>
            <span>Мастер подскажет технику, стоимость и свободное время.</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Факты о сети">
        {proof.map(([number, text]) => (
          <div className="proof-item" key={text}>
            <strong>{number}</strong>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section className="section intro-section">
        <div>
          <p className="eyebrow">Что продаем на первом экране</p>
          <h2>Свежий внешний вид без лишней дороги, ожидания и сюрпризов в чеке.</h2>
        </div>
        <p>
          Сайт должен быстро привести человека к действию: записаться, позвонить
          или написать. Поэтому главный сценарий строится вокруг выбора ближайшего
          салона, понятного списка услуг и доверия к реальным работам.
        </p>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Услуги</p>
          <h2>Все, что чаще всего ищут перед записью.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span>{service.accent}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <p>Никаких очередей. Только время для себя.</p>
        <a href="#booking">Записаться в 2 клика</a>
      </section>

      <section className="section" id="works">
        <div className="section-heading">
          <p className="eyebrow">Работы</p>
          <h2>Реальные фото вместо обещаний.</h2>
        </div>
        <div className="works-grid">
          {works.map((work) => (
            <article className="work-card" key={work.title}>
              <img src={work.src} alt={work.title} />
              <div>
                <h3>{work.title}</h3>
                <p>{work.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Почему выбирают</p>
          <h2>Мастер, который понимает запрос, а не просто делает процедуру.</h2>
          <p>
            Перед окрашиванием мастер уточняет важные нюансы, предупреждает о
            реакции кожи и помогает выбрать безопасный путь к нужному оттенку.
            Перед стрижкой учитываются особенности головы, привычная укладка и
            желаемая скорость ухода дома.
          </p>
        </div>
        <div className="reason-list">
          <div>
            <strong>Цена известна заранее</strong>
            <span>Клиент понимает стоимость до начала услуги.</span>
          </div>
          <div>
            <strong>Подбор мастера под запрос</strong>
            <span>Не случайная запись, а выбор специалиста под задачу.</span>
          </div>
          <div>
            <strong>Система лояльности</strong>
            <span>Бонусы для клиентов сети и актуальные акции.</span>
          </div>
          <div>
            <strong>Гарантия качества</strong>
            <span>Сделаем как хочет клиент или вернем деньги.</span>
          </div>
        </div>
      </section>

      <section className="section" id="addresses">
        <div className="section-heading">
          <p className="eyebrow">Адреса</p>
          <h2>Салон рядом с домом, работой или привычным маршрутом.</h2>
        </div>
        <div className="address-grid">
          {addresses.map((address, index) => (
            <article className="address-card" key={address}>
              <span>Салон {index + 1}</span>
              <h3>{address}</h3>
              <p>Казань</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section review-section">
        <div className="review-copy">
          <p className="eyebrow">Социальное доказательство</p>
          <h2>Отзывы и отличные работы должны закрывать главный страх клиента.</h2>
          <p>
            Люди переживают, что им испортят волосы или сделают не то, что они
            хотели. Поэтому в дизайне отдельный акцент сделан на работах, вопросах
            перед записью, понятной цене и блоке отзывов с карт.
          </p>
        </div>
        <div className="review-stack">
          <article>
            <strong>«Хочу вот так, получится?»</strong>
            <p>Покажите фото, а мастер объяснит, как добиться похожего результата.</p>
          </article>
          <article>
            <strong>«Во сколько есть свободное время?»</strong>
            <p>Выберите филиал, услугу и удобное окно без звонков по всем адресам.</p>
          </article>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div>
          <p className="eyebrow">Запись</p>
          <h2>Выберите салон, оставьте телефон, администратор подскажет время.</h2>
          <p>
            На следующем этапе сюда подключим рабочую форму: имя, телефон, услуга,
            филиал и отправка заявки администраторам.
          </p>
        </div>
        <form className="booking-form" aria-label="Макет формы записи">
          <label>
            Имя
            <input type="text" name="name" placeholder="Например, Алина" />
          </label>
          <label>
            Телефон
            <input type="tel" name="phone" placeholder="+7 ___ ___-__-__" />
          </label>
          <label>
            Что хотите сделать
            <select name="service" defaultValue="">
              <option value="" disabled>Выберите услугу</option>
              <option>Стрижка</option>
              <option>Окрашивание</option>
              <option>Уходовая процедура</option>
              <option>Укладка или прическа</option>
            </select>
          </label>
          <button type="button">Хочу так</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <strong>Хочу Так</strong>
          <span>Сеть салонов красоты в Казани</span>
        </div>
        <div className="footer-links">
          <a href="https://vk.com/hochutak_kzn">ВК</a>
          <a href="https://www.instagram.com/hochutak_kzn">Instagram</a>
          <a href="https://t.me/Salon_Hochu_Tak">Telegram</a>
        </div>
      </footer>
    </main>
  );
}
