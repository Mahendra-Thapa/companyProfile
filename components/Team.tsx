import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  img: string;
};

const leadership: TeamMember[] = [
  {
    name: "Kumar Puri",
    role: "Chairman",
    img: "/teams/kumarImage.png",
  },
  {
    name: "Tapendra Saud",
    role: "Director",
    img: "/teams/tapendraSaudImage.png",
  },
  {
    name: "Santosh Shrestha",
    role: "Executive Director",
    img: "/teams/santoshShrestha.png",
  },
];

const management: TeamMember[] = [
  {
    name: "Ramesh Devkota",
    role: "Manager",
    img: "/teams/rameshDevkota.png",
  },
  {
    name: "Ishwor Khanal",
    role: "Marketing Manager",
    img: "/teams/IshworKhanalImage.png",
  },
  {
    name: "Hari Bhattrai",
    role: "Marketing Manager",
    img: "/teams/hari.png",
  },
];

function TeamSection({
  title,
  subtitle,
  members,
}: {
  title: string;
  subtitle: string;
  members: TeamMember[];
}) {
  return (
    <section className="mb-24">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-black text-primary mb-3">
          {title}
        </h3>
        <p className="text-slate-600">{subtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 items-center justify-center w-full">
        {members.map((member, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-xl shadow-slate-200/60 mb-6">
              <Image
                src={member.img}
                alt={member.name}
                width={1000}
                height={1000}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={i === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
            </div>

            {/* Text */}
            <h4 className="text-xl sm:text-2xl font-extrabold text-primary">
              {member.name}
            </h4>
            <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-accent">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Meet Our <span className="text-secondary">Team</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Passionate professionals working together to drive success and
            innovation.
          </p>
        </div>

        {/* Sections */}
        <TeamSection
          title="Leadership"
          subtitle="Visionaries guiding our mission and strategy"
          members={leadership}
        />

        <TeamSection
          title="Management"
          subtitle="Experts ensuring excellence in execution"
          members={management}
        />
      </div>
    </section>
  );
}