import ClubLayout from "@/components/club/ClubLayout";
import FounderSection from "@/components/club/FounderSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Guitar, Mic, Volume2 } from "lucide-react";

const MusicClub = () => {
  const activities = [
    {
      title: "Vocal Performances",
      description: "Solo and group singing performances across various genres",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Instrumental Music",
      description: "Guitar, piano, drums, and traditional instrument performances",
      icon: <Guitar className="w-6 h-6" />
    },
    {
      title: "Music Composition",
      description: "Creating original compositions and collaborative songwriting",
      icon: <Music className="w-6 h-6" />
    },
    {
      title: "Live Concerts",
      description: "Regular performances and musical showcases for the community",
      icon: <Volume2 className="w-6 h-6" />
    }
  ];

  const events = [
    {
      title: "Annual Music Festival",
      date: "April 2025",
      description: "Grand musical celebration with multiple genres and performances"
    },
    {
      title: "Open Mic Nights",
      date: "Weekly",
      description: "Platform for budding musicians to showcase their talent"
    },
    {
      title: "Battle of Bands",
      date: "Bi-annual",
      description: "Competitive musical event featuring college bands"
    }
  ];

  return (
    <ClubLayout clubName="Aaroh" logoSrc="/assets/Aaroh.png">
      <div className="min-h-screen">
        <section id="hero" className="music-theme py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 text-6xl">🎵</div>
            <div className="absolute top-32 right-20 text-4xl">🎸</div>
            <div className="absolute bottom-20 left-32 text-5xl">🎤</div>
            <div className="absolute bottom-10 right-10 text-3xl">🥁</div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <img
              src="/assets/Aaroh.png"
              alt="Aaroh Music Club"
              className="w-32 h-32 mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Aaroh
            </h1>
            <p className="text-2xl text-white/90 mb-4 animate-slide-up font-serif italic">
              Music Club
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              "Where melodies meet hearts and music transcends boundaries"
            </p>
          </div>
        </section>

        <section id="about" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Aaroh</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Aaroh Music Club is dedicated to creating harmonious experiences through music. We bring together passionate musicians and music lovers to explore, create, and perform.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a vibrant musical community that nurtures talent, promotes musical education, and creates memorable performances that resonate with audiences.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-xl">
                  <blockquote className="text-lg italic text-center font-serif">
                    "Music is the universal language of mankind."
                    <footer className="mt-4 text-sm font-medium">— Henry Wadsworth Longfellow</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <FounderSection
          clubName="Aaroh"
          founder={{
            name: "Founder Name",
            role: "Founder",
            bio: "Brief about the founder and the club’s origin story and milestones.",
            image: "/placeholder.svg",
          }}
        /> */}

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
                  className={`aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center hover-lift animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <Music className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Performance {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">Join Aaroh</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to make beautiful music? Join our musical family and let your voice be heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="music-theme text-white hover:opacity-90"
                onClick={() => window.location.href = "/join/music"}
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

export default MusicClub;