import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center pt-20 overflow-hidden bg-primary"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary z-10" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Grid added only to place image properly */}
        <div className="grid lg:grid-cols-12 items-center">
          
          {/* LEFT — unchanged */}
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
                className="px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all text-center shadow-xl shadow-accent/10"
              >
                Explore More
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center backdrop-blur-sm"
              >
                Get Human Resources
              </a>
            </div>
          </div>

          {/* RIGHT — image only */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="relative w-full max-w-md h-[510px] rounded-3xl overflow-hidden ">
              <Image
                src="/hero-section.png"
                alt="Hero Image"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}