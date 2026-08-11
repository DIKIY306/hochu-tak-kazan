"use client";

import { useEffect, useState } from "react";

const services = [
  {
    title: "Женская стрижка",
    text: "Консультация, форма и легкая укладка после услуги.",
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
    text: "Свадьба, праздник, тиара, плетение или собранный образ.",
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
  ["/media/color-crop.jpg", "Мягкий блонд", "цвет и укладка"],
  ["/media/work-evening.jpg", "Собранный образ", "вечерняя прическа"],
  ["/media/work-blonde-crop.jpg", "Чистый тон", "окрашивание"],
  ["/media/work-kids.jpg", "Текстура", "детская стрижка"],
  ["/media/style-tiara.jpg", "Праздничный образ", "прическа с тиарой"],
  ["/media/work-braid-crop.jpg", "Плетение", "деталь образа"],
];

const faqs = [
  [
    "Как записаться?",
    "Оставьте контакт, администратор уточнит услугу, район и предложит ближайшее свободное окно.",
  ],
  [
    "Стоимость будет известна заранее?",
    "Да. Стоимость обсуждается до начала услуги, особенно если нужен цвет, уход или сложная техника.",
  ],
  [
    "Можно прийти с фотографией?",
    "Да. Референс помогает быстрее понять желаемый образ и обсудить, как адаптировать его под ваши волосы.",
  ],
  [
    "Как выбрать филиал?",
    "Выберите удобный адрес в списке. Администратор уточнит услугу и предложит подходящее время.",
  ],
];

const processSteps = [
  ["01", "Покажите идею", "Сохраните работу из галереи или принесите свой референс."],
  ["02", "Обсудите детали", "Мастер уточнит форму, технику, время и стоимость до начала."],
  ["03", "Адаптируйте образ", "Референс переведут в решение, подходящее именно вашим волосам."],
];

export default function Home() {
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotion) {
      revealItems.forEach((item) => item.classList.add("reveal-pending"));
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12%", threshold: 0.12 },
      );
      revealItems.forEach((item) => revealObserver.observe(item));

      return () => revealObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const booking = document.querySelector("#booking");
    let bookingVisible = false;

    const updateCta = () => {
      setShowMobileCta(window.scrollY > 520 && !bookingVisible);
    };

    const bookingObserver = new IntersectionObserver(
      ([entry]) => {
        bookingVisible = entry.isIntersecting;
        updateCta();
      },
      { threshold: 0.08 },
    );

    if (booking) bookingObserver.observe(booking);
    window.addEventListener("scroll", updateCta, { passive: true });
    updateCta();

    return () => {
      bookingObserver.disconnect();
      window.removeEventListener("scroll", updateCta);
    };
  }, []);

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Главная навигация">
        <a className="brand" href="#top" aria-label="Хочу Так, на главную">
          <strong>Хочу Так</strong>
          <span>салоны красоты · Казань</span>
        </a>

        <nav className="desktop-nav" aria-label="Разделы сайта">
          <a href="#services">Услуги</a>
          <a href="#works">Работы</a>
          <a href="#salons">Салоны</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="header-cta" href="#booking">
          Записаться
        </a>

        <details className="mobile-nav">
          <summary>Меню</summary>
          <div>
            <a href="#services" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Услуги</a>
            <a href="#works" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Работы</a>
            <a href="#salons" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Салоны</a>
            <a href="#faq" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>FAQ</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Сеть салонов красоты в Казани</p>
          <h1>Салоны красоты «Хочу Так» в Казани.</h1>
          <p className="hero-lead">
            Стрижки, окрашивание, уход и образы на событие. Приходите с
            референсом: мастер обсудит результат и стоимость до начала работы.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#booking">
              Выбрать салон и записаться
            </a>
            <a className="text-link" href="#works">
              Смотреть работы <span aria-hidden="true">→</span>
            </a>
          </div>
          <dl className="hero-facts" aria-label="Кратко о сети">
            <div>
              <dt>7</dt>
              <dd>салонов в Казани</dd>
            </div>
            <div>
              <dt>Референс</dt>
              <dd>помогает обсудить результат</dd>
            </div>
            <div>
              <dt>До начала</dt>
              <dd>обсуждаем стоимость</dd>
            </div>
          </dl>
        </div>

        <figure className="hero-visual reference-frame">
          <img
            src="/media/style-dark-updo.jpg"
            alt="Собранная вечерняя прическа, выполненная в салоне Хочу Так"
            width="898"
            height="1280"
            decoding="async"
            fetchPriority="high"
          />
          <figcaption>
            <span>Референс 01</span>
            <strong>Собранный образ</strong>
          </figcaption>
        </figure>
      </section>

      <section className="service-section" id="services">
        <header className="section-heading section-heading-light" data-reveal="title">
          <p className="section-index">01 · Услуги</p>
          <h2>Выберите, что хочется изменить.</h2>
          <p>
            Стрижка, цвет, уход или образ на событие. Если сомневаетесь,
            администратор подскажет, с чего начать.
          </p>
        </header>

        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.title}>
              <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="row-meta">{service.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="works-section" id="works">
        <header className="section-heading section-heading-dark" data-reveal="title">
          <p className="section-index">02 · Работы</p>
          <h2>Результаты, которые можно показать мастеру.</h2>
          <p>
            Сохраните подходящий образ или принесите свой. На консультации его
            адаптируют под ваши волосы.
          </p>
        </header>

        <div className="works-grid">
          {works.map(([src, title, text], index) => (
            <figure
              className={`work-item ${index === 0 ? "work-item-featured reference-frame" : ""}`}
              data-reveal="image"
              style={{ "--reveal-delay": `${Math.min(index, 2) * 90}ms` } as React.CSSProperties}
              key={`${src}-${title}`}
            >
              <div className="work-image">
                <img src={src} alt={`${title}: ${text}`} loading="lazy" decoding="async" />
              </div>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <small>{text}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <header className="section-heading" data-reveal="title">
          <p className="section-index">03 · Как это работает</p>
          <h2 id="process-title">От идеи к понятному результату.</h2>
        </header>
        <div className="process-list">
          {processSteps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="salons-section" id="salons">
        <header className="section-heading" data-reveal="title">
          <p className="section-index">04 · Адреса</p>
          <h2>Выберите салон в своем районе.</h2>
          <p>
            Семь адресов в Казани. После выбора администратор уточнит услугу и
            предложит свободное время.
          </p>
          <a className="button button-secondary" href="#booking">
            Перейти к записи
          </a>
        </header>

        <ol className="salon-list">
          {addresses.map((address, index) => (
            <li key={address}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{address}</strong>
              <a href="#booking" aria-label={`Выбрать салон: ${address}`}>
                Выбрать <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-copy reference-frame" data-reveal="title">
          <p className="section-index">05 · Запись</p>
          <h2>Расскажите, что хотите изменить.</h2>
          <p>
            Оставьте контакт, выберите услугу и удобный адрес. Администратор
            поможет подобрать время.
          </p>
        </div>

        <form className="booking-form" aria-label="Форма записи">
          <label>
            <span>Имя</span>
            <input type="text" name="name" placeholder="Ваше имя" autoComplete="name" />
          </label>
          <label>
            <span>Телефон</span>
            <input
              type="tel"
              name="phone"
              placeholder="+7 ___ ___-__-__"
              autoComplete="tel"
              inputMode="tel"
            />
          </label>
          <label>
            <span>Услуга</span>
            <select name="service" defaultValue="">
              <option value="" disabled>
                Выберите услугу
              </option>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Салон</span>
            <select name="salon" defaultValue="">
              <option value="" disabled>
                Выберите адрес
              </option>
              {addresses.map((address) => (
                <option key={address}>{address}</option>
              ))}
            </select>
          </label>
          <button className="button button-primary" type="button">
            Отправить заявку
          </button>
        </form>
      </section>

      <section className="faq-section" id="faq">
        <header className="section-heading" data-reveal="title">
          <p className="section-index">06 · FAQ</p>
          <h2>Перед визитом.</h2>
        </header>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top">
          <strong>Хочу Так</strong>
          <span>салоны красоты · Казань</span>
        </a>
        <div>
          <p>7 салонов в Казани</p>
          <a href="#salons">Выбрать адрес</a>
          <a href="#booking">Записаться</a>
        </div>
        <div className="legal-list" aria-label="Документы">
          <span>Политика обработки персональных данных</span>
          <span>Согласие на обработку персональных данных</span>
          <span>Публичная информация об услугах</span>
        </div>
        <p className="copyright">© 2026 «Хочу Так»</p>
      </footer>

      <a
        className={`mobile-sticky-cta ${showMobileCta ? "is-visible" : ""}`}
        href="#booking"
      >
        Выбрать салон и записаться
      </a>
    </main>
  );
}
