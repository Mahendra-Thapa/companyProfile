export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-50 rounded-bl-[10rem] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              About Our Company
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-primary">
              Connecting Talent with <span className="text-secondary underline decoration-secondary/20 decoration-8 underline-offset-4">Opportunity</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                At Fari Global Overseas Pvt. Ltd, we are dedicated to delivering excellence through integrity, professionalism, and a strong commitment to quality. Our mission is to provide reliable and efficient solutions that meet the diverse needs of our clients across global markets.
              </p>
              <p>
                We believe that trust, transparency, and consistent performance are the foundation of long-term success. With a forward-thinking vision and a passionate team, we continuously work to improve our services and expand our global presence.
              </p>
            </div>
            
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 shadow-lg shadow-primary/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-2 text-xl">Quality Excellence</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Adhering to the highest ethical and professional standards in international recruitment.</p>
              </div>
              <div className="group">
                <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 shadow-lg shadow-secondary/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-2 text-xl">Fast Track Results</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Efficient screening and prompt mobilization to meet your urgent manpower needs.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 italic font-medium">
                 {/* This would be the Office/Team image */}
                 [Company Office Image]
              </div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-3xl -z-10 rotate-12" />
            <div className="absolute -top-10 -left-10 w-24 h-24 border-4 border-secondary/20 rounded-full -z-10" />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-slate-50 animate-bounce-slow">
              <div className="text-4xl font-black text-primary">2025</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Established</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
