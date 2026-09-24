import React, { useState, useEffect } from 'react';
import { RyvoraLogo } from './RyvoraLogo';
import { GLOBAL_HUBS, SERVICES_DATA } from '../data/agencyData';
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
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
            hour12: false,
          }).format(new Date());
        } catch {
          times[hub.city] = '--:--';
        }
      });
      setHubTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#07080c] border-t border-white/10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand & Purpose (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <RyvoraLogo size="md" />
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed mt-2">
              We build digital experiences that grow businesses. An international technology and design agency partnering with ambitious founders and global enterprises.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-400 shrink-0" />
                <a href="mailto:inquiries@ryvora.digital" className="hover:text-white transition-colors">
                  inquiries@ryvora.digital
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-violet-400 shrink-0" />
                <a href="tel:+442079460921" className="hover:text-white transition-colors">
                  +44 (0) 20 7946 0921 (Global Switchboard)
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Agency
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Ryvora
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('process'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Delivery Framework
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer text-cyan-300 font-medium"
                >
                  Start Your Project
                </button>
              </li>
            </ul>
          </div>

          {/* Services Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Global Hubs
            </h4>
            <div className="space-y-2.5 text-xs">
              {GLOBAL_HUBS.map((hub) => (
                <div key={hub.city} className="flex items-center justify-between">
                  <span className="text-slate-300">{hub.city}</span>
                  <div className="flex items-center gap-1.5 font-mono text-cyan-400">
                    <Clock size={11} className="text-slate-500" />
                    <span>{hubTimes[hub.city] || '--:--'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Ryvora Digital Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>London</span>
            <span aria-hidden="true">·</span>
            <span>New York</span>
            <span aria-hidden="true">·</span>
            <span>Dubai</span>
            <span aria-hidden="true">·</span>
            <span>Singapore</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
