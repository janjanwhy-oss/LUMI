import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CRAFTSMANSHIP_FEATURES } from '../data/craftsmanshipData';
import { Compass, Sparkles, Cpu, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Craftsmanship() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const iconMap = {
    Compass: <Compass size={22} className="text-black" />,
    Sparkles: <Sparkles size={22} className="text-black" />,
    Cpu: <Cpu size={22} className="text-black" />,
    ShieldCheck: <ShieldCheck size={22} className="text-black" />,
  };

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
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
          },
        }
      );

      // Feature cards sequential entrance (15-25px upward movement, 0.6-0.8s duration)
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="craftsmanship" ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="max-w-2xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F5F7] border border-[#EBECEF]">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4A4E57]">
              Atelier Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-[1.08]">
            Designed in Every Detail.
          </h2>

          <p className="text-base text-[#555B67] leading-relaxed max-w-[580px]">
            Every element of a LUMI timepiece is shaped by intentional discipline—from surgical-grade metallurgy to balanced dial geometry.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFTSMANSHIP_FEATURES.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group bg-[#F8F9FA] rounded-3xl p-8 border border-[#EEF0F2] hover:border-[#D1D5DB] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Minimal Line Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#EBECEF] flex items-center justify-center shadow-sm group-hover:bg-black group-hover:border-black transition-colors duration-300">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(iconMap[item.icon], {
                      className: 'transition-colors duration-300 group-hover:text-white'
                    })}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <div className="mt-8 space-y-2">
                  <h3 className="text-lg font-bold text-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8A8F9B] uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                </div>

                {/* Editorial Copy */}
                <p className="mt-4 text-xs sm:text-sm text-[#555B67] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Index Marker */}
              <div className="mt-8 pt-4 border-t border-[#EAEBED] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#8A8F9B] tracking-widest uppercase">
                  0{idx + 1} // CRITERION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D1D5DB] group-hover:bg-black transition-colors"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
