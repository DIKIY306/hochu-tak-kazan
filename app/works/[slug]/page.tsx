import type { Metadata } from "next";
import { company } from "../../company";
import { galleryCategories, galleryPhotos, getGalleryCategory } from "../../gallery-data";
import { socialLinks } from "../../site-links";

type GalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return galleryCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getGalleryCategory(slug) ?? galleryCategories[0];

  return {
    title: `${category.title} - работы салонов Хочу Так`,
    description: `${category.description} Примеры работ мастеров сети салонов Хочу Так в Казани.`,
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const category = getGalleryCategory(slug) ?? galleryCategories[0];
  const categoryIndex = galleryCategories.findIndex((item) => item.slug === category.slug);

  return (
    <main className="site-shell gallery-page">
      <header className="topbar" aria-label="Главная навигация">
        <a className="brand" href="../../" aria-label="Хочу Так, на главную">
          <strong>Хочу Так</strong>
          <span>салоны красоты · Казань</span>
        </a>

        <nav className="desktop-nav" aria-label="Разделы сайта">
          <a href="../../#services">Услуги</a>
          <a href="../../#works">Работы</a>
          <a href="../../#salons">Салоны</a>
        </nav>

        <a className="header-phone" href={company.phoneHref} aria-label={`Позвонить: ${company.phone}`}>
          {company.phone}
        </a>

        <nav className="header-socials" aria-label="Социальные сети">
          {socialLinks.map((social) => (
            <a href={social.href} aria-label={social.label} title={social.label} target="_blank" rel="noreferrer" key={social.label}>
              <img src={social.mark} alt="" width="18" height="18" />
            </a>
          ))}
        </nav>

        <a className="header-cta" href="../../#booking">Записаться</a>

        <details className="mobile-nav">
          <summary>Меню</summary>
          <div>
            <a href="../../#services">Услуги</a>
            <a href="../../#works">Все работы</a>
            <a href="../../#salons">Салоны</a>
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

      <header className="gallery-intro">
        <p className="section-index">Работы · {String(categoryIndex + 1).padStart(2, "0")}</p>
        <div>
          <p className="eyebrow">Альбом работ</p>
          <h1>{category.title}</h1>
        </div>
        <div className="gallery-intro-copy">
          <p>{category.description}</p>
          <p>Сохраните понравившийся вариант и покажите мастеру на консультации.</p>
          <a className="button button-primary" href="../../#booking">Выбрать салон и записаться</a>
        </div>
      </header>

      <nav className="gallery-tabs" aria-label="Категории работ">
        {galleryCategories.map((item, index) => (
          <a
            href={`../../works/${item.slug}/`}
            aria-current={item.slug === category.slug ? "page" : undefined}
            key={item.slug}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.title}
          </a>
        ))}
      </nav>

      <section className="gallery-grid" aria-label={`Альбом: ${category.title}`}>
        {galleryPhotos.map((photo, index) => (
          <figure className="gallery-item" key={`${category.slug}-${index}`}>
            <img
              src={photo.src}
              alt={`${category.title}: ${photo.alt}`}
              width="960"
              height="1200"
              loading={index < 4 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : undefined}
            />
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{category.title}</strong>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="gallery-cta">
        <p className="section-index">Следующий шаг</p>
        <h2>Покажите мастеру понравившийся результат.</h2>
        <p>На консультации образ адаптируют под ваши волосы и заранее согласуют стоимость.</p>
        <div>
          <a className="button button-primary" href="../../#booking">Выбрать салон</a>
          <a className="text-link" href="../../#works">Вернуться ко всем работам <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <a className="mobile-sticky-cta is-visible" href="../../#booking">Выбрать салон и записаться</a>
    </main>
  );
}
