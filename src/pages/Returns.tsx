import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Returns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
          
          <h1 className="font-serif text-3xl sm:text-4xl mb-8">Return Policy</h1>
          
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">60-Day Return Guarantee</h2>
              <p>
                We want you to love your Lumière piece. If you're not completely satisfied, you may 
                return your purchase within 60 days of delivery for a full refund or exchange.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Return Conditions</h2>
              <p>To be eligible for a return, items must be:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Unworn and in original condition</li>
                <li>Free from scratches, damage, or alterations</li>
                <li>Returned within 60 days of delivery date</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">How to Initiate a Return</h2>
              <p>
                To start a return, please email us at{" "}
                <a href="mailto:hello@lumiere.com" className="text-primary hover:underline">hello@lumiere.com</a>{" "}
                with your order number and reason for return. We will provide you with return instructions 
                and a shipping address.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Return Shipping</h2>
              <p>
                Customers are responsible for return shipping costs. We recommend using a trackable 
                shipping method as we cannot guarantee receipt of items without tracking.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Refund Processing</h2>
              <p>
                Once we receive and inspect your return, we will process your refund within 5-7 business 
                days. Refunds will be issued to the original payment method. Please allow additional time 
                for your bank to process the refund.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Exchanges</h2>
              <p>
                Need a different size? We're happy to exchange your ring for a different size, subject 
                to availability. Contact us to arrange an exchange.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
