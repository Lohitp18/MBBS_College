"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const announcements = [
  "RGUHS - EXAM NOTIFICATION MBBS RS3 ALL YEARS MAR APR 2026",
  "PG Medical Admission Notification 2026",
  "Internship Schedule Updated for Final Year Students",
];

export default function Programs() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % announcements.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? announcements.length - 1 : i - 1));

  /* Auto slide every 5 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-12">
      <div className="flex w-full flex-col lg:flex-row">

        {/* ================= LEFT PANEL ================= */}
        <div className="w-full lg:w-[360px] flex-shrink-0">
          <div className="bg-[#1f4f82] px-6 py-10 text-white">
            <h3 className="text-[22px] font-semibold leading-snug">
              Alva&apos;s Medical College <br />
              Excellence in Medical <br />
              Education & Healthcare
            </h3>

            <p className="mt-4 text-sm opacity-90">
              Delivering quality medical education with modern infrastructure
              and experienced faculty.
            </p>
          </div>

          <div className="bg-[#e5532d] px-6 py-10 text-white">
            <div className="mb-10">
              <div className="text-[64px] font-extrabold">38</div>
              <div>Academic Programmes</div>
            </div>

            <div className="mb-12">
              <div className="text-[64px] font-extrabold">232</div>
              <div>Faculty Members</div>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center gap-4 border border-white px-6 py-3 font-bold hover:bg-white hover:text-[#e5532d] transition"
            >
              VIEW ALL COURSES →
            </Link>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1 px-6 lg:px-20 py-10">

          {/* ================= ANNOUNCEMENT BAR ================= */}
          <div className="mb-12 border-b pb-4">
            <div className="flex items-center justify-between gap-6">

              <div className="flex items-center gap-4 w-full overflow-hidden">
                <span className="font-bold whitespace-nowrap">
                  Announcement
                </span>

                <span className="text-gray-400">|</span>

                <div className="relative h-[24px] w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -40, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute whitespace-nowrap text-red-600 font-semibold"
                    >
                      {announcements[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* ARROWS */}
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="h-[48px] w-[48px] border border-black
                             text-3xl font-bold flex items-center justify-center
                             transition-all duration-200
                             hover:bg-[#1f4f82] hover:text-white
                             active:bg-[#1f4f82] active:text-white"
                >
                  ‹
                </button>

                <button
                  onClick={next}
                  className="h-[48px] w-[48px] border border-black
                             text-3xl font-bold flex items-center justify-center
                             transition-all duration-200
                             hover:bg-[#1f4f82] hover:text-white
                             active:bg-[#1f4f82] active:text-white"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* ================= TITLE ================= */}
          <h2 className="mb-14 text-4xl font-extrabold">
            Study At Medical College
          </h2>

          {/* ================= PROGRAMMES ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            {/* UNDERGRADUATE */}
            <div>
              <h4 className="mb-4 text-xl font-bold">
                Undergraduate Programmes
              </h4>

              <p className="mb-8 text-gray-600">
                Our undergraduate programmes offer students the perfect starting
                point to jumpstart their academic journeys and professional careers.
              </p>

              <div className="group inline-flex">
                <button
                  className="h-[56px] w-[56px] border text-xl font-bold
                             transition-all duration-300 group-hover:w-[170px]
                             group-hover:bg-[#1f4f82]
                             flex items-center justify-center overflow-hidden"
                >
                  <span className="group-hover:hidden">›</span>
                  <span className="hidden group-hover:inline text-white font-bold">
                    READ MORE →
                  </span>
                </button>
              </div>
            </div>

            {/* POSTGRADUATE */}
            <div>
              <h4 className="mb-4 text-xl font-bold">
                Postgraduate Programmes
              </h4>

              <p className="mb-8 text-gray-600">
                Our postgraduate programmes develop competent medical specialists
                and ethical educators.
              </p>

              <div className="group inline-flex">
                <button
                  className="h-[56px] w-[56px] border text-xl font-bold
                             transition-all duration-300 group-hover:w-[170px]
                             group-hover:bg-[#1f4f82]
                             flex items-center justify-center overflow-hidden"
                >
                  <span className="group-hover:hidden">›</span>
                  <span className="hidden group-hover:inline text-white font-bold">
                    READ MORE →
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
