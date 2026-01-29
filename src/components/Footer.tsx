import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4">Lumière</h3>
            <p className="text-background/60 text-sm max-w-sm mb-6">
              Brilliance, redefined. Ethical luxury jewelry crafted for the modern woman 
              who values elegance without compromise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@lumiere.com" className="text-background/60 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wide">Shop</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><a href="#product" className="hover:text-background transition-colors">Eternal Radiance Ring</a></li>
              <li><a href="#story" className="hover:text-background transition-colors">Our Story</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wide">Policies</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © 2026 Lumière Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.Q3c3f1hqE-HN.svg" alt="Visa" className="h-6 opacity-60" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMT83Xb.svg" alt="Mastercard" className="h-6 opacity-60" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy5Kpn.svg" alt="Amex" className="h-6 opacity-60" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/apple-pay.QWxEQ40_dFhY.svg" alt="Apple Pay" className="h-6 opacity-60" />
          </div>
        </div>
      </div>
    </footer>
  );
}
