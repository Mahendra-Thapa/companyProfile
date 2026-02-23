export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Meet Our <span className="text-secondary">Leadership</span></h2>
          <p className="text-slate-600 text-lg">
            Dedicated professionals committed to connecting the right talent with the right opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Tapendra Saud", img: "/placeholder.png", role: "Executive Director" },
            { name: "Santosh Shrestha",  role: "Managing Director" },
            { name: "Hari Bhattrai", role: "Marketing Manager" },
          ].map((member, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="w-full aspect-square bg-white rounded-3xl overflow-hidden mb-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <div className="w-full h-full flex items-center justify-center text-slate-300 font-bold uppercase tracking-widest text-xs">Portrait</div>
              </div>
              <h3 className="text-2xl font-black text-primary mb-1">{member.name}</h3>
              <p className="text-accent uppercase tracking-widest text-xs font-bold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
