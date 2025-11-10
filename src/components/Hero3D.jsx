import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Linkedin, Github } from 'lucide-react';

export default function Hero3D() {
  return (
    <header className="relative w-full h-[78vh] md:h-[88vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top Nav */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 animate-pulse" />
          <span className="font-semibold tracking-tight text-slate-100">MAF Portfolio</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-200/90">
          <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">Achievements</a>
          <a href="#resume" className="hover:text-cyan-300 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-white/10">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-100">
              eCommerce Fulfillment Team Lead
              <span className="block text-lg md:text-2xl font-medium text-slate-300">with an IT background — Majid Al Futtaim</span>
            </h1>
            <p className="mt-4 text-slate-300">
              I bridge operational excellence and technology. I streamline warehouse operations, automate repetitive tasks, and drive data-led decisions to improve speed, accuracy, and customer satisfaction.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-2 rounded-lg shadow hover:from-indigo-400 hover:to-cyan-400 transition-colors">
                View Achievements <ArrowRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-medium">
                Learn more
              </a>
              <div className="ml-auto flex items-center gap-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-slate-100">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-slate-100">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/40 via-transparent to-[#0b1020]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.2),transparent_40%)]" />
    </header>
  );
}
