
import React, { useState } from 'react';
import { mitiFaqs } from '../lib/data';


interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-emerald-900  py-2 px-4  duration-200  ease-in-out">
      <button
        className="w-full group py-5 flex justify-between hover:cursor-pointer   items-center text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-xl transform transition-transform duration-300 ease-in-out group-hover:translate-x-[8px] font-medium text-gray-900">{question}</span>
        
        {/* Animated Plus/Minus Icon */}
        <span className="ml-6 shrink-0 text-primary">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} 
            />
          </svg>
        </span>
      </button>

      {/* The Smooth Animation Container */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-slate-700 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQS = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="border-t-[1px] px-15 py-24 flex flex-col gap-4  border-emerald-900 w-full ">
        <h1 className="mono-font tracking-wide text-xl text-primary">[ FAQS ]</h1>

        <div className="rounded-2xl border border-gray-100 cursor-pointer ">
        {mitiFaqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onClick={() => toggleItem(faq.id)}
          />
        ))}
      </div>
      
    </div>
  )
}

export default FAQS
