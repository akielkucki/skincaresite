"use client"
import React from 'react';
import Navbar from "@/components/navbar";
import {motion} from "motion/react";
import {Marquee} from "@/components/ui/marquee";
import {useStore} from "@/lib/store";


const Hero = () => {
    const [lastFramePosition, setLastFramePosition] = React.useState<number>(-300);
    const {chatOpen, setChatOpen} = useStore();
    return (
        <>
        <section className="relative min-h-screen overflow-hidden" id={"home"}>
            <Navbar />

            <div className="container mx-auto px-8 py-16">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-6xl md:text-7xl font-serif mb-6 text-gray-900 leading-tight">
                        Glow Naturally.<br />
                        Radiate Confidence.
                    </h1>

                    <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                        Your skin deserves more than just care—it deserves transformation.
                        Discover science-backed skincare designed for lasting beauty.
                    </p>

                    <button className="bg-yellow-300 text-gray-900 px-8 py-4 rounded font-medium hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 shadow-lg"
                    onClick={()=>setChatOpen(true)}
                    >
                        GET FREE SKIN ASSESSMENT
                        <span>→</span>
                    </button>
                </div>

                <div className="flex items-center justify-center  perspective-1000">
                    <motion.div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                        initial={{x: 300}}
                                animate={{x: -50}}
                                onAnimationComplete={() => setLastFramePosition(50)}
                                transition={{   ease: "easeInOut"}}
                    >
                        <div className="bg-white p-2 rounded-lg shadow-2xl w-64 h-80">
                            <img
                                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=500&fit=crop"
                                alt="Skincare beauty 1"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>

                    </motion.div>

                    <div className="transform hover:scale-105 transition-transform duration-300 z-10">
                        <div className="bg-white p-2 rounded-lg shadow-2xl w-72 h-96">
                            <img
                                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=450&h=600&fit=crop"
                                alt="Skincare beauty 2"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </div>

                    <motion.div className="transform rotate-6 hover:rotate-0 transition-transform duration-300"
                    initial={{x: -300}}
                                animate={{x: lastFramePosition}}
                                transition={{   ease: "easeInOut"}}


                    >
                        <div className="bg-white p-2 rounded-lg shadow-2xl w-64 h-80">
                            <img
                                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=500&fit=crop"
                                alt="Skincare beauty 3"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <Marquee reverse={true} className={"text-2xl bg-transparent"} gap={7}>

                <div className="flex items-center gap-3 whitespace-nowrap">
                    <span>✱</span>
                    <span>Visible Results</span>
                </div>&nbsp;&nbsp;
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <span>✱</span>
                    <span>Sustainable Ingredients</span>
                </div>&nbsp;&nbsp;
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <span>✱</span>
                    <span>Science-Driven Formulas</span>
                </div>&nbsp;&nbsp;
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <span>✱</span>
                    <span>Visible Results</span>
                </div>&nbsp;&nbsp;
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <span>✱</span>
                    <span>Sustainable Ingredients</span>
                </div>&nbsp;&nbsp;
            </Marquee>
        </section>
        </>
    );
};

export default Hero;