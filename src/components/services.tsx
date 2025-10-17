import React from 'react';
import Image from "next/image";

const servicesData = [
    {
        id: 1,
        title: "ACNE CONSULTATION",
        deposit: "$25.00 deposit required for new clients",
        description: "In your consultation, we will do an in-depth assessment to determine your skin goals. Go over aggravating factors that make you break out. You will receive a customized Face Reality regimen and treatment plan you will need to get clear. Over the next 3-4 month you will have bi-weekly check-ins.",
        price: "$100",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 2,
        title: "SKIN CONSULTATION-NON ACNE CLIENT",
        description: "During your skin analysis we will look at your medical history, understand what you are doing for your skin and also identify your skin type and condition and the goals you are looking to achieve. Please arrive make up free for your appointment.",
        price: "$50",
        duration: "30 min",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 3,
        title: "FIRST FACIAL INCLUDING CONSULT",
        deposit: "$50.00 deposit required for new clients",
        description: "The Consultation Facial is designed for first time clients. We will determine your skin type and conditions. This analysis will help customize the best treatment and regimen for your skin type. It also includes a relaxing face, neck and shoulder massage.",
        price: "$150",
        duration: "80 min",
        image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 4,
        title: "BUCCAL MASSAGE",
        deposit: "$60.00 deposit required",
        description: "Buccal massage is a unique facial technique that works inside the mouth to lift and sculpt facial muscles. It relieves tension, boosts circulation, and enhances natural beauty by reaching deeper layers of tissue, providing a holistic approach to facial rejuvenation.",
        price: "$149",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 5,
        title: "BESPOKE FACIAL",
        deposit: "$50.00 deposit required for new clients",
        description: "A treatment personalized for you. A custom made facial adjusted to your skin's condition. When you can't decide which treatment to book, this is the perfect treatment for you. Based on what your skin needs we use diverse massage techniques, masks and other modalities to get you that healthy glow.",
        price: "$130",
        duration: "50 min",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 6,
        title: "CUSTOM SIGNATURE FACIAL",
        deposit: "$75.00 deposit required for new clients",
        description: "The Signature Facial is designed to revitalize the skin. During this treatment, you will receive a thorough skin analysis to determine the best course of action for your specific needs and concerns. This facial also includes a face, neck, and shoulder massage to aid in blood circulation.",
        price: "$160",
        duration: "80 min",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 7,
        title: "LYMPHATIC DRAINAGE FACIAL MASSAGE",
        deposit: "$60.00 deposit required for new clients",
        description: "A lymphatic drainage massage serves to drain buildup of lymphatic fluid within your face. The gentle, light massage treatment enhances circulation in your face by delivering oxygen around the skin and pushing waste and toxins out of the lymph nodes.",
        price: "$159",
        duration: "80 min",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 8,
        title: "SCULPTURAL FACE LIFTING MASSAGE",
        deposit: "$50.00 deposit required for new clients",
        description: "Sculptural Face Massage is the Ultimate Anti-Aging Facial Massage – It is a face lift without injections or surgery. This dynamic lift procedure is aimed at the deep, underlying support muscles. It includes a powerful energy technique with osteopathic effects to tone and lift the facial muscles.",
        price: "$139",
        duration: "60 min",
        image: "https://i.pinimg.com/736x/c9/2c/14/c92c1448b584feb886eb5fd1570dba91.jpg",
        hasPaymentOptions: true
    },
    {
        id: 9,
        title: "DMK ENZYME THERAPY - LEVEL 1",
        deposit: "$100.00 deposit required for new clients",
        description: "The DMK Enzyme Treatment is designed to increase oxygenation, hydrolyze dead cells, increase cellular activity, encourage new collagen and elastin formation, and detoxify the skin. Resolves conditions like Acne, Aging, Pigmentation, and Scarring.",
        price: "$250",
        duration: "120 min",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 10,
        title: "DMK LEVEL 2- RECOMENDED AFTER L1",
        deposit: "$100.00 deposit required",
        description: "DMK Enzyme Therapy Level 2 targets advanced skin concerns like aging, acne scars, and pigmentation. It boosts oxygen, detoxifies cells, and stimulates collagen for deeper repair. Ideal for firming, smoothing, and rejuvenating the skin for a radiant, youthful glow.",
        price: "$275",
        duration: "120 min",
        image: "https://i.pinimg.com/736x/6e/bc/3d/6ebc3dbaf25139d50b267e98e1d9dad8.jpg",
        hasPaymentOptions: true
    },
    {
        id: 11,
        title: "DMK FIRE AND ICE ENZYME THERAPY",
        deposit: "$100.00 deposit required for new clients",
        description: "The DMK Fire & Ice Enzyme Therapy boosts circulation, detoxifies, and stimulates collagen with heat ('Fire') while calming and tightening pores with cooling ('Ice'). Ideal for acne, pigmentation, and aging, it leaves skin radiant and rejuvenated in one session.",
        price: "$299",
        duration: "120 min",
        image: "https://i.pinimg.com/736x/87/f2/e3/87f2e38f134b536967b97a31d51f0be0.jpg",
        hasPaymentOptions: true
    },
    {
        id: 12,
        title: "DERMAPLANE FACIAL",
        deposit: "$75.00 deposit required for new clients",
        description: "This treatment will bring dull skin back to life with no downtime! Dermaplaning removes both dead skin buildup and vellus hair, allowing deeper penetration of product. Paired with an exfoliating mask, massage, and soothing mask for the ultimate glow.",
        price: "$150",
        duration: "75 min",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 13,
        title: "PROCELL MICROCHANNELING",
        deposit: "$100.00 deposit required for new clients",
        description: "Our 'Microchanneling' service is microneedling... evolved! Microchanneling is collagen stimulation by microchannel delivery of peptides, growth factors & cytokines. It rejuvenates with little to no recovery time, and produces both corrective and anti-aging benefits.",
        price: "$300",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=400&h=500&fit=crop",
        hasPaymentOptions: true,
        badge: "BEFORE"
    },
    {
        id: 14,
        title: "ACNE CLEAR TREATMENT",
        deposit: "$50.00 deposit required for new clients",
        description: "Your bi-monthly acne treatment will be determined on the day of your appointment. Depending on your skin care concerns, your service could consist of a deep cleansing, extractions, high frequency, hydrating treatment or Acne Peel.",
        price: "$120",
        duration: "50 min",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=500&fit=crop",
        hasPaymentOptions: true
    },
    {
        id: 15,
        title: "BROW TINT",
        description: "Brow tint",
        price: "$30",
        duration: "20 min",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop",
        hasPaymentOptions: false
    },
    {
        id: 16,
        title: "LASH TINT",
        description: "Lash tint",
        price: "$40",
        duration: "20 min",
        image: "https://i.pinimg.com/1200x/7d/bf/e7/7dbfe7905c2fa2ee17b0e9a7ef515cfa.jpg",
        hasPaymentOptions: false
    }
];
interface Service {
    id: number;
    title: string;
    deposit?: string;
    description: string;
    price: string;
    duration: string;
    image: string;
    badge?: string;
    hasPaymentOptions?: boolean;
}
const ServiceCard = ({ service }: {service: Service}) => {
    return (
        <div className="bg-[#FFF] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 " id={"services"}>
            <div className="grid h-full">
                {/* Image Section */}
                <div className="relative h-64 md:h-full">
                    {service.badge && (
                        <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded font-bold z-10">
                            {service.badge}
                        </div>
                    )}
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={800}
                        className="w-full h-full md:h-[500] object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
                            {service.title}
                        </h3>

                        {service.deposit && (
                            <p className="text-sm text-gray-600 mb-3">{service.deposit}</p>
                        )}

                        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-600">{service.duration}</span>
                        </div>

                        {service.hasPaymentOptions && (
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded font-bold">Klarna</span>
                                    <span className="bg-black text-white text-xs px-2 py-1 rounded font-bold">affirm</span>
                                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">$ Afterpay</span>
                                </div>
                                <p className="text-xs text-gray-600">
                                    As low as ${Math.round(parseInt(service.price.replace('$', '')) / 12)} / month or interest-free ⓘ
                                </p>
                            </div>
                        )}
                    </div>

                    {/*<button className="w-full bg-stone-600 text-white py-3 rounded hover:bg-stone-700 transition-colors font-medium">*/}
                    {/*    Select*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
};

const ServicesSection = () => {
    return (
        <section className=" py-16 px-8">
            <div className="container mx-auto ">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-serif text-gray-900 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600">Discover personalized treatments designed for your unique skin needs</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-full">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;