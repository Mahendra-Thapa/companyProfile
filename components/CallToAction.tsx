import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary leading-tight">
          Ready to Elevate Your Workforce?
        </h2>

        <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed">
          Partner with{" "}
          <span className="font-semibold text-primary">
            Fari Global Overseas
          </span>{" "}
          for reliable, compliant, and efficient recruitment solutions
          tailored to your needs.
        </p>

        <Link
          href="/contact"
          className="
            inline-flex items-center justify-center
            px-10 py-5
            bg-primary text-white
            font-bold
            rounded-2xl
            hover:bg-secondary
            transition-all duration-300
            shadow-xl shadow-primary/20
            uppercase tracking-widest
          "
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}