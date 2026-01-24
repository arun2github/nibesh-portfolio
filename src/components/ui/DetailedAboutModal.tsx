'use client';

import React from 'react';

interface DetailedAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DetailedAboutModal: React.FC<DetailedAboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
      <div className="bg-[#0B1C2D] rounded-lg p-8 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold text-white mb-4">About Details</h2>
        <p className="text-neutral-300 mb-6">This section is under construction.</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-[#C9A227] text-white rounded hover:bg-[#FFF7D6] hover:text-[#0B1C2D] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};
