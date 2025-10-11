import React from "react";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-6 bg-transparent">
            <div className="text-3xl font-serif text-gray-900">
                Mogwarts
            </div>

            <div className="flex items-center gap-8">
                <a href="#home" className="text-gray-900 hover:text-gray-700 transition-colors border-b-2 border-gray-900">
                    Home
                </a>
                <a href="#products" className="text-gray-900 hover:text-gray-700 transition-colors">
                    Products
                </a>
                <a href="#quiz" className="text-gray-900 hover:text-gray-700 transition-colors">
                    Quiz
                </a>
                <a href="#testimonials" className="text-gray-900 hover:text-gray-700 transition-colors">
                    Testimonials
                </a>
                <a href="#contact" className="text-gray-900 hover:text-gray-700 transition-colors">
                    Contact
                </a>
            </div>

            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
                Book A Consultation
            </button>
        </nav>
    );
};

export default Navbar;