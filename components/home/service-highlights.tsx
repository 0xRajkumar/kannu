import { Bus, Truck, Clock, CheckSquare, Navigation, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceHighlights = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Transportation Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of transportation solutions tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bus Service Card */}
          <Card className="border-2 border-gray-100 hover:border-red-100 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="mb-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Bus className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Bus Services</CardTitle>
              <CardDescription>
                Safe and comfortable travel services on popular routes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Routes: Delhi to Faridabad, Mathura, Agra, Lucknow & more</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reliable schedules with punctual departures</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Safety-first approach with experienced drivers</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/services/bus" className="w-full">
                <Button variant="destructive" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Truck Service Card */}
          <Card className="border-2 border-gray-100 hover:border-red-100 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="mb-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Truck Services</CardTitle>
              <CardDescription>
                Nationwide logistics services for all your cargo needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Navigation className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>PAN India coverage for all your shipping needs</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Various truck types for different cargo requirements</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Timely delivery with real-time tracking options</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/services/truck" className="w-full">
                <Button variant="destructive" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;