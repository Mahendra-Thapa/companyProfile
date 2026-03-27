import Link from "next/link";

export default function Progress() {
  return (
    <section>
      <div className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Founded", value: "2025" },
              { label: "Countries Served", value: "7+" },
              { label: "Placements", value: "500+" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat, i) => (
              <div
                key={i}
                className=" text-white p-6 rounded-2xl border border-slate-100 text-center shadow-xl shadow-primary/5 bg-primary"
              >
                <div className="text-2xl md:text-3xl font-black  mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
