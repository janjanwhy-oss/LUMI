import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DarkCTA({ onExploreClick }) {
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const arcRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Panel smooth entrance
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1.0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 82%',
          },
        }
      );

      // Sequenced content entrance
      const elements = contentRef.current ? contentRef.current.children : [];
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panelRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Subtle arc scrub rotation
      gsap.to(arcRef.current, {
        rotation: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: panelRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, panelRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const col = document.querySelector('#collections');
      if (col) col.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Dark Charcoal Rounded Container */}
        <div
          ref={panelRef}
          className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-[#111215] text-white px-8 py-14 sm:px-14 sm:py-20 md:py-22 shadow-2xl border border-[#22242A]"
        >
          
          {/* Subtle Background Radial & Dial Arc Geometry */}
          <div
            ref={arcRef}
            className="absolute -right-24 -top-24 w-[500px] h-[500px] pointer-events-none opacity-15"
          >
            <svg viewBox="0 0 500 500" width="100%" height="100%" fill="none" stroke="#FFFFFF">
              <circle cx="250" cy="250" r="230" strokeWidth="1" strokeDasharray="4,8" />
              <circle cx="250" cy="250" r="170" strokeWidth="1" />
              <circle cx="250" cy="250" r="100" strokeWidth="1" strokeDasharray="2,4" />
              <line x1="20" y1="250" x2="480" y2="250" strokeWidth="0.8" />
              <line x1="250" y1="20" x2="250" y2="480" strokeWidth="0.8" />
            </svg>
          </div>

          <div
            ref={contentRef}
            className="relative z-10 max-w-2xl mx-auto text-center space-y-6"
          >
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D1D5DB]">
                Begin Your Journey
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Every Moment Matters.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
              Discover the LUMI collection and find a timepiece that reflects your perspective.
            </p>

            {/* High-Contrast Pill Button */}
            <div className="pt-4">
              <button
                onClick={handleClick}
                className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white text-black text-sm sm:text-base font-bold tracking-wide hover:bg-[#F2F4F7] active:scale-[0.98] transition-all shadow-lg group"
              >
                <span>Explore Timepieces</span>
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Micro Assurance */}
            <p className="text-xs text-[#6B7280] tracking-wide pt-2">
              LUMI · Contemporary Timepieces
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
