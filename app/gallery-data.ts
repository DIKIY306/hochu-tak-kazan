export const galleryCategories = [
  { slug: "women", title: "Женские стрижки", description: "Форма, длина и текстура с учетом особенностей волос." },
  { slug: "men", title: "Мужские стрижки", description: "Классические и современные формы с аккуратной укладкой." },
  { slug: "kids", title: "Детские стрижки", description: "Комфортные стрижки для детей от трех лет." },
  { slug: "color", title: "Окрашивание", description: "Тон, блонд и сложные техники окрашивания." },
  { slug: "care", title: "Уходовые процедуры", description: "Работы с блеском, плотностью и восстановлением волос." },
  { slug: "curl", title: "Химические завивки", description: "Выраженная текстура и долговременный завиток." },
  { slug: "styling", title: "Укладки", description: "Образы на каждый день, съемку или важное событие." },
  { slug: "hairstyles", title: "Прически", description: "Собранные, праздничные образы и плетения." },
] as const;

export const galleryPhotos = [
  { src: "/media/hero-platinum.webp", alt: "Холодный блонд с плетением" },
  { src: "/media/hero-mens-cut.webp", alt: "Мужская стрижка с плавным переходом" },
  { src: "/media/work-kids.webp", alt: "Текстурная детская стрижка" },
  { src: "/media/service-color.webp", alt: "Яркое окрашивание волос" },
  { src: "/media/service-perm.webp", alt: "Химическая завивка волос" },
  { src: "/media/work-blonde-crop.webp", alt: "Ухоженные светлые волосы" },
  { src: "/media/work-braid-crop.webp", alt: "Укладка с плетением" },
  { src: "/media/work-evening.webp", alt: "Собранная вечерняя прическа" },
  { src: "/media/hero-tiara.webp", alt: "Праздничная прическа с украшением" },
  { src: "/media/hero-curly.webp", alt: "Стрижка с кудрявой текстурой" },
] as const;

export function getGalleryCategory(slug: string) {
  return galleryCategories.find((category) => category.slug === slug);
}
