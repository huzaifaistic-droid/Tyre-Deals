import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';
import TopBrands from './components/TopBrands';
import DealsSection from './components/DealsSection';
import WhyChooseUs from './components/WhyChooseUs';
import TireFinderSection from './components/TireFinderSection';
import CustomerReviews from './components/CustomerReviews';
import HowItWorks from './components/HowItWorks';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import OfferBanner from './components/OfferBanner';
import OurGuarantee from './components/OurGuarantee';

const App: React.FC = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TopBrands />
        <OfferBanner />
        <DealsSection />
        <WhyChooseUs />
        <OurGuarantee />
        <TireFinderSection />
        <CustomerReviews />
        <HowItWorks />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default App;