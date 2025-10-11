'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SlidingBrands = () => {
    const icon = '✱';
    const brandList = ["Visible Results","Sustainable Ingredients","Science-Driven Formulas","Visible Results","Sustainable Ingredients"];

    // Triple the brand list for smoother infinite scroll
    const duplicatedBrands = [...brandList, ...brandList, ...brandList];

    return (
        <div className="w-full overflow-hidden bg-transparent py-8">
            <div className="relative">
                <motion.div
                    className="flex gap-8"
                    initial={{ x: "-33.33%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: 'max-content' }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={`${brand}-${index}`}
                            className="inline-flex items-center justify-center px-8 py-4 text-2xl text-black whitespace-nowrap"
                        >
                            <span>{icon}</span>&nbsp;
                            {brand}
                        </div>
                    ))}
                </motion.div>

                {/* Gradient overlays for fade effect */}
                {/*<div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>*/}
                {/*<div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>*/}
            </div>
        </div>
    );
};

export default SlidingBrands;