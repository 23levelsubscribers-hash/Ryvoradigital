import React, { useState } from 'react';
import { 
  SERVICES_DATA, 
  ServiceItem 
} from '../data/agencyData';
import { 
  Code2, 
  ShoppingBag, 
  Bot, 
  Palette, 
  Search, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Calculator, 
  Clock, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onInitiateService: (serviceTitle: string, estimatedScope?: string) => void;
  initialServiceSlug?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onInitiateService,
  initialServiceSlug,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Interactive Project Scope Estimator State
  const [estService, setEstService] = useState<string>('Web Development');
  const [estScale, setEstScale] = useState<'flagship' | 'enterprise' | 'growth'>('flagship');
  const [estTimeline, setEstTimeline] = useState<'standard' | 'accelerated'>('standard');
  const [estIncludeAi, setEstIncludeAi] = useState<boolean>(true);

  const serviceIcons: Record<string, React.ReactNode> = {
    'web-dev': <Code2 className="text-blue-400" size={26} />,
    'e-commerce': <ShoppingBag className="text-cyan-400" size={26} />,
    'ai-solutions': <Bot className="text-violet-400" size={26} />,
    'ui-ux': <Palette className="text-purple-400" size={26} />,
    'seo': <Search className="text-sky-400" size={26} />,
    'meta-ads': <BarChart3 className="text-indigo-400" size={26} />,
  };

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Calculations for scope estimator
  const calculateEstimates = () => {
    let baseSprints = 4;
    let baseTeam = '1 Principal Architect, 2 Senior Engineers, 1 Product Designer';
    let baseDeliverables = 6;

    if (estScale === 'enterprise') {
      baseSprints = 8;
      baseTeam = '2 Lead Architects, 4 Senior Engineers, 2 UI/UX Designers, 1 QA Lead';
      baseDeliverables = 12;
    } else if (estScale === 'growth') {
      baseSprints = 6;
      baseTeam = '1 Lead Architect, 3 Full-Stack Engineers, 1 Designer, 1 Growth Lead';
      baseDeliverables = 9;
    }

    if (estTimeline === 'accelerated') {
      baseSprints = Math.max(3, Math.round(baseSprints * 0.7));
    }

    if (estIncludeAi) {
      baseDeliverables += 3;
    }

    return { sprints: baseSprints, team: baseTeam, deliverables: baseDeliverables };
  };

  const estimate = calculateEstimates();

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          Disciplines & Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
          Engineered for commercial dominance and aesthetic distinction.
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          We operate across six core technical domains. Each practice is staffed by senior specialists with a track record of shipping production architectures for global category leaders.
        </p>
      </div>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap gap-2 pb-10 border-b border-white/10 mb-12">
        {[
          { id: 'all', label: 'All Disciplines (6)' },
          { id: 'engineering', label: 'Web Engineering' },
          { id: 'commerce', label: 'E-Commerce' },
          { id: 'intelligence', label: 'AI & Automation' },
          { id: 'design', label: 'UI/UX Design' },
          { id: 'search', label: 'SEO & Search' },
          { id: 'performance', label: 'Meta Ads' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Deep Dive List */}
      <div className="space-y-16">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.slug}
            className="bg-[#0b0e17] border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Title, Category, Description */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    {serviceIcons[service.id]}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                      {service.category} · 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base font-medium text-slate-200 pt-1">
                  {service.headline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {service.metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-[#111522] rounded-xl border border-white/5">
                      <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300">{m.value}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Direct Action Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onInitiateService(service.title)}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer group"
                  >
                    <span>Initiate {service.title} Brief</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Deliverables & Technologies */}
              <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Layers size={14} className="text-indigo-400" />
                    Core Architecture Deliverables
                  </h3>
                  <div className="space-y-2.5">
                    {service.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Technology & Tooling Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-md text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE PROJECT SCOPE & SPRINT ESTIMATOR                               */}
      {/* ========================================================================= */}
      <section className="mt-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0e121c] to-[#121626] border border-white/15">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <Calculator size={14} />
            <span>Interactive Scope & Sprint Estimator</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Configure Your Project Parameters
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Select your target discipline, scale, and timeline to receive an instant sprint breakdown and team allocation model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Primary Service Selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                1. Select Primary Discipline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SERVICES_DATA.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setEstService(srv.title)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      estService === srv.title
                        ? 'border-cyan-400 bg-cyan-950/30 text-white font-medium shadow-sm'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {srv.title}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Platform Scale */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'flagship', label: 'Flagship Build', desc: 'Custom high-converting site' },
                  { id: 'growth', label: 'Growth Architecture', desc: 'Multi-system + CAPI' },
                  { id: 'enterprise', label: 'Enterprise Platform', desc: 'Global scale & AI pipelines' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setEstScale(tier.id as any)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      estScale === tier.id
                        ? 'border-indigo-400 bg-indigo-950/30 text-white font-medium'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold">{tier.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Timeline Speed & AI Toggle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  3. Timeline Velocity
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEstTimeline('standard')}
                    className={`flex-1 p-3 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                      estTimeline === 'standard'
                        ? 'border-blue-400 bg-blue-950/30 text-white font-medium'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Standard Pace (6-8 wks)
                  </button>
                  <button
                    onClick={() => setEstTimeline('accelerated')}
                    className={`flex-1 p-3 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                      estTimeline === 'accelerated'
                        ? 'border-blue-400 bg-blue-950/30 text-white font-medium'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Accelerated Sprint
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  4. Enterprise AI Integration
                </label>
                <button
                  onClick={() => setEstIncludeAi(!estIncludeAi)}
                  className={`w-full p-3 rounded-xl border text-xs text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    estIncludeAi
                      ? 'border-violet-400 bg-violet-950/30 text-white font-medium'
                      : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles size={14} className={estIncludeAi ? 'text-violet-400' : 'text-slate-500'} />
                  <span>{estIncludeAi ? 'AI Pipelines Included' : 'No AI Pipelines Needed'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#090b11] border border-white/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase text-slate-400">Estimated Sprints</span>
                <span className="text-xl font-bold font-mono text-cyan-300">
                  {estimate.sprints} {estimate.sprints === 1 ? 'Sprint' : 'Sprints'} (approx. {estimate.sprints * 2} wks)
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  Dedicated Squad Allocation
                </span>
                <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                  {estimate.team}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  Included Milestone Deliverables
                </span>
                <div className="text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400" />
                    <span>Technical Architecture & Strategy Blueprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400" />
                    <span>Bespoke Figma UI/UX System & Interactive Prototypes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400" />
                    <span>Clean TypeScript & Headless Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400" />
                    <span>Sub-50ms Global Edge Optimization</span>
                  </div>
                  {estIncludeAi && (
                    <div className="flex items-center gap-2 text-violet-300">
                      <Sparkles size={13} className="text-violet-400" />
                      <span>Custom LLM / Agent Workflows & Embeddings</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <button
                onClick={() => {
                  const scopeSummary = `${estService} (${estScale.toUpperCase()} scale, ${estTimeline} pace, AI: ${estIncludeAi ? 'Yes' : 'No'})`;
                  onInitiateService(estService, scopeSummary);
                }}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Export Brief to Project Kickoff</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
