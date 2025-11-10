import React from 'react';
import { Calendar, MapPin, Mail, Phone, FileDown, Linkedin, Github, GraduationCap, Briefcase } from 'lucide-react';

export default function ResumeContactSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Resume / Work History */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Resume</h2>
          <div className="mt-6 space-y-5">
            <ResumeItem
              role="eCommerce Fulfillment Team Lead"
              company="Majid Al Futtaim"
              period="2021 — Present"
              location="UAE"
              bullets={[
                'Lead day-to-day FC operations: inbound, picking, packing, and dispatch with focus on OTIF.',
                'Coordinate with IT to enhance WMS flows, automate checks, and pilot scanning improvements.',
                'Own KPI reviews: pick rate, dock-to-stock, aging, shrinkage; drive weekly CI actions.',
                'Coach team leads and associates; standardize SOPs and safety best practices across shifts.'
              ]}
            />
            <ResumeItem
              role="Operations Supervisor"
              company="Prior Role"
              period="2018 — 2021"
              location="UAE"
              bullets={[
                'Managed fulfillment cells and labor planning to balance throughput and cost.',
                'Partnered with vendors and last-mile to reduce reattempts and improve first-time delivery.',
                'Introduced visual management boards and huddle routines to improve communication.'
              ]}
            />
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2"><GraduationCap size={18}/> Qualifications</h3>
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                <li>IT Foundation with focus on systems, databases, and scripting basics</li>
                <li>Lean fundamentals and Kaizen facilitation</li>
                <li>Health & Safety awareness for warehouse environments</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <FileDown size={18}/> Download Resume
            </a>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-700">Open to opportunities in operations leadership, process excellence, and tech-enabled fulfillment.</p>
          <div className="mt-4 space-y-3 text-slate-700">
            <div className="flex items-center gap-3"><Mail size={18}/> <a className="hover:text-blue-700" href="mailto:you@example.com">you@example.com</a></div>
            <div className="flex items-center gap-3"><Phone size={18}/> <a className="hover:text-blue-700" href="tel:+971000000000">+971 00 000 0000</a></div>
            <div className="flex items-center gap-3"><MapPin size={18}/> UAE</div>
            <div className="flex items-center gap-3"><Linkedin size={18}/> <a className="hover:text-blue-700" target="_blank" rel="noreferrer" href="https://www.linkedin.com">LinkedIn</a></div>
            <div className="flex items-center gap-3"><Github size={18}/> <a className="hover:text-blue-700" target="_blank" rel="noreferrer" href="https://github.com">GitHub</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeItem({ role, company, period, location, bullets }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{role}</h3>
          <p className="text-slate-700">{company}</p>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-1"><Calendar size={16}/> {period}</div>
          <div className="flex items-center gap-1"><MapPin size={16}/> {location}</div>
        </div>
      </div>
      <ul className="mt-4 list-disc list-inside text-slate-700 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
