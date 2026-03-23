import React from "react";
import {
  Globe2,
  CheckCircle2,
  ArrowUpRight,
  Building2,
  HardHat,
  Users,
} from "lucide-react";

// Using your exact sections data
const sections = [
  {
    id: "skilled",
    heading: "Skilled Manpower Deployments",
    description:
      "High-level technical staffing solutions successfully executed for multinational corporations.",
    data: [
      {
        title: "Healthcare",
        roles: ["Doctors", "Nurses", "Medical Technicians"],
        color: "from-cyan-400 to-blue-500",
        projectCount: "150+ Deployed",
      },
      {
        title: "Engineering",
        roles: ["Civil", "Mechanical", "Petroleum"],
        color: "from-yellow-400 to-orange-500",
        projectCount: "85+ Projects",
      },
      {
        title: "Oil & Gas",
        roles: ["Petroleum Engineers", "Drilling Engineers", "HSE"],
        color: "from-cyan-400 to-blue-600",
        projectCount: "40+ Sites",
      },
      // ... rest of your skilled data
    ],
  },
  {
    id: "unskilled",
    heading: "Industrial & Support Projects",
    description:
      "Large-scale workforce management for construction, manufacturing, and hospitality sectors.",
    data: [
      {
        title: "General Labor",
        roles: ["Warehouse Workers", "Factory Workers"],
        color: "from-slate-400 to-slate-600",
        projectCount: "500+ Staff",
      },
      {
        title: "Construction Labor",
        roles: ["Laborers", "Scaffolders"],
        color: "from-orange-500 to-amber-700",
        projectCount: "12 Major Sites",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HEADER: GLOBAL REACH --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              <Globe2 className="w-3 h-3 mr-2" /> Project Footprint
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-primary">
              Global <span className="text-secondary">Execution</span> Track
              Record
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our projects span across the most demanding environments in the
              Gulf and beyond. We don't just supply staff; we manage the human
              capital that drives infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Saudi Arabia",
              "UAE",
              "Qatar",
              "Kuwait",
              "Oman",
              "Bahrain",
              "Malaysia",
            ].map((country, i) => (
              <div
                key={i}
                className="px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 text-primary font-bold flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
                {country}
              </div>
            ))}
          </div>
        </div>

        {/* --- PROJECT HIGHLIGHTS BY CATEGORY --- */}
        {sections
          .filter(s => s.id !== "domestic")
          .map(section => (
            <div key={section.id} className="mb-24 last:mb-0">
              <div className="mb-12 flex items-baseline gap-4">
                <h3 className="text-2xl font-black text-primary uppercase tracking-wider">
                  {section.heading}
                </h3>
                <div className="h-px flex-grow bg-slate-100" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.data.slice(0, 4).map((project, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-slate-50 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        {section.id === "skilled" ? (
                          <HardHat className="w-7 h-7" />
                        ) : (
                          <Users className="w-7 h-7" />
                        )}
                      </div>
                      <span className="text-xs font-black text-secondary bg-secondary/10 px-4 py-2 rounded-full uppercase tracking-widest">
                        {project.projectCount || "Completed"}
                      </span>
                    </div>

                    <h4 className="text-2xl font-black text-primary mb-4">
                      {project.title} Excellence
                    </h4>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.roles.slice(0, 3).map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="text-[10px] font-bold uppercase tracking-tight bg-white px-3 py-1 rounded-md border border-slate-200 text-slate-500"
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      Successfully delivered tailored manpower solutions for{" "}
                      {project.title} operations, ensuring 100% compliance with
                      local labor laws and international standards.
                    </p>

                    {/* <button className="flex items-center gap-2 text-primary font-bold text-sm group-hover:text-secondary transition-colors">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </button> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
