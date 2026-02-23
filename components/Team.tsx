import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Meet Our <span className="text-secondary">Leadership</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Dedicated professionals committed to connecting the right talent
            with the right opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              name: "Kumar Puri ",
              img: "/teams/kumarImage.png",
              role: "Chearman",
            },
            {
              name: "Tapendra Saud",
              img: "/teams/tapendraSaudImage.png",
              role: "Director",
            },
            {
              name: "Santosh Shrestha",
              img: "/teams/santoshShrestha.png",
              role: "Executive Director",
            },
            {
              name: "Ramesh Devkota ",
              img: "/teams/rameshDevkota.png",
              role: "Manager",
            },
            {
              name: "Ishwor Khanal",
              img: "/teams/IshworKhanalImage.png",
              role: "Marketing Manager",
            },
            // {
            //   name: "Hari Bhattrai ",
            //   img: "/teams/hari.png",
            //   role: "Marketing Manager",
            // },
            
          ].map((member, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image Card */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6 bg-white border border-slate-100 shadow-lg shadow-slate-200/60">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  className="object-cover   group-hover:scale-105 transition-all duration-500"
                  priority={i === 0}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              </div>

              {/* Text */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight">
                {member.name}
              </h3>

              <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-accent">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
