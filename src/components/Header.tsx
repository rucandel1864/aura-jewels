import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#product", label: "The Ring" },
  { href: "#story", label: "Our Story" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || mobileMenuOpen
            ? "header-glass" 
            : "bg-transparent"
        }`}
      >
        <div className="px-6 sm:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left - Menu + Search */}
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/70 hover:text-foreground hover:bg-transparent p-0 h-auto w-auto"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" strokeWidth={1} />
                ) : (
                  <Menu className="h-4 w-4" strokeWidth={1} />
                )}
              </Button>
              <span className="hidden sm:inline text-[10px] tracking-[0.25em] uppercase text-foreground/50">
                Search
              </span>
            </div>

            {/* Center - Logo */}
            <a 
              href="/" 
              className="absolute left-1/2 -translate-x-1/2 font-serif text-lg sm:text-xl tracking-[0.1em] text-foreground"
            >
              Lumière
            </a>

            {/* Right - Icons */}
            <div className="flex items-center gap-6">
              <CartDrawer />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-10"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="font-serif text-3xl text-foreground hover:opacity-50 transition-opacity duration-500"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <a 
                  href="mailto:hello@lumiere.com" 
                  className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
                >
                  Contact
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
