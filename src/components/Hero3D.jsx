import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Linkedin, Github } from 'lucide-react';

export default function Hero3D() {
  return (
    <header className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top Nav */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-sm/25">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="font-semibold tracking-tight">MAF Portfolio</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Achievements</a>
          <a href="#resume" className="hover:text-blue-600 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight text-slate-900">
              eCommerce Fulfillment Team Lead
              <span className="block text-lg md:text-2xl font-medium text-slate-700">with an IT background — Majid Al Futtaim</span>
            </h1>
            <p className="mt-4 text-slate-700">
              I bridge operational excellence and technology. I streamline warehouse operations, automate repetitive tasks, and drive data-led decisions to improve speed, accuracy, and customer satisfaction.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
                View Achievements <ArrowRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium">
                Learn more
              </a>
              <div className="ml-auto flex items-center gap-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/70 border border-slate-200 hover:bg-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/70 border border-slate-200 hover:bg-white transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-slate-100/90" />
    </header>
  );
}
