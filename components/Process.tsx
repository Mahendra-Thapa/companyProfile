export default function Process() {
  return (
    <section id="process" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_var (--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-accent/20">
            Our Methodology
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
            Our Seamless <span className="text-accent italic">Workflow</span>
          </h2>
          <p className="text-slate-300 text-lg">
            We follow a rigorous and transparent recruitment process to ensure the perfect match between talent and opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0" />
          
          {[
            {
              step: "01",
              title: "Requirement Analysis",
              desc: "Deep dive into client needs, industry standards, and candidate profiles.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
            },
            {
              step: "02",
              title: "Digital Sourcing",
              desc: "Leveraging our vast database and global network to find top-tier talent.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              ),
            },
            {
              step: "03",
              title: "Rigorous Screening",
              desc: "Multi-stage interviews and skill assessments to verify competence.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              step: "04",
              title: "Global Deployment",
              desc: "Managing logistics and documentation for a smooth transition.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="relative z-10 group">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-accent/5 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-3xl mb-8 flex items-center justify-center text-primary relative overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl shadow-accent/10">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  {item.icon}
                </div>
                <div className="text-accent font-black text-sm uppercase tracking-widest mb-4">Step {item.step}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
