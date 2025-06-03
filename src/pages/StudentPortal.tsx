
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Users, Calendar, FileText } from "lucide-react";

const StudentPortal = () => {
  const portalFeatures = [
    {
      icon: BookOpen,
      title: "Academic Records",
      description: "View grades, report cards, and UNEB results",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Student Information",
      description: "Update personal details and contact information",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "View term dates, exams, and important events",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: FileText,
      title: "Fee Statements",
      description: "Check fee balances and payment history",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Student Portal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access your academic information, grades, fee statements, and more through 
              our secure student portal system.
            </p>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Login Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Student Login</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> To access the full student portal with UNEB management, 
                      grading system, and secure features, this project needs to be connected to Supabase. 
                      Click the green Supabase button in the top right to enable backend functionality.
                    </p>
                  </div>
                  
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input 
                        id="studentId" 
                        placeholder="Enter your student ID (e.g., EA2024001)" 
                      />
                    </div>

                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password" 
                      />
                    </div>

                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700" size="lg">
                      Login to Portal
                    </Button>

                    <div className="text-center space-y-2">
                      <a href="#" className="text-sm text-yellow-600 hover:text-yellow-700 block">
                        Forgot Password?
                      </a>
                      <a href="#" className="text-sm text-gray-600 hover:text-gray-700 block">
                        Need help accessing your account?
                      </a>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Portal Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What you can access:
              </h2>
              
              <div className="space-y-4">
                {portalFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color}`}>
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              For Parents & Students
            </h2>
            <p className="text-lg text-gray-600">
              Important information about accessing the student portal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Login Credentials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Student ID provided during admission</li>
                  <li>• Default password: Date of birth (DDMMYYYY)</li>
                  <li>• Change password after first login</li>
                  <li>• Contact office if you forget credentials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Modern web browser (Chrome, Firefox, Safari)</li>
                  <li>• Stable internet connection</li>
                  <li>• JavaScript enabled</li>
                  <li>• Works on mobile and desktop</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Help desk: +256 700 123 456</li>
                  <li>• Email: support@excellenceacademy.ug</li>
                  <li>• Office hours: Mon-Fri 8AM-5PM</li>
                  <li>• User manual available for download</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentPortal;
