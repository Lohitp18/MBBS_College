"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Departments() {
    const pathname = usePathname();

    const deptBtn =
        "w-fit text-left px-3 py-1 rounded-md transition " +
        "hover:bg-white/10 hover:text-[#14D7E7] focus:outline-none focus:ring-2 focus:ring-[#14D7E7]";

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { 
            y: 30, 
            x: -30, 
            opacity: 0 
        },
        visible: { 
            y: 0, 
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const leftSectionVariants = {
        hidden: { 
            y: 50, 
            x: -50, 
            opacity: 0 
        },
        visible: { 
            y: 0, 
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const departmentButtonVariants = {
        hidden: { 
            y: 20, 
            x: -20, 
            opacity: 0 
        },
        visible: (i) => ({ 
            y: 0, 
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: i * 0.05,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section className="w-full bg-gray-100 py-12">
            <div className="w-full bg-white shadow-lg">

                {/* 30% / 70% GRID */}
                <div className="grid w-full grid-cols-[30%_70%]">

                    {/* LEFT 30% */}
                    <motion.div 
                        className="flex items-center justify-center py-14"
                        initial="hidden"
                        animate="visible"
                        variants={leftSectionVariants}
                    >
                        <div className="relative h-[240px] w-[240px] rounded-full bg-gray-200">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-[190px] w-[190px] rounded-full border-[20px] border-gray-300" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-[110px] w-[110px] rounded-full border-[20px] border-gray-400" />
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT 70% (ANIMATED EVERY VISIT) */}
                    <motion.div
                        key={pathname}
                        initial={{ x: 160, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-[#0A0B49] px-14 py-12 text-white"
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                    >
                        {/* TOP LABEL */}
                            <motion.div 
                                className="text-[15px] font-semibold tracking-wide opacity-90"
                                variants={itemVariants}
                            >
                            Departments at Medical College
                            </motion.div>

                        {/* MAIN HEADING */}
                            <motion.h2 
                                className="mt-3 text-[42px] font-extrabold leading-tight"
                                variants={itemVariants}
                            >
                            Providing Quality <br /> Education to All
                            </motion.h2>

                        {/* DEPARTMENTS LIST (BUTTONS) */}
                            <motion.div 
                                className="mt-8 grid grid-cols-3 gap-y-6 text-[16px] font-medium"
                                variants={containerVariants}
                            >
                                <motion.div 
                                    className="flex flex-col gap-3"
                                    variants={containerVariants}
                                >
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={0}
                                    >
                                        Anatomy
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={1}
                                    >
                                        Pathology
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={2}
                                    >
                                        Community Medicine
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={3}
                                    >
                                        General Medicine
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={4}
                                    >
                                        Obstetrics & Gynaecology
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={5}
                                    >
                                        Dermatology
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={6}
                                    >
                                        Psychiatry
                                    </motion.button>
                                </motion.div>

                                <motion.div 
                                    className="flex flex-col gap-3"
                                    variants={containerVariants}
                                >
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={7}
                                    >
                                        Physiology
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={8}
                                    >
                                        Pharmacology
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={9}
                                    >
                                        Forensic Medicine
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={10}
                                    >
                                        General Surgery
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={11}
                                    >
                                        Paediatrics
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={12}
                                    >
                                        Neurology
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={13}
                                    >
                                        Plastic Surgery
                                    </motion.button>
                                </motion.div>

                                <motion.div 
                                    className="flex flex-col gap-3"
                                    variants={containerVariants}
                                >
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={14}
                                    >
                                        Biochemistry
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={15}
                                    >
                                        Microbiology
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={16}
                                    >
                                        Cardiology
                                    </motion.button>
                                    <motion.button 
                                        className={deptBtn}
                                        variants={departmentButtonVariants}
                                        custom={17}
                                    >
                                        Neuro Surgery
                                    </motion.button>
                                </motion.div>

                            </motion.div>

                        {/* BUTTON */}
                            <motion.div 
                                className="mt-10"
                                variants={itemVariants}
                            >
                            <button className="bg-[#14D7E7] px-8 py-3 text-[14px] font-extrabold text-black transition hover:scale-105">
                                VIEW ALL DEPARTMENTS
                            </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
