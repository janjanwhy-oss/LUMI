import React from 'react';

/**
 * Premium minimalist watch-brand wordmark for LUMI.
 * Displays only the uppercase text "LUMI" with elegant tracking,
 * bold modern sans-serif typography, and zero decorative symbols.
 */
export default function Logo({ className = '' }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#home"
      onClick={handleClick}
      className={`inline-block select-none text-black font-sans font-bold uppercase transition-opacity hover:opacity-75 leading-none text-[21px] md:text-[24px] tracking-[0.22em] ${className}`}
      style={{ letterSpacing: '0.22em' }}
      aria-label="LUMI — Home"
    >
      LUMI
    </a>
  );
}
