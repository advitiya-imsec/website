import ClubLayout from "@/components/club/ClubLayout";
import FounderSection from "@/components/club/FounderSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Theater, Users, Lightbulb, Calendar } from "lucide-react";

const Drama = () => {
  const activities = [
    {
      title: "Stage Performances",
      description: "Full-scale theatrical productions showcasing dramatic talent",
      icon: <Theater className="w-6 h-6" />
    },
    {
      title: "Street Plays",
      description: "Powerful social message delivery through public performances",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Acting Workshops",
      description: "Professional training in method acting and stage presence",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Script Writing",
      description: "Collaborative creation of original dramatic works",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const events = [
    {
      title: "Annual Drama Festival",
      date: "April 2025",
      description: "Grand showcase of theatrical productions and performances"
    },
    {
      title: "Improv Nights",
      date: "Monthly",
      description: "Spontaneous performance sessions and audience interaction"
    },
    {
      title: "Social Awareness Plays",
      date: "Quarterly",
      description: "Meaningful performances addressing social issues"
    }
  ];

  return (
    <ClubLayout clubName="Pratyaksha" logoSrc="/assets/Pratyaksha.png">
      <div className="min-h-screen">
        <section id="hero" className="drama-theme py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/30 to-transparent"></div>
            <div className="absolute top-10 left-10 text-6xl">🎭</div>
            <div className="absolute top-32 right-20 text-4xl">🎪</div>
            <div className="absolute bottom-20 left-32 text-5xl">🎨</div>
            <div className="absolute bottom-10 right-10 text-3xl">🎬</div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
              <img
                  src="/assets/Pratyaksha.png"
              alt="Pratyaksha Drama Club"
              className="w-32 h-32 mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Pratyaksha
            </h1>
            <p className="text-2xl text-white/90 mb-4 animate-slide-up font-serif italic">
              Drama Club
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              "All the world's a stage, and we are the storytellers"
            </p>
          </div>
        </section>
{/* 
        <FounderSection
          clubName="Pratyaksha"
          founder={{
            name: "Founder Name",
            role: "Founder",
            bio: "Brief about the founder and the club’s origin story and milestones.",
            image: "/placeholder.svg",
          }}
        /> */}

        <section id="about" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Pratyaksha</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Pratyaksha Drama Club brings stories to life through powerful theatrical performances. We explore human emotions, social issues, and timeless tales through the art of drama.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a platform where creativity meets consciousness, where entertainment educates, and where every performance leaves a lasting impact on both performers and audience.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-xl">
                  <blockquote className="text-lg italic text-center font-serif">
                    "The purpose of playing is to hold the mirror up to nature."
                    <footer className="mt-4 text-sm font-medium">— William Shakespeare</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className={`border-0 shadow-card hover-lift animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary">
                      {activity.icon}
                    </div>
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className={`border-0 shadow-card hover-lift animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {event.date}
                    </Badge>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Club Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <div
                  key={item}
                  className={`aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center hover-lift animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <Theater className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Performance {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">Join Pratyaksha</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to step into the spotlight? Join our dramatic community and bring stories to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="drama-theme text-white hover:opacity-90"
                onClick={() => window.location.href = "/join/drama"}
              >
                Join Our Club
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ClubLayout>
  );
};

export default Drama;