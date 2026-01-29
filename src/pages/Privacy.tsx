import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
          
          <h1 className="font-serif text-3xl sm:text-4xl mb-8">Privacy Policy</h1>
          
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p className="text-sm">Last updated: January 2026</p>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Information We Collect</h2>
              <p>When you make a purchase or interact with our site, we collect:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Contact information (name, email, phone number)</li>
                <li>Shipping and billing address</li>
                <li>Payment information (processed securely through Shopify Payments)</li>
                <li>Order history and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Process and fulfill your orders</li>
                <li>Communicate about your order status</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Information Sharing</h2>
              <p>
                We do not sell your personal information. We share data only with service providers 
                who help us operate our business (payment processors, shipping carriers) and as 
                required by law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. 
                All payment transactions are encrypted and processed through Shopify's secure payment system.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Contact Us</h2>
              <p>
                For privacy-related questions, please contact us at{" "}
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
