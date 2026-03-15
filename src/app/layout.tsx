import type { Metadata } from "next";
import { Barlow_Condensed, Manrope, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const arabicFont = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DTZ Exam",
  description: "Landing page for DTZ exam preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var theme=localStorage.getItem('theme');if(theme==='dark'||theme==='light'){document.documentElement.dataset.theme=theme;}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${arabicFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
