import React from 'react';
import { PriceMatchIcon, ReturnsIcon, SupportIcon } from './Icons';

const guarantees = [
    {
        icon: <PriceMatchIcon className="w-8 h-8 text-brand-green" />,
        title: "Price Match Guarantee",
        description: "Find a lower price? We'll match it. Shop with confidence knowing you're getting the best deal."
    },
    {
        icon: <ReturnsIcon className="w-8 h-8 text-brand-green" />,
        title: "Hassle-Free Returns",
        description: "Not the right fit? Our 30-day return policy makes it easy to get what you need without the stress."
    },
    {
        icon: <SupportIcon className="w-8 h-8 text-brand-green" />,
        title: "Expert Support",
        description: "Our US-based tire experts are here to help you every step of the way, from selection to installation."
    }
];

const OurGuarantee: React.FC = () => {
    return (
        <section className="py-20 bg-brand-charcoal">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-bold mb-4">The Tyre Deals <span className="text-brand-green">Promise</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Your satisfaction is our priority. We stand behind our products and services with a comprehensive guarantee designed to give you peace of mind with every purchase. We're not just selling tires; we're building trust.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {guarantees.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 bg-brand-gray p-4 rounded-full mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGuarantee;
