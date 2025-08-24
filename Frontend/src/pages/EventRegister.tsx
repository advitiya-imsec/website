import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EventRegister = () => {

    

  const { eventId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "",
    year: "",
    section: "",
    department: "",
    experience: "",
    expectations: "",
    additionalInfo: ""
  });




  const eventData: Record<string, { title: string; description: string }> = {
    "vibgyor-2025": {
      title: "Vibgyor 2025",
      description: "Annual cultural festival showcasing diverse talents and creativity"
    },
    "sangram-2025": {
      title: "Sangram 2025", 
      description: "Inter-college competition featuring various cultural and artistic events"
    },
    "tech-fest-2025": {
      title: "Tech Fest 2025",
      description: "Technology and innovation festival with workshops and competitions"
    },
    "farewell-2025": {
      title: "Farewell 2025",
      description: "Farewell celebration for graduating students"
    }
  };
const eventKeys = ["vibgyor-2025", "sangram-2025", "tech-fest-2025", "farewell-2025"];
const key = eventKeys[Number(eventId) - 1]; 
const currentEvent = eventData[key];


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ["name", "email", "phone", "rollNumber", "year", "section", "department"];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Please fill all required fields",
        description: `Missing: ${missingFields.join(", ")}`,
        variant: "destructive"
      });
      return;
    }

    //  send data to your backend
    console.log("Event Registration Data:", { eventId, ...formData });
    
    toast({
      title: "Registration Successful!",
      description: `You have been registered for ${currentEvent?.title}`,
    });
    
    // Redirect back to events page
    navigate("/events");
  };

  if (!currentEvent) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event not found</h1>
            <Button onClick={() => navigate("/events")}>Back to Events</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/events")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Register for {currentEvent.title}</CardTitle>
              <CardDescription>{currentEvent.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Academic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="rollNumber">Roll Number *</Label>
                      <Input
                        id="rollNumber"
                        value={formData.rollNumber}
                        onChange={(e) => handleInputChange("rollNumber", e.target.value)}
                        placeholder="Enter your roll number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="year">Year *</Label>
                      <Select onValueChange={(value) => handleInputChange("year", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st">1st Year</SelectItem>
                          <SelectItem value="2nd">2nd Year</SelectItem>
                          <SelectItem value="3rd">3rd Year</SelectItem>
                          <SelectItem value="4th">4th Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="section">Section *</Label>
                      <Input
                        id="section"
                        value={formData.section}
                        onChange={(e) => handleInputChange("section", e.target.value)}
                        placeholder="e.g., A, B, C"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="department">Department *</Label>
                      <Select onValueChange={(value) => handleInputChange("department", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CSE">Computer Science Engineering</SelectItem>
                          <SelectItem value="ECE">Electronics & Communication</SelectItem>
                          <SelectItem value="ME">Mechanical Engineering</SelectItem>
                          <SelectItem value="CE">Civil Engineering</SelectItem>
                          <SelectItem value="EE">Electrical Engineering</SelectItem>
                          <SelectItem value="IT">Information Technology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Event Information</h3>
                  
                  <div>
                    <Label htmlFor="experience">Previous Experience</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="Tell us about your previous experience in similar events..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="expectations">What do you expect from this event?</Label>
                    <Textarea
                      id="expectations"
                      value={formData.expectations}
                      onChange={(e) => handleInputChange("expectations", e.target.value)}
                      placeholder="Share your expectations and goals..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                      placeholder="Any additional information you'd like to share..."
                      rows={2}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full cultural-gradient text-white">
                  Register for Event
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EventRegister;
