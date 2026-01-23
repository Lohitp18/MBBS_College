"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Departments() {
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Pre-Clinical");

    const departmentData = {
        "Pre-Clinical": ["Anatomy", "Physiology", "Biochemistry"],
        "Para-Clinical": [
            "Pathology",
            "Pharmacology",
            "Microbiology",
            "Forensic Medicine",
            "Community Medicine"
        ],
        "Clinical": [
            "General Medicine",
            "Surgery",
            "Pediatrics",
            "Obstetrics & Gynecology",
            "Orthopedics",
            "Ophthalmology",
            "ENT",
            "Dermatology",
            "Psychiatry",
            "Radiology",
            "Anesthesiology",
            "Emergency Medicine"
        ]
    };

    const descriptions = {
        Anatomy: "Structure of the human body",
        Physiology: "Functions of organs and systems",
        Biochemistry: "Chemical processes of life",
        Pathology: "Causes and effects of disease",
        Pharmacology: "Drugs and therapeutic actions",
        Microbiology: "Microorganisms and infections",
        "Forensic Medicine": "Medical science in law",
        "Community Medicine": "Public health & prevention",
        "General Medicine": "Non-surgical patient care",
        Surgery: "Operative treatment of diseases",
        Pediatrics: "Healthcare for children",
        "Obstetrics & Gynecology": "Women’s health care",
        Orthopedics: "Bones & joints care",
        Ophthalmology: "Eye care and vision",
        ENT: "Ear, nose & throat care",
        Dermatology: "Skin and hair treatment",
        Psychiatry: "Mental health care",
        Radiology: "Medical imaging",
        Anesthesiology: "Anesthesia & pain care",
        "Emergency Medicine": "Critical and urgent care"
    };

    return (
        <section className="w-full bg-white py-24">
            <div className="w-full px-6">

                {/* RIGHT-ALIGNED CONTENT */}
                <div className="flex justify-end">

                    <div className="w-full lg:w-[70%]">

                        {/* HEADING */}
                        <div className="mb-16">
                            <p className="text-gray-600 font-medium">
                                Departments at Medical College
                            </p>
                            <h2 className="mt-3 text-4xl font-extrabold text-gray-900 leading-tight">
                                Providing Quality <br /> Education to all
                            </h2>
                        </div>

                        {/* BLUE CONTAINER */}
                        <div
                            className="
                                h-[720px]
                                rounded-l-xl
                                bg-[#0A0B49]
                                px-10 py-10
                                flex flex-col
                            "
                        >

                            {/* DROPDOWN */}
                            <div className="relative mb-6 w-[240px] mx-auto">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="
                                        w-full flex items-center justify-center gap-3
                                        rounded-md bg-white px-8 py-3
                                        text-sm font-extrabold text-black shadow-lg
                                    "
                                >
                                    DEPARTMENTS
                                    <span>{open ? "▲" : "▼"}</span>
                                </button>

                                <AnimatePresence>
                                    {open && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            className="
                                                absolute top-14 w-full
                                                rounded-md overflow-hidden
                                                shadow-xl bg-white z-20
                                            "
                                        >
                                            {Object.keys(departmentData).map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => {
                                                        setSelectedCategory(category);
                                                        setOpen(false);
                                                    }}
                                                    className={`
                                                        w-full py-3
                                                        text-sm font-extrabold text-black
                                                        border-b last:border-b-0
                                                        hover:bg-gray-100 transition
                                                        ${selectedCategory === category ? "bg-gray-200" : ""}
                                                    `}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* CATEGORY TITLE */}
                            <h3 className="mb-8 text-center text-2xl font-bold text-white">
                                {selectedCategory} Departments
                            </h3>

                            {/* CARDS (CENTER FOR SMALL, TOP FOR LARGE) */}
                            <div
                                className={`flex-1 flex justify-center ${
                                    departmentData[selectedCategory].length <= 6
                                        ? "items-center"
                                        : "items-start"
                                }`}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {departmentData[selectedCategory].map((dept) => (
                                        <div
                                            key={dept}
                                            className="
                                                w-[220px]
                                                rounded-lg bg-white p-5 text-center
                                                shadow-md hover:scale-105 transition
                                            "
                                        >
                                            <h4 className="text-base font-bold text-black">
                                                {dept}
                                            </h4>
                                            <p className="mt-1 text-xs text-gray-600 leading-snug">
                                                {descriptions[dept]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
