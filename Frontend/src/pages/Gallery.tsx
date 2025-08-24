import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Events" },
    { id: "vibgyor-2025", label: "Vibgyor 2025" },
    { id: "sangram-2025", label: "Sangram 2025" },
    { id: "tech-fest-2025", label: "Tech Fest 2025" },
    { id: "farewell-2025", label: "Farewell 2025" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" }
  ];

  const galleryItems = [
    { id: 1, title: "Vibgyor 2025 Opening", event: "vibgyor-2025", year: "2025", category: "Cultural" },
    { id: 2, title: "Drama Performance", event: "sangram-2025", year: "2025", category: "Drama" },
    { id: 3, title: "Music Concert", event: "tech-fest-2025", year: "2025", category: "Music" },
    { id: 4, title: "Dance Competition", event: "vibgyor-2025", year: "2025", category: "Dance" },
    { id: 5, title: "Literary Event", event: "farewell-2025", year: "2025", category: "Literary" },
    { id: 6, title: "Art Exhibition", event: "vibgyor-2025", year: "2024", category: "Creative" },
    { id: 7, title: "Annual Celebration", event: "sangram-2025", year: "2024", category: "Cultural" },
    { id: 8, title: "Student Performances", event: "tech-fest-2025", year: "2023", category: "Mixed" }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === "all") return true;
    return item.event === activeFilter || item.year === activeFilter;
  });

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="hero-gradient py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
              Capturing moments of creativity, talent, and cultural celebrations
            </p>
          </div>
        </section>

        <section className="py-8 px-4 border-b">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`transition-all duration-300 ${
                    activeFilter === filter.id 
                      ? "cultural-gradient text-white" 
                      : "hover:border-primary hover:text-primary"
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-xl hover-lift animate-fade-in cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.location.href = `/gallery/${item.event}`}
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full cultural-gradient flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {item.title.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-sm text-muted-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {item.category}
                      </Badge>
                      <p className="text-sm opacity-90">{item.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No images found</h3>
                <p className="text-muted-foreground">
                  Try selecting a different filter to view more content.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;