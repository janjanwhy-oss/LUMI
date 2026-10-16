import React, { useEffect } from 'react';
import { X, CheckCircle, Shield, Award, Droplets } from 'lucide-react';

export default function ProductModal({ watch, onClose, onShowToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!watch) return null;

  const handleInquiry = () => {
    onClose();
    if (onShowToast) {
      onShowToast(`Inquiry noted for ${watch.name}. Online concierge requests are currently inactive during this preview.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-[#E5E7EB]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-[#F4F5F7] hover:bg-black hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10">
          
          {/* Watch Studio Frame */}
          <div className="rounded-2xl bg-[#F8F9FA] p-8 flex items-center justify-center border border-[#EEF0F2]">
            <img
              src={watch.image}
              alt={watch.name}
              className="max-h-[340px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Details & Specs */}
          <div className="flex flex-col justify-between space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                  {watch.family}
                </span>
                <span className="text-xs font-semibold text-[#8A8F9B]">
                  {watch.highlight}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mt-3">
                {watch.name}
              </h3>
              
              <p className="text-sm font-medium text-[#71717A] mt-1">
                {watch.subtitle}
              </p>

              <p className="text-sm text-[#555B67] leading-relaxed mt-4">
                {watch.description}
              </p>

              {/* Specifications Table */}
              <div className="mt-6 pt-4 border-t border-[#F2F4F7] space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-black">
                  Specifications
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#555B67]">
                  <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EEF0F2]">
                    <span className="block text-[10px] font-bold text-[#8A8F9B] uppercase">Case</span>
                    <span className="font-semibold text-black mt-0.5 block">{watch.specs.case}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EEF0F2]">
                    <span className="block text-[10px] font-bold text-[#8A8F9B] uppercase">Dial</span>
                    <span className="font-semibold text-black mt-0.5 block">{watch.specs.dial}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EEF0F2]">
                    <span className="block text-[10px] font-bold text-[#8A8F9B] uppercase">Movement</span>
                    <span className="font-semibold text-black mt-0.5 block">{watch.specs.movement}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EEF0F2]">
                    <span className="block text-[10px] font-bold text-[#8A8F9B] uppercase">Strap</span>
                    <span className="font-semibold text-black mt-0.5 block">{watch.specs.strap}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#F2F4F7] flex items-center gap-3">
              <button
                onClick={handleInquiry}
                className="flex-1 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-[#22252A] transition-colors"
              >
                Inquire About This Watch
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-full bg-[#F4F5F7] text-black text-sm font-semibold hover:bg-[#EBECEF] transition-colors"
              >
                Close
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
