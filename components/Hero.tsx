import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center pt-20 overflow-hidden bg-primary"
    >
      {/* Background - Kept your original radial gradient and opacity logic */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary z-10" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 items-center">
          
          {/* LEFT — Your Text Content + New Pill Button Design */}
          <div className="lg:col-span-7 max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-black text-white leading-[1.1] mb-6 animate-in slide-in-from-left duration-700">
              Connecting{" "}
              <span className="text-accent underline decoration-4 underline-offset-8">
                Opportunities
              </span>{" "}
              Across Global Markets
            </h1>

            <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed animate-in slide-in-from-left duration-700 delay-100">
              Fari Global Overseas Pvt. Ltd. is a dynamic recruitment agency
              committed to delivering excellence through professionalism and
              integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-700 delay-200">
              <a
                href="/about"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-accent-hover transition-all text-center shadow-xl shadow-accent/10"
              >
                Explore More
                <span className="bg-primary text-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                   <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4L7 4C6.72386 4 6.5 3.77614 6.5 3.5C6.5 3.22386 6.72386 3 7 3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 8C12 8.27614 11.7761 8.5 11.5 8.5C11.2239 8.5 11 8.27614 11 8L11 4.70711L4.35355 11.3536C4.15829 11.5489 3.84171 11.5489 3.64645 11.3536Z" fill="currentColor"></path></svg>
                </span>
              </a>
              <a
                href="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center backdrop-blur-sm"
              >
                Get Human Resources
                <span className="border border-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                   <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4L7 4C6.72386 4 6.5 3.77614 6.5 3.5C6.5 3.22386 6.72386 3 7 3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 8C12 8.27614 11.7761 8.5 11.5 8.5C11.2239 8.5 11 8.27614 11 8L11 4.70711L4.35355 11.3536C4.15829 11.5489 3.84171 11.5489 3.64645 11.3536Z" fill="currentColor"></path></svg>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT — The "Previous Design" Image Card */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="relative w-full max-w-md h-[480px] p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] shadow-2xl animate-in zoom-in duration-1000">
              <div className="relative w-full h-[85%] rounded-[30px] overflow-hidden">
                <Image
                  src="/hero-image.png"
                  alt="Recruitment Services"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              {/* <div className="h-[15%] flex items-center justify-between px-4">
                 <div className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center text-white">
                    ↗
                 </div>
                 <p className="text-white font-medium text-lg">Our Global Projects</p>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}