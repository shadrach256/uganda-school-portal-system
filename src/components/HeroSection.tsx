
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Excellence</span>
            <span className="block text-yellow-600">Academy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Nurturing Excellence, Building Future Leaders
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            A premier secondary school committed to academic excellence and character development. 
            Join Uganda's top performers in UNEB examinations.
          </p>

          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-md px-4 py-2 border-l-4 border-yellow-500">
              <div className="text-2xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">UNEB Pass Rate</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-4 py-2 border-l-4 border-red-500">
              <div className="text-2xl font-bold text-gray-900">Top 5</div>
              <div className="text-sm text-gray-600">Schools in Uganda</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-4 py-2 border-l-4 border-black">
              <div className="text-2xl font-bold text-gray-900">25+</div>
              <div className="text-sm text-gray-600">Years Excellence</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-300 px-8 py-3">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
