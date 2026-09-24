import React, { useState, useEffect } from 'react';
import { GLOBAL_HUBS, AGENCY_STATS } from '../data/agencyData';
import { RyvoraLogo } from '../components/RyvoraLogo';
import { 
  Globe2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [selectedHub, setSelectedHub] = useState<string>('London');
  const [hubTimes, setHubTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, string> = {};
      GLOBAL_HUBS.forEach((hub) => {
        try {
          times[hub.city] = new Intl.DateTimeFormat('en-GB', {
            timeZone: hub.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date());
        } catch {
          times[hub.city] = '--:--:--';
        }
      });
      setHubTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeHubData = GLOBAL_HUBS.find((h) => h.city === selectedHub) || GLOBAL_HUBS[0];

  const leaders = [
    {
      name: 'Julian Vance-Cross',
      role: 'Founder & Managing Director',
      background: 'Formerly Principal Director at leading European design studios. Specializes in brand architecture and institutional positioning.',
      location: 'London',
    },
    {
      name: 'Dr. Priya Ramanathan',
      role: 'Head of Engineering & Systems',
      background: 'PhD in Distributed Systems. Formerly Staff Infrastructure Engineer at high-scale cloud platforms. Oversees edge runtimes and security.',
      location: 'Singapore',
    },
    {
      name: 'Cedric Montclaire',
      role: 'Principal Design Director',
      background: 'Award-winning art director specializing in luxury typography, 3D WebGL interactions, and high-fidelity design tokens.',
      location: 'New York',
    },
    {
      name: 'Farhan Al-Mansoor',
      role: 'Head of Growth & Enterprise Partnerships',
      background: '12+ years directing performance marketing and server-side acquisition funnels across MENA and transatlantic markets.',
      location: 'Dubai',
    },
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          About Ryvora Digital
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
          The intersection of engineering rigor and aesthetic distinction.
        </h1>
        <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
          Ryvora was founded on a simple observation: conventional agencies force a choice between engineering brilliance and high-end design craft. We refuse that compromise.
        </p>
      </div>

      {/* Origin Manifesto & Numbers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-display font-bold text-white tracking-tight">
            Built for Ambitious Founders & Global Enterprises
          </h2>
          <p>
            When we partner with a client, we do not view ourselves as an outsourced vendor. We act as your specialized digital strike team. From day one, senior architects and principal designers embed into your commercial objectives to engineer platforms that capture market share.
          </p>
          <p>
            Every codebase we deploy is built from first principles: clean TypeScript, sub-50ms edge caching, zero cookie bloat, and server-side attribution tracking. We believe digital speed is a product feature, and design elegance is a commercial differentiator.
          </p>
          <div className="pt-3 flex items-center gap-3">
            <RyvoraLogo size="sm" />
            <span className="text-xs font-mono text-slate-400">· Global Technology Practice</span>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#0e121c] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-white/10 pb-3">
            Ryvora Benchmark Metrics
          </div>
          <div className="space-y-4">
            {AGENCY_STATS.map((stat, i) => (
              <div key={i} className="flex justify-between items-baseline border-b border-white/5 pb-3">
                <span className="text-sm text-slate-300">{stat.label}</span>
                <span className="text-xl font-bold font-mono text-cyan-300">{stat.value}</span>
              </div>
            ))}
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-sm text-slate-300">Continuous Sprints Shipped</span>
              <span className="text-xl font-bold font-mono text-violet-300">140+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Hubs Interactive Showcase */}
      <div className="bg-[#0b0e17] border border-white/10 rounded-3xl p-8 sm:p-12">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2 flex items-center gap-2">
            <Globe2 size={14} />
            <span>Global Distributed Footprint</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Follow the Sun: Four International Hubs
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Our synchronous engineering sprints leverage timezone overlapping across London, New York, Dubai, and Singapore to ensure rapid delivery velocity.
          </p>
        </div>

        {/* Hub Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {GLOBAL_HUBS.map((hub) => (
            <button
              key={hub.city}
              onClick={() => setSelectedHub(hub.city)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                selectedHub === hub.city
                  ? 'bg-blue-600/20 border-cyan-400 text-white shadow-md'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="text-sm font-semibold">{hub.city}</div>
              <div className="text-xs text-slate-400 mt-0.5">{hub.country}</div>
              <div className="mt-2 font-mono text-xs text-cyan-300 flex items-center gap-1">
                <Clock size={11} />
                <span>{hubTimes[hub.city] || '--:--'}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Hub Detail Spotlight */}
        <div className="p-6 bg-[#080a11] rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
              Active Focus · {activeHubData.city} Practice
            </div>
            <div className="text-xl font-display font-bold text-white">
              {activeHubData.focus}
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <MapPin size={12} className="text-slate-500" />
              <span>{activeHubData.district}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{activeHubData.coordinates}</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors cursor-pointer"
          >
            Connect with {activeHubData.city} Team
          </button>
        </div>
      </div>

      {/* Leadership Team */}
      <div>
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            Leadership
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Partner-Level Leadership on Every Project
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            No delegating your brief to junior subcontractors. Our senior partners actively architect your strategy and review every line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="bg-[#0e121c] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-cyan-500/30 transition-colors"
            >
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  {leader.location}
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                  {leader.name}
                </h3>
                <div className="text-xs text-indigo-300 font-medium mt-0.5">
                  {leader.role}
                </div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {leader.background}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Ryvora Senior Partner
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operating Principles */}
      <div className="border-t border-white/10 pt-16">
        <h2 className="text-2xl font-display font-bold text-white mb-8">
          The Four Architectural Invariants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
            <div className="text-cyan-400 font-mono text-xs">01. SPEED AS A FEATURE</div>
            <div className="font-semibold text-white">Sub-50ms Edge Response</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              We engineer zero-layout-shift, highly optimized web bundles that load instantly across all global networks.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
            <div className="text-violet-400 font-mono text-xs">02. ZERO TEMPLATE LAZINESS</div>
            <div className="font-semibold text-white">Bespoke Design Systems</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Every curve, font pairing, and micro-interaction is custom-crafted to establish your category leadership.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
            <div className="text-blue-400 font-mono text-xs">03. DATA INTEGRITY</div>
            <div className="font-semibold text-white">Server-Side Tracking</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              We deploy Meta Conversions API (CAPI) and first-party analytics that survive adblockers and privacy shifts.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
            <div className="text-emerald-400 font-mono text-xs">04. AI AGENTIC UTILITY</div>
            <div className="font-semibold text-white">Real Commercial Value</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              We deploy AI models only where they measurably automate operations, increase retention, or drive ARR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
