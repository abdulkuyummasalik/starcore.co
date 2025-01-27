import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    // Fungsi untuk toggle menu
    const handleClick = () => setIsOpen(!isOpen);

    // Fungsi untuk menutup menu
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => setIsScroll(window.scrollY > 5);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuActive = isOpen ? "left-0" : "-left-full";
    const scrollActive = isScroll ? "bg-white shadow-lg py-2" : "py-2";

    return (
        <div className={`navbar fixed w-full transition-all z-50 ${scrollActive}`}>
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <h1 className="text-tahiti text-3xl sm:text-3xl font-bold">
                            starcore.<span className="text-white bg-bermuda rounded-full px-0.5">co</span>
                        </h1>
                    </div>

                    <ul
                        className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 flex-col -translate-y-1/2 px-8 py-2 rounded shadow-lg shadow-slate-300 bg-bermuda font-bold text-white transition-all`}
                    >
                        {["SERVICE", "PRODUCT", "ABOUT", "CONTACT US"].map((item, index) => (
                            <li key={index} className="relative flex items-center gap-2 group">
                                <i
                                    className={`ri-${index === 0
                                        ? "home-2-line"
                                        : index === 1
                                            ? "information-line"
                                            : index === 2
                                                ? "settings-3-line"
                                                : "image-line"
                                        } text-3xl md:hidden block`}
                                ></i>
                                <a
                                    href="#"
                                    className="font-medium opacity-75 hover:opacity-100 transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-bermuda after:transition-all after:duration-300 group-hover:after:w-full"
                                    onClick={closeMenu}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="sosial flex items-center gap-2">
                        <a
                            href="#"
                            className="bg-bermuda px-5 py-2 rounded-full text-white font-bold text-sm md:text-base hover:bg-tahiti hover:scale-105 transition-all"
                        >
                            Sosial Media
                        </a>
                        <i
                            className="ri-menu-3-line text-3xl md:hidden block cursor-pointer"
                            onClick={handleClick}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
