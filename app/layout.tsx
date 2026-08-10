import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Хочу Так - сеть салонов красоты в Казани",
  description:
    "Стрижки, окрашивания, уходы и прически в семи салонах красоты Хочу Так в Казани.",
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
