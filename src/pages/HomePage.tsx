import React from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Code2, 
  ShoppingBag, 
  Bot, 
  Palette, 
  Search, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';
import { 
  AGENCY_STATS, 
  SERVICES_DATA, 
  PORTFOLIO_CASES, 
  TESTIMONIALS_DATA, 
  CaseStudy 
} from '../data/agencyData';
import { ProjectMockup } from '../components/ProjectMockup';
import { RyvoraMonogram } from '../components/RyvoraLogo';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onSelectService: (serviceSlug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCaseStudy,
  onSelectService,
}) => {
  const serviceIcons: Record<string, React.ReactNode> = {
    'web-dev': <Code2 className="text-blue-400" size={24} />,
    'e-commerce': <ShoppingBag className="text-cyan-400" size={24} />,
    'ai-solutions': <Bot className="text-violet-400" size={24} />,
    'ui-ux': <Palette className="text-purple-400" size={24} />,
    'seo': <Search className="text-sky-400" size={24} />,
    'meta-ads': <BarChart3 className="text-indigo-400" size={24} />,
  };

  const featuredProjects = PORTFOLIO_CASES.filter((p) => p.featured);

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                            */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-cyan-400/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 blur-[100px] pointer-events-none" />

        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Natural human editorial kicker */}
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-6 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>International Digital Agency · London · New York · Dubai · Singapore</span>
          </div>

          {/* Main User Brief Headline: "We build digital experiences that grow businesses." */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] [text-wrap:balance]">
            We build digital experiences that{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              grow businesses.
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            Ryvora Digital unites world-class software engineering, bespoke digital aesthetics, and enterprise AI automation to architect platforms that scale revenue and command market leadership.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl shadow-xl shadow-blue-600/25 transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-slate-300 hover:text-white border border-white/15 hover:border-white/30 rounded-xl hover:bg-white/5 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore Case Studies</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Trust stats row */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {AGENCY_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE SERVICES & CAPABILITIES                                           */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              Our Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              End-to-End Digital Mastery
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-xl">
              From zero-defect code architecture to predictive growth funnels, our multidisciplinary teams deliver complete institutional excellence.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="self-start md:self-auto text-xs font-semibold text-cyan-300 hover:text-cyan-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>View All Capabilities & Specifications</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Asymmetric Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="glow-card group bg-[#0e121c] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
            >
              <div>
                {/* Header with icon and category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {serviceIcons[service.id]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {service.metrics[0].value} {service.metrics[0].label}
                </span>
                <button
                  onClick={() => onSelectService(service.slug)}
                  className="text-xs font-semibold text-slate-300 group-hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED CASE STUDIES SHOWCASE                                         */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Work That Drives Real Revenue
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-xl">
              Concrete engineering outcomes and high-converting customer experiences delivered for global market leaders.
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="self-start md:self-auto px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>View All 6 Case Studies</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Case Studies Display Cards */}
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#0b0e17] border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Interactive Mockup Preview (7 cols) */}
              <div className="lg:col-span-7 h-72 sm:h-96 lg:h-auto min-h-[340px] p-4 sm:p-6 bg-[#080a10]">
                <ProjectMockup
                  type={project.mockupType}
                  title={project.title}
                  client={project.client}
                />
              </div>

              {/* Case Study Details (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-indigo-400 font-mono uppercase tracking-wider">{project.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-3 my-6">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5">
                        <div className="text-xl font-bold font-mono text-cyan-300">{m.value}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Services delivered */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.services.map((srv, i) => (
                      <span key={i} className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Client: <span className="text-slate-200 font-medium">{project.client}</span>
                  </div>
                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE RYVORA ADVANTAGE / ARCHITECTURE PILLARS                             */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            The Ryvora Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Engineered for International Impact
          </h2>
          <p className="text-slate-400 text-base mt-3">
            We reject the bloated agency model. Every project is led directly by senior architects, principal designers, and conversion specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0d101a] border border-white/10 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-white">Sub-50ms Global Edge Performance</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every millisecond of latency costs conversions. We build with serverless edge caching, distributed static generation, and asset optimization for instantaneous page loads worldwide.
            </p>
            <div className="pt-2 text-xs font-mono text-cyan-300 flex items-center gap-1">
              <TrendingUp size={14} /> Verified 98+ Google Lighthouse Score
            </div>
          </div>

          <div className="bg-[#0d101a] border border-white/10 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-white">Zero-Compromise Security & Code</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enterprise platforms need bulletproof data protection. We enforce strict TypeScript typing, automated dependency auditing, OWASP compliance, and server-side first-party tracking.
            </p>
            <div className="pt-2 text-xs font-mono text-violet-300 flex items-center gap-1">
              <ShieldCheck size={14} /> HIPAA & SOC2 Compliant Architectures
            </div>
          </div>

          <div className="bg-[#0d101a] border border-white/10 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Globe2 size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-white">Commercial Conversion Obsession</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A gorgeous website that doesn't convert is useless. We design user flows with mathematical behavioral psychology, optimized checkout funnels, and data-backed A/B testing.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
              <TrendingUp size={14} /> $420M+ Client Revenue Generated
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VERIFIED CLIENT TESTIMONIALS                                           */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Endorsed by Visionary Leaders
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-xl">
              What founders, CTOs, and heads of brand say about partnering with Ryvora Digital.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#0d111a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold font-mono text-cyan-300">
                    {t.metric}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {t.metricLabel}
                  </span>
                </div>
                <p className="text-slate-200 text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role} · {t.company}</div>
                </div>
                <span className="text-xs font-mono text-indigo-400">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION BLOCK                                                   */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-violet-950/60 border border-white/15 p-8 sm:p-14 overflow-hidden text-center">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mx-auto">
              <RyvoraMonogram size={48} />
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
              Ready to architect your next digital leap?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
              Whether you require an enterprise web application, a headless DTC storefront, or autonomous AI pipelines, our senior team is ready to evaluate your requirements.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl shadow-xl shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Start Your Project</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('process')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-slate-300 hover:text-white border border-white/15 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                Review Our 5-Step Delivery Framework
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
