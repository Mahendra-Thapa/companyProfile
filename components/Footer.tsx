import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-black text-white tracking-tighter leading-none">
                FARI GLOBAL
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-accent">
                Overseas Pvt. Ltd.
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              A dynamic and forward-thinking company committed to delivering
              excellence in manpower solutions through professionalism and
              integrity.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook },
                { icon: Instagram },
                { icon: Twitter },
                { icon: Linkedin },
              ].map((data, i) => {
                const Icon = data.icon;
                return (
                  <div
                    key={i}
                    className="
          w-10 h-10
          bg-white/5
          rounded-lg
          flex items-center justify-center
          hover:bg-white/10
          transition-colors
          cursor-pointer
          border border-white/5
        "
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-3  text-white">
              <span className="w-2 h-2 bg-accent rounded-full " /> Quick Links
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="/" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Company
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  className="hover:text-accent transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-accent transition-colors"
                >
                  Our Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-3 text-white">
              <span className="w-2 h-2 bg-accent rounded-full" /> Services
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li>Overseas Recruitment</li>
              <li>Candidate Screening</li>
              <li>Visa Assistance</li>
              <li>Medical Examinations</li>
              <li>Pre-Departure Orientation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-3 text-white ">
              <span className="w-2 h-2 bg-accent rounded-full" /> Newsletter
            </h4>
            <p className="text-slate-400 mb-6 text-sm">
              Subscribe to stay updated with our latest opportunities.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent w-full"
              />
              <button className="bg-accent text-primary px-4 py-3 rounded-lg hover:bg-accent-hover transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500 font-medium">
          <div className="text-center md:text-left">
            © 2025 Fari Global Overseas Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
