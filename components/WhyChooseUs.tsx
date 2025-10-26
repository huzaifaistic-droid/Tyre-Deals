
import React, { useState, useEffect, useRef } from 'react';

const features = [
    { title: "Save More Every Mile", description: "Unbeatable prices and exclusive deals on top-tier brands.", icon: "💰" },
    { title: "Fast, Free Delivery", description: "Get your tires delivered to your home or an installer, on us.", icon: "🚚" },
    { title: "Trusted Installers", description: "A nationwide network of verified professionals ready to help.", icon: "🛠️" },
    { title: "100% Satisfaction Guarantee", description: "Easy returns and dedicated support to ensure you're happy.", icon: "✅" },
];

const WhyChooseUs: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '0px 0px -100px 0px', 
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);


    return (
        <section ref={sectionRef} className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tyre Deals?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className={`p-8 rounded-xl ${index % 2 === 0 ? 'bg-brand-charcoal' : 'bg-brand-gray'} transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
