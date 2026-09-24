import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, TrendingUp, Cpu, Globe, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../data/agencyData';
import { ProjectMockup } from './ProjectMockup';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectProjectForInquiry: (service: string, projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onSelectProjectForInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c0f17] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090b10]/80 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="text-white font-medium">{caseStudy.client}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.location}</span>
            <span aria-hidden="true">·</span>
            <span className="text-cyan-400 font-mono">{caseStudy.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close case study modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal scrollable body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header Title & Summary */}
          <div>
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">
              {caseStudy.industry}
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {caseStudy.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Interactive Visual Mockup Preview */}
          <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-white/10">
            <ProjectMockup
              type={caseStudy.mockupType}
              title={caseStudy.title}
              client={caseStudy.client}
            />
          </div>

          {/* Key Impact Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#121622] border border-white/10 p-4 rounded-xl flex flex-col justify-between"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-300">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-white mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {metric.timeframe}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-[#10131d] border border-white/5 p-5 rounded-xl">
              <h3 className="text-sm font-semibold text-rose-400 uppercase tracking-wider font-mono flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                The Business Challenge
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-[#10131d] border border-white/5 p-5 rounded-xl">
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                The Ryvora Solution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Technologies & Services tags */}
          <div className="space-y-4 pt-2">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Services Delivered
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {caseStudy.services.map((srv, i) => (
                  <span
                    key={i}
                    className="bg-white/5 border border-white/10 px-3 py-1 rounded-md"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
                {caseStudy.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Attributable Client Testimonial */}
          <div className="bg-gradient-to-r from-blue-950/40 via-violet-950/30 to-transparent border-l-2 border-cyan-400 p-5 rounded-r-xl">
            <p className="text-slate-200 italic text-sm sm:text-base leading-relaxed">
              "{caseStudy.testimonial.quote}"
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="font-semibold text-white">{caseStudy.testimonial.author}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">{caseStudy.testimonial.role}</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 sm:p-6 bg-[#090b10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Ready to architect a high-growth platform for your organization?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white border border-white/15 rounded-lg hover:bg-white/5 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectProjectForInquiry(caseStudy.services[0], caseStudy.title);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Build Similar Architecture</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
