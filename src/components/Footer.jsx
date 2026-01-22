export default function Footer() {
    return (
        <>
            <footer className="w-full bg-[#1e1919] text-white py-12">
                <div className="max-w-7xl mx-auto px-6">

                    {/* FLEX CONTAINER */}
                    <div className="flex flex-col md:flex-row content2 justify-between gap-12">

                        {/* CONTACT US */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

                            <img
                                src="/images/alvas-logo.png"
                                alt="Alvas Logo"
                                className="w-24 mb-4"
                            />

                            <p className="leading-relaxed text-sm mb-4">
                                Alva's Medical Centre<br />
                                Dakshina Kannada, Karnataka.
                            </p>

                            <p className="text-sm">Phone No: 9743700154,</p>
                            <p className="text-sm">Mobile No: 8150079070</p>
                        </div>

                        {/* CAMPUS */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">Campus</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/campus-life/celebrations" className="hover:text-gray-300">Celebrations</a></li>
                                <li><a href="/about/aef/colleges-list" className="hover:text-gray-300">Education</a></li>
                                <li><a href="/footer-links/literature" className="hover:text-gray-300">Literature</a></li>
                                {/* <li><a href="/college/sports" className="hover:text-gray-300">Sports</a></li> */}
                            </ul>
                        </div>

                        {/* COURSES */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">Courses</h3>
                            {/* <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/college/courses/bped" className="hover:text-gray-300">
                                        B.P.Ed - Bachelor Of <br /> Physical Education
                                    </a>
                                </li>
                                <li>
                                    <a href="/college/courses/mped" className="hover:text-gray-300">
                                        M.P.Ed - Master Of <br />Physical Education
                                    </a>
                                </li>
                            </ul> */}
                        </div>

                        {/* ABOUT */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">About</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/college" className="hover:text-gray-300">College</a></li>
                                <li><a href="/activities" className="hover:text-gray-300">Activities</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}