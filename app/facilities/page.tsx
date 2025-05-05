import { Metadata } from "next";
import { facilitiesMetadata } from "@/components/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bus,
  Truck,
  ShieldCheck,
  Wifi,
  Coffee,
  Users,
  Navigation,
  Clock,
  Headphones,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = facilitiesMetadata;

export default function FacilitiesPage() {
  // Bus facilities
  const busFacilities = [
    {
      icon: <Wifi className="h-8 w-8 text-red-600" />,
      title: "Free Wi-Fi",
      description:
        "Stay connected throughout your journey with our complimentary Wi-Fi service available on select routes.",
    },
    {
      icon: <Coffee className="h-8 w-8 text-red-600" />,
      title: "Refreshments",
      description:
        "Enjoy complimentary water and refreshments on long-distance routes for a more comfortable travel experience.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Experienced Staff",
      description:
        "Our professional drivers and staff are trained to provide excellent service and ensure a safe journey.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-red-600" />,
      title: "Safety Measures",
      description:
        "All our buses are equipped with first aid kits, fire extinguishers, and emergency exit provisions.",
    },
    {
      icon: <Bus className="h-8 w-8 text-red-600" />,
      title: "Modern Fleet",
      description:
        "Travel in comfort with our modern, well-maintained buses featuring comfortable seating and climate control.",
    },
    {
      icon: <Headphones className="h-8 w-8 text-red-600" />,
      title: "Entertainment",
      description:
        "Long-distance buses are equipped with entertainment systems for an enjoyable journey.",
    },
  ];

  // Truck facilities
  const truckFacilities = [
    {
      icon: <Navigation className="h-8 w-8 text-red-600" />,
      title: "GPS Tracking",
      description:
        "Real-time tracking of your cargo allows you to monitor the location and estimated arrival time.",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Timely Delivery",
      description:
        "We prioritize punctuality and strive to deliver your cargo within the committed timeframe.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-red-600" />,
      title: "Cargo Insurance",
      description:
        "Your goods are protected with appropriate insurance coverage during transportation.",
    },
    {
      icon: <Truck className="h-8 w-8 text-red-600" />,
      title: "Diverse Fleet",
      description:
        "We offer various types and sizes of trucks to accommodate different cargo requirements.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Professional Handlers",
      description:
        "Our team is trained in proper handling techniques to ensure your cargo remains secure.",
    },
    {
      icon: <Headphones className="h-8 w-8 text-red-600" />,
      title: "24/7 Support",
      description:
        "Our customer support team is available round the clock to address any concerns or inquiries.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/4262010/pexels-photo-4262010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Kannu Transport Facilities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Facilities
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Discover the amenities and services we offer to enhance your travel
            and transport experience.
          </p>
        </div>
      </section>

      {/* Bus Facilities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bus Service Facilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a range of amenities to ensure our passengers have a
              comfortable and enjoyable journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {busFacilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mb-4">{facility.icon}</div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Bus interior facilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">
                Comfortable Travel Experience
              </h2>
              <p className="text-gray-700 mb-4">
                At Kannu Transport, we understand that comfort is key to a
                pleasant journey. Our buses are designed with passenger comfort
                in mind, featuring spacious seating, climate control, and modern
                amenities.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're traveling for business or pleasure, our aim is to
                make your journey as relaxing and enjoyable as possible. Our
                attention to detail and commitment to quality service ensures
                that you reach your destination refreshed and satisfied.
              </p>
              <Link href="/services/bus">
                <Button variant="destructive" className="mt-4">
                  Explore Bus Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Truck Facilities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Truck Service Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our truck transportation services come with features designed to
              ensure the safe and efficient delivery of your cargo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {truckFacilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mb-4">{facility.icon}</div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Reliable Cargo Transportation
              </h2>
              <p className="text-gray-700 mb-4">
                When it comes to moving your goods, reliability is paramount.
                Our truck services are designed to provide dependable
                transportation solutions for businesses of all sizes across
                India.
              </p>
              <p className="text-gray-700 mb-4">
                From real-time tracking to professional handling, we implement
                various measures to ensure your cargo reaches its destination
                safely and on time. Our commitment to excellence in logistics
                has made us a trusted partner for businesses nationwide.
              </p>
              <Link href="/services/truck">
                <Button variant="destructive" className="mt-4">
                  Explore Truck Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.pexels.com/photos/2827308/pexels-photo-2827308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Truck transport facilities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Our Premium Services
          </h2>
          <p className="text-xl mb-8">
            Ready to experience the comfort of our bus services or the
            reliability of our truck transportation?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services/bus">
              <Button
                variant="outline"
                size="lg"
                className="text-black border-white hover:bg-white hover:text-red-600"
              >
                Bus Services
                <Bus className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services/truck">
              <Button
                variant="outline"
                size="lg"
                className="text-black border-white hover:bg-white hover:text-red-600"
              >
                Truck Services
                <Truck className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
