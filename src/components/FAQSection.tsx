import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  return (
    <section className="py-24 bg-white border-b border-[#EAEAEA] border-dashed">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black text-center mb-12">{title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-black"
            >
              <AccordionTrigger className="font-space-mono font-bold text-[18px] text-left text-black hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-space-mono text-[16px] leading-[1.5] text-black pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
