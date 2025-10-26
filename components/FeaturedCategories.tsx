import React from 'react';
import { AllSeasonIcon, PerformanceIcon, TruckIcon, OffroadIcon, WinterIcon } from './Icons';

const categories = [
    { name: "All-Season", icon: <AllSeasonIcon className="w-12 h-12 text-brand-green group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Performance", icon: <PerformanceIcon className="w-12 h-12 text-brand-green group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Truck & SUV", icon: <TruckIcon className="w-12 h-12 text-brand-green group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Off-Road", icon: <OffroadIcon className="w-12 h-12 text-brand-green group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Winter", icon: <WinterIcon className="w-12 h-12 text-brand-green group-hover:scale-110 transition-transform duration-300" /> },
];

const FeaturedCategories: React.FC = () => {
    return (
        <section className="py-20 bg-brand-charcoal">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                        <div key={category.name} className="group bg-brand-gray rounded-xl p-6 text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-brand-green hover:shadow-green-glow">
                            <div className="flex flex-col items-center justify-center">
                                <div className="mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;