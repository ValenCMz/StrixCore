import type { Metadata } from "next";
import {
  Cactus_Classical_Serif,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const serif = Cactus_Classical_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "StrixCore — Software y automatizaciones",
  description:
    "StrixCore transforma ideas en productos digitales. Software y automatizaciones que hacen que los negocios funcionen mejor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
