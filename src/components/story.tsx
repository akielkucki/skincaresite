import React from 'react';

const StorySection = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br  flex items-center justify-center px-8 py-16" id={"story"}>
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
                            Your skin has a story.<br />
                            We help you rewrite it.
                        </h2>

                        <div className="space-y-6">
                            <div className="border-b border-gray-300 pb-6">
                                <p className="text-gray-700 text-lg">
                                    • Struggling with dullness, acne, or early aging?
                                </p>
                            </div>

                            <div className="border-b border-gray-300 pb-6">
                                <p className="text-gray-700 text-lg">
                                    • Tired of generic skincare that doesn't deliver?
                                </p>
                            </div>

                            <div className="border-b border-gray-300 pb-6">
                                <p className="text-gray-700 text-lg">
                                    • Confused by endless skincare choices?
                                </p>
                            </div>

                            <div className="border-b border-gray-300 pb-6">
                                <p className="text-gray-700 text-lg">
                                    • Want results without the irritation?
                                </p>
                            </div>
                        </div>

                        <button className="bg-yellow-300 text-gray-900 px-8 py-4 rounded font-bold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 shadow-md text-sm uppercase tracking-wide">
                            TAKE OUR 30-SECOND SKIN QUIZ
                            <span>→</span>
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-orange-400 via-pink-300 to-purple-300 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=800&fit=crop"
                                    alt="Woman applying skincare"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;