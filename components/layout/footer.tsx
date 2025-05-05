import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Truck,
  Bus,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-red-500">Kannu</span> Transport
            </h3>
            <p className="text-gray-300 mb-4">
              Providing reliable transportation services across India since
              2005. Trusted by thousands of customers for both passenger and
              goods transport.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bus"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bus Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/truck"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Truck Services
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Bus className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <div>
                  <span className="block text-white">Bus Services</span>
                  <span className="text-sm text-gray-400">
                    Delhi, Faridabad, Mathura, Agra, Lucknow
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <div>
                  <span className="block text-white">Truck Services</span>
                  <span className="text-sm text-gray-400">
                    PAN India Coverage
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-300">+91 98702 51809</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-300">contact@0xrajkumar.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-2 mt-1" />
                <span className="text-gray-300">
                  Office Address, Street Name, City, State, India - PIN Code
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Kannu Transport and Travels. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
