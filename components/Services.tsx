import {
  Globe,
  ShieldCheck,
  FileText,
  Stethoscope,
  BookOpen,
  Handshake,
} from "lucide-react";
export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-primary/10">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary">
            Comprehensive <span className="text-secondary">Solutions</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We provide specialized recruitment and manpower services tailored to
            meet the dynamic needs of global employers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Overseas Recruitment",
              desc: "Expert sourcing of skilled, semi-skilled, and unskilled talent globally.",
              icon: Globe,
              color: "bg-blue-500",
            },
            {
              title: "Screening & Selection",
              desc: "Rigorous interviews and background checks for quality assurance.",
              icon: ShieldCheck,
              color: "bg-emerald-500",
            },
            {
              title: "Visa Assistance",
              desc: "Full documentation and legal compliance for smooth deployment.",
              icon: FileText,
              color: "bg-amber-500",
            },
            {
              title: "Medical Oversight",
              desc: "Coordinating international health standards and medical clearances.",
              icon: Stethoscope,
              color: "bg-rose-500",
            },
            {
              title: "Candidate Orientation",
              desc: "Pre-departure cultural and professional preparation for success.",
              icon: BookOpen,
              color: "bg-indigo-500",
            },
            {
              title: "Employer Advisory",
              desc: "Customized strategic consulting for large-scale manpower projects.",
              icon: Handshake,
              color: "bg-cyan-500",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-start h-full"
            >
             
              <div className="w-20 h-20 bg-accent rounded-3xl mb-8 flex items-center justify-center text-primary relative overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl shadow-accent/10">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <service.icon />
              </div>
              <h3 className="text-2xl font-black mb-4 text-primary group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed group-hover:text-slate-600 transition-colors flex-grow">
                {service.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-slate-50 w-full flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Professional Service
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
