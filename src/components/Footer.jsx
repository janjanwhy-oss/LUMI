import React, { useState } from 'react';
import Logo from './Logo';
import { ArrowRight, Check } from 'lucide-react';

export default function Footer({ onCategorySelect, onShowToast }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      if (onShowToast) onShowToast('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Thank you for your interest. Newsletter signup is currently inactive during this preview.');
    }
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4500);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="contact" className="pt-12 pb-10 bg-white border-t border-[#EEF0F2]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Logo />
            <p className="text-sm text-[#555B67] max-w-sm leading-relaxed pt-2">
              LUMI creates contemporary wristwatches shaped by precision, purposeful design, and an appreciation for every moment.
            </p>
            <p className="text-xs font-semibold text-[#8A8F9B] tracking-wider uppercase pt-2">
              Time, Redefined.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#555B67]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-black transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={(e) => handleLinkClick(e, '#collections')}
                  className="hover:text-black transition-colors"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#companion"
                  onClick={(e) => handleLinkClick(e, '#companion')}
                  className="hover:text-black transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#craftsmanship"
                  onClick={(e) => handleLinkClick(e, '#craftsmanship')}
                  className="hover:text-black transition-colors"
                >
                  Craftsmanship
                </a>
              </li>
            </ul>
          </div>

          {/* Watch Families Column */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Families
            </h4>
            <ul className="space-y-2.5 text-sm text-[#555B67]">
              <li>
                <button
                  onClick={() => onCategorySelect && onCategorySelect('CHRONOS')}
                  className="hover:text-black transition-colors text-left"
                >
                  Chronos Series
                </button>
              </li>
              <li>
                <button
                  onClick={() => onCategorySelect && onCategorySelect('ATELIER')}
                  className="hover:text-black transition-colors text-left"
                >
                  Atelier Series
                </button>
              </li>
              <li>
                <button
                  onClick={() => onCategorySelect && onCategorySelect('APEX')}
                  className="hover:text-black transition-colors text-left"
                >
                  Apex Series
                </button>
              </li>
              <li>
                <button
                  onClick={() => onCategorySelect && onCategorySelect('ALL')}
                  className="hover:text-black transition-colors text-left"
                >
                  All Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Interface Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Stay in the Loop
            </h4>
            <p className="text-xs text-[#555B67] leading-relaxed">
              Receive updates on upcoming releases, calibre specifications, and design stories.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={submitted}
                className="w-full pl-5 pr-12 py-3.5 rounded-full bg-[#F4F5F7] text-sm text-black placeholder-[#8A8F9B] border border-[#EBECEF] focus:outline-none focus:border-black transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={submitted}
                className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#22252A] transition-colors disabled:bg-emerald-600"
                aria-label="Submit newsletter"
              >
                {submitted ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-[#EEF0F2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8F9B]">
          <p>© {new Date().getFullYear()} LUMI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-black transition-colors">Privacy Policy</span>
            <span className="hover:text-black transition-colors">Terms of Atelier</span>
            <span className="hover:text-black transition-colors">Digital Passport</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
