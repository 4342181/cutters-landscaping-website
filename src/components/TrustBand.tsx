import { motion } from "motion/react";

const values = [
  { icon: "🤝", title: "Aggie Owned & Operated", description: "Cutters Landscaping was founded by Texas A&M graduates, built on honesty, integrity, and a high code of ethics." },
  { icon: "✏️", title: "Custom High-Level Designs", description: "On every project, we bring industry experts who have years of experience designing landscapes across Texas." },
  { icon: "📞", title: "Responsive, Knowledgeable Team", description: "Service is one of our highest priorities; with an on-call team, we ensure all of your questions are answered in a timely manner." },
  { icon: "🌿", title: "Eco-Friendly Services", description: "Our goal is to create sustainable designs that support the environment by saving time, money, and energy." },
];

export default function TrustBand() {
  return (
    <section aria-label="Why Cutters Landscaping" className="bg-[#111111] text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="label-gold mb-4">Austin Landscapers You Can Trust</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
            Cutters: <em className="text-gold">A Cut Above</em><br />the Rest
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {values.map((val, i) => (
            <motion.div key={val.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group text-center">
              <div className="mx-auto mb-6 w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-2xl group-hover:border-gold transition-colors duration-300">{val.icon}</div>
              <div className="w-8 h-px bg-gold mx-auto mb-5" />
              <h3 className="font-display text-xl text-white font-light mb-4">{val.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">{val.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-20 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-2xl md:text-3xl text-white/80 font-light text-center md:text-left">Ready to transform your outdoor space?</p>
          <a href="#contact" className="btn-gold shrink-0">Schedule A Consultation</a>
        </motion.div>
      </div>
    </section>
  );
}
