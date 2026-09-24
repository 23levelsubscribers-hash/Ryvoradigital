import React, { useState } from 'react';
import { SERVICES_DATA, GLOBAL_HUBS } from '../data/agencyData';
import { 
  Send, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { RyvoraLogo } from '../components/RyvoraLogo';

interface ContactPageProps {
  initialService?: string;
  initialScopeDetails?: string;
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialService,
  initialScopeDetails,
  onNavigate,
}) => {
  // Form state
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Web Development']
  );
  const [budgetRange, setBudgetRange] = useState<string>('$30k – $60k');
  const [timeline, setTimeline] = useState<string>('6 – 8 Weeks');
  
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [projectBrief, setProjectBrief] = useState<string>(
    initialScopeDetails ? `Project Scope Requirement: ${initialScopeDetails}` : ''
  );

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Consultation scheduler simulator
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 2:00 PM GMT');

  const budgetOptions = [
    '$15k – $30k',
    '$30k – $60k',
    '$60k – $120k',
    '$120k+',
  ];

  const timelineOptions = [
    'Accelerated (3–4 Wks)',
    '6 – 8 Weeks',
    '3 – 4 Months',
    'Ongoing Retainer',
  ];

  const handleServiceToggle = (srvTitle: string) => {
    if (selectedServices.includes(srvTitle)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srvTitle));
      }
    } else {
      setSelectedServices([...selectedServices, srvTitle]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please provide a valid work email address.');
      return;
    }
    if (!company.trim()) {
      setErrorMsg('Please provide your organization or company name.');
      return;
    }

    setIsSubmitting(true);
    // Realistic submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          Start Your Project
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
          Let's architect something extraordinary.
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          Tell us about your objectives, current technology stack, and timeline. A senior Ryvora partner will review your requirements and provide a confidential preliminary scope within 24 to 48 hours.
        </p>
      </div>

      {isSubmitted ? (
        /* Confirmation State */
        <div className="max-w-3xl mx-auto p-8 sm:p-12 bg-[#0e131f] border border-cyan-500/30 rounded-3xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
            <CheckCircle2 size={32} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Brief Received · Priority Dispatch
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              Thank you, {fullName}.
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              Your project briefing for <span className="text-white font-medium">{company}</span> has been routed directly to our Managing Partner and Principal Engineering Director.
            </p>
          </div>

          {/* Submission summary box */}
          <div className="p-6 bg-[#080b11] rounded-2xl border border-white/10 text-left max-w-lg mx-auto space-y-2 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Target Disciplines:</span>
              <span className="text-cyan-300 font-medium">{selectedServices.join(', ')}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Budget Allocation:</span>
              <span className="text-slate-200 font-mono">{budgetRange}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Timeline:</span>
              <span className="text-slate-200 font-mono">{timeline}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Discovery Session:</span>
              <span className="text-violet-300 font-medium">{selectedDate}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 text-xs font-medium text-slate-400 hover:text-white border border-white/10 rounded-lg transition-colors cursor-pointer"
            >
              Submit Another Brief
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              Explore Client Case Studies
            </button>
          </div>
        </div>
      ) : (
        /* The Interactive Multi-step Project Kickoff Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Inquiry Form (8 cols) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 bg-[#0b0e17] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8"
          >
            {errorMsg && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            {/* 1. Services selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-3">
                1. Select Services Required (Multi-Select)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SERVICES_DATA.map((srv) => {
                  const isChecked = selectedServices.includes(srv.title);
                  return (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => handleServiceToggle(srv.title)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        isChecked
                          ? 'border-cyan-400 bg-cyan-950/30 text-white font-medium shadow-sm'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{srv.title}</span>
                        {isChecked && <CheckCircle2 size={13} className="text-cyan-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Budget Range */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-3">
                2. Anticipated Investment Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {budgetOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setBudgetRange(opt)}
                    className={`py-3 px-3 rounded-xl border text-center text-xs font-mono transition-all cursor-pointer ${
                      budgetRange === opt
                        ? 'border-blue-400 bg-blue-950/40 text-cyan-300 font-semibold'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Desired Launch Timeline */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-3">
                3. Estimated Launch Timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timelineOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setTimeline(opt)}
                    className={`py-3 px-3 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                      timeline === opt
                        ? 'border-violet-400 bg-violet-950/40 text-violet-300 font-semibold'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Client Contact Details */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                4. Your Contact & Organization Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Marcus Sterling"
                    className="w-full bg-[#080b11] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Corporate Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m.sterling@enterprise.com"
                    className="w-full bg-[#080b11] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Organization / Brand *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Sterling Dynamics Inc."
                    className="w-full bg-[#080b11] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Current Website / Pitch Deck URL</label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://sterlingdynamics.com"
                    className="w-full bg-[#080b11] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Project Brief & Objectives</label>
                <textarea
                  rows={4}
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  placeholder="Describe your current bottleneck, desired architecture, commercial goals, or target launch date..."
                  className="w-full bg-[#080b11] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-y"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
              >
                {isSubmitting ? (
                  <span>Dispatching Brief...</span>
                ) : (
                  <>
                    <span>Submit Project Briefing</span>
                    <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                Strict NDA Protection · We never share customer data or project specifications.
              </p>
            </div>
          </form>

          {/* Right Sidebar: Direct Contacts & Booking (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick 30-min Technical Consultation Box */}
            <div className="bg-[#0e121c] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400">
                <Calendar size={14} />
                <span>Discovery Call Booking</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                Book a 30-Minute Architecture Review
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer an immediate conversation? Choose a convenient time slot with our Lead Solutions Architect.
              </p>

              <div className="space-y-2">
                {[
                  'Tomorrow, 2:00 PM GMT',
                  'Thursday, 10:30 AM EST',
                  'Friday, 4:00 PM SGT',
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedDate(slot)}
                    className={`w-full py-2.5 px-3 rounded-lg border text-left text-xs font-mono transition-colors cursor-pointer flex items-center justify-between ${
                      selectedDate === slot
                        ? 'border-cyan-400 bg-cyan-950/30 text-white font-medium'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{slot}</span>
                    <Clock size={12} className={selectedDate === slot ? 'text-cyan-400' : 'text-slate-500'} />
                  </button>
                ))}
              </div>
              <div className="text-[10px] text-slate-400">
                Direct Google Meet / Zoom link sent with calendar invite.
              </div>
            </div>

            {/* Direct Channels */}
            <div className="bg-[#0e121c] border border-white/10 rounded-2xl p-6 space-y-4 text-xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Direct Communication Channels
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">New Client Inquiries</div>
                    <a href="mailto:partner@ryvora.digital" className="text-slate-400 hover:text-white">
                      partner@ryvora.digital
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={15} className="text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Global Switchboard</div>
                    <a href="tel:+442079460921" className="text-slate-400 hover:text-white">
                      +44 (0) 20 7946 0921
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">London HQ (Mayfair)</div>
                    <div className="text-slate-400">
                      24 Berkeley Square, London, W1J 6HE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Assurance */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-3">
              <ShieldCheck size={20} className="text-cyan-400 shrink-0" />
              <div className="text-[11px] text-slate-300 leading-tight">
                Signed Non-Disclosure Agreements (NDA) executed prior to technical architecture disclosures.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
