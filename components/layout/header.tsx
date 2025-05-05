"use client";

import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-red-600">
              Kannu
            </span>
            <span className="text-xl md:text-2xl font-bold ml-1 text-gray-800">
              Transport
            </span>
          </Link>

          {/* Contact Information - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2 text-red-600" />
              <span className="text-sm">+91 98702 51809</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2 text-red-600" />
              <span className="text-sm">contact@0xrajkumar.com</span>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/services/bus" className="w-full">
                    Bus
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/truck" className="w-full">
                    Truck
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              href="/about"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/facilities"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Facilities
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Gallery
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white w-full py-4 mt-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-2 pl-4">
              <div className="text-gray-700 font-medium">Services</div>
              <Link
                href="/services/bus"
                className="block text-gray-600 hover:text-red-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bus
              </Link>
              <Link
                href="/services/truck"
                className="block text-gray-600 hover:text-red-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Truck
              </Link>
            </div>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/facilities"
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Facilities
            </Link>
            <Link
              href="/gallery"
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            
            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center text-gray-600 mb-2">
                <Phone className="h-4 w-4 mr-2 text-red-600" />
                <span className="text-sm">+91 98702 51809</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-red-600" />
                <span className="text-sm">contact@0xrajkumar.com</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;