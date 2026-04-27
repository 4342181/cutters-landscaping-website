import { motion } from "motion/react";

const services = [
  { title: "Landscape Design", image: "https://cutterslandscape.com/wp-content/uploads/2021/09/0489-3.jpg", href: "#contact" },
  { title: "Landscaping", image: "https://cutterslandscape.com/wp-content/uploads/2021/09/0483-1.png", href: "#contact" },
  { title: "Hardscaping", image: "https://cutterslandscape.com/wp-content/uploads/2021/09/0212-1-1.png", href: "#contact" },
  { title: "Pools", image: "https://cutterslandscape.com/wp-content/uploads/2024/07/Lakeway-Featured-Image-360x540.webp", href: "#contact" },
  { title: "Outdoor Living Spaces", image: "https://cutterslandscape.com/wp-content/uploads/2021/09/fireplace-6.png", href: "#contact" },
  { title: "Irrigation", image: "https://cutterslandscape.com/wp-content/uploads/2021/09/0461-3.png", href: "#contact" },
];

export default function Services() {
  return (
    <section id="services" aria-label="Our landscaping services" className="bg-cream">
      <div className="px-6 lg:px-12 pt-24 pb-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <p className="label-gold mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink font-light leading-[1.1]">
              Our Landscaping<br /><em className="text-gold">Services</em>
            </h2>
          </div>
          <div className="text-ink/60 text-base leading-relaxed font-light lg:pb-2">
            <p>We provide custom landscaping, outdoor living, and pool construction services for homeowners across Austin and Dallas, Texas.</p>
            <p className="mt-3">Our team specializes in complete design-to-build solutions — handling everything from initial concepts to final construction.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.a key={service.title} href={service.href} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.07 }} className="relative group overflow-hidden aspect-[4/3] block cursor-pointer">
            <img src={service.image} alt={`Cutters Landscaping — ${service.title}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-colors duration-500" />
            <div className="absolute top-5 left-5 w-7 h-7 border-l-2 border-t-2 border-gold opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white font-display text-2xl font-light group-hover:text-gold transition-colors duration-300">{service.title}</h3>
              <div className="mt-2 flex items-center gap-2 text-white/0 group-hover:text-gold/90 transition-all duration-300 text-[11px] font-semibold uppercase tracking-[0.2em]">Learn More <div className="w-4 h-px bg-gold" /></div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
