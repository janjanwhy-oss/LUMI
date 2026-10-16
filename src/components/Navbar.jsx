import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onExploreClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Our Story', href: '#companion' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#F0F1F3]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <div className="flex-shrink-0 flex items-center pr-6 md:pr-10">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[14px] font-medium tracking-tight text-[#4A4E57] hover:text-[#000000] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (onExploreClick) {
                onExploreClick();
              } else {
                const col = document.querySelector('#collections');
                if (col) col.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-black text-white text-[13px] font-semibold tracking-wide hover:bg-[#22252A] active:scale-[0.98] transition-all shadow-sm"
          >
            Explore Collection
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-black hover:bg-[#F4F5F7] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EBECEF] px-6 py-6 transition-all duration-300 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[16px] font-medium text-[#22252A] py-2 border-b border-[#F4F5F7] hover:text-black"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const col = document.querySelector('#collections');
                  if (col) col.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center py-3 rounded-full bg-black text-white text-[14px] font-semibold"
              >
                Explore Collection
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
