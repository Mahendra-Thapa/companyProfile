"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// We extract just the first few items from your existing data structure
const previewData = [
  {
    title: "Healthcare",
    roles: ["Doctors", "Nurses", "Medical Technicians"],
    img: "/services/healthCare.png",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Engineering",
    roles: ["Civil", "Mechanical", "Software"],
    img: "/services/engineering.png",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Finance",
    roles: ["Controllers", "Managers", "Accountants"],
    img: "/services/finance.png",
    color: "from-blue-400 to-emerald-500",
  },
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Logic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 border border-primary/10">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary">
              Comprehensive Solutions
            </h2>
          </div>
          
          <Link 
            href="/services" 
            className="group flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
          >
            Explore All Industries 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        {/* Grid: 3 Data Cards + 1 "View All" Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewData.map((industry, i) => (
            <div
              key={i}
              className="group p-6 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className={`w-full aspect-video rounded-2xl mb-6 overflow-hidden bg-gradient-to-br ${industry.color} shadow-lg`}>
                <img
                  src={industry.img}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="text-lg font-black mb-4 text-primary uppercase">{industry.title}</h4>
              <ul className="space-y-2 w-full text-start">
                {industry.roles.map((role, idx) => (
                  <li key={idx} className="text-slate-500 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* THE "VIEW ALL" INTERACTIVE CARD */}
          <Link href="/services" className="group relative">
            <div className="h-full p-8 bg-primary rounded-[2.5rem] flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:bg-primary/90 group-hover:shadow-2xl group-hover:-translate-y-2 border-4 border-dashed border-white/20">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ArrowRight className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-black text-white mb-2">View All Services</h4>
              <p className="text-blue-100 text-sm">
                Discover our skilled, unskilled, and domestic staffing solutions worldwide.
              </p>
              
              {/* Decorative circle for the card */}
              <div className="absolute bottom-4 right-4 opacity-10">
                 <ArrowRight size={100} className="text-white -rotate-45" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}