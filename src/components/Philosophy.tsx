import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="about" aria-label="About Cutters Landscaping" className="bg-[#111111] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col justify-center px-10 py-20 lg:px-16 xl:px-24 max-w-2xl mx-auto w-full">
          <p className="label-gold mb-5">Who We Are</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
            About Cutters<br /><em className="text-gold">Landscaping</em>
          </h2>
          <div className="space-y-5 text-white/60 text-base leading-relaxed font-light">
            <p>We design and build custom outdoor living spaces for homeowners across Austin and Dallas, Texas — specializing in high-end landscaping, patios, and custom pools.</p>
            <p>From initial design to final construction, our team delivers complete design-to-build solutions tailored to your property, lifestyle, and long-term goals.</p>
            <p>Working in Texas requires experience with limestone soil, extreme heat, and local conditions — and we build every project to perform in both the Austin and Dallas markets.</p>
          </div>
          <a href="#services" className="mt-10 inline-flex items-center gap-3 text-gold text-[12px] font-semibold uppercase tracking-[0.2em] hover:gap-5 transition-all group">
            Our Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-3 gap-6">
            {[{ num: "10+", label: "Years in Austin" }, { num: "500+", label: "Projects Built" }, { num: "2", label: "Texas Markets" }].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl text-gold font-light">{stat.num}</div>
                <div className="text-white/40 text-[11px] uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="relative overflow-hidden min-h-[500px] lg:min-h-0">
          <img src="https://cutterslandscape.com/wp-content/uploads/2021/09/0461-3.png" alt="Cutters Landscaping — gravel backyard with metal pergola" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 w-44 h-44 shadow-2xl border-2 border-white/10 overflow-hidden hidden sm:block">
            <img src="https://cutterslandscape.com/wp-content/uploads/2021/09/fireplace-6.png" alt="Outdoor fire pit seating area" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-gold opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
