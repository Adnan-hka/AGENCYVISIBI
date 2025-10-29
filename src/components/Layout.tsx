import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Layout({ children, onNavigate, currentPage }: LayoutProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="text-black font-inter font-semibold tracking-tight">
                <span className="text-xl">VISIBI</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => onNavigate('home')}
                className={`font-inter font-semibold text-[16px] transition-colors ${
                  currentPage === 'home' ? 'text-black' : 'text-black/70 hover:text-black'
                }`}
              >
                Home
              </button>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="font-inter font-semibold text-[16px] text-black/70 hover:text-black transition-colors flex items-center gap-1">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-48 bg-white rounded-lg shadow-lg border border-[#EAEAEA] py-2">
                      <button
                        onClick={() => { onNavigate('services'); setServicesOpen(false); }}
                        className="w-full text-left px-4 py-2 font-inter font-semibold text-[14px] text-black hover:bg-black/5 transition-colors"
                      >
                        All Services
                      </button>
                      <button
                        onClick={() => { onNavigate('geo'); setServicesOpen(false); }}
                        className="w-full text-left px-4 py-2 font-inter font-semibold text-[14px] text-black hover:bg-black/5 transition-colors"
                      >
                        GEO
                      </button>
                      <button
                        onClick={() => { onNavigate('seo'); setServicesOpen(false); }}
                        className="w-full text-left px-4 py-2 font-inter font-semibold text-[14px] text-black hover:bg-black/5 transition-colors"
                      >
                        SEO
                      </button>
                      <button
                        onClick={() => { onNavigate('ppc'); setServicesOpen(false); }}
                        className="w-full text-left px-4 py-2 font-inter font-semibold text-[14px] text-black hover:bg-black/5 transition-colors"
                      >
                        PPC
                      </button>
                      <button
                        onClick={() => { onNavigate('tool'); setServicesOpen(false); }}
                        className="w-full text-left px-4 py-2 font-inter font-semibold text-[14px] text-black hover:bg-black/5 transition-colors"
                      >
                        VISIBI Tool
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => onNavigate('insights')}
                className={`font-inter font-semibold text-[16px] transition-colors ${
                  currentPage === 'insights' ? 'text-black' : 'text-black/70 hover:text-black'
                }`}
              >
                Insights
              </button>

              <button
                onClick={() => onNavigate('about')}
                className={`font-inter font-semibold text-[16px] transition-colors ${
                  currentPage === 'about' ? 'text-black' : 'text-black/70 hover:text-black'
                }`}
              >
                About
              </button>

              <button
                onClick={() => onNavigate('how-we-work')}
                className={`font-inter font-semibold text-[16px] transition-colors ${
                  currentPage === 'how-we-work' ? 'text-black' : 'text-black/70 hover:text-black'
                }`}
              >
                How We Work
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className={`font-inter font-semibold text-[16px] transition-colors ${
                  currentPage === 'contact' ? 'text-black' : 'text-black/70 hover:text-black'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="bg-transparent text-black border border-black hover:bg-black hover:text-white font-inter font-semibold text-[16px] px-6 py-2 rounded-md transition-all"
              >
                Request My Gen AI Visibility Audit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-black"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-black/10">
              <div className="flex flex-col space-y-4">
                <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left">Home</button>
                <button onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left">Services</button>
                <button onClick={() => { onNavigate('geo'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left pl-4">→ GEO</button>
                <button onClick={() => { onNavigate('seo'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left pl-4">→ SEO</button>
                <button onClick={() => { onNavigate('ppc'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left pl-4">→ PPC</button>
                <button onClick={() => { onNavigate('tool'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left pl-4">→ VISIBI Tool</button>
                <button onClick={() => { onNavigate('insights'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left">Insights</button>
                <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left">About</button>
                <button onClick={() => { onNavigate('how-we-work'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left">How We Work</button>
                <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="text-sm text-black/70 hover:text-black text-left">Contact</button>
                <Button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="bg-black hover:bg-black/90 text-white rounded-lg">
                  Get Gen AI Visibility Audit
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#EAEAEA] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="font-space-mono font-bold text-[16px] mb-4 text-black">Quick Links</h3>
              <ul className="space-y-2 font-space-mono text-[14px]">
                <li><button onClick={() => onNavigate('home')} className="text-black hover:underline transition-colors">Home</button></li>
                <li><button onClick={() => onNavigate('about')} className="text-black hover:underline transition-colors">About</button></li>
                <li><button onClick={() => onNavigate('insights')} className="text-black hover:underline transition-colors">Insights</button></li>
                <li><button onClick={() => onNavigate('how-we-work')} className="text-black hover:underline transition-colors">How We Work</button></li>
                <li><button onClick={() => onNavigate('contact')} className="text-black hover:underline transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-space-mono font-bold text-[16px] mb-4 text-black">Services</h3>
              <ul className="space-y-2 font-space-mono text-[14px]">
                <li><button onClick={() => onNavigate('geo')} className="text-black hover:underline transition-colors">GEO</button></li>
                <li><button onClick={() => onNavigate('seo')} className="text-black hover:underline transition-colors">SEO & Content</button></li>
                <li><button onClick={() => onNavigate('ppc')} className="text-black hover:underline transition-colors">Paid Media</button></li>
                <li><button onClick={() => onNavigate('tool')} className="text-black hover:underline transition-colors">VISIBI Tool</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-space-mono font-bold text-[16px] mb-4 text-black">Contact</h3>
              <ul className="space-y-2 font-space-mono text-[14px]">
                <li><a href="mailto:hello@govisibi.agency" className="text-black hover:underline transition-colors">hello@govisibi.agency</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-space-mono font-bold text-[16px] mb-4 text-black">Legal</h3>
              <ul className="space-y-2 font-space-mono text-[14px]">
                <li><button className="text-black hover:underline transition-colors">Privacy Policy</button></li>
                <li><button className="text-black hover:underline transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#EAEAEA] pt-8">
            <p className="text-center text-[#7A7A7A] font-space-mono text-[12px]">© 2025 VISIBI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
