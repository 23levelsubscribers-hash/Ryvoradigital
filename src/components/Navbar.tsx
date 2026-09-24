import React, { useState } from 'react';
import { RyvoraLogo } from './RyvoraLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090b10]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single visual element) */}
        <button
          onClick={() => handleNavClick('home')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group text-left cursor-pointer transition-transform hover:opacity-95"
          aria-label="Ryvora Digital Home"
        >
          <RyvoraLogo size="sm" />
        </button>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg shadow-md shadow-blue-600/20 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 group"
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0b0e16] px-4 py-5 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
