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
                    className=" w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/5 "
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
            <h4 className="text-lg font-bold mb-8 flex items-center gap-3 text-white">
              <span className="w-2 h-2 bg-accent rounded-full" /> Contact Us
            </h4>
            <p className="text-slate-400 mb-6 text-sm">
              Reach out directly to discuss your recruitment needs or share your
              CV.
            </p>

            <div className="flex flex-col gap-4">
              {/* Email Link */}
              <a
                href="mailto:fariglobal45@gmail.com"
                className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 transition-all hover:bg-white/10 hover:border-accent/50"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                    Email Your CV
                  </span>
                  <span className="text-sm text-white font-medium">
                    fariglobal45@gmail.com
                  </span>
                </div>
                <div className="bg-accent text-primary p-2 rounded-md group-hover:scale-110 transition-transform">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </a>

              {/* Phone Link (Optional - replace with your number) */}
              <a
                href="tel:+977015928190"
                className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 transition-all hover:bg-white/10 hover:border-accent/50"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                    Call Agent
                  </span>
                  <span className="text-sm text-white font-medium">
                    +977-01-5928190
                  </span>
                </div>
                <div className="bg-accent text-primary p-2 rounded-md group-hover:scale-110 transition-transform">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </a>
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
