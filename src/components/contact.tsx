'use client'
import React, {useEffect, useState} from 'react';
import { User, Mail, Phone, MessageSquare, Calendar, Send, Sparkles, Clock, Award } from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }, 1500);
    };
    const testimonials = [
        {
            text: "The consultation was so thorough and personalized. I finally found a skincare routine that works for me!",
            author: "Sarah M.",
        },
        {
            text: "My skin has never felt this smooth — the redness faded within a week!",
            author: "Chase D.",
        },
        {
            text: "I used to hide behind makeup, now I leave the house with confidence.",
            author: "Anastasia P.",
        },
        {
            text: "Finally found a routine that actually works and keeps my face clear all day.",
            author: "Mila M.",
        },
        {
            text: "The glow this gave me is unreal — people keep asking what I’m using.",
            author: "Darya O.",
        },
        {
            text: "I’ve tried everything, but this is the first product that made my skin look alive again.",
            author: "Maria C.",
        },
    ];
    useEffect(()=> {
        const intv = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(intv)
    })
    return (
        <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Sparkles className="w-4 h-4" />
                                Free Consultation
                            </div>
                            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4 leading-tight">
                                Start Your Skin Journey Today
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Schedule a complimentary consultation with our expert estheticians and discover your personalized skincare plan.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Quick Response Time</h3>
                                    <p className="text-gray-600 text-sm">We'll contact you within 24 hours to schedule your appointment</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Expert Estheticians</h3>
                                    <p className="text-gray-600 text-sm">15+ years of experience in personalized skincare treatments</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Customized Approach</h3>
                                    <p className="text-gray-600 text-sm">Every treatment plan is tailored to your unique skin needs</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="relative h-48 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {testimonials[currentTestimonial] && (
                                    <motion.div
                                        key={currentTestimonial}
                                        initial={{ opacity: 0, x:-20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200"
                                    >
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="text-amber-400 text-xl">★</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 italic mb-3 text-center">
                                            {testimonials[currentTestimonial].text}
                                        </p>
                                        <p className="text-sm font-medium text-gray-900">{testimonials[currentTestimonial].author} Verified Client</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-yellow-100 to-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>

                        <div className="mb-6">
                            <h3 className="text-3xl font-serif text-gray-900 mb-2">
                                Book Your Consultation
                            </h3>
                            <p className="text-gray-600">
                                Fill out the form below and we'll be in touch soon
                            </p>
                        </div>

                        {isSubmitted && (
                            <div className="bg-green-50 border-2 border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-3">
                                <span className="text-2xl">✓</span>
                                <p className="font-medium">Success! We'll be in touch soon.</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400"/>
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gray-50 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400"/>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gray-50 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400"/>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gray-50 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Interested Service *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400"/>
                                    </div>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gray-50 focus:bg-white transition-all appearance-none cursor-pointer text-gray-900"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="acne-consultation">Acne Consultation</option>
                                        <option value="skin-consultation">Skin Consultation</option>
                                        <option value="first-facial">First Facial Including Consult</option>
                                        <option value="buccal-massage">Buccal Massage</option>
                                        <option value="bespoke-facial">Bespoke Facial</option>
                                        <option value="custom-signature">Custom Signature Facial</option>
                                        <option value="dmk-therapy">DMK Enzyme Therapy</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Tell Us About Your Skin Goals
                                </label>
                                <div className="relative">
                                    <div className="absolute top-4 left-4 pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400"/>
                                    </div>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gray-50 focus:bg-white transition-all resize-none text-gray-900 placeholder-gray-400"
                                        placeholder="Share your skin concerns, goals, or any questions you have..."
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5"/>
                                        Schedule Free Consultation
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                🔒 Your information is secure. We respect your privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;