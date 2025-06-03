
import { Users, BookOpen, Trophy, Home } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "1,200+",
      label: "Students",
      description: "Currently enrolled",
    },
    {
      icon: BookOpen,
      number: "50+",
      label: "Teachers",
      description: "Qualified educators",
    },
    {
      icon: Trophy,
      number: "85%",
      label: "Division I-III",
      description: "UNEB UCE 2023",
    },
    {
      icon: Home,
      number: "15",
      label: "Facilities",
      description: "Modern amenities",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Excellence in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to academic excellence is reflected in our achievements and facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
