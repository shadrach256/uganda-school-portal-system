
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "UNEB 2023 Results: Excellence Academy Achieves 95% Pass Rate",
      excerpt: "Our students have once again demonstrated exceptional performance in the Uganda National Examinations Board (UNEB) results for 2023. With a 95% pass rate in UCE and 98% in UACE...",
      content: "Full article content here...",
      date: "March 15, 2024",
      author: "Dr. Sarah Nakato",
      category: "Academic Achievement",
      urgent: true,
      featured: true,
    },
    {
      id: 2,
      title: "New Science Laboratory Complex Officially Opens",
      excerpt: "State-of-the-art laboratories for Physics, Chemistry, and Biology are now available for our students, featuring modern equipment and safety measures...",
      content: "Full article content here...",
      date: "March 10, 2024",
      author: "Mr. James Okello",
      category: "Infrastructure",
      urgent: false,
      featured: true,
    },
    {
      id: 3,
      title: "Inter-House Sports Competition 2024 Results",
      excerpt: "The annual inter-house sports competition concluded with House Mandela taking the overall championship trophy...",
      content: "Full article content here...",
      date: "March 8, 2024",
      author: "Ms. Grace Apio",
      category: "Sports",
      urgent: false,
      featured: false,
    },
    {
      id: 4,
      title: "Term 2 Registration Deadline Extended",
      excerpt: "Due to overwhelming response, we have extended the registration deadline for Term 2 to April 30th, 2024...",
      content: "Full article content here...",
      date: "March 5, 2024",
      author: "Admissions Office",
      category: "Admissions",
      urgent: false,
      featured: false,
    },
    {
      id: 5,
      title: "Excellence Academy Wins Regional Mathematics Olympiad",
      excerpt: "Our mathematics team has emerged victorious in the Eastern Region Mathematics Olympiad, qualifying for the national competition...",
      content: "Full article content here...",
      date: "February 28, 2024",
      author: "Mr. David Ssempa",
      category: "Academic Achievement",
      urgent: false,
      featured: false,
    },
    {
      id: 6,
      title: "Parent-Teacher Conference Scheduled for April",
      excerpt: "We invite all parents and guardians to attend the upcoming parent-teacher conference scheduled for April 15-16, 2024...",
      content: "Full article content here...",
      date: "February 25, 2024",
      author: "Administration",
      category: "Events",
      urgent: false,
      featured: false,
    },
  ];

  const categories = ["All", "Academic Achievement", "Infrastructure", "Sports", "Admissions", "Events"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest happenings, achievements, and important 
              announcements from Excellence Academy.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-yellow-100"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {newsArticles.filter(article => article.featured).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                {article.urgent && (
                  <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-t-lg">
                    URGENT
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <button className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <button className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                      Read More →
                    </button>
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

export default News;
