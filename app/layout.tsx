import type { Metadata } from "next";
import { Google_Sans, Google_Sans_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const googleMono = Google_Sans_Code({
  variable: "--font-google-mono",
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Jackson Schacher",
  description: "Profile Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${googleMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex flex-1 w-full min-h-fill max-w-3xl flex-col items-center justify-between py-4 px-4 bg-white dark:bg-black sm:items-start">
          {children}
        </main>
      </body>
    </html>
  );
}
