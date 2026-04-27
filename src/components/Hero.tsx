import { motion } from "motion/react";

const heroImages = [
  { src: "https://cutterslandscape.com/wp-content/uploads/2025/10/PEMBERTON-Featured-Image-360x540.webp", alt: "Cutters Landscaping — Pemberton pool and outdoor living project" },
  { src: "https://cutterslandscape.com/wp-content/uploads/2023/08/Bellaire-Featured-Image-360x540.webp", alt: "Cutters Landscaping — Bellaire outdoor living design" },
  { src: "https://cutterslandscape.com/wp-content/uploads/2019/08/Driftwood-Featured-Image-360x540.webp", alt: "Cutters Landscaping — Driftwood pool and hardscape" },
];

const certBadges = [
  { src: "https://cutterslandscape.com/wp-content/uploads/2025/05/certified-master-badge-2025-1024x1024.webp", alt: "Pool & Hot Tub Alliance Certified Master Pool Builder" },
  { src: "https://cutterslandscape.com/wp-content/uploads/2025/05/certiffied-watershape-badge-2025.webp", alt: "CWD Certified Watershape Designer" },
  { src: "https://cutterslandscape.com/wp-content/uploads/2025/05/certified-expert-badge-2025-1024x1024.webp", alt: "Pool & Hot Tub Alliance Certified Expert" },
];

export default function Hero() {
  return (
    <section id="hero" aria-label="Cutters Landscaping hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div key={img.src} className={`absolute inset-0 hero-img-${i + 1}`}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute top-24 left-6 lg:left-10 hidden md:flex items-center gap-3 z-10">
        {certBadges.map((badge) => (
          <img key={badge.src} src={badge.src} alt={badge.alt} className="h-14 w-14 object-contain drop-shadow-lg" />
        ))}
      </div>
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-gold text-[11px] font-semibold uppercase tracking-[0.4em] mb-5">
          Cutters Landscaping &amp; Pools &nbsp;·&nbsp; From Concept To Construction
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.0] mb-8 tracking-tight">
          Austin &amp; Dallas'<br />
          <em className="text-gold not-italic">Premier</em> Landscape<br />
          Design &amp; Build Studio
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Using innovative design concepts, eco-friendly construction practices, and unmatched customer service — we create extraordinary outdoor spaces for each and every one of our clients.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-gold text-center">Schedule A Consultation</a>
          <a href="https://cutterspools.com/pool-price-calculator/" target="_blank" rel="noopener noreferrer" className="btn-outline-white text-center">Design Your Pool</a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-sans">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
