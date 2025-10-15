import React from 'react';
import {brand} from "@/lib/store";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-3xl font-serif text-white mb-4">{brand}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Science-backed skincare designed for lasting beauty. Transform your skin with personalized treatments.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=100085024305663" target={"_blank"} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/blumskintherapy" target={"_blank"} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Products</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Popular Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Acne Consultation</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Custom Facial</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">DMK Enzyme Therapy</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Buccal Massage</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Microchanneling</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">View All Services</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>755 York Rd #204<br/> Warminster, PA 18974</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <a href="tel:+12154853671" className="hover:text-orange-400 transition-colors">(215) 485-3671</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <a href="mailto:blum@gmail.com" className="hover:text-orange-400 transition-colors">blum@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © 2025 {brand}. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;