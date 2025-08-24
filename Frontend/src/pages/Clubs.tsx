import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: "Shrutivang",
      subtitle: "Literary Club",
      description: "Where words come alive through poetry, storytelling, and literary excellence",
      logo: "/assets/Shrutivang.png",
      path: "/clubs/literary",
      theme: "literary-theme"
    },
    {
      id: 2,
      name: "Pratyaksha",
      subtitle: "Drama Club",
      description: "Bringing stories to life through theatrical performances and stage artistry",
      logo: "/assets/Pratyaksha.png",
      path: "/clubs/drama",
      theme: "drama-theme"
    },
    {
      id: 3,
      name: "Anukriti",
      subtitle: "Creative Club",
      description: "Unleashing creativity through art, design, and innovative expressions",
      logo: "/assets/Anukriti.png",
      path: "/clubs/creative",
      theme: "creative-theme"
    },
    {
      id: 4,
      name: "Aaroh",
      subtitle: "Music Club",
      description: "Creating harmony through melodies, rhythms, and musical performances",
      logo: "/assets/Aaroh.png",
      path: "/clubs/music",
      theme: "music-theme"
    },
    {
      id: 5,
      name: "Udgam",
      subtitle: "Dance Club",
      description: "Expressing emotions through graceful movements and choreography",
      logo: "/assets/Udgam.png",
      path: "/clubs/dance",
      theme: "dance-theme"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="hero-gradient py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Our Clubs
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
              Discover your passion through our diverse cultural clubs and unleash your creativity, talent, and artistic expression.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubs.map((club, index) => (
                <Link
                  key={club.id}
                  to={club.path}
                  className={`block hover-lift animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${club.theme} rounded-xl p-8 text-white h-full transition-all duration-300 hover:scale-105`}>
                    <div className="text-center">
                      <img
                        src={club.logo}
                        alt={club.name}
                        className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 p-2 animate-float"
                      />
                      <h3 className="text-2xl font-bold mb-2">{club.name}</h3>
                      <p className="text-white/90 text-lg mb-4">{club.subtitle}</p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {club.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Clubs;