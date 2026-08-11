import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hochu-tak-kazan.dikiyobraz.chatgpt.site"),
  title: "Хочу Так - сеть салонов красоты в Казани",
  description:
    "Стрижки, окрашивания, уходы и прически в семи салонах красоты Хочу Так в Казани.",
  openGraph: {
    title: "Хочу Так - сеть салонов красоты в Казани",
    description:
      "Стрижки, окрашивания, уходы и прически в семи салонах красоты Хочу Так в Казани.",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/media/style-dark-updo.jpg",
        width: 898,
        height: 1280,
        alt: "Собранная вечерняя прическа, выполненная в салоне Хочу Так",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Хочу Так - сеть салонов красоты в Казани",
    description:
      "Стрижки, окрашивания, уходы и прически в семи салонах красоты Хочу Так в Казани.",
    images: ["/media/style-dark-updo.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
