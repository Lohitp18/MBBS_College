import Image from "next/image";

export default function ChairmanMessage() {
    return (
        /* FULL-WIDTH GREY BACKGROUND */
        <section className="w-full bg-amc-grayStrip py-16">

            {/* 10% LEFT & RIGHT SPACE */}
            <div className="w-full px-[10%]">

                {/* CONTENT GRID */}
                <div className="grid grid-cols-[260px_1fr] gap-20 items-start">

                    {/* IMAGE WITH BORDER */}
                    <div className="relative h-[320px] w-[260px] bg-white p-2 shadow-md">
                        <div className="relative h-full w-full overflow-hidden">
                        <Image
    src="/images/banner-4.jpg"
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
                            Message From The Chairman
                        </h2>

                        {/* PARAGRAPH */}
                        <p className="mt-6 text-[18px] leading-relaxed text-[#333] max-w-4xl">
                            It is with great pleasure and pride that I welcome you
                            to the Ramaiah Medical College website. The ethos of the
                            college is to continuously strive towards excellence.
                            This sentiment has led to the receipt of NAAC A+
                            accreditation and a NIRF ranking of 50<sup>th</sup>.
                        </p>

                        {/* AUTHOR */}
                        <div className="mt-10">
                            <div className="text-[18px] font-bold text-[#000]">
                                Dr. M. Mohan Alva
                            </div>
                            <div className="mt-1 text-[16px] text-[#444]">
                                Chairman, Alva’s Education Foundation
                            </div>
                        </div>

                        {/* DECORATIVE QUOTE */}
                        <div className="absolute right-0 bottom-0 text-[180px] font-bold text-[#e0e0e0] leading-none pointer-events-none">
                            ”
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
