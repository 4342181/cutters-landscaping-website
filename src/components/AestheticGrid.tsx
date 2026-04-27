import { motion } from "motion/react";

const projects = [
  { name: "Pemberton", image: "https://cutterslandscape.com/wp-content/uploads/2025/10/PEMBERTON-Featured-Image-360x540.webp", featured: true },
  { name: "Lakeway", image: "https://cutterslandscape.com/wp-content/uploads/2024/07/Lakeway-Featured-Image-360x540.webp" },
  { name: "Driftwood", image: "https://cutterslandscape.com/wp-content/uploads/2019/08/Driftwood-Featured-Image-360x540.webp" },
  { name: "Bellaire", image: "https://cutterslandscape.com/wp-content/uploads/2023/08/Bellaire-Featured-Image-360x540.webp" },
  { name: "Montopolis", image: "https://cutterslandscape.com/wp-content/uploads/2024/12/Montopolis-featured-image-360x540.webp" },
  { name: "North Lake", image: "https://cutterslandscape.com/wp-content/uploads/2025/11/North-Lake-Featured-Image-360x540.webp" },
  { name: "Barton Hills", image: "https://cutterslandscape.com/wp-content/uploads/2021/05/Barton-Hills-Featured-Image-360x540.webp" },
  { name: "Sweetwater", image: "https://cutterslandscape.com/wp-content/uploads/0021/01/Sweetwater-portfolio-cover-photo-360x540.webp" },
  { name: "Bright Sky", image: "https://cutterslandscape.com/wp-content/uploads/2021/01/Bright-Sky-Cover-Photo-360x540.webp" },
  { name: "Prospect Hill", image: "https://cutterslandscape.com/wp-content/uploads/2021/01/Prospect-Hill-Featured-Image-360x540.webp" },
];

export default function AestheticGrid() {
  const featured = projects[0];
  const grid = projects.slice(1);
  return (
    <section id="portfolio" aria-label="Cutters Landscaping portfolio" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="label-gold mb-4">Our Work</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink font-light leading-[1.1]">See The Cutters<br /><em className="text-gold">Difference</em></h2>
          </div>
          <p className="text-ink/50 text-sm max-w-xs leading-relaxed font-light">Every photo is a real Austin or Dallas property we designed and built — from concept to final walkthrough.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 relative group overflow-hidden cursor-pointer" style={{ minHeight: "480px" }}>
            <img src={featured.image} alt={`Cutters Landscaping ${featured.name} project`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ minHeight: "480px" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-gold opacity-70" />
            <div className="absolute bottom-6 left-6">
              <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-1">Featured Project</p>
              <h3 className="font-display text-3xl text-white font-light">{featured.name}</h3>
            </div>
          </motion.div>
          <div className="lg:col-span-7 grid grid-cols-3 gap-4">
            {grid.map((project, i) => (
              <motion.div key={project.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="relative group overflow-hidden cursor-pointer aspect-[3/4]">
                <img src={project.image} alt={`Cutters Landscaping ${project.name} project`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-[9px] font-semibold uppercase tracking-[0.2em] truncate">{project.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline-dark">Start Your Project</a>
        </div>
      </div>
    </section>
  );
}
