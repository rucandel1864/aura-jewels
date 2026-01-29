import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
          
          <h1 className="font-serif text-3xl sm:text-4xl mb-8">Terms of Service</h1>
          
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p className="text-sm">Last updated: January 2026</p>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Agreement to Terms</h2>
              <p>
                By accessing or using our website and purchasing our products, you agree to be bound 
                by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Products and Pricing</h2>
              <p>
                We strive to display accurate product descriptions and pricing. However, we reserve 
                the right to correct any errors and to change prices without notice. All prices are 
                in USD unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Orders and Payment</h2>
              <p>
                By placing an order, you represent that you are of legal age and that all information 
                provided is accurate. We reserve the right to refuse or cancel any order for any reason.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and designs, is the property 
                of Lumière Fine Jewelry and is protected by copyright laws. You may not reproduce, 
                distribute, or use our content without permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Limitation of Liability</h2>
              <p>
                Lumière Fine Jewelry shall not be liable for any indirect, incidental, or consequential 
                damages arising from your use of our products or services. Our liability is limited to 
                the purchase price of the product.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Product Care</h2>
              <p>
                Our jewelry is crafted with care, but proper maintenance is required. We are not 
                responsible for damage resulting from improper care, accidents, or normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Changes to Terms</h2>
              <p>
                We may update these terms from time to time. Continued use of our website after changes 
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Contact</h2>
              <p>
                Questions about these Terms? Contact us at{" "}
                <a href="mailto:hello@lumiere.com" className="text-primary hover:underline">hello@lumiere.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
