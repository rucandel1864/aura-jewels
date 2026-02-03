import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to Lumière", {
        description: "Check your email for your welcome gift.",
        position: "top-center",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-background border-t border-border py-20 sm:py-28">
      <div className="px-10 sm:px-16 lg:px-24">
        <div className="grid md:grid-cols-12 gap-16 mb-20 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="font-serif text-lg mb-6 text-foreground">Lumière</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Ethical luxury jewelry crafted for the modern woman.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-foreground">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#product" className="hover:text-foreground transition-opacity duration-500">The Ring</a></li>
              <li><a href="#story" className="hover:text-foreground transition-opacity duration-500">Our Story</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-opacity duration-500">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-foreground">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="/shipping" className="hover:text-foreground transition-opacity duration-500">Shipping</a></li>
              <li><a href="/returns" className="hover:text-foreground transition-opacity duration-500">Returns</a></li>
              <li><a href="/privacy" className="hover:text-foreground transition-opacity duration-500">Privacy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Subscribe for exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-border bg-transparent text-foreground placeholder:text-muted-foreground text-sm flex-1"
              />
              <Button 
                type="submit" 
                className="btn-gold-outline h-12 px-6"
              >
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="section-divider mb-10 max-w-6xl mx-auto" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
          <p className="text-[10px] text-muted-foreground tracking-wide">
            © 2026 Lumière
          </p>
          <a 
            href="mailto:hello@lumiere.com" 
            className="text-[10px] text-muted-foreground hover:text-foreground transition-opacity tracking-wide"
          >
            hello@lumiere.com
          </a>
        </div>
      </div>
    </footer>
  );
}
