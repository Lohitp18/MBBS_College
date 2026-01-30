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
import {
  CaretDownIcon,
  Cross1Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-roboto",
});

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ LABEL MAPPING
  const getRouteName = (name) => {
    if (name === "Programs") return "Student Portal";
    if (name === "Campus Life") return "Happenings@AIMSARC";
    return name;
  };

  return (
    <html lang="en">
      <body className={roboto.className}>

        {/* 🔵 BLUE TOP BAR (scrolls away normally) */}
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

        {/* ⚪ STICKY HEADER */}
        <header className="sticky top-0 left-0 w-full z-[100] bg-white shadow-md">
          <div className="w-full py-2 px-4 md:px-10 flex items-center justify-between gap-6">

            {/* LOGO + TITLE */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src="/images/logo-1.png"
                  width={85}
                  height={58}
                  alt="Logo"
                  className="shrink-0"
                />
              </Link>

              <div className="text-[15px] font-semibold leading-snug text-[#0A0B49]">
                <span className="block">
                  ALVA'S INSTITUTE OF MEDICAL SCIENCES
                </span>
                <span className="block">
                  AND RESEARCH CENTRE
                </span>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6 text-[15px] text-gray-700">
              {navRoutes.map((route) => {
                const hasDropdown =
                  route.dropdown?.length > 0 &&
                  route.name !== "Campus Life";

                return (
                  <div
                    key={route.id}
                    className="relative"
                    onMouseEnter={() =>
                      hasDropdown && setActiveMenu(route.id)
                    }
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <Link
                      href={route.path}
                      className="flex items-center gap-1 py-4 hover:text-orange-600"
                    >
                      {getRouteName(route.name)}
                      {hasDropdown && (
                        <CaretDownIcon className="w-3 h-3" />
                      )}
                    </Link>

                    <AnimatePresence>
                      {hasDropdown && activeMenu === route.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={transition}
                          className="absolute top-full bg-white shadow-lg rounded-lg py-4 z-50 min-w-[220px]"
                        >
                          {route.dropdown.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.path}
                              className="block px-6 py-3 hover:bg-gray-50"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </button>
          </div>

          {/* MOBILE NAV */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t p-4 space-y-4 shadow-xl">
              {navRoutes.map((route) => (
                <Link
                  key={route.id}
                  href={route.path}
                  className="block text-gray-700 hover:text-orange-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {getRouteName(route.name)}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* MAIN CONTENT */}
        <main>
          {isHomePage && <HeroCarousel />}
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
