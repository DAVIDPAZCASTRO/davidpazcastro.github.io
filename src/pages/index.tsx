import { Geist, Geist_Mono } from "next/font/google";
import Topbar from "../components/Topbar";
import Curriculum from "../components/Curriculum";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <header className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-900 shadow flex items-center justify-center mb-8">
        <Topbar />
      </header>
      <main
        className={`${geistSans.className} ${geistMono.className} flex items-start md:items-center justify-center w-full min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <Curriculum />
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center p-4">
        <Footer />
      </footer>
    </>
  );
}
