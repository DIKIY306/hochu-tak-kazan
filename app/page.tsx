"use client";

import { useEffect, useState } from "react";
import { businessMailLinks, company } from "./company";

const services = [
  {
    title: "Женская стрижка",
    text: "Консультация, форма и легкая укладка после услуги.",
    meta: "40-60 мин",
    target: "works-women",
  },
  {
    title: "Мужская стрижка",
    text: "Мойка головы бесплатно, аккуратная форма и укладка.",
    meta: "35-50 мин",
    target: "works-men",
  },
  {
    title: "Детская стрижка",
    text: "Спокойно, быстро и без лишнего ожидания.",
    meta: "от 3 лет",
    target: "works-kids",
  },
  {
    title: "Окрашивание",
    text: "Тон, блонд, сложные техники и консультация по уходу.",
    meta: "цена заранее",
    target: "works-color",
  },
  {
    title: "Уходы",
    text: "Блеск, плотность, восстановление и мягкость волос.",
    meta: "под задачу",
    target: "works-care",
  },
  {
    title: "Завивка",
    text: "Долговременная текстура и форма после диагностики.",
    meta: "по консультации",
    target: "works-curl",
  },
  {
    title: "Укладки",
    text: "Образ на день, вечер, свидание, выпускной или съемку.",
    meta: "в день записи",
    target: "works-styling",
  },
  {
    title: "Прически",
    text: "Свадьба, праздник, тиара, плетение или собранный образ.",
    meta: "по референсу",
    target: "works-hairstyles",
  },
];

const addresses = [
  { name: "Белинского, 18", mapUrl: "https://2gis.ru/kazan/search/%D0%A5%D0%BE%D1%87%D1%83%20%D0%A2%D0%B0%D0%BA%20%D0%91%D0%B5%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%2018" },
  { name: "Галимджана Баруди, 8", mapUrl: "https://2gis.ru/kazan/firm/70000001035977133" },
  { name: "Юлиуса Фучика, 105а", mapUrl: "https://2gis.ru/kazan/firm/70000001068093210" },
  { name: "Лиственная, 23а", mapUrl: "https://2gis.ru/kazan/firm/70000001057496248" },
  { name: "Дубравная, 51г", mapUrl: "https://2gis.ru/kazan/firm/70000001036207762" },
  { name: "Рауиса Гареева, 92", mapUrl: "https://2gis.ru/kazan/firm/70000001039284518" },
  { name: "Песчаные Ковали, Октябрьская, 29в", mapUrl: "https://2gis.ru/kazan/firm/70000001075541080" },
];

const workCategories = [
  { id: "works-women", title: "Женские стрижки", text: "Форма и длина под особенности волос.", src: "/media/hero-platinum.webp", alt: "Женская стрижка с холодным блондом и плетением" },
  { id: "works-men", title: "Мужские стрижки", text: "Аккуратная форма, мойка и укладка.", src: "/media/hero-mens-cut.webp", alt: "Мужская стрижка с плавным переходом" },
  { id: "works-kids", title: "Детские стрижки", text: "Для детей от трех лет.", src: "/media/work-kids.webp", alt: "Детская текстурная стрижка" },
  { id: "works-color", title: "Окрашивание", text: "Тон, блонд и сложные техники.", src: "/media/service-color.webp", alt: "Фиолетовое окрашивание волос" },
  { id: "works-care", title: "Уходовые процедуры", text: "Блеск, плотность и восстановление.", src: "/media/work-blonde-crop.webp", alt: "Гладкие ухоженные светлые волосы" },
  { id: "works-curl", title: "Химические завивки", text: "Текстура после консультации мастера.", src: "/media/service-perm.webp", alt: "Химическая завивка волос" },
  { id: "works-styling", title: "Укладки", text: "Образ на день или событие.", src: "/media/work-braid-crop.webp", alt: "Укладка с плетением" },
  { id: "works-hairstyles", title: "Прически", text: "Собранные и праздничные образы.", src: "/media/work-evening.webp", alt: "Собранная вечерняя прическа" },
];

const heroWorks = [
  { src: "/media/hero-smooth.webp", alt: "Гладкие окрашенные волосы", split: true },
  { src: "/media/hero-updo.webp", alt: "Вечерняя собранная прическа" },
  { src: "/media/hero-kids-design.webp", alt: "Детская стрижка с выбритым рисунком" },
  { src: "/media/hero-fade.webp", alt: "Короткая стрижка с плавным фейдом" },
  { src: "/media/hero-tiara.webp", alt: "Праздничная собранная прическа с украшением" },
  { src: "/media/hero-curly.webp", alt: "Мужская стрижка с кудрявой текстурой" },
];

