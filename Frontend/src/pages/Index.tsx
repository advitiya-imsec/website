import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Trophy, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import About from "./About";

const Index = () => {
   const leaders = [
   

    {
      name: "Love Goswami",
      batch: "2021-25",
      img: "/assets/Shrutivang.png"
    },
    {
      name: "Devansh",
      batch: "2022-26",
      img: "/assets/Shrutivang.png"
    },
     {
      name: "Priyanshu Shrivastava",
      batch: "2022-26",
      img: "/assets/Shrutivang.png",

    },
  ];
  const clubs = [
    {
      name: "Shrutivang",
      subtitle: "Literary Club",
      description: "Where words come alive through poetry and storytelling",
      logo: "/assets/Shrutivang.png",
      path: "/clubs/literary",
      color: "from-purple-400 to-blue-400"
    },
    // {
    //   name: "Pratyaksha",
    //   subtitle: "Drama Club", 
    //   description: "Bringing stories to life through theatrical excellence",
    //   logo: "/assets/Pratyaksha.png",
    //   path: "/clubs/drama",
    //   color: "from-blue-400 to-indigo-400"
    // },
    // {
    //   name: "Anukriti",
    //   subtitle: "Creative Club",
    //   description: "Unleashing creativity through art and design",
    //   logo: "/assets/Anukriti.png",
    //   path: "/clubs/creative",
    //   color: "from-cyan-400 to-teal-400"
    // },
    {
      name: "Aaroh",
      subtitle: "Music Club",
      description: "Creating harmony through melodies and rhythms",
      logo: "/assets/Aaroh.png",
      path: "/clubs/music",
      color: "from-yellow-400 to-orange-400"
    },
    {
      name: "Udgam",
      subtitle: "Dance Club",
      description: "Expressing culture through graceful movements",
      logo: "/assets/Udgam.png",
      path: "/clubs/dance",
      color: "from-pink-400 to-purple-400"
    }
  ];

  const announcements = [
    {
      title: "Vibgyor 2025 Registration Open",
      date: "March 15, 2025",
      description: "Join our biggest cultural fest of the year!",
      badge: "Important"
    },
    {
      title: "New Club Memberships",
      date: "February 1, 2025", 
      description: "Applications open for all cultural clubs",
      badge: "Recruitment"
    },
    {
      title: "Inter-College Competition",
      date: "April 20, 2025",
      description: "Participate in Sangram 2025 competitions",
      badge: "Competition"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="hero-gradient py-20 px-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-8xl animate-float">🎭</div>
            <div className="absolute top-32 right-20 text-6xl animate-float" style={{ animationDelay: '1s' }}>🎵</div>
            <div className="absolute bottom-20 left-32 text-7xl animate-float" style={{ animationDelay: '2s' }}>🎨</div>
            <div className="absolute bottom-10 right-10 text-5xl animate-float" style={{ animationDelay: '0.5s' }}>📚</div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <img
              src="/assets/Advitiya.png"
              alt="Advitiya Cultural Society"
              className="w-32 h-32 mx-auto mb-8 animate-float"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Advitiya
            </h1>
            <p className="text-2xl md:text-3xl mb-4 animate-slide-up font-serif italic">
              Cultural Society
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Unmatched • Unparalleled • Unforgettable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary">
                Explore Our Clubs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
                Join Events
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 cultural-gradient bg-clip-text text-transparent">
                Announcements & Notice Board
              </h2>
              <p className="text-muted-foreground">Stay updated with the latest news and events</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {announcements.map((announcement, index) => (
                <Card key={index} className={`border-0 shadow-card hover-lift animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="cultural-gradient text-white">
                        {announcement.badge}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {announcement.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <CardDescription>{announcement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 cultural-gradient bg-clip-text text-transparent">
                Our Cultural Clubs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover your passion and join one of our vibrant cultural clubs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {clubs.map((club, index) => (
                <Link
                  key={index}
                  to={club.path}
                  className={`block hover-lift animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="border-0 shadow-card h-full overflow-hidden group">
                    <div className={`h-24 bg-gradient-to-r ${club.color} flex items-center justify-center`}>
                      <img
                        src={club.logo}
                        alt={club.name}
                        className="w-16 h-16 rounded-full bg-white/20 p-2 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{club.name}</CardTitle>
                      <p className="text-primary font-medium">{club.subtitle}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {club.description}
                      </p>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" asChild className="cultural-gradient text-white hover:opacity-90">
                <Link to="/clubs">
                  Explore All Clubs <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 cultural-gradient bg-clip-text text-transparent">
             Founders
            </h2>
            <div className="flex justify-around">
              {leaders.map((leader, index) => (
                <Card key={index} className={`border-0 shadow-card hover-lift text-center animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      {/* <AvatarFallback className="text-lg font-bold cultural-gradient text-white">
                        {/* {leader.batch}
                         */}
                         {/* <img src={leaders.img} alt="" />
                      </AvatarFallback> */} 
                      <img src={leader.img} alt="not found" />
                    </Avatar>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                    {/* <p className="text-primary font-medium">{leader.position}</p> */}
                    {/* <p className="text-sm text-muted-foreground">{leader.designation}</p> */}
                    <p className="text-sm text-muted-foreground">{leader.batch}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* <About/> */}

        {/* <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold cultural-gradient bg-clip-text text-transparent mb-2">
                  5
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-muted-foreground">Active Clubs</span>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold cultural-gradient bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-muted-foreground">Active Members</span>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold cultural-gradient bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-muted-foreground">Events Annually</span>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold cultural-gradient bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-muted-foreground">Awards Won</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </Layout>
  );
};

export default Index;
