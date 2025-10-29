import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onLearnMore: () => void;
}

export function ServiceCard({ icon: Icon, title, description, onLearnMore }: ServiceCardProps) {
  return (
    <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 hover:border-black transition-all duration-300">
      <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-black" />
      </div>
      <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-3">{title}</h3>
      <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-6">{description}</p>
      <Button 
        onClick={onLearnMore}
        variant="outline"
        className="bg-transparent text-black border border-black hover:bg-black hover:text-white rounded-md transition-all font-inter font-semibold text-[16px]"
      >
        Learn More
      </Button>
    </div>
  );
}
