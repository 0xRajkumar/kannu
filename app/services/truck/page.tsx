import { Metadata } from "next";
import { truckMetadata } from "@/components/seo/metadata";
import { ServiceStructuredData } from "@/components/seo/structured-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Clock,
  ShieldCheck,
  Map,
  ArrowRight,
  Truck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = truckMetadata;

export default function TruckServicesPage() {
  // Define truck types (placeholders)
  const truckTypes = [
    {
      name: "Light Commercial Vehicles",
      capacity: "1-3 Tons",
      description:
        "Ideal for intracity deliveries and small cargo transportation",
      image:
        "https://images.pexels.com/photos/5025503/pexels-photo-5025503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Medium Duty Trucks",
      capacity: "5-10 Tons",
      description: "Perfect for medium-sized cargo and regional transportation",
      image:
        "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Heavy Duty Trucks",
      capacity: "15-25 Tons",
      description: "For large cargo and long-distance transportation needs",
      image:
        "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <ServiceStructuredData
        name="Truck Transportation Services"
        description="Comprehensive truck transportation and logistics services available across PAN India with reliable and timely delivery."
        url="https://kannutransport.com/services/truck"
        provider="Kannu Transport and Travels"
        serviceArea="PAN India"
      />

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Kannu Truck Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Truck Services
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Reliable and efficient transportation solutions for your cargo
            across PAN India.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Nationwide Truck Transportation Services
            </h2>
            <p className="text-lg text-gray-600">
              Kannu Transport provides comprehensive truck transportation
              services across India. With our extensive fleet of well-maintained
              trucks and experienced drivers, we ensure that your cargo reaches
              its destination safely and on time, no matter where in India it
              needs to go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/31952831/pexels-photo-31952831.png"
                alt="Truck on highway"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                PAN India Coverage
              </h3>
              <p className="text-gray-600 mb-4">
                Our nationwide network allows us to provide transportation
                services to and from any location in India. Whether you need to
                transport goods within a city or across states, our trucks are
                ready to serve your needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Map className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  <span>
                    Comprehensive coverage across all Indian states and
                    territories
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  <span>
                    Timely pickup and delivery with real-time tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  <span>
                    Safe handling of cargo with proper insurance coverage
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Truck Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Truck Fleet</h2>
            <p className="text-lg text-gray-600">
              We offer a range of truck types to accommodate various cargo sizes
              and transportation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {truckTypes.map((truck, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={truck.image}
                    alt={truck.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle>{truck.name}</CardTitle>
                  <CardDescription>Capacity: {truck.capacity}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{truck.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Trucking Services</h2>
            <p className="text-lg text-gray-600">
              We offer a wide range of transportation and logistics services to
              meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Full Truckload (FTL)
              </h3>
              <p className="text-gray-600">
                Dedicated trucks for large shipments that require the entire
                truck space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Less Than Truckload (LTL)
              </h3>
              <p className="text-gray-600">
                Cost-effective solution for smaller shipments that don't require
                a full truck.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
              <p className="text-gray-600">
                Expedited transportation services for time-sensitive shipments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contract Logistics</h3>
              <p className="text-gray-600">
                Long-term transportation arrangements for regular shipping
                needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Specialized Transport
              </h3>
              <p className="text-gray-600">
                Custom solutions for oversized, heavy, or unusual cargo
                requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Door-to-Door Delivery
              </h3>
              <p className="text-gray-600">
                Complete logistics solution from pickup point to final
                destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Quote for Your Shipping Needs?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your transportation requirements and get
            a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="text-black border-white hover:bg-white hover:text-red-600"
              >
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center text-white">
              <PhoneCall className="h-5 w-5 mr-2" />
              <span className="text-lg font-semibold">+91 98702 51809</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
