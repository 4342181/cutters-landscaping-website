import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Financing", href: "#contact" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Design Your Pool", href: "https://cutterspools.com/pool-price-calculator/", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <motion.nav
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_40px_rgba(0,0,0,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
          <a href="/" aria-label="Cutters Landscaping home" className="flex items-center shrink-0">
            <img
              src="/cutters-logo-black.svg"
              alt="Cutters Landscaping"
              className={`h-11 w-11 transition-all duration-500 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </a>
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`text-[12px] font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                  scrolled ? "text-ink hover:text-gold" : "text-white/90 hover:text-gold"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex flex-col items-end gap-0 text-[11px] font-medium transition-colors duration-500 ${scrolled ? "text-ink" : "text-white/80"}`}>
              <a href="tel:+15125601968" className="hover:text-gold transition-colors flex items-center gap-1"><Phone size={11} /> Austin: (512) 560-1968</a>
              <a href="tel:+14693988566" className="hover:text-gold transition-colors flex items-center gap-1"><Phone size={11} /> Dallas: (469) 398-8566</a>
            </div>
            <a href="#contact" className="px-6 py-2.5 bg-gold text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold-dark transition-colors">Contact Us</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className={`lg:hidden p-2 transition-colors ${scrolled ? "text-ink" : "text-white"}`}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[76px] left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="text-[12px] font-semibold text-ink uppercase tracking-[0.15em] py-3.5 border-b border-gray-100 hover:text-gold transition-colors">{link.name}</a>
              ))}
              <div className="pt-4 flex flex-col gap-1.5 text-[12px] text-ink">
                <a href="tel:+15125601968" className="flex items-center gap-2 hover:text-gold"><Phone size={12} /> Austin: (512) 560-1968</a>
                <a href="tel:+14693988566" className="flex items-center gap-2 hover:text-gold"><Phone size={12} /> Dallas: (469) 398-8566</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 text-center py-3.5 bg-gold text-white font-bold uppercase tracking-[0.15em]">Contact Us</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
