"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Departments() {
  const [activeCategory, setActiveCategory] = useState(null);
  const leftRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: leftRef,
    offset: ["start end", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [-180, 160]);

  const departmentData = {
    "Pre-Clinical": ["Anatomy", "Physiology", "Biochemistry"],
    "Para-Clinical": [
      "Pathology",
      "Pharmacology",
      "Microbiology",
      "Forensic Medicine",
      "Community Medicine",
    ],
    "Clinical": [
      "General Medicine",
      "General Surgery",
      "Paediatrics",
      "Obstetrics & Gynaecology",
      "Orthopaedics",
      "Ophthalmology",
      "ENT",
      "Dermatology",
      "Psychiatry",
      "Radiology",
      "Anaesthesiology",
    ],
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="w-full px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">

          {/* LEFT PARALLAX */}
          <motion.div
            ref={leftRef}
            className="relative overflow-hidden min-h-[900px] hidden lg:block"
          >
            <motion.div
              style={{ y: logoY }}
              className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
            >
              <img
                src="/images/logo_black.jpeg"
                alt="Logo"
                className="w-[135%] max-w-[720px]"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>

            {/* HEADING */}
            <div className="mb-16">
              <p className="text-gray-600 font-medium">
                Departments at Medical College
              </p>
              <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
                Providing Quality <br /> Education to all
              </h2>
            </div>

           

            {/* BLUE CONTAINER */}
            <div className="h-[720px] rounded-l-xl bg-[#0A0B49] px-10 py-10">

              {/* MAIN ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">

                {Object.entries(departmentData).map(
                  ([category, departments]) => (
                    <Link
                      key={category}
                      href="/departments"
                      onMouseEnter={() => setActiveCategory(category)}
                      onMouseLeave={() => setActiveCategory(null)}
                      className="
                        bg-white/10 backdrop-blur
                        rounded-xl p-6
                        border border-white/20
                        cursor-pointer
                        block
                        transition-all duration-300
                        hover:bg-white/20
                        hover:scale-105
                      "
                    >
                      {/* MAIN TITLE */}
                      <h3 className="text-2xl font-extrabold mb-4 text-center">
                        {category}
                      </h3>

                      {/* EXPAND */}
                      <AnimatePresence>
                        {activeCategory === category && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2 overflow-hidden"
                          >
                            {departments.map((dept) => (
                              <li
                                key={dept}
                                className="text-base text-gray-200 text-center hover:text-white transition-colors"
                              >
                                {dept}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </Link>
                  )
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
