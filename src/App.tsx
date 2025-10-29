import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/pages/HomePage';
import { ServicesPage } from './components/pages/ServicesPage';
import { GEOPage } from './components/pages/GEOPage';
import { SEOPage } from './components/pages/SEOPage';
import { PPCPage } from './components/pages/PPCPage';
import { ToolPage } from './components/pages/ToolPage';
import { HowWeWorkPage } from './components/pages/HowWeWorkPage';
import { AboutPage } from './components/pages/AboutPage';
import { InsightsPage } from './components/pages/InsightsPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigation} />;
      case 'geo':
        return <GEOPage onNavigate={handleNavigation} />;
      case 'seo':
        return <SEOPage onNavigate={handleNavigation} />;
      case 'ppc':
        return <PPCPage onNavigate={handleNavigation} />;
      case 'tool':
        return <ToolPage onNavigate={handleNavigation} />;
      case 'how-we-work':
        return <HowWeWorkPage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'insights':
        return <InsightsPage onNavigate={handleNavigation} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <Layout onNavigate={handleNavigation} currentPage={currentPage}>
      {renderPage()}
    </Layout>
  );
}
