import { useState } from "react";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to Lumière", {
        description: "Check your email for your 10% off code.",
        position: "top-center",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-card border-t border-border py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl mb-2 text-foreground">Lumière</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Brilliance, redefined.
            </p>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Ethical luxury jewelry crafted for the modern woman 
              who values elegance without compromise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@lumiere.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="font-medium mb-4 text-sm tracking-wide text-foreground">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#product" className="hover:text-primary transition-colors">The Ring</a></li>
              <li><a href="#story" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-medium mb-4 text-sm tracking-wide text-foreground">Policies</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/shipping" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="/returns" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-medium mb-4 text-sm tracking-wide text-foreground">Get 10% Off</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 rounded-none border-border bg-transparent text-foreground placeholder:text-muted-foreground"
              />
              <Button 
                type="submit" 
                className="btn-gold h-10 px-4 rounded-none"
              >
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Lumière Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 opacity-50">
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.Q3c3f1hqE-HN.svg" alt="Visa" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMT83Xb.svg" alt="Mastercard" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy5Kpn.svg" alt="Amex" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/apple-pay.QWxEQ40_dFhY.svg" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
