import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    'Warehouse & Fulfillment Operations',
    'Process Optimization (Lean / Kaizen)',
    'WMS, OMS & Last-Mile Coordination',
    'Data Analysis (Excel, SQL, Python basics)',
    'Automation & RPA Collaboration',
    'Stakeholder & Vendor Management',
    'SLA/KPI Design & Governance',
    'Team Leadership & Training'
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About Me</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I am an eCommerce Fulfillment Team Lead at Majid Al Futtaim with a strong IT foundation. I specialize in
            building efficient, technology-enabled operations that scale. My focus areas include streamlining inbound to
            last-mile workflows, integrating WMS/OMS systems, and collaborating with IT to automate repetitive tasks and
            set up meaningful dashboards.
          </p>
          <p className="mt-3 text-slate-700">
            I thrive at the intersection of people, process, and platforms — translating operational needs into practical
            tech solutions that improve throughput and accuracy while keeping teams empowered and customers delighted.
          </p>
        </div>
        <div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Core Skills</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((s) => (
                <li key={s} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="text-blue-600 mt-0.5" size={18} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
