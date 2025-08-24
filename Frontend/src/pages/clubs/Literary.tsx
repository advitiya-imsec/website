import ClubLayout from "@/components/club/ClubLayout";
import FounderSection from "@/components/club/FounderSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Feather, Users, Calendar } from "lucide-react";

const Literary = () => {
  const activities = [
    {
      title: "Poetry Nights",
      description: "Monthly gatherings for sharing original poetry and spoken word",
      icon: <Feather className="w-6 h-6" />
    },
    {
      title: "Creative Writing Workshops",
      description: "Develop your storytelling skills with expert guidance",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Literary Debates",
      description: "Engage in intellectual discussions on classic and contemporary literature",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Author Meet & Greets",
      description: "Interactive sessions with renowned authors and poets",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const events = [
    {
      title: "Annual Poetry Competition",
      date: "March 2025",
      description: "Showcase your poetic talents in our biggest literary event"
    },
    {
      title: "Book Club Discussions",
      date: "Monthly",
      description: "Deep dive into selected literary works with fellow enthusiasts"
    },
    {
      title: "Creative Writing Contest",
      date: "April 2025",
      description: "Submit your best short stories and essays for prizes"
    }
  ];

  return (
    <ClubLayout clubName="Shrutivang" logoSrc="/assets/Shrutivang.png">
      <div className="min-h-screen">
        <section id="hero" className="literary-theme py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">📚</div>
            <div className="absolute top-32 right-20 text-4xl">✒️</div>
            <div className="absolute bottom-20 left-32 text-5xl">📖</div>
            <div className="absolute bottom-10 right-10 text-3xl">🖋️</div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <img
              src="/assets/Shrutivang.png"
              alt="Shrutivang Literary Club"
              className="w-32 h-32 mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Shrutivang
            </h1>
            <p className="text-2xl text-white/90 mb-4 animate-slide-up font-serif italic">
              Literary Club
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              "Where words weave magic and thoughts take flight"
            </p>
          </div>
        </section>

        {/* <FounderSection
          clubName="Shrutivang"
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
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Shrutivang</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Shrutivang Literary Club is dedicated to fostering a love for literature, creative expression, and the written word. We believe in the power of language to inspire, educate, and transform lives.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a vibrant community of writers, readers, and literary enthusiasts who celebrate the beauty of language and contribute to the rich tradition of storytelling.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-xl">
                  <blockquote className="text-lg italic text-center font-serif">
                    "Literature is the most agreeable way of ignoring life."
                    <footer className="mt-4 text-sm font-medium">— Fernando Pessoa</footer>
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
                  className={`aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center hover-lift animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Literary Event {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">Join Shrutivang</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to embark on a literary journey? Connect with us and become part of our creative community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="literary-theme text-white hover:opacity-90"
                onClick={() => window.location.href = "/join/literary"}
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

export default Literary;