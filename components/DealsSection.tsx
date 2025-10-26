
import React from 'react';

const deals = [
    { brand: "Michelin", deal: "Up to 30% Off", image: "https://images.pexels.com/photos/14844331/pexels-photo-14844331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { brand: "Goodyear", deal: "Buy 3, Get 1 Free", image: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { brand: "Pirelli", deal: "$50 Mail-In Rebate", image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
];

const DealsSection: React.FC = () => {
    return (
        <section className="py-20 bg-brand-charcoal">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Exclusive Deals & Offers</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal, index) => (
                        <div key={index} className="group bg-brand-gray rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-green-glow">
                            <div className="relative">
                                <img src={deal.image} alt={deal.brand} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300" />
                                <div className="absolute top-4 right-4 bg-brand-green text-black font-bold py-1 px-3 rounded-full text-sm animate-glow">
                                    {deal.deal}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{deal.brand} Tires</h3>
                                <p className="text-gray-400 mb-4">Limited time offer on select models.</p>
                                <button className="w-full bg-transparent border-2 border-brand-green text-brand-green font-semibold py-2 px-4 rounded-full group-hover:bg-brand-green group-hover:text-black transition-all duration-300">
                                    Shop Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DealsSection;