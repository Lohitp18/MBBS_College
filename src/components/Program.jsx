"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    return (
        <section className="w-full bg-[#f7f7f7] py-12">
            <div className="w-full">

                {/* FULL-WIDTH RECTANGLE */}
                <div className="w-full overflow-hidden bg-white shadow-lg">

                    <div className="grid w-full grid-cols-[280px_1fr]">

                        {/* LEFT PANEL */}
                        <div className="bg-amc-navy text-white p-6 relative">
                            <h3 className="text-[15px] font-semibold leading-snug">
                                The Alva&apos;s Medical <br />
                                College (AMC) was <br />
                                established in 2008
                            </h3>

                            {/* STATS */}
                            <div className="absolute left-0 bottom-0 w-full bg-amc-cyan px-7 py-5">
                                <div>
                                    <div className="text-[38px] font-extrabold">38</div>
                                    <div className="text-[14px] font-semibold">
                                        Academic <br /> Programmes
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="text-[38px] font-extrabold">232</div>
                                    <div className="text-[14px] font-semibold">
                                        Faculty Members
                                    </div>
                                </div>

                                <div className="mt-5 flex items-center gap-2">
                                    <button className="flex-1 bg-[#1A2B9B] py-2 text-[12px] font-extrabold">
                                        VIEW ALL COURSES
                                    </button>
                                    <button className="h-[36px] w-[36px] border border-white text-lg">
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="px-10 py-7">

                            {/* ANNOUNCEMENT BAR */}
                            <div className="mb-6 flex items-center gap-4 border-b pb-3">
                                <div className="font-extrabold text-[18px]">
                                    Announcement
                                </div>

                                <div className="relative flex-1 overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={index}
                                            initial={{ x: 120, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -120, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-[#ff4a1a] text-[14px] font-semibold"
                                        >
                                            {announcements[index]}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="flex gap-2">
                                    <button onClick={prev} className="text-xl font-bold">
                                        ‹
                                    </button>
                                    <button onClick={next} className="text-xl font-bold">
                                        ›
                                    </button>
                                </div>
                            </div>

                            {/* TITLE */}
                            <h2 className="text-[32px] font-extrabold leading-none">
                                Study At Medical <br /> College
                            </h2>

                            {/* PROGRAMS */}
                            <div className="mt-6 grid grid-cols-2 gap-12 text-[14px] leading-relaxed">
                                <div>
                                    <div className="text-[16px] font-extrabold mb-2">
                                        Undergraduate <br /> Programmes
                                    </div>
                                    <p>
                                        Our undergraduate programmes provide students
                                        with a strong foundation in medical education
                                        and healthcare careers.
                                    </p>
                                </div>

                                <div>
                                    <div className="text-[16px] font-extrabold mb-2">
                                        Postgraduate <br /> Programmes
                                    </div>
                                    <p>
                                        Our postgraduate programmes develop competent
                                        medical specialists and ethical educators.
                                    </p>
                                </div>
                            </div>

                            {/* DIVIDER */}
                            <div className="mt-12 flex items-center gap-3">
                                <div className="h-[1px] flex-1 bg-[#e5e5e5]" />
                                <div className="h-2 w-2 rounded-full bg-amc-cyan" />
                                <div className="h-[1px] flex-1 bg-[#e5e5e5]" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
