import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Shipping() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
          
          <h1 className="font-serif text-3xl sm:text-4xl mb-8">Shipping Policy</h1>
          
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Processing Time</h2>
              <p>
                Orders are processed within 1-3 business days. During peak seasons or promotional periods, 
                processing may take up to 5 business days.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Shipping Methods & Delivery Times</h2>
              <p>We offer the following shipping options:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Standard Shipping (Free):</strong> 10-20 business days</li>
                <li><strong>Express Shipping:</strong> 5-10 business days (additional fee at checkout)</li>
              </ul>
              <p className="mt-3">
                Delivery times are estimates and may vary based on your location and customs processing.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">International Shipping</h2>
              <p>
                We ship worldwide. International customers are responsible for any customs duties, 
                taxes, or fees imposed by their country. These charges are not included in the product 
                price or shipping cost.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Order Tracking</h2>
              <p>
                Once your order ships, you will receive a confirmation email with tracking information. 
                Please allow 24-48 hours for tracking to update after shipment.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">Lost or Delayed Packages</h2>
              <p>
                If your package has not arrived within the estimated delivery window, please contact us 
                at <a href="mailto:hello@lumis.com" className="text-primary hover:underline">hello@lumis.com</a> and 
                we will work with the carrier to locate your order.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
