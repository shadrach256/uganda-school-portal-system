
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Trophy, MapPin } from "lucide-react";

const About = () => {
  const facilities = [
    "Modern Science Laboratories",
    "Computer & ICT Centers",
    "Well-Stocked Library",
    "Spacious Dormitories",
    "Sports Complex",
    "Dining Halls",
    "Medical Center",
    "Chapel & Prayer Rooms",
  ];

  const achievements = [
    "Top 5 Secondary School in Uganda (2020-2023)",
    "95% UNEB UCE Pass Rate (2023)",
    "98% UNEB UACE Pass Rate (2023)",
    "80% Division I-III in UCE",
    "Best School in Sciences - Eastern Region",
    "Outstanding Performance in Mathematics",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Excellence Academy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 1999, Excellence Academy has been at the forefront of quality education 
              in Uganda, consistently producing outstanding UNEB results and shaping future leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide quality education that nurtures academic excellence, moral integrity, 
                  and leadership skills, preparing students to excel in UNEB examinations and 
                  become responsible citizens who contribute positively to Uganda's development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading secondary school in Uganda, recognized for academic excellence, 
                  character development, and innovative teaching methods that prepare students for 
                  success in higher education and life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-lg text-gray-600">
              Our modern infrastructure supports comprehensive education and student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <p className="font-medium text-gray-900">{facility}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UNEB Performance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">UNEB Excellence</h2>
            <p className="text-lg text-gray-600">
              Our outstanding performance in national examinations speaks to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-yellow-500">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Trophy className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-900 font-medium">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
