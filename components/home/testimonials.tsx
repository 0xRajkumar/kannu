"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  location: string;
  rating: number;
  initials: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "I've been using Kannu Transport's bus services for my weekly commute from Delhi to Agra. The buses are always punctual and well-maintained. The staff is courteous and helpful.",
    author: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    initials: "RS"
  },
  {
    content: "As a business owner who frequently ships goods across India, I've found Kannu's truck services to be extremely reliable. Their nationwide coverage and timely deliveries have helped my business thrive.",
    author: "Priya Patel",
    location: "Mumbai",
    rating: 5,
    initials: "PP"
  },
  {
    content: "The bus journey from Delhi to Lucknow was comfortable and enjoyable. The bus was clean, and the driver was professional. I would definitely recommend Kannu Transport to others.",
    author: "Amit Kumar",
    location: "Lucknow",
    rating: 4,
    initials: "AK"
  },
  {
    content: "I've been using Kannu's truck services for my manufacturing business for the past two years. Their pan-India coverage and reliable delivery timelines have been crucial for my operations.",
    author: "Sunita Verma",
    location: "Jaipur",
    rating: 5,
    initials: "SV"
  }
];

const TestimonialCard = ({ content, author, location, rating, initials }: TestimonialProps) => (
  <Card className="h-full border-none shadow-md">
    <CardContent className="p-6 h-full flex flex-col">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 flex-grow">{content}</p>
      <div className="flex items-center mt-auto">
        <Avatar className="h-10 w-10 mr-3 bg-red-100">
          <AvatarFallback className="bg-red-100 text-red-600">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 p-2">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-8">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;