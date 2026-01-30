"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navRoutes } from "@/config/routeConfig";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={roboto.className}>
        
        {/* 🔵 BLUE TOP BAR 
            Stays in normal flow; will scroll out of view. */}
        <div className="w-full flex bg-[#0A0B49] text-white text-xs md:text-sm items-center justify-between px-4 md:px-10 h-[48px]">
          <div className="flex gap-4">
            <span>+91-9945449784</span>
            <span className="hidden sm:inline">08258-236821</span>
          </div>
          <span className="hidden lg:flex items-center gap-2">
            📍 Tenka Mijar, Moodubidire - 574227
          </span>
          <Link href="mailto:office@aimsarc.org" className="hover:underline">
            office@aimsarc.org
          </Link>
        </div>

        {/* ⚪ WHITE NAVBAR 
            Sticky: It will scroll with the page until it hits top-0, then it sticks. */}
        <header className="sticky top-0 left-0 w-full z-[100] bg-white shadow-md">
          <div className="w-full py-2 px-4 md:px-10 flex items-center justify-between gap-6">
            
            {/* LOGO + TITLE */}
            <div className="flex items-center gap-3 md:gap-7">
              <Link href="/">
                <Image
                  src="/images/logo-1.png"
                  width={80}
                  height={54}
                  alt="Alva's Logo"
                  className="shrink-0"
                />
              </Link>
              <h1 className="text-xs md:text-base lg:text-lg font-bold tracking-wide text-[#0A0B49] leading-tight max-w-[400px]">
                ALVA'S INSTITUTE OF MEDICAL SCIENCES AND RESEARCH CENTRE
              </h1>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6 text-sm xl:text-base font-medium text-gray-700">
              {navRoutes.map((route) => (
                <Link
                  key={route.id}
                  href={route.path}
                  className="hover:text-orange-600 transition-colors py-4"
                >
                  {route.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </button>
          </div>

          {/* MOBILE NAV DROPDOWN (Optional implementation) */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t p-4 space-y-4 shadow-xl">
              {navRoutes.map((route) => (
                <Link
                  key={route.id}
                  href={route.path}
                  className="block text-gray-700 hover:text-orange-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* PAGE CONTENT 
            No 'mt-[128px]' needed because sticky elements occupy space in the layout flow. */}
        <main>
          {isHomePage && (
            <section className="relative">
              <HeroCarousel />
            </section>
          )}
          {children}
        </main>

        <Footer />

        <Script id="taos-init">
          {`document.documentElement.classList.add('js')`}
        </Script>

        <Script
          src="https://unpkg.com/taos@latest/dist/taos.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}