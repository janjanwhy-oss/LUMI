import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const titleLineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // 1. Ensure reliable video autoplay across browsers & handle accessibility
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    if (prefersReducedMotion) {
      video.pause();
    } else {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Video autoplay delayed or prevented:', err);
        });
      }
    }
  }, []);

  // 2. Coordinated GSAP Entrance Animation (Runs once on mount for HTML overlay only)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [titleLineRef.current, subtextRef.current, ctaRef.current],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      // Initial premium entrance sequence (runs once on page load)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered upward mask reveal for H1
      tl.fromTo(
        titleLineRef.current,
        { y: '115%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.0, ease: 'power3.out' },
        0.2
      );

      // Supporting description appears afterward
      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
        0.55
      );

      // Compact black pill CTA follows with controlled entrance
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 12, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1.0, duration: 0.7, ease: 'power3.out' },
        0.72
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const col = document.querySelector('#collections');
      if (col) {
        const topOffset = col.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-[calc(100svh-5rem)] min-h-[580px] sm:min-h-[640px] md:min-h-[700px] max-h-[1050px] overflow-hidden bg-[#E8E8E8]"
    >
      {/* Background Watch Video (Full Bleed, Native HTML5) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-video-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-[center_70%] sm:object-[center_65%] md:object-center transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-95'
          }`}
          aria-hidden="true"
        >
          <source
            src="https://res.cloudinary.com/kj5pak4y/video/upload/v1792129447/1016_1.mp4"
            type="video/mp4"
          />
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* HTML Overlay: Upper Negative Space Typography */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 flex flex-col items-center text-center space-y-3 sm:space-y-3.5">
        {/* Main H1: Bold Sans-Serif matching Digital Companion */}
        <h1 className="font-sans font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] text-black tracking-tight leading-[1.08] select-none max-w-3xl mx-auto">
          <span className="block overflow-hidden py-0.5">
            <span
              ref={titleLineRef}
              className="inline-block"
              style={{ willChange: 'transform' }}
            >
              A New Perspective on Time.
            </span>
          </span>
        </h1>

        {/* Supporting Narrative Copy */}
        <p
          ref={subtextRef}
          className="font-sans text-xs sm:text-sm md:text-[15px] text-[#555B67] font-normal leading-relaxed max-w-md mx-auto"
        >
          An expression of time, crafted for every moment.
        </p>

        {/* Compact Black Pill CTA */}
        <div ref={ctaRef} className="pt-1">
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#22252A] active:scale-[0.98] transition-all shadow-md group cursor-pointer"
            aria-label="Explore Collection"
          >
            <span>Explore Collection</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
