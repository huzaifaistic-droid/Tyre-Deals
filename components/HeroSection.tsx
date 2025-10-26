
import React, { useState } from 'react';
import { CarIcon, TireIcon, TagIcon, ChevronDownIcon } from './Icons';

type SearchTab = 'Vehicle' | 'Tire Size' | 'Brand';

const SearchInput: React.FC<{ label: string }> = ({ label }) => (
    <div className="relative flex-1">
        <select className="w-full bg-brand-charcoal border-2 border-brand-gray rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all duration-300">
            <option>{label}</option>
            <option>Option 1</option>
            <option>Option 2</option>
        </select>
        <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
);

const VehicleSearch: React.FC = () => (
    <div className="flex flex-col md:flex-row gap-2">
        <SearchInput label="Year" />
        <SearchInput label="Make" />
        <SearchInput label="Model" />
        <SearchInput label="Trim" />
    </div>
);

const TireSizeSearch: React.FC = () => (
     <div className="flex flex-col md:flex-row gap-2">
        <SearchInput label="Width" />
        <SearchInput label="Ratio" />
        <SearchInput label="Diameter" />
    </div>
);

const BrandSearch: React.FC = () => (
    <div className="flex flex-col md:flex-row gap-2">
         <SearchInput label="Brand" />
    </div>
);


const HeroSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<SearchTab>('Vehicle');
    
    const tabs: { name: SearchTab; icon: React.ReactNode }[] = [
        { name: 'Vehicle', icon: <CarIcon className="w-5 h-5 mr-2" /> },
        { name: 'Tire Size', icon: <TireIcon className="w-5 h-5 mr-2" /> },
        { name: 'Brand', icon: <TagIcon className="w-5 h-5 mr-2" /> },
    ];

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 bg-black">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{backgroundImage: "url('https://images.pexels.com/photos/3862622/pexels-photo-3862622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black"></div>
            
            <div className="relative z-10 text-center max-w-4xl w-full">
                <div className="mb-8 inline-block">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-full py-2 px-6 flex items-center space-x-3 animate-glow">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
                        </span>
                        <p className="text-sm font-semibold text-white">
                            Limited Time: <span className="font-bold text-brand-green">Free Installation</span> on all orders!
                        </p>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                    Find the Right Tires. <span className="text-brand-green">Save Big.</span> Drive Safe.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Compare top brands and exclusive deals — all in one place.
                </p>

                <div className="bg-black/50 backdrop-blur-md border border-brand-gray p-4 rounded-xl">
                    <div className="flex border-b border-brand-gray mb-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center justify-center py-3 px-6 text-sm md:text-base font-semibold w-1/3 transition-all duration-300 ${
                                    activeTab === tab.name
                                        ? 'text-brand-green border-b-2 border-brand-green'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {tab.icon} {tab.name}
                            </button>
                        ))}
                    </div>
                    
                    <div className="p-4">
                        {activeTab === 'Vehicle' && <VehicleSearch />}
                        {activeTab === 'Tire Size' && <TireSizeSearch />}
                        {activeTab === 'Brand' && <BrandSearch />}
                    </div>

                    <button className="w-full md:w-auto mt-4 bg-brand-green text-black font-bold py-4 px-12 rounded-full text-lg hover:bg-brand-green-dark transition-all duration-300 hover:shadow-green-glow-lg transform hover:scale-105">
                        Shop Tires Now
                    </button>
                </div>
                
                <div className="flex items-center justify-center space-x-4 md:space-x-8 mt-8 text-gray-400">
                    <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Free Shipping</span>
                    <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5V4H4zm0 12h5v-5H4v5zm8-12h5V4h-5v5zm0 12h5v-5h-5v5z" /></svg> Easy Returns</span>
                    <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Verified Installers</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;