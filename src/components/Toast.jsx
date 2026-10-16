import React from 'react';
import { Info, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full p-4 rounded-2xl bg-black text-white shadow-2xl border border-white/10 flex items-start gap-3 animate-slideUp">
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Info size={16} className="text-white" />
      </div>
      <div className="flex-1 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
        {message}
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-[#9CA3AF] hover:text-white transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
