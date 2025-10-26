
import React from 'react';

const NewsletterSignup: React.FC = () => {
    return (
        <section className="bg-black">
            <div className="container mx-auto px-4 py-10">
                <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex items-center">
                    <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern Car" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
                    <div className="relative z-10 p-8 md:p-16 md:w-2/3 lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Tyre Deals Club & Get Exclusive Savings!</h2>
                        <p className="text-gray-300 mb-8">Be the first to know about our biggest deals, new arrivals, and expert tire tips.</p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow bg-brand-charcoal border-2 border-brand-gray rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="bg-brand-green text-black font-bold py-3 px-8 rounded-full hover:bg-brand-green-dark transition-all duration-300 hover:shadow-green-glow"
                            >
                                Join & Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;