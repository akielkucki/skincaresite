'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Background = () => {
    return (
        <div
            className="w-full absolute -z-10 h-[calc(100%+100px)]"

            style={{
                background: 'radial-gradient(ellipse 140% 80% at 50% 0%, #fcd34d 0%, #fde68a 15%, #fed7aa 35%, #fecaca 55%, #fef3c7 75%, #FFF7D6 100%)',
            }}
        ></div>
    )
}
const BeforeAfterSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const beforeAfterData = [
        {
            id: 1,
            before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=800&fit=crop",
            after: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=800&fit=crop",
            treatment: "Acne Clear Treatment",
            duration: "3 Months",
            description: "Significant reduction in acne and improved skin texture"
        },
        {
            id: 2,
            before: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=800&fit=crop",
            after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop",
            treatment: "DMK Enzyme Therapy",
            duration: "6 Weeks",
            description: "Enhanced skin radiance and reduced fine lines"
        },
        {
            id: 3,
            before: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=800&fit=crop",
            after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=800&fit=crop",
            treatment: "Custom Signature Facial",
            duration: "2 Months",
            description: "Improved hydration and even skin tone"
        },
        {
            id: 4,
            before: "https://images.unsplash.com/photo-1595909315417-5a239d96a8f9?w=600&h=800&fit=crop",
            after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop",
            treatment: "Buccal Massage Series",
            duration: "8 Weeks",
            description: "Natural face lift effect with improved contours"
        }
    ];

    const currentItem = beforeAfterData[activeIndex];

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev === 0 ? beforeAfterData.length - 1 : prev - 1));
        setSliderPosition(50);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === beforeAfterData.length - 1 ? 0 : prev + 1));
        setSliderPosition(50);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleTouchMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        // Immediately update position on mousedown
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    React.useEffect(() => {
        // Add global mouseup listener to handle mouseup outside the element
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    return (
        <>
            <Background/>

            <section className="py-20 px-8 bg-transparent" id="transformations">

                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            ✨ Real Results
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
                            Transformations That Speak
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            See the remarkable results our clients have achieved with personalized skincare treatments
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Before/After Slider */}
                        <div className="relative">
                            <div
                                className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onTouchMove={handleTouchMove}
                            >
                                {/* After Image */}
                                <img
                                    src={currentItem.after}
                                    alt="After treatment"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Before Image with Clip */}
                                <div
                                    className="absolute inset-0 w-full h-full"
                                    style={{
                                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                                    }}
                                >
                                    <img
                                        src={currentItem.before}
                                        alt="Before treatment"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>

                                {/* Slider Line */}
                                <div
                                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                                    style={{ left: `${sliderPosition}%` }}
                                >
                                    {/* Slider Handle */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                                        <div className="flex gap-1">
                                            <ChevronLeft className="w-4 h-4 text-gray-700" />
                                            <ChevronRight className="w-4 h-4 text-gray-700" />
                                        </div>
                                    </div>
                                </div>

                                {/* Before/After Labels */}
                                <div className="absolute top-6 left-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                                    BEFORE
                                </div>
                                <div className="absolute top-6 right-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                                    AFTER
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-900" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                                aria-label="Next"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-900" />
                            </button>
                        </div>

                        {/* Details */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-4xl font-serif text-gray-900 mb-3">
                                    {currentItem.treatment}
                                </h3>
                                <p className="text-xl text-gray-600 mb-6">
                                    {currentItem.description}
                                </p>

                                <div className="flex items-center gap-6 mb-8">
                                    <div className="bg-amber-50 px-6 py-3 rounded-xl border border-amber-200">
                                        <p className="text-sm text-gray-600 mb-1">Duration</p>
                                        <p className="text-lg font-bold text-gray-900">{currentItem.duration}</p>
                                    </div>
                                    <div className="bg-orange-50 px-6 py-3 rounded-xl border border-orange-200">
                                        <p className="text-sm text-gray-600 mb-1">Treatment</p>
                                        <p className="text-lg font-bold text-gray-900">Professional</p>
                                    </div>
                                </div>
                            </div>

                            {/* Results Highlights */}
                            <div className="space-y-4">
                                <h4 className="font-bold text-gray-900 text-lg">Key Results:</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">✓</span>
                                        <p className="text-gray-700">Visible improvement in skin texture and tone</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">✓</span>
                                        <p className="text-gray-700">Reduction in visible concerns and blemishes</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">✓</span>
                                        <p className="text-gray-700">Enhanced natural radiance and glow</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">✓</span>
                                        <p className="text-gray-700">Long-lasting, sustainable results</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
                                Start Your Transformation
                            </button>

                            {/* Dots Navigation */}
                            <div className="flex gap-2 pt-4">
                                {beforeAfterData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setSliderPosition(50);
                                        }}
                                        className={`h-2 rounded-full transition-all ${
                                            index === activeIndex
                                                ? 'w-8 bg-gradient-to-r from-amber-500 to-orange-500'
                                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`View transformation ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-600 italic">
                            * Individual results may vary. Photos are of actual clients with their consent.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BeforeAfterSection;