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
    src="/images/chairman.jpeg"
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
                        <p className="mt-6 text-[18px] leading-relaxed text-[#333] max-w-4xl text-justify">
                           Knowledge is power and education is a path to imbibe it. Alva’s Education Foundation (AEF) purports to do exactly the same that is, transform education into knowledge. It is knowledge that will empower the youth of today to understand the information explosions taking place in the rapidly globalizing world. Personal integrity and ethics can be maintained only with a strong mind and a mind can become strong only with knowledge.

Alva’s Education Foundation (AEF) aims to develop individuals who will be ready to take up real challenges presented to them. At the same time foundation wants these individuals to be culturally and ethically enlightened because not only the industry but our country needs such individuals today.
                        </p>

                        {/* AUTHOR */}
                        <div className="mt-10">
                            <div className="text-[18px] font-bold text-[#000]">
                                Dr. Mohan Alva
                            </div>
                            <div className="mt-1 text-[16px] text-[#444]">
                                Chairman, Alva’s Institute of Medical Sciences and Research Centre, Moodubidire.
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
