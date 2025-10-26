
import React, { useState } from 'react';
import { TireIcon, MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Shop Tires', href: '#' },
        { name: 'Deals', href: '#' },
        { name: 'Installers', href: '#' },
        { name: 'Support', href: '#' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-brand-gray">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="flex items-center space-x-2">
                        <TireIcon className="w-8 h-8 text-brand-green" />
                        <span className="text-2xl font-bold text-white">Tyre Deals</span>
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-300 hover:text-brand-green transition-colors duration-300">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300">Login</a>
                        <a href="#" className="bg-brand-green text-black font-semibold px-5 py-2 rounded-full hover:bg-brand-green-dark transition-all duration-300 hover:shadow-green-glow">
                            Sign Up
                        </a>
                    </div>
                    
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-brand-charcoal py-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-300 hover:text-brand-green transition-colors duration-300">
                                {link.name}
                            </a>
                        ))}
                         <a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300">Login</a>
                        <a href="#" className="bg-brand-green text-black font-semibold px-5 py-2 rounded-full hover:bg-brand-green-dark transition-all duration-300">
                            Sign Up
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
