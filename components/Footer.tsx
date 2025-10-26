
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-brand-green transition-colors duration-300">{children}</a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-charcoal text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Tyre Deals</h3>
                        <p className="text-gray-400">Smart. Smooth. Reliable. Affordable.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="#">Home</FooterLink></li>
                            <li><FooterLink href="#">Shop All Tires</FooterLink></li>
                            <li><FooterLink href="#">Deals</FooterLink></li>
                            <li><FooterLink href="#">Find an Installer</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Popular Brands</h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="#">Michelin</FooterLink></li>
                            <li><FooterLink href="#">Goodyear</FooterLink></li>
                            <li><FooterLink href="#">Pirelli</FooterLink></li>
                            <li><FooterLink href="#">Bridgestone</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Customer Support</h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="#">Contact Us</FooterLink></li>
                            <li><FooterLink href="#">FAQs</FooterLink></li>
                            <li><FooterLink href="#">Shipping Policy</FooterLink></li>
                            <li><FooterLink href="#">Return Policy</FooterLink></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                           {/* Placeholder for social icons */}
                           <a href="#" className="text-gray-400 hover:text-brand-green">FB</a>
                           <a href="#" className="text-gray-400 hover:text-brand-green">TW</a>
                           <a href="#" className="text-gray-400 hover:text-brand-green">IG</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-6">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Tyre Deals. All Rights Reserved.</p>
                    {/* Placeholder for payment icons */}
                    <p className="mt-2">VISA | MASTERCARD | AMEX | PAYPAL</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
