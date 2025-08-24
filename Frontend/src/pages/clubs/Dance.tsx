import ClubLayout from "@/components/club/ClubLayout";
import FounderSection from "@/components/club/FounderSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Sparkles, Trophy } from "lucide-react";

const Dance = () => {
  const activities = [
    {
      title: "Classical Dance",
      description: "Traditional dance forms including Bharatanatyam, Kathak, and more",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Contemporary Dance",
      description: "Modern dance styles and innovative choreographic expressions",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Folk Dance",
      description: "Cultural heritage through regional and traditional folk dances",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Dance Competitions",
      description: "Inter-college competitions and performance showcases",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const events = [
    {
      title: "Annual Dance Festival",
      date: "March 2025",
      description: "Spectacular showcase of all dance forms and styles"
    },
    {
      title: "Choreography Workshop",
      date: "Monthly",
      description: "Learn from professional dancers and choreographers"
    },
    {
      title: "Cultural Dance Night",
      date: "Quarterly",
      description: "Celebrating diversity through traditional dance forms"
    }
  ];

  return (
    <ClubLayout clubName="Udgam" logoSrc="/assets/Udgam.png">
      <div className="min-h-screen">
        <section id="hero" className="dance-theme py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 text-6xl">💃</div>
            <div className="absolute top-32 right-20 text-4xl">🕺</div>
            <div className="absolute bottom-20 left-32 text-5xl">✨</div>
            <div className="absolute bottom-10 right-10 text-3xl">🎭</div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <img
              src="/assets/Udgam.png"
              alt="Udgam Dance Club"
              className="w-32 h-32 mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Udgam
            </h1>
            <p className="text-2xl text-white/90 mb-4 animate-slide-up font-serif italic">
              Dance Club
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              "Where movement becomes poetry and rhythm tells stories"
            </p>
          </div>
        </section>

        {/* <FounderSection
          clubName="Udgam"
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
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Udgam</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Udgam Dance Club celebrates the art of dance in all its forms. We provide a platform for dancers to express themselves, learn new styles, and perform with passion.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a dynamic community of dancers who preserve traditional dance forms while embracing contemporary styles, inspiring audiences through powerful performances.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-xl">
                  <blockquote className="text-lg italic text-center font-serif">
                    "Dance is the hidden language of the soul."
                    <footer className="mt-4 text-sm font-medium">— Martha Graham</footer>
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
                  className={`aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center hover-lift animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Performance {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">Join Udgam</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to dance your way into our community? Join us and express yourself through movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="dance-theme text-white hover:opacity-90"
                onClick={() => window.location.href = "/join/dance"}
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

export default Dance;