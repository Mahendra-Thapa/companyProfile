import React from "react";
import {
  Target,
  Rocket,
  Handshake,
  ShieldCheck,
  Star,
  Users,
  ClipboardCheck,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function CompanyValues() {
  const coreValues = [
    {
      title: "Trust",
      desc: "A high performing, high quality organization dedicated to HR services – a trusted partner and resource for our customers.",
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      title: "Integrity",
      desc: "Our business is built on a foundation of honesty and integrity.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Excellence",
      desc: "We deliver what we promise, while working to the highest quality standards.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Accountability",
      desc: "We accept responsibility for our actions. We use our experience and commitment to support your business.",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      title: "Honesty",
      desc: "Maintain the highest levels of professionalism, honesty and fairness in our relationship.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- 1. VISION & MISSION (Side by Side) --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Vision Card */}
          <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
            {/* Vision Card Header */}
            <div className="flex items-center gap-6 mb-8">
              {/* Icon Container */}
              <div className="w-16 h-16 shrink-0 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                <Target className="w-8 h-8" />
              </div>

              {/* Heading */}
              <h3 className="text-3xl font-black text-primary uppercase tracking-tight leading-none">
                Our Vision
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed italic">
              "We are committed and continuously strive to become the preferred
              source for employment and human resource services. We are
              dedicated to serving with highest levels quality and ensure growth
              and success to our customers."
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-10 bg-primary rounded-[3rem] text-white shadow-xl shadow-primary/20 group hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center gap-6 mb-8">
              {/* Icon Container */}
              <div className="w-16 h-16 shrink-0 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                <Rocket className="w-8 h-8" />
              </div>

              {/* Heading */}
              <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none">
                Our Mission
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed italic">
              "We are committed and continuously strive to become the preferred
              source for employment and human resource services. We are
              dedicated to serving our customers with highest levels quality of
              service and ensure growth and success."
            </p>
          </div>
        </div>

        {/* --- 2. WHY CHOOSE US & STRENGTH (Unified Content) --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              Why Choose Us
            </div>
            <h3 className="text-4xl font-black text-primary mb-6">
              Expertise & <span className="text-secondary">Track Record</span>
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                With the immense support of our recruiters and head hunters,
                your company can improve the ability to achieve key success
                metrics. One of the key features of our recruitment agencies is
                the quality group of advisors who are here to work with your
                business.
              </p>
              <p>
                We have established a reputation of being one of the most
                professional, trustworthy and dependable Placement companies
                around the world, with a successful track record of over four
                decades.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="text-secondary mb-4 w-10 h-10" />
              <h4 className="font-bold text-primary mb-2">
                Effective Planning
              </h4>
              <p className="text-xs text-slate-500">
                We design questionnaires to give us a clear understanding of
                your specific requirements.
              </p>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="text-secondary mb-4 w-10 h-10" />
              <h4 className="font-bold text-primary mb-2">Our Presence</h4>
              <p className="text-xs text-slate-500">
                Widespread network of offices in metros and tier cities,
                including international tie-ups.
              </p>
            </div>
          </div>
        </div>

        {/* --- 3. CORE VALUES GRID --- */}
        <div className="text-center">
          <h3 className="text-3xl font-black text-primary mb-4 uppercase">
            Our Core Values
          </h3>
          <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:border-secondary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  {val.icon}
                </div>
                <h5 className="font-black text-primary mb-3 uppercase text-sm tracking-wider group-hover:text-secondary transition-colors">
                  {val.title}
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
