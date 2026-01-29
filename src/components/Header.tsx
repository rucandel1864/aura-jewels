import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CartDrawer } from "./CartDrawer";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "header-glass border-b border-primary/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a 
            href="/" 
            className="font-serif text-xl sm:text-2xl tracking-wide text-foreground hover:text-primary transition-colors"
          >
            Lumière
          </a>
          
          <nav className="hidden md:flex items-center gap-10 text-sm font-light">
            <a 
              href="#product" 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              The Ring
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
            <a 
              href="#story" 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              Our Story
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
            <a 
              href="#faq" 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <CartDrawer />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
