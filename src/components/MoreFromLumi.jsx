import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WATCH_PRODUCTS } from '../data/watchesData';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function MoreFromLumi({ onSelectWatch }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  // Selected four featured floating watches
  const featuredIds = ['chronos-steel', 'chronos-noir', 'atelier-silver', 'atelier-classic'];
  const featuredWatches = featuredIds
    .map((id) => WATCH_PRODUCTS.find((w) => w.id === id))
    .filter(Boolean);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
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

      // Staggered reveal for floating watches
      const cards = gridRef.current ? gridRef.current.children : [];
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWatchClick = (watch) => {
    if (onSelectWatch) {
      onSelectWatch(watch);
    }
  };

  return (
    <section
      id="more-from-lumi"
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 bg-white border-t border-[#EEF0F2] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight uppercase font-sans">
            MORE FROM LUMI
          </h2>

          <p className="text-sm sm:text-base text-[#555B67] leading-relaxed max-w-xl mx-auto">
            Explore distinct expressions of contemporary watch design.
          </p>
        </div>

        {/* Four Floating Watches Grid: Desktop 4 Cols | Tablet 2 Cols | Mobile 2 Cols / 1 Col */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-8 xl:gap-10 items-end"
        >
          {featuredWatches.map((watch) => (
            <div
              key={watch.id}
              onClick={() => handleWatchClick(watch)}
              className="group cursor-pointer flex flex-col items-center text-center select-none"
            >
              {/* Floating Watch Asset with Subtle Hover Elevation */}
              <div className="relative w-full aspect-[4/5] sm:aspect-square flex items-center justify-center p-2">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full max-h-[300px] sm:max-h-[340px] md:max-h-[380px] object-contain transition-transform duration-500 ease-out group-hover:-translate-y-2.5 group-hover:scale-[1.03]"
                />
                
                {/* Subtle Grounding Shadow */}
                <div className="absolute -bottom-1 sm:bottom-0 left-1/2 -translate-x-1/2 w-[55%] h-3 bg-black/15 rounded-full blur-md pointer-events-none transition-all duration-500 group-hover:w-[62%] group-hover:opacity-40 group-hover:blur-lg" />
              </div>

              {/* Product Information */}
              <div className="mt-6 space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight group-hover:text-black transition-colors font-sans">
                  {watch.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#71717A]">
                  {watch.highlight}
                </p>

                {/* Subtle Hover Action Indicator */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Details</span>
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
