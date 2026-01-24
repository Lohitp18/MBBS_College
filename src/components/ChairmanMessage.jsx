import Image from "next/image";
import Link from "next/link";

export default function ChairmanMessage() {
    return (
        /* FULL-WIDTH GREY BACKGROUND */
        <section className="w-full bg-amc-grayStrip py-16">

            {/* 10% LEFT & RIGHT SPACE */}
            <div className="w-full px-[10%]">

                {/* CONTENT GRID */}
                <div className="grid grid-cols-[260px_1fr] gap-20 items-start">

                    {/* IMAGE WITH BORDER */}
                    <div className="relative h-[420px] w-[320px] bg-white p-2 shadow-md">
                        <div className="relative h-full w-full overflow-hidden">
                        <Image
    src="/images/Dean.jpg"
    alt="Chairman"
    fill
    className="object-cover"
    priority
/>

                        </div>
                    </div>

                    {/* MESSAGE CONTENT */}
                    <div className="relative">

                        {/* TITLE */}
                        <h2 className="text-[36px] font-extrabold text-[#2b1a63]">
                            Message From The Dean
                        </h2>

                        {/* PARAGRAPH */}
                        <p className="mt-6 text-[18px] leading-relaxed text-[#333] max-w-4xl text-justify">
                            It is my distinct pleasure and honour to welcome you to Alva’s Institute of Medical Sciences and Research Centre, Moodubidire.
                            As Dean, I believe that our institution is dedicated  to shaping medical professionals who unite scientific excellence with deep
                            human compassion, guided by the belief that healthcare is a profound responsibility to build a humane, healthy, and equitable society.
                            At Alva’s, education blends rigorous science with empathy, integrity, and a strong sense of service. With devoted faculty, advanced
                            facilities, and active community engagement, we prepare students to meet the challenges of modern medicine through knowledge, values,
                            and ethical practice. Join us in advancing the frontiers of healthcare with compassion, innovation, and excellence, and in shaping a
                            future where quality healthcare is accessible, ethical, and truly patient-centred.
                        </p>

                        {/* AUTHOR */}
                        <div className="mt-10">
                            <div className="text-[18px] font-bold text-[#000]">
                                Dr. Mahabalesh Shetty
                            </div>
                            <div className="mt-1 text-[16px] text-[#444]">
                                Dean, Alva’s Institute of Medical Sciences and Research Centre, Moodubidire.
                            </div>
                        </div>

                        {/* READ MORE BUTTON */}
                        <div className="mt-8">
                            <Link 
                                href="/about"
                                className="inline-block bg-[#14D7E7] hover:bg-[#12c4d3] text-black font-extrabold px-8 py-3 text-[14px] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg rounded"
                            >
                                Read Full Message
                            </Link>
                        </div>

                        {/* DECORATIVE QUOTE */}
                        <div className="absolute right-0 bottom-0 text-[180px] font-bold text-[#e0e0e0] leading-none pointer-events-none">
                            "
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
