import React from 'react';

const CTASection = () => {
    return (
        <section className="relative py-24 px-8 overflow-hidden">
            {/* Background with gradient */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: 'linear-gradient(135deg, #fbbf24 0%, #fb923c 50%, #f97316 100%)',
                }}
            ></div>

            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center">
                    <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        Ready to Transform<br />Your Skin?
                    </h2>

                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Start your journey to radiant, healthy skin today. Our experts are ready to create your personalized skincare plan.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105 duration-200">
                            Book Your Consultation
                        </button>

                        <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                            Take the Quiz
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/20">
                        <p className="text-white/80 text-sm mb-4">Trusted by thousands of satisfied clients</p>
                        <div className="flex justify-center items-center gap-8 flex-wrap">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">5,000+</div>
                                <div className="text-white/70 text-sm">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">15+</div>
                                <div className="text-white/70 text-sm">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">98%</div>
                                <div className="text-white/70 text-sm">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;