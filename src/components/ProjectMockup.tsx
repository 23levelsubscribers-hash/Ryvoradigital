import React from 'react';
import { 
  Activity, 
  Cpu, 
  Car, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  Globe2,
  Lock
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'biotech' | 'architecture' | 'automotive' | 'saas' | 'luxury' | 'fintech';
  title: string;
  client: string;
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  type,
  title,
  client,
  className = '',
}) => {
  switch (type) {
    case 'biotech':
      return (
        <div className={`relative w-full h-full bg-[#0a0d16] border border-cyan-500/20 overflow-hidden flex flex-col justify-between p-5 rounded-xl ${className}`}>
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d2ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d2ff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          {/* Top header telemetry */}
          <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/15 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wider uppercase">
                AURA BIOTELEMETRY V4.2
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">LATENCY: 42ms · SECURE HIPAA</span>
          </div>

          {/* Central graphic: Biological radar & vital telemetry */}
          <div className="relative z-10 my-4 grid grid-cols-3 gap-3">
            <div className="bg-[#0f1422] p-3 rounded-lg border border-cyan-500/10 flex flex-col justify-between">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Cellular Age</span>
              <div className="text-xl font-bold font-mono text-white mt-1">31.4 <span className="text-xs text-cyan-400 font-normal">YRS</span></div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                <TrendingUp size={11} /> -4.6 yrs biological delta
              </div>
            </div>

            <div className="bg-[#0f1422] p-3 rounded-lg border border-cyan-500/10 flex flex-col justify-between col-span-2">
              <div className="flex justify-between items-center text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                <span>Metabolic Rhythm</span>
                <span className="text-cyan-400">98.2% OPTIMAL</span>
              </div>
              {/* Synthetic telemetry waveform */}
              <div className="h-9 flex items-end gap-1.5 mt-2">
                {[40, 65, 50, 85, 95, 70, 60, 90, 80, 75, 95, 88, 70, 85, 90].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-85"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom status indicators */}
          <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-cyan-500/10 pt-2.5">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-cyan-400" />
              <span className="text-[11px] font-mono text-slate-300">Continuous DNA Sync</span>
            </div>
            <span className="text-[11px] font-mono text-cyan-300">99.98% Telemetry Fidelity</span>
          </div>
        </div>
      );

    case 'architecture':
      return (
        <div className={`relative w-full h-full bg-[#0a0b0e] border border-slate-700/40 overflow-hidden flex flex-col justify-between p-5 rounded-xl ${className}`}>
          {/* Spatial 3D Wireframe backdrop */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
              <polygon points="50,220 200,60 350,220 200,260" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="200" y1="60" x2="200" y2="260" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="50" y1="220" x2="350" y2="220" stroke="#94a3b8" strokeWidth="0.8" />
              <circle cx="200" cy="140" r="45" stroke="#818cf8" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Layers size={14} className="text-indigo-400" />
              <span className="text-xs font-mono text-slate-200 font-semibold tracking-wider uppercase">
                KROMA SPATIAL ENGINE
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">3D WEBGL 60FPS</span>
          </div>

          <div className="relative z-10 my-auto py-2">
            <div className="max-w-[280px]">
              <div className="text-[11px] uppercase tracking-widest text-indigo-300 font-mono">Commission #408</div>
              <div className="text-lg font-bold text-white tracking-tight mt-1">Mayfair Private Residence</div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                Real-time solar irradiance calculation & material refraction models for 1,200m² heritage structure.
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-2.5">
            <span className="text-[11px] font-mono text-slate-300">Spatial Depth: 4K Raytraced</span>
            <span className="text-[11px] font-mono text-indigo-300">£42M Pipeline</span>
          </div>
        </div>
      );

    case 'automotive':
      return (
        <div className={`relative w-full h-full bg-[#08090f] border border-blue-500/25 overflow-hidden flex flex-col justify-between p-5 rounded-xl ${className}`}>
          {/* Dynamic lighting gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-blue-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Car size={15} className="text-blue-400" />
              <span className="text-xs font-mono text-blue-300 font-semibold tracking-wider uppercase">
                VELOCE DIGITAL SHOWROOM
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-300">ALL-ELECTRIC 1,200 HP</span>
          </div>

          {/* Central Car Configurator Visualization */}
          <div className="relative z-10 my-3 bg-[#0d101a] border border-blue-500/20 p-3 rounded-lg">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-medium">Bespoke Specification</span>
              <span className="font-mono text-cyan-400 font-semibold">$450,000 MSRP</span>
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <span className="text-[11px] text-slate-400">Aero Finish:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-white/40 ring-2 ring-blue-500" />
                <span className="w-3.5 h-3.5 rounded-full bg-blue-700 border border-white/20" />
                <span className="w-3.5 h-3.5 rounded-full bg-violet-800 border border-white/20" />
                <span className="w-3.5 h-3.5 rounded-full bg-neutral-200 border border-white/20" />
              </div>
              <span className="text-[10px] text-slate-400 ml-auto font-mono">Carbon Forged</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
              <div>
                <div className="text-sm font-bold text-white font-mono">1.9s</div>
                <div className="text-[10px] text-slate-400">0-100 km/h</div>
              </div>
              <div>
                <div className="text-sm font-bold text-white font-mono">350+</div>
                <div className="text-[10px] text-slate-400">km/h Top</div>
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-400 font-mono">620km</div>
                <div className="text-[10px] text-slate-400">Range</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-blue-500/15 pt-2.5">
            <span className="text-[11px] font-mono text-slate-300">Escrow Deposit: Encrypted</span>
            <span className="text-[11px] font-mono text-emerald-400 font-semibold">$14.2M Secured</span>
          </div>
        </div>
      );

    case 'saas':
      return (
        <div className={`relative w-full h-full bg-[#0a0a12] border border-violet-500/25 overflow-hidden flex flex-col justify-between p-5 rounded-xl ${className}`}>
          <div className="relative z-10 flex items-center justify-between border-b border-violet-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Cpu size={15} className="text-violet-400" />
              <span className="text-xs font-mono text-violet-300 font-semibold tracking-wider uppercase">
                NEXAFLOW AGENT SWARM
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">1.2M TASKS / DAY</span>
          </div>

          {/* Node workflow diagram */}
          <div className="relative z-10 my-3 flex items-center justify-between gap-2 px-2 py-3 bg-[#11121d] rounded-lg border border-violet-500/15">
            <div className="bg-[#171828] border border-violet-500/30 p-2 rounded text-center min-w-[70px]">
              <div className="text-[10px] text-violet-300 font-mono">Input RAG</div>
              <div className="text-xs font-bold text-white font-mono mt-0.5">8ms</div>
            </div>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-violet-500 to-indigo-500 relative">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 absolute -top-0.5 left-1/2 -translate-x-1/2 animate-ping" />
            </div>
            <div className="bg-[#1e1b4b] border border-indigo-500/40 p-2 rounded text-center min-w-[70px]">
              <div className="text-[10px] text-cyan-300 font-mono">Agent Logic</div>
              <div className="text-xs font-bold text-white font-mono mt-0.5">99.8%</div>
            </div>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-indigo-500 to-emerald-500" />
            <div className="bg-[#142321] border border-emerald-500/30 p-2 rounded text-center min-w-[70px]">
              <div className="text-[10px] text-emerald-300 font-mono">Output API</div>
              <div className="text-xs font-bold text-white font-mono mt-0.5">200 OK</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-violet-500/15 pt-2.5">
            <span className="text-[11px] font-mono text-slate-300">Live Telemetry: Stream Active</span>
            <span className="text-[11px] font-mono text-violet-300 font-semibold">3.4x ARR Expansion</span>
          </div>
        </div>
      );

    case 'luxury':
      return (
        <div className={`relative w-full h-full bg-[#0d0d12] border border-amber-500/20 overflow-hidden flex flex-col justify-between p-5 rounded-xl ${className}`}>
          {/* Elegant backdrop glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-amber-300" />
              <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider uppercase">
                MAISON SOLEIL PARIS
              </span>
            </div>
            <span className="text-[11px] font-mono text-amber-200/80">HAUTE PARFUMERIE</span>
          </div>

          <div className="relative z-10 my-3 text-center">
            <div className="text-xs font-serif italic text-amber-200/90 tracking-wide">
              « L'Élixir Nocturne · Extrait de Parfum »
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Top: Italian Bergamot · Heart: Rare Iris · Base: Madagascar Vanilla
            </div>
            <div className="mt-3 flex justify-center items-center gap-4 text-xs font-mono">
              <span className="text-slate-300">4.6% Conversion</span>
              <span className="text-amber-300">·</span>
              <span className="text-emerald-400">34% Repeat Cohort</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-2.5">
            <span className="text-[11px] font-mono text-slate-300">Shopify Plus Headless</span>
            <span className="text-[11px] font-mono text-amber-300 font-semibold">$4.8M First-Year GMV</span>
          </div>
        </div>
      );

    case 'fintech':
      return (
        <div className={`relative w-full h-full bg-[#0a0d14] border border-emerald-500/20 overflow-hidden flex flex-col justify-between p-5 rounded-xl ${className}`}>
          <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/15 pb-3">
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-emerald-400" />
              <span className="text-xs font-mono text-slate-200 font-semibold tracking-wider uppercase">
                STRATA WEALTH CONSOLE
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">BIOMETRIC PASSKEY ACTIVE</span>
          </div>

          <div className="relative z-10 my-3 bg-[#0d131f] p-3 rounded-lg border border-emerald-500/15">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Consolidated Liquidity</span>
              <span className="font-mono text-white font-bold text-sm">$48,290,000 USD</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full mt-2.5 overflow-hidden flex">
              <div style={{ width: '45%' }} className="bg-emerald-400 h-full" title="Global Equities" />
              <div style={{ width: '30%' }} className="bg-blue-400 h-full" title="Private Credit" />
              <div style={{ width: '25%' }} className="bg-violet-400 h-full" title="Real Assets" />
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mt-2">
              <span>Equities 45%</span>
              <span>Credit 30%</span>
              <span>Real Estate 25%</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/15 pt-2.5">
            <span className="text-[11px] font-mono text-slate-300">Audited by KPMG Cyber</span>
            <span className="text-[11px] font-mono text-emerald-400 font-semibold">$1.8B Tracked</span>
          </div>
        </div>
      );
  }
};

export default ProjectMockup;
