import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ImageViewer from "@/components/ImageViewer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EventGallery = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const eventData: Record<string, { title: string; images: string[] }> = {
    "vibgyor-2025": {
      title: "Vibgyor 2025",
      images: [
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop"
      ]
    },
    "sangram-2025": {
      title: "Sangram 2025",
      images: [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583500178690-e2b5f0f84b2b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1549451371-64aa98a6f32b?w=800&h=600&fit=crop"
      ]
    },
    "tech-fest-2025": {
      title: "Tech Fest 2025",
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1615469038804-6616c4caf5dc?w=800&h=600&fit=crop"
      ]
    },
    "farewell-2025": {
      title: "Farewell 2025",
      images: [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1561489413-985468c1cd8f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop"
      ]
    }
  };

  const currentEvent = eventData[eventId || ""];

  if (!currentEvent) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event not found</h1>
            <Button onClick={() => navigate("/gallery")}>Back to Gallery</Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < currentEvent.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="hero-gradient py-16 px-4">
          <div className="container mx-auto">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 mb-6"
              onClick={() => navigate("/gallery")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Gallery
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              {currentEvent.title}
            </h1>
            <p className="text-xl text-white/90 animate-slide-up">
              {currentEvent.images.length} images
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentEvent.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleImageClick(index)}
                >
                  <div className="aspect-square">
                    <img
                      src={image}
                      alt={`${currentEvent.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
                      View Image
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedImageIndex !== null && (
          <ImageViewer
            images={currentEvent.images}
            currentIndex={selectedImageIndex}
            onClose={handleClose}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </div>
    </Layout>
  );
};

export default EventGallery;