import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Let's Work{" "}
            <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-4">
              Together
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with us for reliable, skilled, and efficient manpower
            solutions. Together, we can create lasting opportunities and achieve
            shared success.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-primary rounded-2xl p-6 text-white flex items-start gap-4 shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-xl text-accent">
              <svg
                className="w-6 h-6"
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
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                Phone Call
              </div>
              <div className="text-xl font-bold">+977-01-5928190</div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-primary rounded-2xl p-6 text-white flex items-start gap-4 shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-xl text-accent">
              <svg
                className="w-6 h-6"
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
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                Email Address
              </div>
              <div className="text-xl font-bold">fariglobal45@gmail.com</div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-primary rounded-2xl p-6 text-white flex items-start gap-4 shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-xl text-accent">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                Our Location
              </div>
              <div className="text-xl font-bold">
                Sinamangal-9, Kathmandu, Nepal
              </div>
            </div>
          </div>
        </div>

        {/* Offices Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 ">
          {/* Head Office */}
          <div className="bg-white/10 p-8 rounded-2xl text-black shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Head Office</h3>
            <p>Sinamangal-9, Kathmandu, Nepal</p>
            <p>Phone: +977-01-5928190</p>
            <p>Email: info@company.com</p>
          </div>

          {/* Associate Office */}
          <div className="bg-white/10 p-8 rounded-2xl text-black shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Associate Office</h3>
            <p>Address details will be shared soon</p>
            <p>Phone: +977-01-xxxxxxx</p>
            <p>Email: associate@company.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Map on the left */}
            <div className="lg:p-12 p-8">
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-white">
                Our{" "}
                <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-4">
                  Location
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Visit us at our head office in Sinamangal, Kathmandu, Nepal.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.46640322542!2d85.34867707546722!3d27.7028823761851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzEwLjQiTiA4NcKwMjEnMDQuNSJF!5e0!3m2!1sen!2snp!4v1774254218826!5m2!1sen!2snp"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Sinamangal, Kathmandu"
                ></iframe>
              </div>
            </div>

            {/* Contact Form on the right */}
            <div className="bg-white p-12 ">
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-primary">
                Send us a{" "}
                <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-4">
                  Message
                </span>
              </h2>
              <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                Have a question or want to work with us? Fill out the form and
                we will get back to you promptly.
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all"
                      placeholder="Mahendra Thapa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all"
                      placeholder="thapa@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all"
                    placeholder="Manpower Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-accent text-white font-black rounded-xl hover:bg-secondary transition-all shadow-xl shadow-primary/20 uppercase tracking-widest cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
