'use client'
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {brand} from "@/lib/store";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navPositions, setNavPositions] = useState<NavPositions>({});
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [activeLink, setActiveLink] = useState<string>("#home");


    const navItems = [
        {
            text: "Home",
            link: "#home"
        },
        {
            text: "Our Story",
            link: "#story"
        },
        {
            text: "Services",
            link: "#services"
        },
        {
            text: "Testimonials",
            link: "#testimonials"
        },
        {
            text: "Contact Us",
            link: "#contact"
        }
    ];
    type NavPositions = {
        [key: string]: {
            left: number;
            width: number;
        };
    };
    const handleNavClick = (link: string) => {
        document.querySelector(link)?.scrollIntoView({
            behavior: "smooth"
        });
        setActiveLink(link);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        function scroll() {
            setScrolled(window.pageYOffset > 30);
        }

        function updatePositions() {
            const positions = {};
            document.querySelectorAll('.nav-item').forEach((el: HTMLElement | any) => {
                const link: string | null = el.getAttribute('data-link');
                // @ts-ignore
                positions[link] = {
                    left: el.offsetLeft,
                    width: el.offsetWidth
                };
            });
            setNavPositions(positions);
        }

        window.addEventListener("scroll", scroll);
        window.addEventListener("resize", updatePositions);
        updatePositions();

        return () => {
            window.removeEventListener("scroll", scroll);
            window.removeEventListener("resize", updatePositions);
        };
    }, []);

    const getBarPosition = (link: string | null): number => {
        return navPositions[link as string]?.left || 0;
    };

    const getBarWidth = (link: string | null): number => {
        return navPositions[link as string]?.width || 0;
    };

    return (
        <>
            {/* Desktop & Mobile Navbar */}
            <nav className={`flex fixed top-0 left-0 right-0 items-center justify-between px-6 md:px-8 py-6 transition-all duration-500 
            ${scrolled ? "bg-[#00000088] backdrop-blur-2xl" : "bg-transparent"}
             z-50`} onMouseLeave={() => setHoveredLink(null)}>
                <div className={`text-2xl md:text-3xl font-serif ${scrolled ? "text-[#FFF7D6]" : "text-black"}`}>
                    {brand}
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8 relative">
                    {navItems.map((navItem, index) => (
                        <button
                            key={navItem.link}
                            onClick={() => handleNavClick(navItem.link)}
                            onMouseEnter={() => setHoveredLink(navItem.link)}

                            className={`cursor-pointer transition-colors pb-1 relative nav-item ${
                                scrolled ? "text-[#FFF7D6]" : "text-black"
                            } ${
                                activeLink === navItem.link ? "font-medium" : ""
                            }`}
                            data-link={navItem.link}
                        >
                            {navItem.text}
                        </button>
                    ))}

                    {/* Single Sliding Bar */}
                    <span
                        className="absolute bottom-[0.25em] h-[0.1rem] bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300 ease-out"
                        style={{
                            left: `${getBarPosition(hoveredLink || activeLink)}px`,
                            width: `${getBarWidth(hoveredLink || activeLink)}px`,
                        }}
                    />
                </div>

                <div className="hidden lg:block">
                    <button
                        onClick={() => handleNavClick("#contact")}
                        className="bg-gray-900 text-[#FFF7D6] px-6 py-3 rounded hover:bg-gray-800 transition-all hover:scale-105"
                    >
                        Book A Consultation
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${
                        scrolled ? "text-[#FFF7D6]" : "text-gray-900"
                    }`}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Full-Screen Menu */}
            <div
                className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 ${
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full px-8 space-y-2">
                    {/* Navigation Items with Sequential Animation */}
                    {navItems.map((navItem, index) => (
                        <div key={navItem.link} className="relative">
                            <button
                                onClick={() => handleNavClick(navItem.link)}
                                className={`text-4xl md:text-5xl font-serif text-gray-900 hover:text-amber-600 transition-all duration-300 transform ${
                                    isMenuOpen
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-8 opacity-0"
                                } ${
                                    activeLink === navItem.link ? "text-amber-600" : ""
                                }`}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                                }}
                            >
                                {navItem.text}
                            </button>

                            {/* Mobile Active Indicator */}
                            {activeLink === navItem.link && (
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gray-900 rounded-full" />
                            )}
                        </div>
                    ))}

                    {/* Highlighted CTA Button */}
                    <div
                        className={`pt-8 transform transition-all duration-300 ${
                            isMenuOpen
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                        style={{
                            transitionDelay: isMenuOpen ? `${navItems.length * 100}ms` : "0ms",
                        }}
                    >
                        <button
                            onClick={() => handleNavClick("#contact")}
                            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-5 rounded-lg text-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Book A Consultation
                        </button>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            ✨ Start your skincare journey today
                        </p>
                    </div>

                    {/* Decorative Element */}
                    <div
                        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 transform transition-all duration-700 ${
                            isMenuOpen ? "scale-x-100" : "scale-x-0"
                        }`}
                        style={{
                            transitionDelay: isMenuOpen ? `${(navItems.length + 1) * 100}ms` : "0ms",
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Navbar;