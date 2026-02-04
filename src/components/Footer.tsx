import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to Lumis", {
        description: "Check your email for your 10% off code.",
        position: "top-center",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-background border-t border-border/50 py-20 sm:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-xl mb-2 text-foreground tracking-wide">Lumis</h3>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
              Brilliance, redefined.
            </p>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Ethical luxury jewelry crafted for the modern woman 
              who values elegance without compromise.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-foreground">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#product" className="hover:text-foreground transition-colors duration-400">The Ring</a></li>
              <li><a href="#story" className="hover:text-foreground transition-colors duration-400">Our Story</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors duration-400">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-foreground">Policies</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="/shipping" className="hover:text-foreground transition-colors duration-400">Shipping</a></li>
              <li><a href="/returns" className="hover:text-foreground transition-colors duration-400">Returns</a></li>
              <li><a href="/privacy" className="hover:text-foreground transition-colors duration-400">Privacy</a></li>
              <li><a href="/terms" className="hover:text-foreground transition-colors duration-400">Terms</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-foreground">Get 10% Off</h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Subscribe for exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-border bg-transparent text-foreground placeholder:text-muted-foreground text-sm"
              />
              <Button 
                type="submit" 
                className="btn-gold-outline h-12 px-6 text-xs tracking-wider"
              >
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="section-divider mb-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2026 Lumis Fine Jewelry
          </p>
          <a 
            href="mailto:hello@lumis.com" 
            className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
          >
            hello@lumis.com
          </a>
        </div>
      </div>
    </footer>
  );
}
