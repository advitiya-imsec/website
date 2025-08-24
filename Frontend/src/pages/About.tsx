import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const leaders = [
    {
      name: "Dr. [Name]",
      position: "Faculty Advisor",
      designation: "Professor & Head",
      initials: "FA"
    },
    {
      name: "[President Name]",
      position: "Society President",
      designation: "Final Year Student",
      initials: "SP"
    },
    {
      name: "[Vice President Name]",
      position: "Vice President",
      designation: "Third Year Student",
      initials: "VP"
    },
    {
      name: "[Secretary Name]",
      position: "General Secretary",
      designation: "Second Year Student",
      initials: "GS"
    }
  ];

  const clubs = [
    {
      name: "Shrutivang",
      type: "Literary Club",
      description: "Fostering literary excellence through poetry, creative writing, debates, and storytelling competitions.",
      logo: "/assets/Shrutivang.png"
    },
    {
      name: "Pratyaksha",
      type: "Drama Club",
      description: "Bringing characters to life through theatrical performances, street plays, and dramatic expressions.",
      logo: "/assets/Pratyaksha.png"
    },
    {
      name: "Anukriti",
      type: "Creative Club",
      description: "Unleashing artistic potential through painting, crafts, digital art, and creative workshops.",
      logo: "/assets/Anukriti.png"
    },
    {
      name: "Aaroh",
      type: "Music Club",
      description: "Creating harmony through vocal performances, instrumental music, and composition workshops.",
      logo: "/assets/Aaroh.png"
    },
    {
      name: "Udgam",
      type: "Dance Club",
      description: "Expressing culture through classical, contemporary, and folk dance performances.",
      logo: "/assets/Udgam.png"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="hero-gradient py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              About Advitiya
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Unmatched. Unparalleled. Unforgettable. - A cultural society dedicated to nurturing creativity and celebrating arts
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card className="border-0 shadow-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold cultural-gradient bg-clip-text text-transparent">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide a platform for students to explore, develop, and showcase their cultural talents while fostering creativity, collaboration, and cultural appreciation within the college community.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold cultural-gradient bg-clip-text text-transparent">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the premier cultural society that cultivates artistic excellence, promotes cultural diversity, and creates memorable experiences that enrich the academic journey of every student.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 cultural-gradient bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <Card key={index} className={`border-0 shadow-card hover-lift text-center animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarFallback className="text-lg font-bold cultural-gradient text-white">
                        {leader.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                    <p className="text-primary font-medium">{leader.position}</p>
                    <p className="text-sm text-muted-foreground">{leader.designation}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 cultural-gradient bg-clip-text text-transparent">
              Our Clubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubs.map((club, index) => (
                <Card key={index} className={`border-0 shadow-card hover-lift animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    <img
                      src={club.logo}
                      alt={club.name}
                      className="w-16 h-16 mx-auto mb-4 rounded-full"
                    />
                    <CardTitle className="text-xl">{club.name}</CardTitle>
                    <p className="text-primary font-medium">{club.type}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {club.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;