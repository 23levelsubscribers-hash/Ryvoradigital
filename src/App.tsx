import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import { CaseStudy } from './data/agencyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  
  // Pre-fill parameters when initiating an inquiry from Services or Case Studies
  const [contactInitialService, setContactInitialService] = useState<string>('Web Development');
  const [contactInitialScope, setContactInitialScope] = useState<string>('');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const handleInitiateService = (serviceTitle: string, estimatedScope?: string) => {
    setContactInitialService(serviceTitle);
    if (estimatedScope) {
      setContactInitialScope(estimatedScope);
    }
    navigateTo('contact');
  };

  const handleSelectProjectForInquiry = (service: string, projectName: string) => {
    setContactInitialService(service);
    setContactInitialScope(`Reference Commission: ${projectName}`);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-white">
      {/* Top Bar (Strict 3-zone contract) */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectCaseStudy={handleSelectCaseStudy}
            onSelectService={(serviceSlug) => {
              navigateTo('services');
              setTimeout(() => {
                const element = document.getElementById(serviceSlug);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onInitiateService={handleInitiateService}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onSelectCaseStudy={handleSelectCaseStudy}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'process' && (
          <ProcessPage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialService={contactInitialService}
            initialScopeDetails={contactInitialScope}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Case Study Detailed Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProjectForInquiry={handleSelectProjectForInquiry}
      />

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
