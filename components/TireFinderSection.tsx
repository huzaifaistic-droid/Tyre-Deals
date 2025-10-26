
import React from 'react';
import { ChevronDownIcon } from './Icons';

const TireFinderSection: React.FC = () => {
    return (
        <section className="py-20 bg-brand-charcoal">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Can't Decide? We Can Help.</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                    Use our advanced tool to pinpoint the perfect tires for your vehicle. It feels just like a modern automotive dashboard.
                </p>
                <div className="max-w-4xl mx-auto bg-black p-8 rounded-2xl border-2 border-brand-gray shadow-2xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="relative">
                            <label className="block text-left text-sm font-semibold text-gray-400 mb-2">VEHICLE TYPE</label>
                            <select className="w-full bg-brand-charcoal border-2 border-brand-gray rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all duration-300">
                                <option>Select Type</option>
                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>Truck</option>
                            </select>
                            <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-4 bottom-3.5 pointer-events-none" />
                        </div>
                         <div className="relative">
                            <label className="block text-left text-sm font-semibold text-gray-400 mb-2">DRIVING STYLE</label>
                            <select className="w-full bg-brand-charcoal border-2 border-brand-gray rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all duration-300">
                                <option>Select Style</option>
                                <option>Commuter</option>
                                <option>Performance</option>
                                <option>Off-Road</option>
                            </select>
                            <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-4 bottom-3.5 pointer-events-none" />
                        </div>
                         <div className="relative">
                            <label className="block text-left text-sm font-semibold text-gray-400 mb-2">PRICE RANGE</label>
                            <select className="w-full bg-brand-charcoal border-2 border-brand-gray rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all duration-300">
                                <option>Select Range</option>
                                <option>Economy</option>
                                <option>Mid-Range</option>
                                <option>Premium</option>
                            </select>
                            <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-4 bottom-3.5 pointer-events-none" />
                        </div>
                    </div>
                     <button className="mt-8 bg-brand-green text-black font-bold py-3 px-10 rounded-full text-lg hover:bg-brand-green-dark transition-all duration-300 hover:shadow-green-glow transform hover:scale-105">
                        Find My Tires
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TireFinderSection;
