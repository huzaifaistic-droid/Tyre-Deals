import React from 'react';

const OfferBanner: React.FC = () => {
    return (
        <section className="bg-brand-green py-6 animate-glow">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-black">FLASH SALE: 25% OFF SELECT TIRES</h2>
                        <p className="text-black/80 font-semibold">THIS WEEKEND ONLY! DON'T MISS OUT.</p>
                    </div>
                    <a href="#" className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105 whitespace-nowrap">
                        Shop The Sale
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OfferBanner;
