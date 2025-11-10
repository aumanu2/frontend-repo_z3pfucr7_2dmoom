import React from 'react';
import { Award, Gauge, PackageCheck, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Pick-Pack Optimization Initiative',
    badge: 'Operations',
    icon: Gauge,
    description:
      'Redesigned pick-path logic and slotting strategy for fast-movers, reducing average picking time by 18% and error rate by 12%. Implemented data-led A/B trials and SOP updates.',
    highlights: ['18% faster picks', '12% fewer errors', 'Data-driven trials']
  },
  {
    title: 'Returns Handling Automation',
    badge: 'Process + IT',
    icon: PackageCheck,
    description:
      'Worked with IT to digitize RMA flows and barcode scanning steps. Reduced manual touches per return and improved reconciliation with OMS by 1.4x.',
    highlights: ['Digitized RMA', 'Barcode-first', 'OMS reconciliation 1.4x']
  },
  {
    title: 'Fulfillment KPI Dashboard',
    badge: 'Analytics',
    icon: TrendingUp,
    description:
      'Built an executive dashboard consolidating WMS/OMS data to monitor SLAs: OTIF, pick rate, dock-to-stock, and aging. Improved weekly review cadence and faster root-cause analysis.',
    highlights: ['OTIF tracking', 'Dock-to-Stock', 'Root-cause speed']
  },
  {
    title: 'Outstanding Contributor – MAF',
    badge: 'Recognition',
    icon: Award,
    description:
      'Recognized for leading continuous improvement rituals and mentoring new team leads across shifts to standardize best practices.',
    highlights: ['Cross-shift coaching', 'Standardized SOPs', 'CI leadership']
  }
];

export default function ProjectsGallery() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#94a3b8_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100">Achievements & Projects</h2>
            <p className="mt-2 text-slate-300">A snapshot of impact across operations, analytics, and process automation.</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, badge, icon: Icon, description, highlights }) => (
            <article key={title} className="group relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-500/15 pointer-events-none" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 text-cyan-200 flex items-center justify-center border border-white/10">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-100 leading-snug">{title}</h3>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">{badge}</span>
              </div>
              <p className="relative mt-3 text-sm text-slate-300 leading-relaxed">{description}</p>
              <ul className="relative mt-4 flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <li key={h} className="text-xs bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-200 border border-white/10 rounded-full px-2.5 py-1">{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
