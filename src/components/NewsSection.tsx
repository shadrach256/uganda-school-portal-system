
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "UNEB 2023 Results: Excellence Academy Leads Again",
      excerpt: "Our students achieved outstanding results with 95% pass rate in UCE and 98% in UACE examinations.",
      date: "March 15, 2024",
      category: "Academic Achievement",
      urgent: true,
    },
    {
      id: 2,
      title: "New Science Laboratory Complex Opens",
      excerpt: "State-of-the-art laboratories for Physics, Chemistry, and Biology now available for students.",
      date: "March 10, 2024",
      category: "Infrastructure",
      urgent: false,
    },
    {
      id: 3,
      title: "Term 2 Registration Deadline Extended",
      excerpt: "Due to high demand, we've extended the registration deadline to April 30th, 2024.",
      date: "March 8, 2024",
      category: "Admissions",
      urgent: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest achievements, events, and important announcements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
              {item.urgent && (
                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-t-lg">
                  URGENT
                </div>
              )}
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
