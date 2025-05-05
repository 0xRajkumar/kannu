"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const backgrounds = [
  "https://images.pexels.com/photos/31952936/pexels-photo-31952936.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Bus image
  "https://images.pexels.com/photos/31952904/pexels-photo-31952904.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Truck image
];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0 overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${bg})`,
              opacity: currentBg === index ? 1 : 0,
            }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Trusted Partner in{" "}
            <span className="text-red-500">Transportation</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Providing reliable bus and truck services across India with a
            commitment to safety, punctuality, and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services/bus">
              <Button
                size="lg"
                variant="destructive"
                className="font-medium text-base px-8"
              >
                Explore Bus Routes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services/truck">
              <Button
                size="lg"
                variant="outline"
                className="font-medium text-base border-white text-black hover:text-white hover:bg-red-700 hover:border-transparent px-8"
              >
                Get Truck Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
