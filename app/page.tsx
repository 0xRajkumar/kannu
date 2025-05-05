import React from "react";
import { Metadata } from "next";
import { homeMetadata } from "@/components/seo/metadata";
import Hero from "@/components/home/hero";
import ServiceHighlights from "@/components/home/service-highlights";
import WhyChooseUs from "@/components/home/why-choose-us";
import Testimonials from "@/components/home/testimonials";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Hero />

      <ServiceHighlights />

      <WhyChooseUs />

      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Transport Services?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to book your journey or get a quote for your
            logistics needs.
          </p>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="text-black border-white hover:bg-white hover:text-red-600"
            >
              About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
