'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutDetailsPage() {
  return (
    <div className="min-h-screen bg-[#0B1C2D] flex items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About Details</h1>
        <p className="text-neutral-300 mb-8">This page is under construction.</p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#FFF7D6] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
