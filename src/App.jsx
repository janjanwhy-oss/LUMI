import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionStrip from './components/CollectionStrip';
import CompanionExperience from './components/CompanionExperience';
import Details from './components/Details';
import MoreFromLumi from './components/MoreFromLumi';
import WatchCollection from './components/WatchCollection';
import Craftsmanship from './components/Craftsmanship';
import DarkCTA from './components/DarkCTA';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import Toast from './components/Toast';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 4500);
  };

  const scrollToCollections = (familyId = 'ALL') => {
    setActiveCategory(familyId);
    const element = document.querySelector('#collections');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111315] selection:bg-black selection:text-white w-full overflow-x-clip">
      
      {/* 1. Header Navigation - flush with viewport top */}
      <Navbar onExploreClick={() => scrollToCollections('ALL')} />

      <main className="w-full">
        {/* 2. Hero Section */}
        <Hero onExploreClick={() => scrollToCollections('ALL')} />

        {/* 3. Watch Collection Family Strip (CHRONOS, ATELIER, APEX) */}
        <CollectionStrip
          activeFamily={activeCategory}
          onSelectFamily={(family) => scrollToCollections(family)}
        />

        {/* 4. Companion Experience (Layered Smartphone Mockups) */}
        <CompanionExperience />

        {/* 5. Watch Details Section (Exploded Watch Centerpiece) */}
        <Details />

        {/* 6. More From LUMI (Floating Watch Showcase) */}
        <MoreFromLumi onSelectWatch={setSelectedWatch} />

        {/* 7. Watch Collection Gallery (6 Provisional Timepieces) */}
        <WatchCollection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectWatch={setSelectedWatch}
        />

        {/* 6. Craftsmanship Features ("Designed in Every Detail") */}
        <Craftsmanship />

        {/* 7. Dark High-Impact CTA ("Every Moment Matters") */}
        <DarkCTA onExploreClick={() => scrollToCollections('ALL')} />
      </main>

      {/* 8. Refined Minimalist Footer */}
      <Footer
        onCategorySelect={(family) => scrollToCollections(family)}
        onShowToast={showToast}
      />

      {/* Product Detail Modal */}
      {selectedWatch && (
        <ProductModal
          watch={selectedWatch}
          onClose={() => setSelectedWatch(null)}
          onShowToast={showToast}
        />
      )}

      {/* Demonstration Feedback Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

    </div>
  );
}
