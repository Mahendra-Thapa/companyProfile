import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      
      {/* Stats Section - Adjusted for Home Page visibility */}
      <div className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Founded", value: "2025" },
              { label: "Countries Served", value: "7+" },
              { label: "Placements", value: "500+" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat, i) => (
              <div key={i} className=" text-white p-6 rounded-2xl border border-slate-100 text-center shadow-xl shadow-primary/5 bg-primary">
                <div className="text-2xl md:text-3xl font-black  mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <About />
      <Services />
      <Process />

      <div className="py-28 bg-slate-50">
  <div className="max-w-3xl mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary leading-tight">
      Ready to Elevate Your Workforce?
    </h2>

    <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed">
      Partner with <span className="font-semibold text-primary">Fari Global Overseas</span> for
      reliable, compliant, and efficient recruitment solutions tailored to your needs.
    </p>

    <a
      href="/contact"
      className="
        inline-flex items-center justify-center
        px-10 py-5
        bg-primary text-white
        font-bold
        rounded-2xl
        hover:bg-secondary
        transition-all duration-300
        shadow-xl shadow-primary/20
        uppercase tracking-widest
      "
    >
      Contact Us Now
    </a>
  </div>
</div>
    </main>
  );
}
