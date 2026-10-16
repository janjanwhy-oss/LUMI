import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sliders, Shield, Zap, Sparkles, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CompanionExperience() {
  const sectionRef = useRef(null);
  const textContentRef = useRef(null);
  const kickerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const ctaRef = useRef(null);
  const rearPhoneRef = useRef(null);
  const frontPhoneRef = useRef(null);
  const shadowRef = useRef(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(
        [
          kickerRef.current,
          titleRef.current,
          descRef.current,
          card1Ref.current,
          card2Ref.current,
          ctaRef.current,
          rearPhoneRef.current,
          frontPhoneRef.current,
          shadowRef.current,
        ],
        { opacity: 1, y: 0, x: 0, scale: 1 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Dynamic Coordinated Entrance Timeline (Storyboard Frames 1.0s - 2.5s)
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
        defaults: { ease: 'power3.out' },
      });

      // Ambient phone shadow blooms into place
      entranceTl.fromTo(
        shadowRef.current,
        { opacity: 0, scaleX: 0.6, scaleY: 0.6 },
        { opacity: 0.25, scaleX: 1.0, scaleY: 1.0, duration: 1.2 },
        0
      );

      // Dark Rear Phone enters first from below-right
      entranceTl.fromTo(
        rearPhoneRef.current,
        { opacity: 0, y: 100, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1.0, duration: 1.15, ease: 'power3.out' },
        0.05
      );

      // White Foreground Phone enters dynamically with offset travel from deeper below-left
      entranceTl.fromTo(
        frontPhoneRef.current,
        { opacity: 0, y: 140, scale: 0.88 },
        { opacity: 1, y: 0, scale: 1.0, duration: 1.25, ease: 'power3.out' },
        0.18
      );

      // Right-side content coordinated arrival
      entranceTl.fromTo(
        kickerRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65 },
        0.1
      );

      entranceTl.fromTo(
        titleRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9 },
        0.2
      );

      entranceTl.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.75 },
        0.35
      );

      // Feature cards glide in with purposeful horizontal-vertical trajectory
      entranceTl.fromTo(
        [card1Ref.current, card2Ref.current],
        { opacity: 0, x: 30, y: 15 },
        { opacity: 1, x: 0, y: 0, duration: 0.85, stagger: 0.12 },
        0.45
      );

      entranceTl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 18, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1.0, duration: 0.7 },
        0.65
      );

      // 2. Scroll-Linked Differential Parallax (Storyboard Frames 2.5s - 3.5s)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        // Foreground phone glides upward faster than rear phone, creating tangible physical separation
        gsap.to(frontPhoneRef.current, {
          y: -52,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });

        // Rear phone glides upward at a more restrained cadence
        gsap.to(rearPhoneRef.current, {
          y: -22,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });

        // Ambient shadow follows smoothly
        gsap.to(shadowRef.current, {
          y: -14,
          scale: 0.92,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      });

      // Mobile/Tablet: gentle scrub without excessive movement
      mm.add('(max-width: 1023px)', () => {
        gsap.to(frontPhoneRef.current, {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="companion"
      ref={sectionRef}
      className="py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-white relative"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Two Overlapping Layered Smartphone Mockups */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[620px] w-full">
            
            {/* Ambient Base Shadow */}
            <div
              ref={shadowRef}
              className="absolute w-[80%] h-12 sm:h-16 bg-black/15 rounded-full blur-2xl sm:blur-3xl bottom-2 sm:bottom-4 pointer-events-none"
              style={{ willChange: 'transform, opacity' }}
            ></div>

            {/* Rear Phone Mockup (Layer 1: Dark Chronos Noir Phone) */}
            <div
              ref={rearPhoneRef}
              className="absolute w-[240px] sm:w-[300px] md:w-[360px] lg:w-[390px] xl:w-[420px] top-1 sm:top-2 md:top-4 right-1 sm:right-4 lg:right-6 z-10 transition-transform duration-300 pointer-events-auto"
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src="/assets/mockups/lumi-phone-rear.png"
                alt="LUMI Chronos Noir Digital Companion App Interface"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)] select-none"
              />
            </div>

            {/* Foreground Phone Mockup (Layer 2: White Atelier Studio Phone) */}
            <div
              ref={frontPhoneRef}
              className="relative w-[250px] sm:w-[310px] md:w-[370px] lg:w-[400px] xl:w-[430px] z-20 left-[-15px] sm:left-[-25px] md:left-[-35px] lg:left-[-40px] top-8 sm:top-12 md:top-16 lg:top-20 transition-transform duration-300 pointer-events-auto"
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src="/assets/mockups/lumi-phone-front.png"
                alt="LUMI Atelier Studio Digital Experience"
                className="w-full h-auto object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.26)] select-none"
              />
            </div>

          </div>

          {/* Right Column: Narrative Copy & Editorial Highlights */}
          <div ref={textContentRef} className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            
            <div
              ref={kickerRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F5F7] border border-[#EBECEF]"
            >
              <Sparkles size={13} className="text-black" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A4E57]">
                Digital Companion
              </span>
            </div>

            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-[1.08]"
            >
              A New Perspective on Time.
            </h2>

            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#555B67] leading-relaxed max-w-[500px]"
            >
              Explore the collection, discover the details, and experience contemporary watch design through a beautifully considered digital interface.
            </p>

            {/* Interface Feature Highlights */}
            <div className="space-y-4 pt-2">
              <div
                ref={card1Ref}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#EEF0F2] transition-colors hover:bg-[#F2F4F7]"
              >
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sliders size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black tracking-tight">Interactive Dial Exploration</h4>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                    Inspect finishings, mechanical calibres, and casing dimensions in high-resolution detail.
                  </p>
                </div>
              </div>

              <div
                ref={card2Ref}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#EEF0F2] transition-colors hover:bg-[#F2F4F7]"
              >
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black tracking-tight">Provenance & Technical Archives</h4>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                    Curated reference logs for every case number, caliber variation, and atelier release.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <div ref={ctaRef} className="pt-2">
              <button
                onClick={() => setShowDemoModal(true)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-black text-white text-[14px] font-semibold tracking-wide hover:bg-[#22252A] active:scale-[0.98] transition-all shadow-sm"
              >
                Explore Digital Interface
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Preview Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-[#E5E7EB]">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F4F5F7] text-black transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-5">
              <Zap size={22} />
            </div>
            <h3 className="text-2xl font-bold text-black tracking-tight">LUMI Digital Companion</h3>
            <p className="text-sm text-[#555B67] mt-3 leading-relaxed">
              An exploratory digital experience designed for LUMI collectors to inspect calibre specifications, dial geometry, and atelier craftsmanship in high-resolution detail.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-[#F8F9FA] border border-[#EBECEF] text-xs text-[#6B7280] space-y-1">
              <p className="font-semibold text-black">Atelier Digital Preview</p>
              <p>Companion interface exploration and dial customizer features.</p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowDemoModal(false)}
                className="w-full py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-[#22252A]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
