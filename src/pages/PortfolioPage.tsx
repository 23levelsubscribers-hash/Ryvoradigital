import React, { useState } from 'react';
import { PORTFOLIO_CASES, CaseStudy } from '../data/agencyData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ArrowUpRight, Filter, TrendingUp, CheckCircle2 } from 'lucide-react';

interface PortfolioPageProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onNavigate: (page: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectCaseStudy,
  onNavigate,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Commissions (6)' },
    { id: 'web', label: 'Web Applications' },
    { id: 'commerce', label: 'E-Commerce' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'design', label: 'UI/UX Systems' },
    { id: 'fintech', label: 'FinTech & Portal' },
  ];

  const filteredCases = PORTFOLIO_CASES.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return item.services.includes('Web Development');
    if (activeFilter === 'commerce') return item.services.includes('E-Commerce');
    if (activeFilter === 'ai') return item.services.includes('AI Solutions');
    if (activeFilter === 'design') return item.services.includes('UI/UX Design');
    if (activeFilter === 'fintech') return item.industry.includes('FinTech') || item.industry.includes('Biotech');
    return true;
  });

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
          Portfolio & Proven Outcomes
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
          Digital architectures that create enterprise value.
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          Explore six representative client engagements spanning biotech platforms, 3D luxury configurators, enterprise AI agent swarms, and sovereign wealth portals.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-10 border-b border-white/10 mb-12">
        {filterOptions.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === f.id
                ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 6 Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredCases.map((project) => (
          <div
            key={project.id}
            className="group bg-[#0b0e17] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Interactive Mockup Visual Slot */}
              <div 
                className="h-64 sm:h-72 w-full p-4 bg-[#080a10] border-b border-white/10 cursor-pointer overflow-hidden"
                onClick={() => onSelectCaseStudy(project)}
              >
                <ProjectMockup
                  type={project.mockupType}
                  title={project.title}
                  client={project.client}
                />
              </div>

              {/* Case Body */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                  <span className="font-mono text-indigo-400 uppercase tracking-wider">{project.industry}</span>
                  <span className="font-mono text-cyan-400">{project.year}</span>
                </div>

                <h2 
                  onClick={() => onSelectCaseStudy(project)}
                  className="text-2xl font-display font-bold text-white tracking-tight cursor-pointer hover:text-cyan-300 transition-colors"
                >
                  {project.title}
                </h2>

                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                {/* Metrics Highlight Pill-less Box */}
                <div className="mt-5 grid grid-cols-2 gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <div className="text-xl font-bold font-mono text-cyan-300">{m.value}</div>
                      <div className="text-[11px] text-slate-400 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Services Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.services.map((srv, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-white/5 text-slate-400 px-2 py-0.5 rounded border border-white/5"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#090b11] flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Client: {project.client}
              </span>
              <button
                onClick={() => onSelectCaseStudy(project)}
                className="text-xs font-semibold text-white hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-0.5"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Conversion Prompt */}
      <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-[#0e121d] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-display font-bold text-white">
            Have a project requiring exceptional execution?
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            We partner with a strictly limited roster of 8 enterprise and flagship clients per calendar quarter.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="shrink-0 px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl shadow-lg transition-all cursor-pointer"
        >
          Schedule a Technical Briefing
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
