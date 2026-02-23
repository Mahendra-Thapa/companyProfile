import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-1/2" />

          <div className="grid lg:grid-cols-12 relative z-10">
            {/* Image section */}
            <div className="lg:col-span-5 aspect-square lg:aspect-auto bg-slate-800 relative overflow-hidden group">
              <Image
                src="/teams/kumar.png"
                alt="Kumar Puri"
                fill
                priority
                className="object-cover object-center  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Content section */}
            <div className="lg:col-span-7 p-12 lg:p-20 flex flex-col justify-center">
              <svg
                className="w-16 h-16 text-accent mb-8 opacity-50"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path
                  d="M10 8v8H6v-8h4zM10 0H0v20h10V0zM28 8v8h-4v-8h4zM28 0H18v20h10V0z"
                  transform="translate(2 6)"
                />
              </svg>

              <div className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8 italic">
                "At Fari Global Overseas Pvt. Ltd., we believe in simplicity,
                promptness, and efficiency. Our commitment is to provide quality
                recruitment services that meet the expectations of our valued
                clients."
              </div>

              <div>
                <div className="text-2xl font-black text-accent mb-1">
                  Kumar Puri
                </div>
                <div className="text-slate-400 uppercase tracking-widest text-sm font-bold">
                  Chairman
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
