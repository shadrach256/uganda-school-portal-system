
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Calendar, Users, Phone } from "lucide-react";

const Admissions = () => {
  const requirements = [
    "Completed Primary Leaving Examination (PLE) for O-Level",
    "Uganda Certificate of Education (UCE) for A-Level", 
    "Birth Certificate or Statutory Declaration of Age",
    "Immunization Certificate",
    "Passport-size photographs (6 copies)",
    "Previous school reports and testimonials",
  ];

  const fees = [
    { level: "O-Level (S1-S4)", tuition: "UGX 800,000", boarding: "UGX 1,200,000", total: "UGX 2,000,000" },
    { level: "A-Level (S5-S6)", tuition: "UGX 1,000,000", boarding: "UGX 1,200,000", total: "UGX 2,200,000" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Excellence Academy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Begin your journey to academic excellence. Apply now for admission to Uganda's 
              top-performing secondary school.
            </p>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">Simple steps to secure your place at Excellence Academy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Download Forms", desc: "Get application forms and prospectus", icon: FileText },
              { step: "2", title: "Submit Application", desc: "Complete and submit your application", icon: Users },
              { step: "3", title: "Interview", desc: "Attend entrance interview", icon: Calendar },
              { step: "4", title: "Confirmation", desc: "Receive admission confirmation", icon: Phone },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-600 mb-2">Step {item.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">School Fees Structure</h2>
              <div className="space-y-4">
                {fees.map((fee, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{fee.level}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Tuition</p>
                          <p className="font-semibold">{fee.tuition}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Boarding</p>
                          <p className="font-semibold">{fee.boarding}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Total/Term</p>
                          <p className="font-bold text-yellow-600">{fee.total}</p>
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

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Application Form</h2>
            <p className="text-lg text-gray-600">
              Start your application process by filling out this form
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter email address" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="level">Admission Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="s1">Senior 1 (S1)</SelectItem>
                        <SelectItem value="s2">Senior 2 (S2)</SelectItem>
                        <SelectItem value="s3">Senior 3 (S3)</SelectItem>
                        <SelectItem value="s4">Senior 4 (S4)</SelectItem>
                        <SelectItem value="s5">Senior 5 (S5)</SelectItem>
                        <SelectItem value="s6">Senior 6 (S6)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="term">Term</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="term1">Term 1</SelectItem>
                        <SelectItem value="term2">Term 2</SelectItem>
                        <SelectItem value="term3">Term 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="previousSchool">Previous School</Label>
                  <Input id="previousSchool" placeholder="Enter previous school name" />
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Any additional information you'd like to share..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