const socialLinks = [
  { label: "Telegram", href: "https://t.me/Salon_Hochu_Tak", mark: "/social-telegram.svg" },
  { label: "ВКонтакте", href: "https://vk.com/hochutak_kzn", mark: "/social-vk.svg" },
  { label: "Instagram", href: "https://www.instagram.com/hochutak_kzn?igsh=a2FjeG5oNjVrcGl2", mark: "/social-instagram.svg" },
  { label: "MAX · +7 986 925-93-96", href: "https://web.max.ru/", mark: "/social-max.svg" },
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
  [
    "Есть ли гарантия на результат?",
    "Да. Если результат не соответствует согласованному запросу, салон исправит работу или вернет деньги.",
  ],
  [
    "Есть ли акции и сертификаты?",
    "Да. В сети действуют меняющиеся акции, программа лояльности и подарочные сертификаты. Актуальные условия уточнит администратор.",
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
        </nav>

        <a className="header-phone" href={company.phoneHref} aria-label={`Позвонить: ${company.phone}`}>
          {company.phone}
        </a>

        <nav className="header-socials" aria-label="Социальные сети">
          {socialLinks.map((social) => (
            <a
              href={social.href}
              aria-label={social.label}
              title={social.label}
              target="_blank"
              rel="noreferrer"
              key={social.label}
            >
              <img src={social.mark} alt="" width="18" height="18" />
            </a>
          ))}
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
            <a className="mobile-phone" href={company.phoneHref}>Позвонить: {company.phone}</a>
            <span className="mobile-socials">
              {socialLinks.map((social) => (
                <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>
                  <img src={social.mark} alt="" width="18" height="18" /> {social.label}
                </a>
              ))}
            </span>
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
              <dt>70K+</dt>
              <dd>клиентов доверили нам волосы</dd>
            </div>
            <div>
              <dt>6 лет</dt>
              <dd>работаем в Казани</dd>
            </div>
            <div className="hero-fact-price">
              <dt>Фиксируем стоимость работы</dt>
              <dd>согласовываем заранее, без доплат</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual hero-collage reference-frame" aria-label="Коллаж работ салонов Хочу Так">
          {heroWorks.map(({ src, alt, split }, index) => (
            <figure className={split ? "split-image" : undefined} key={src}>
              <img
                src={src}
                alt={alt}
                width="960"
                height="960"
                decoding="async"
                fetchPriority={index === 0 ? "high" : undefined}
              />
            </figure>
          ))}
        </div>
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
            <a className="service-row" href={`#${service.target}`} key={service.title}>
              <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="row-meta">{service.meta}</span>
              <span className="row-arrow" aria-hidden="true">→</span>
            </a>
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

        <div className="work-categories">
          {workCategories.map((work, index) => (
            <article
              className="work-category"
              id={work.id}
              data-reveal="image"
              style={{ "--reveal-delay": `${Math.min(index, 2) * 90}ms` } as React.CSSProperties}
              key={work.id}
            >
              <figure className={`work-category-image${work.split ? " split-image" : ""}`}>
                <img
                  src={work.src}
                  alt={work.alt}
                  width="960"
                  height="960"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.text}</p>
                </div>
                <a href="#booking">Записаться <span aria-hidden="true">→</span></a>
              </header>
            </article>
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
            Подберите ближайший салон к вам. Откройте адрес на карте 2ГИС,
            постройте маршрут или переходите к записи.
          </p>
          <a className="button button-secondary" href="#booking">
            Перейти к записи
          </a>
        </header>

        <ol className="salon-list">
          {addresses.map((address, index) => (
            <li key={address.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{address.name}</strong>
              <a href={address.mapUrl} target="_blank" rel="noreferrer" aria-label={`Открыть в 2ГИС: ${address.name}`}>
                На карте <span aria-hidden="true">↗</span>
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
                <option key={address.name}>{address.name}</option>
              ))}
            </select>
          </label>
          <label className="form-consent">
            <input type="checkbox" name="privacy-consent" required />
            <span>
              Соглашаюсь с условиями{" "}
              <a href="/privacy/" target="_blank" rel="noreferrer">
                политики обработки персональных данных
              </a>
            </span>
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
        <div className="footer-intro">
          <a className="footer-brand" href="#top">
            <strong>Хочу Так</strong>
            <span>салоны красоты · Казань</span>
          </a>
          <p className="footer-label">Колл-центр</p>
          <a className="footer-phone" href={company.phoneHref}>
            {company.phone}
          </a>
          <span className="footer-hours">Время работы: {company.workingHours}</span>
        </div>

        <nav className="footer-links" aria-label="Разделы сайта">
          <p className="footer-label">Разделы</p>
          <a href="#salons">Наши салоны</a>
          <a href="#booking">Записаться</a>
          <a href="https://t.me/Salon_Hochu_Tak" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://vk.com/hochutak_kzn" target="_blank" rel="noreferrer">ВКонтакте</a>
        </nav>

        <nav className="footer-links" aria-label="Для партнеров и сотрудников">
          <p className="footer-label">Компания</p>
          {businessMailLinks.map((link) => (
            <a href={link.href} key={link.label}>{link.label}</a>
          ))}
        </nav>

        <div className="footer-company">
          <p className="footer-label">Реквизиты</p>
          <strong>{company.legalName}</strong>
          <span>ИНН {company.inn}</span>
          <span>ОГРНИП {company.ogrnip}</span>
          <span>{company.legalAddress}</span>
          <a href={company.emailHref}>{company.email}</a>
          <a className="footer-policy" href="/privacy/">
            Политика обработки персональных данных
          </a>
        </div>

        <p className="copyright">
          © {company.founded}-2026 «Хочу Так». Правообладатель: {company.legalName}
        </p>
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
