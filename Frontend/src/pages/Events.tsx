import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "Vibgyor 2025",
      date: "2025-03-15",
      time: "10:00 AM",
      location: "Main Auditorium",
      description: "Annual cultural fest showcasing talents from all clubs with competitions, performances, and exhibitions.",
      category: "Cultural Fest",
      status: "upcoming"
    },
    // {
    //   id: 2,
    //   name: "Sangram 2025",
    //   date: "2025-02-20",
    //   time: "2:00 PM",
    //   location: "Sports Complex",
    //   description: "Inter-college competition featuring drama, music, dance, and literary events.",
    //   category: "Competition",
    //   status: "upcoming"
    // },
    // {
    //   id: 3,
    //   name: "Tech Fest 2025",
    //   date: "2025-04-10",
    //   time: "9:00 AM",
    //   location: "Tech Building",
    //   description: "Innovation meets creativity with tech exhibitions and digital art showcases.",
    //   category: "Tech & Arts",
    //   status: "upcoming"
    // },
    {
      id: 2,
      name: "Farewell 2025",
      date: "2025-05-15",
      time: "6:00 PM",
      location: "Convention Hall",
      description: "A memorable evening to bid farewell to graduating students with cultural performances.",
      category: "Farewell",
      status: "upcoming"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="hero-gradient py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Upcoming Events
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
              Join us for exciting cultural events, competitions, and celebrations throughout the year
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} className={`hover-lift border-0 shadow-card animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="cultural-gradient text-white">
                        {event.category}
                      </Badge>
                      <Badge variant="outline" className="text-primary border-primary">
                        {event.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold">{event.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <CalendarDays size={16} />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                    <Button 
                      className="flex-1 cultural-gradient text-white hover:opacity-90"
                      // onClick={() => window.location.href = `/register/${event.id}`}
                    >
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;