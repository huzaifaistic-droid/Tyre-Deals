import React from 'react';
import { 
    MichelinLogo, 
    GoodyearLogo, 
    BridgestoneLogo, 
    PirelliLogo, 
    ContinentalLogo, 
    HankookLogo, 
    YokohamaLogo, 
    BFGoodrichLogo 
} from './BrandLogos';

const brands = [
    { name: "Michelin", component: <MichelinLogo className="h-8 md:h-10 w-auto" /> },
    { name: "Goodyear", component: <GoodyearLogo className="h-8 md:h-10 w-auto" /> },
    { name: "Bridgestone", component: <BridgestoneLogo className="h-8 md:h-10 w-auto" /> },
    { name: "Pirelli", component: <PirelliLogo className="h-8 md:h-10 w-auto" /> },
    { name: "Continental", component: <ContinentalLogo className="h-8 md:h-10 w-auto" /> },
    { name: "Hankook", component: <HankookLogo className="h-8 md:h-10 w-auto" /> },
    { name: "Yokohama", component: <YokohamaLogo className="h-8 md:h-10 w-auto" /> },
    { name: "BFGoodrich", component: <BFGoodrichLogo className="h-8 md:h-10 w-auto" /> }
];

const TopBrands: React.FC = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Top Brands We Carry</h2>
                <div className="relative">
                     <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-8">
                        {brands.map((brand) => (
                            <div key={brand.name} className="flex-shrink-0 text-gray-600 filter grayscale hover:grayscale-0 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110">
                                {brand.component}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12">
                     <a href="#" className="text-brand-green font-semibold text-lg relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-brand-green after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                        See All Brands
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TopBrands;