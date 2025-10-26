import React from 'react';
import { SearchIcon, CartIcon, MapPinIcon, RoadIcon } from './Icons';

const steps = [
    { number: 1, title: "Find Tires", description: "Search by vehicle, size, or brand to find your perfect match.", icon: <SearchIcon className="w-12 h-12 text-brand-green" /> },
    { number: 2, title: "Add to Cart", description: "Select your tires and proceed to our secure checkout.", icon: <CartIcon className="w-12 h-12 text-brand-green" /> },
    { number: 3, title: "Choose Installer", description: "Pick a convenient, certified local installer from our network.", icon: <MapPinIcon className="w-12 h-12 text-brand-green" /> },
    { number: 4, title: "Drive Away", description: "Your new tires are installed, and you're back on the road safely.", icon: <RoadIcon className="w-12 h-12 text-brand-green" /> },
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 bg-brand-charcoal">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">Installation Made Easy</h2>
                <div className="relative">
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-brand-gray -translate-y-1/2"></div>
                    <div className="hidden lg:block absolute top-12 left-0 w-3/4 h-0.5 bg-brand-green -translate-y-1/2 rounded-full animate-glow shadow-green-glow"></div>

                    <div className="grid lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step) => (
                           <div key={step.number} className="text-center">
                                <div className="relative inline-block mb-4">
                                    <div className="flex items-center justify-center bg-brand-gray rounded-full w-24 h-24">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-green text-black font-bold text-md border-4 border-brand-charcoal">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;