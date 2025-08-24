import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ClubJoin = () => {
  const { clubId } = useParams();
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
    interests: [] as string[],
    experience: "",
    motivation: "",
    availability: "",
    additionalInfo: ""
  });

  const clubData: Record<string, { 
    title: string; 
    description: string; 
    activities: string[];
    logo: string;
  }> = {
    "literary": {
      title: "Shrutivang - Literary Club",
      description: "Express yourself through words, stories, and literature",
      activities: ["Poetry", "Short Stories", "Debates", "Creative Writing", "Book Reviews", "Storytelling", "Article Writing", "Literary Criticism"],
      logo: "/assets/Shrutivang.png"
    },
    "drama": {
      title: "Pratyaksha - Drama Club", 
      description: "Bring stories to life through theater and performance",
      activities: ["Stage Acting", "Street Plays", "Monologues", "Scriptwriting", "Direction", "Stage Design", "Costume Design", "Character Development"],
      logo: "/assets/Pratyaksha.png"
    },
    "creative": {
      title: "Anukriti - Creative Club",
      description: "Unleash your artistic potential through various art forms",
      activities: ["Painting", "Sketching", "Digital Art", "Photography", "Crafts", "Sculpture", "Graphic Design", "Art Installation"],
      logo: "/assets/Anukriti.png"
    },
    "music": {
      title: "Aaroh - Music Club",
      description: "Create harmony and rhythm through musical expression",
      activities: ["Vocals/Singing", "Guitar", "Piano/Keyboard", "Drums", "Flute", "Violin", "Music Composition", "Sound Engineering"],
      logo: "/assets/Aaroh.png"
    },
    "dance": {
      title: "Udgam - Dance Club",
      description: "Express emotions and stories through movement and dance",
      activities: ["Classical Dance", "Hip Hop", "Contemporary", "Folk Dance", "Bollywood", "Freestyle", "Choreography", "Dance Theater"],
      logo: "/assets/Udgam.png"
    }
  };

  const currentClub = clubData[clubId || ""];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (activity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, activity]
        : prev.interests.filter(item => item !== activity)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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

    if (formData.interests.length === 0) {
      toast({
        title: "Please select your interests",
        description: "Choose at least one activity you're interested in",
        variant: "destructive"
      });
      return;
    }

    console.log("Club Join Data:", { clubId, ...formData });
    
    toast({
      title: "Application Submitted!",
      description: `Your application to join ${currentClub?.title} has been submitted successfully`,
    });
    
    navigate("/clubs");
  };

  if (!currentClub) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Club not found</h1>
            <Button onClick={() => navigate("/clubs")}>Back to Clubs</Button>
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
            onClick={() => navigate(`/clubs/${clubId}`)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {currentClub.title}
          </Button>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <img src={currentClub.logo} alt={currentClub.title} className="h-12 w-12 rounded-full" />
                <div>
                  <CardTitle className="text-2xl">Join {currentClub.title}</CardTitle>
                  <CardDescription>{currentClub.description}</CardDescription>
                </div>
              </div>
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
                  <h3 className="text-lg font-semibold">Areas of Interest *</h3>
                  <p className="text-sm text-muted-foreground">Select all activities you're interested in:</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {currentClub.activities.map((activity) => (
                      <div key={activity} className="flex items-center space-x-2">
                        <Checkbox
                          id={activity}
                          checked={formData.interests.includes(activity)}
                          onCheckedChange={(checked) => handleInterestChange(activity, checked as boolean)}
                        />
                        <Label htmlFor={activity} className="text-sm">{activity}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Tell Us More</h3>
                  
                  <div>
                    <Label htmlFor="experience">Previous Experience</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="Tell us about your previous experience in this field..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Why do you want to join this club?</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      placeholder="Share your motivation and what you hope to achieve..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea
                      id="availability"
                      value={formData.availability}
                      onChange={(e) => handleInputChange("availability", e.target.value)}
                      placeholder="When are you usually available for club activities?"
                      rows={2}
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
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ClubJoin;