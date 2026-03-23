import React from "react";

export default function Services() {
  const sections = [
    {
      id: "skilled",
      heading: "Service Industries - Skilled ",
      description:
        "Expertly sourced professionals for specialized industries requiring high levels of technical expertise and certification.",
      data: [
        {
          title: "Healthcare",
          roles: [
            "Doctors",
            "Nurses",
            "Medical Technicians",
            "Pharmacists",
            "Administrators",
          ],
          img: "/services/healthCare.png",
          color: "from-cyan-400 to-blue-500",
        },
        {
          title: "Engineering",
          roles: [
            "Civil",
            "Mechanical",
            "Petroleum",
            "Petrochemicals",
            "Software",
          ],
          img: "/services/engineering.png",
          color: "from-yellow-400 to-orange-500",
        },
        {
          title: "Finance",
          roles: [
            "Controllers",
            "Managers",
            "Accountants",
            "Auditors",
            "Analysts",
          ],
          img: "/services/finance.png",
          color: "from-blue-400 to-emerald-500",
        },
        {
          title: "Education",
          roles: [
            "Teachers",
            "Professors",
            "Administrators",
            "Tutors",
            "Training Specialists",
          ],
          img: "/services/education.png",
          color: "from-orange-400 to-red-500",
        },
        {
          title: "Hospitality",
          roles: [
            "Hotel Managers",
            "Restaurant Managers",
            "Event Planners",
            "Chefs",
            "Sommeliers",
          ],
          img: "/services/hospitality.png",
          color: "from-emerald-400 to-teal-500",
        },
        {
          title: "Construction",
          roles: [
            "Project Managers",
            "Architects",
            "Surveyors",
            "Structural Engineers",
            "Site Supervisors",
          ],
          img: "/services/construction.png",
          color: "from-yellow-400 to-green-500",
        },
        {
          title: "Manufacturing",
          roles: [
            "Skilled Technicians",
            "Machine Operators",
            "QC Specialists",
            "Production Managers",
          ],
          img: "/services/manufacturing.png",
          color: "from-orange-400 to-yellow-500",
        },
        {
          title: "Oil & Gas",
          roles: [
            "Petroleum Engineers",
            "Geologists",
            "Drilling Engineers",
            "Offshore Engineers",
            "HSE",
          ],
          img: "/services/oilgas.png",
          color: "from-cyan-400 to-blue-600",
        },
      ],
    },
    {
      id: "unskilled",
      heading: "Service Industries - Unskilled",
      description:
        "Reliable support staff and general labor solutions to maintain efficiency across your operational and service sectors.",
      data: [
        {
          title: "General Labor",
          roles: [
            "Warehouse Workers",
            "Factory Workers",
            "Movers",
            "Assemblers",
            "Packers",
          ],
          img: "/services/general-labor.png",
          color: "from-slate-400 to-slate-600",
        },
        {
          title: "Hospitality Support",
          roles: [
            "Waiters",
            "Housekeepers",
            "Bellhops",
            "Kitchen Assistants",
            "Dishwashers",
          ],
          img: "/services/hospitality-support.png",
          color: "from-teal-400 to-emerald-600",
        },
        {
          title: "Construction Labor",
          roles: [
            "Construction Laborers",
            "Demolition Workers",
            "Road Workers",
            "Scaffolders",
          ],
          img: "/services/const-labor.png",
          color: "from-orange-500 to-amber-700",
        },
        {
          title: "Manufacturing Helpers",
          roles: [
            "Material Handlers",
            "Production Assistants",
            "Packaging Assistants",
            "Line Workers",
          ],
          img: "/services/mfg-helpers.png",
          color: "from-amber-400 to-orange-600",
        },
        {
          title: "Beautician Services",
          roles: [
            "Hairdresser",
            "Facial Specialist",
            "Nail Artist",
            "Manicure Specialist",
            "Therapist",
          ],
          img: "/services/beautician.png",
          color: "from-pink-400 to-rose-500",
        },
        {
          title: "Cleaning Services",
          roles: [
            "Annual Contracts",
            "Office Boy Supply",
            "Marble Restoration",
            "Floor Polishing",
            "Pest Control",
            "Fogging Service",
          ],
          img: "/services/cleaning.png",
          color: "from-sky-400 to-blue-500",
          isLarge: false,
        },
      ],
    },
    {
      id: "domestic",
      heading: "Domestic Services",
      description:
        "Dedicated and trustworthy domestic help for household management, childcare, and specialized home care needs.",
      data: [
        {
          title: "Domestic Services",
          roles: [
            "Housemaids",
            "Babysitter",
            "Cook",
            "Elderly Caregiver",
            "Driver",
            "Gardener",
            "Cleaner",
            "Laundry & Ironing",
          ],
          img: "/services/domestic.png",
          color: "from-green-400 to-teal-600",
          isLarge: false,
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Global Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-primary/10">
            Our Expertise
          </div>
          <h2 className="text-5xl font-black text-primary mb-4">
            Comprehensive Solutions
          </h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
        </div>

        {sections.map(section => (
          <div key={section.id} className="mb-24 last:mb-0">
            {/* Section Heading & P */}
            <div className="mb-12">
              <h3 className="text-3xl font-black text-primary mb-4 flex items-center">
                <span className="w-8 h-1 bg-secondary mr-4 rounded-full" />
                {section.heading}
              </h3>
              <p className="text-slate-600 text-lg max-w-4xl border-l-4 border-slate-200 pl-6 italic">
                {section.description}
              </p>
            </div>

            {/* Grid for this specific section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.data.map((industry, i) => (
                <div
                  key={i}
                  className={`group p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl flex flex-col items-center h-full text-center ${
                    industry.isLarge ? "xl:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`w-full aspect-video rounded-2xl mb-6 overflow-hidden border-4 border-slate-50 bg-gradient-to-br ${industry.color} shadow-lg`}
                  >
                    <img
                      src={industry.img}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <h4 className="text-xl font-black mb-4 text-primary uppercase tracking-tight">
                    {industry.title}
                  </h4>

                  <ul
                    className={`space-y-2 flex-grow text-start w-full ${industry.isLarge ? "grid grid-cols-1 md:grid-cols-2 gap-x-4" : ""}`}
                  >
                    {industry.roles.map((role, idx) => (
                      <li
                        key={idx}
                        className="text-slate-500 text-sm flex items-start"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0" />
                        <span className="leading-tight">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
