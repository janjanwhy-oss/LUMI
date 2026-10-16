import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WATCH_PRODUCTS } from '../data/watchesData';
import { ArrowUpRight, Check, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WatchCollection({ activeCategory, onSelectCategory, onSelectWatch }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(activeCategory || 'ALL');

  useEffect(() => {
    if (activeCategory) {
      setSelectedCategory(activeCategory);
    }
  }, [activeCategory]);

  const categories = [
    { id: 'ALL', label: 'All Timepieces' },
    { id: 'CHRONOS', label: 'Chronos' },
    { id: 'ATELIER', label: 'Atelier' },
    { id: 'APEX', label: 'Apex' },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'ALL') return WATCH_PRODUCTS;
    return WATCH_PRODUCTS.filter((w) => w.family === selectedCategory);
  }, [selectedCategory]);

  // Initial scroll entrance animation for header and cards
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
          },
        }
      );

      // Filters entrance
      gsap.fromTo(
        filterRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Cards staggered reveal
      const cards = gridRef.current ? gridRef.current.children : [];
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 78%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter change animation (smooth opacity and reflow without jump)
  const handleFilterClick = (catId) => {
    setSelectedCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  return (
    <section id="collections" ref={sectionRef} className="pt-12 pb-12 md:pt-16 md:pb-14 lg:pt-16 lg:pb-16 bg-[#FAFAFB]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EBECEF] shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4A4E57]">
              The Lineup
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            Discover the Collection.
          </h2>

          <p className="text-sm sm:text-base text-[#555B67] leading-relaxed">
            Contemporary timepieces spanning high-precision chronographs, minimalist dress profiles, and technical sports ergonomics.
          </p>
        </div>

        {/* Category Filters */}
        <div ref={filterRef} className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white border border-[#EBECEF] shadow-sm">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleFilterClick(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'text-[#555B67] hover:text-black hover:bg-[#F4F5F7]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          ref={gridRef}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProducts.map((watch) => (
            <div
              key={watch.id}
              className="group bg-white rounded-3xl p-7 border border-[#EEF0F2] hover:border-[#D8DCE3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Header: Family Badge & Action */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#F4F5F7] text-[10px] font-bold tracking-[0.2em] uppercase text-[#4A4E57]">
                    {watch.family}
                  </span>
                  <span className="text-[11px] font-medium text-[#8A8F9B]">
                    {watch.highlight}
                  </span>
                </div>

                {/* Product Image Frame */}
                <div
                  className="relative my-6 aspect-square w-full rounded-2xl bg-[#F8F9FA] flex items-center justify-center p-6 overflow-hidden cursor-pointer group-hover:bg-[#F4F5F7] transition-colors"
                  onClick={() => onSelectWatch && onSelectWatch(watch)}
                >
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Quick-View Floating Trigger */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold shadow-md inline-flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye size={14} /> Quick View
                    </span>
                  </div>
                </div>

                {/* Typography Information */}
                <div className="space-y-1.5 text-left">
                  <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-black">
                    {watch.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#71717A]">
                    {watch.subtitle}
                  </p>
                  <p className="text-xs text-[#555B67] leading-relaxed pt-1.5 line-clamp-2">
                    {watch.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Detail Trigger Button */}
              <div className="pt-6 mt-6 border-t border-[#F2F4F7] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8A8F9B]">
                  LUMI Collection
                </span>
                <button
                  onClick={() => onSelectWatch && onSelectWatch(watch)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-black hover:opacity-70 transition-opacity"
                >
                  View Details
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Collection Global Action */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => handleFilterClick('ALL')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-[#D8DCE3] text-black text-sm font-semibold hover:bg-black hover:text-white hover:border-black active:scale-[0.98] transition-all shadow-sm group"
          >
            <span>View Full Archive (6 Models)</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
