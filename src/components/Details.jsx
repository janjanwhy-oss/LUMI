import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LEFT_DETAILS = [
  {
    id: 'sapphire-crystal',
    title: 'SAPPHIRE CRYSTAL',
    description: 'A clear, refined protective layer that preserves the beauty of the dial beneath.',
  },
  {
    id: 'dial',
    title: 'DIAL',
    description: 'A deep anthracite sunburst finish accented by warm metallic hour markers.',
  },
  {
    id: 'case-caseback',
    title: 'CASE & CASEBACK',
    description: 'Polished steel forms a balanced, contemporary profile with carefully considered proportions.',
  },
];

const RIGHT_DETAILS = [
  {
    id: 'indexes-hands',
    title: 'INDEXES & HANDS',
    description: 'Slim metallic hands and precisely arranged markers create effortless visual clarity.',
  },
  {
    id: 'movement',
    title: 'MOVEMENT',
    description: 'An intricate assembly of mechanical components reflects the enduring artistry of watchmaking.',
  },
  {
    id: 'leather-strap',
    title: 'LEATHER STRAP',
    description: 'Rich brown leather and contrast stitching bring warmth and character to the Atelier Classic.',
  },
];

export default function Details() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

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

      // Centerpiece image entrance
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.96, y: 24 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 82%',
          },
        }
      );

      // Left column details entrance
      const leftItems = leftColRef.current ? leftColRef.current.children : [];
      if (leftItems.length > 0) {
        gsap.fromTo(
          leftItems,
          { opacity: 0, x: -18 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Right column details entrance
      const rightItems = rightColRef.current ? rightColRef.current.children : [];
      if (rightItems.length > 0) {
        gsap.fromTo(
          rightItems,
          { opacity: 0, x: 18 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="details"
      ref={sectionRef}
      className="py-14 sm:py-16 md:py-20 lg:py-24 bg-[#E5E5E5] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight uppercase font-sans">
            DETAILS
          </h2>

          <p className="text-sm sm:text-base text-[#555B67] leading-relaxed max-w-[620px] mx-auto">
            Discover the elements that shape the LUMI Atelier Classic — from its refined dial and polished case to the mechanical architecture within.
          </p>
        </div>

        {/* 3-Column Editorial Layout: Left (3) | Center Exploded Watch Image | Right (3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* Left Column: 3 Descriptions */}
          <div
            ref={leftColRef}
            className="order-2 lg:order-1 lg:col-span-3 space-y-8 sm:space-y-10 lg:space-y-14"
          >
            {LEFT_DETAILS.map((item) => (
              <div
                key={item.id}
                className="space-y-1.5 text-left lg:text-right"
              >
                <h3 className="text-sm sm:text-base font-extrabold text-black tracking-tight uppercase font-sans">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555B67] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column: Prominent Exploded Watch Image (No box, no border, no shadow) */}
          <div
            ref={imageRef}
            className="order-1 lg:order-2 lg:col-span-6 flex items-center justify-center p-0"
          >
            <img
              src="/assets/details-exploded-watch.jpg"
              alt="LUMI Atelier Classic Exploded Watch Anatomy"
              className="w-full max-w-[640px] sm:max-w-[680px] lg:max-w-none h-auto object-contain select-none pointer-events-none"
            />
          </div>

          {/* Right Column: 3 Descriptions */}
          <div
            ref={rightColRef}
            className="order-3 lg:col-span-3 space-y-8 sm:space-y-10 lg:space-y-14"
          >
            {RIGHT_DETAILS.map((item) => (
              <div
                key={item.id}
                className="space-y-1.5 text-left"
              >
                <h3 className="text-sm sm:text-base font-extrabold text-black tracking-tight uppercase font-sans">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555B67] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
