
import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Excellence Academy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Nurturing Excellence, Building Future Leaders. A premier secondary school 
              committed to academic excellence and character development in Uganda.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>+256 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>info@excellenceacademy.ug</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span>Plot 123, Kampala Road, Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>O-Level (UCE)</li>
              <li>A-Level (UACE)</li>
              <li>Science Programs</li>
              <li>Arts Programs</li>
              <li>Technical Subjects</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Excellence Academy. All rights reserved. | Registered with Ministry of Education & Sports, Uganda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
