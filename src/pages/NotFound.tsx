import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <Hexagon className="w-24 h-24 text-brand-600 fill-brand-600/10" />
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-display font-bold text-brand-600">
          404
        </div>
      </div>
      <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-md">
        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/25 hover:bg-brand-700 transition-all"
      >
        <ArrowLeft size={20} /> Back to Home
      </Link>
    </div>
  );
}
