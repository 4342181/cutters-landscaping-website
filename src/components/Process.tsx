import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  { num: "1", title: "Initial Consultation", detail: "We send our team out to your property to estimate costs. Already know what you want? Skip to step 3!" },
  { num: "2", title: "Design Development", detail: "A team of high-level designers create unique, beautiful plans for your new landscape." },
  { num: "3", title: "Revisions & Approval", detail: "Designs are sent to you for approval; we do the work, you get the final say." },
  { num: "4", title: "Building Begins", detail: "The project begins! Professional crews will begin working on your property." },
  { num: "5", title: "Final Walkthrough", detail: "We'll walk you through your new favorite place to be; your outdoor space." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineW = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);
  return (
    <section id="process" aria-label="Our process" className="bg-[#111111] text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="label-gold mb-4">How It Works</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">Our <em className="text-gold">Process</em></h2>
        </div>
        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-white/10">
            <motion.div style={{ width: lineW }} className="h-full bg-gold origin-left" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }} className="text-center">
                <div className="mx-auto mb-6 w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center">
                  <span className="font-display text-2xl text-gold font-light">{step.num}</span>
                </div>
                <h3 className="font-display text-xl text-white font-light mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="text-center mt-20">
          <a href="#contact" className="btn-gold">Schedule A Consultation</a>
        </motion.div>
      </div>
    </section>
  );
}
