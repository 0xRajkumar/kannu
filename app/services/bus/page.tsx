import { Metadata } from "next";
import { busMetadata } from "@/components/seo/metadata";
import { ServiceStructuredData } from "@/components/seo/structured-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = busMetadata;

export default function BusServicesPage() {
  // Define the bus routes
  const routes = [
    { from: "Delhi", to: "Faridabad", distance: "32 km", duration: "1 hr" },
    {
      from: "Delhi",
      to: "Ballabhgarh",
      distance: "43 km",
      duration: "1 hr 15 min",
    },
    {
      from: "Delhi",
      to: "Mathura",
      distance: "183 km",
      duration: "3 hr 30 min",
    },
    { from: "Delhi", to: "Agra", distance: "233 km", duration: "4 hr" },
    { from: "Delhi", to: "Lucknow", distance: "555 km", duration: "8 hr" },
    {
      from: "Delhi",
      to: "Sultanpur (UP)",
      distance: "690 km",
      duration: "10 hr",
    },
    {
      from: "Delhi",
      to: "Badlapur",
      distance: "720 km",
      duration: "10 hr 30 min",
    },
    { from: "Delhi", to: "Jaunpur", distance: "785 km", duration: "11 hr" },
  ];

  return (
    <>
      <ServiceStructuredData
        name="Bus Transportation Services"
        description="Comfortable and reliable bus services from Delhi to Faridabad, Ballabhgarh, Mathura, Agra, Lucknow, Sultanpur, Badlapur, and Jaunpur."
        url="https://kannutransport.com/services/bus"
        provider="Kannu Transport and Travels"
        serviceArea="Delhi, Faridabad, Ballabhgarh, Mathura, Agra, Lucknow, Sultanpur, Badlapur, Jaunpur"
      />

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Kannu Bus Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bus Services
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Comfortable and reliable bus services connecting Delhi to major
            destinations in North India.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Bus Transportation Services
            </h2>
            <p className="text-lg text-gray-600">
              At Kannu Transport, we pride ourselves on providing safe,
              reliable, and comfortable bus services across key routes in North
              India. Our modern fleet of buses is maintained to the highest
              standards to ensure a pleasant journey for all our passengers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Why Choose Our Bus Services?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Modern fleet with comfortable seating</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Experienced and professional drivers</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Punctual departures and arrivals</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Regular maintenance for safety</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Affordable fares with special discounts</p>
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Bus interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Bus Routes</h2>
            <p className="text-lg text-gray-600">
              We operate regular bus services on the following routes,
              connecting Delhi to key destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {route.from} to {route.to}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Distance: {route.distance} • Travel Time:{" "}
                        {route.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Daily departures</span>
                    </div>
                    {/* This would link to a booking page in the future */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to book your tickets or get more information about
            our bus services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/about">
              <Button variant="destructive" size="lg">
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-red-600 mr-2" />
              <span className="font-semibold">+91 98702 51809</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
