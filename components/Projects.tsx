export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-1.5 bg-slate-100 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              Our Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Successfully Managed <span className="text-secondary">Projects</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We have successfully managed numerous manpower supply and recruitment projects across the Gulf region, providing skilled and reliable human resources to various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman", "Bahrain", "Malaysia", "Libya"].map((country, i) => (
              <div key={i} className="px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 text-primary font-bold flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                {country}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Construction", desc: "Skilled labor for infrastructure projects.", icon: "🏗️" },
            { title: "Hospitality", desc: "Expert staff for hotels and resorts.", icon: "🏨" },
            { title: "Healthcare", desc: "Qualified medical professionals.", icon: "🏥" },
          ].map((field, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-3xl">{field.icon}</div>
              <h3 className="text-xl font-black mb-2">{field.title}</h3>
              <p className="text-slate-500 text-sm">{field.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
