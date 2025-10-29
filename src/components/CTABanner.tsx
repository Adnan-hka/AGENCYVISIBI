import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description?: string;
  buttonText: string;
  onButtonClick: () => void;
  variant?: 'primary' | 'accent';
}

export function CTABanner({ title, description, buttonText, onButtonClick, variant = 'primary' }: CTABannerProps) {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-white mb-4">{title}</h2>
        {description && <p className="font-space-mono text-[18px] leading-[1.5] text-white/90 mb-8">{description}</p>}
        <Button 
          onClick={onButtonClick}
          className="bg-white text-black hover:bg-transparent hover:text-white border border-white rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center gap-2 transition-all"
        >
          {buttonText} <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
