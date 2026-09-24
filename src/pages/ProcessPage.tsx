import React, { useState } from 'react';
import { PROCESS_STEPS, AGENCY_FAQS } from '../data/agencyData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Sparkles 
} from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          Agile Delivery Methodology
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
          A predictable, transparent roadmap from concept to market scale.
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          We operate through five battle-tested phases designed to eliminate scope drift, compress cycle times, and guarantee production-grade execution on schedule.
        </p>
      </div>

      {/* 5-Step Process Interactive Showcase */}
      <div className="bg-[#0b0e17] border border-white/10 rounded-3xl p-6 sm:p-10">
        {/* Step Selector Horizontal Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 border-b border-white/10 pb-8 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? 'border-cyan-400 bg-cyan-950/30 text-white shadow-md shadow-cyan-500/10'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={activeStepIndex === idx ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
                  {step.number}
                </span>
                <span className="text-[11px] text-slate-400">{step.duration}</span>
              </div>
              <div className="text-xs font-semibold text-white mt-2 line-clamp-1">
                {step.title.split('&')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <span>Phase {activeStep.number} of 05</span>
              <span aria-hidden="true">·</span>
              <span>{activeStep.duration}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {activeStep.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeStep.description}
            </p>

            {/* Collaboration & Transparency Signals */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-cyan-400" />
                <span>Synchronous weekly video demonstrations with senior partners</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-violet-400" />
                <span>Dedicated private Slack channel & GitHub repository staging access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tangible Deliverables Checklist */}
          <div className="lg:col-span-6 bg-[#080a10] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Layers size={14} className="text-indigo-400" />
              Documented Sprint Artifacts & Deliverables
            </h3>

            <div className="space-y-3">
              {activeStep.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5"
                >
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-between items-center text-xs">
              <span className="text-slate-400">100% Client Codebase Ownership</span>
              <span className="text-cyan-300 font-mono">Zero IP Lock-in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Process Questions */}
      <div>
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            Transparency
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Frequently Asked Engagement Questions
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Clear answers on governance, code ownership, sprint cadence, and ongoing support.
          </p>
        </div>

        <div className="space-y-3 max-w-4xl">
          {AGENCY_FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-[#0e121c] border border-white/10 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-cyan-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct CTA */}
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-blue-900/30 to-violet-900/30 border border-white/10 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
          Ready to kick off Discovery?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          We can review your technical specifications and prepare a customized Stage 01 scope proposal within 48 hours.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            Start Your Project Discovery
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
