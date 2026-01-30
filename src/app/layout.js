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
});

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";

  // ✅ LABEL MAPPING
  const getRouteName = (name) => {
    if (name === "Programs") return "Student Portal";
    if (name === "Campus Life") return "Happenings@AIMSARC";
    return name;
  };

  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="w-full">
          {/* TOP STRIP */}
          <div className="w-full flex">
            <div className="bg-[#e4322f] px-6 py-4" />
            <div className="flex-1 bg-[#0A0B49] text-white text-sm flex items-center justify-between px-10">
              <span>+91-9945449784, 08258-236821</span>
              <span>Tenka Mijar, Moodubidire - 574227</span>
              <Link href="mailto:office@aimsarc.org">
                office@aimsarc.org
              </Link>
            </div>
          </div>

          {/* HEADER */}
          <div className="w-full bg-white px-10 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  src="/images/logo-1.png"
                  width={85}
                  height={58}
                  alt="Logo"
                />
              </Link>

              {/* INSTITUTE NAME */}
              <div className="text-[15px] font-semibold leading-snug">
                <span className="block">
                  ALVA'S INSTITUTE OF MEDICAL SCIENCES
                </span>
                <span className="block">
                  AND RESEARCH CENTRE
                </span>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex gap-6 text-[15px] text-gray-600">
              {navRoutes.map((route) => {
                // ✅ REMOVE DROPDOWN ONLY FOR HAPPENINGS@AIMSARC
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
                      className="flex items-center gap-1 py-8 px-1 hover:text-orange-600"
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

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </button>
          </div>
        </header>

        {isHomePage && <HeroCarousel />}

        <main>{children}</main>

        <Footer />

        <Script src="https://unpkg.com/taos@latest/dist/taos.js" />
      </body>
    </html>
  );
}
