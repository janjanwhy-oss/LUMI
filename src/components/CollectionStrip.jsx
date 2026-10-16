import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WATCH_FAMILIES } from '../data/watchesData';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CollectionStrip({ activeFamily, onSelectFamily }) {
  const containerRef = useRef(null);
  const labelRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);
  const linkRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set([labelRef.current, lineRef.current, itemsRef.current, linkRef.current], {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        },
        defaults: { ease: 'power3.out' },
      });

      // Left label reveals
      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.65 }
      );

      // Line separator draws out
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.5 },
        '-=0.45'
      );

      // Family buttons glide up with coordinated stagger and scale settle
      tl.fromTo(
        itemsRef.current,
        { opacity: 0, y: 22, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.08,
        },
        '-=0.4'
      );

      // Right jump button slides in
      tl.fromTo(
        linkRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.65 },
        '-=0.5'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleFamilyClick = (familyId) => {
    if (onSelectFamily) {
      onSelectFamily(familyId);
    }
    const collectionSection = document.querySelector('#collections');
    if (collectionSection) {
      const topOffset = collectionSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={containerRef} className="py-5 border-y border-[#EEF0F2] bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Label / Kicker with Animated Line */}
          <div ref={labelRef} className="flex items-center gap-2.5 flex-shrink-0 text-[#8A8F9B]">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Watch Families</span>
            <div ref={lineRef} className="w-8 h-[1.5px] bg-[#D8DCE3] hidden sm:block"></div>
          </div>

          {/* Families Navigation Strip */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-6 overflow-x-auto py-1.5 w-full sm:w-auto scrollbar-none">
            {WATCH_FAMILIES.map((family, idx) => {
              const isActive = activeFamily === family.id;
              return (
                <button
                  key={family.id}
                  ref={(el) => (itemsRef.current[idx] = el)}
                  onClick={() => handleFamilyClick(family.id)}
                  className={`group relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] transition-all duration-300 flex items-center gap-2.5 select-none active:scale-[0.97] ${
                    isActive
                      ? 'bg-black text-white shadow-md'
                      : 'bg-[#F4F5F7] text-[#4A4E57] hover:text-black hover:bg-[#EAEBED]'
                  }`}
                >
                  <span>{family.name}</span>
                  
                  {/* Smooth Active Indicator Pill/Dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                        : 'bg-transparent group-hover:bg-[#8A8F9B]'
                    }`}
                  ></span>
                </button>
              );
            })}
          </div>

          {/* Direct Collection Jump Link */}
          <button
            ref={linkRef}
            onClick={() => handleFamilyClick('ALL')}
            className="flex-shrink-0 hidden md:inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#4A4E57] hover:text-black transition-all group"
          >
            <span>View All Lineup</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

        </div>
      </div>
    </section>
  );
}
