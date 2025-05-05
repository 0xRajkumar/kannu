import { Metadata } from "next";
import { aboutMetadata } from "@/components/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Kannu Transport"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Learn about our journey in providing exceptional transportation
            services.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, Kannu Transport and Travels began with a small
                fleet of buses operating on a few routes from Delhi. With a
                commitment to reliability, safety, and customer satisfaction, we
                gradually expanded our services.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have grown into a trusted name in the
                transportation industry, adding truck services to our portfolio
                and extending our operations across the country. Today, we
                operate a large fleet of buses and trucks, serving thousands of
                passengers and clients.
              </p>
              <p className="text-gray-700">
                Our success is built on our unwavering dedication to providing
                high-quality transportation services, maintaining our vehicles
                to the highest standards, and employing skilled professionals
                who share our vision and values.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/3814567/pexels-photo-3814567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Company History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide safe, reliable, and efficient transportation services
                that exceed customer expectations. We are committed to
                delivering excellence in every journey, ensuring that our
                passengers travel in comfort and that cargo reaches its
                destination safely and on time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the most trusted and preferred transportation partner in
                India, known for our reliability, safety, and customer-centric
                approach. We aim to continuously innovate and improve our
                services, expand our network, and contribute positively to the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions and actions every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Safety</h3>
              <p className="text-gray-700">
                We prioritize the safety of our passengers, cargo, employees,
                and everyone we share the road with. Our vehicles are
                well-maintained, and our drivers are thoroughly trained.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-700">
                We understand the importance of punctuality and dependability.
                Our customers can count on us to deliver on our promises,
                whether it's adhering to bus schedules or meeting delivery
                deadlines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-700">
                Our customers are at the heart of everything we do. We listen to
                their needs, address their concerns, and continuously strive to
                enhance their experience with our services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and ethical
                standards. We believe in building trust through our actions and
                accountability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-700">
                We pursue excellence in all aspects of our operations, from
                vehicle maintenance to customer service. We continuously improve
                our processes and services to deliver the best.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
              <p className="text-gray-700">
                We value collaboration, respect, and support among our team
                members. We believe that together we can achieve more and better
                serve our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
