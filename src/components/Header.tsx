import { CartDrawer } from "./CartDrawer";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="font-serif text-xl sm:text-2xl tracking-wide">
            Lumière
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-light">
            <a href="#product" className="hover:text-primary transition-colors">Shop</a>
            <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  );
}
