"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How do I apply for a job in Bulgaria or Romania?",
    answer: "To apply, please contact our recruitment office directly. You can reach us via phone at +977-01-5928190 or email your CV to fariglobal45@gmail.com. Our team will guide you through the available openings and the documentation process.",
  },
  {
    question: "What documents are required for international recruitment?",
    answer: "Typically, you will need a valid passport (minimum 6 months validity), updated CV, educational certificates, and professional references. For specific countries like Kuwait, additional medical clearances and police background checks may be required.",
  },
  {
    question: "Do you provide visa and relocation assistance?",
    answer: "Yes! We provide comprehensive support including visa processing, work permit documentation, and guidance on local housing and airfare. Our goal is to make your transition as smooth as possible.",
  },
  {
    question: "Are there any fees for candidates?",
    answer: "In compliance with international labor laws, we do not charge candidates any recruitment fees for placing them with our partner employers. Any specific third-party costs like government visa fees will be clearly communicated upfront.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in Skilled (Healthcare, Engineering, Finance), Unskilled (General Labor, Hospitality Support), and Domestic Services (Housemaids, Caregivers). You can view the full list in our 'Services' section.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50  relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
              <HelpCircle size={32} />
            </div>
             <h2 className="text-4xl font-black text-primary ">
            FAQS
          </h2>
          </div>
         
          <p className="text-slate-500 text-lg">
            Everything you need to know about our recruitment process.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`border rounded-[2rem] transition-all duration-300 ${
                activeIndex === index 
                ? "border-primary bg-slate-50 shadow-md" 
                : "border-slate-200 bg-white hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-3 px-6 md:py-4 md:px-8 text-left"
              >
                <span className={`text-lg font-bold transition-colors ${
                  activeIndex === index ? "text-primary" : "text-slate-700"
                }`}>
                  {item.question}
                </span>
                <div className={`shrink-0 ml-4 p-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 md:px-8 pb-3 md:pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}