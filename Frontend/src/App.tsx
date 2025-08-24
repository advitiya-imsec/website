import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Clubs from "./pages/Clubs";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Auth from "./pages/Auth";
import Literary from "./pages/clubs/Literary";
import Drama from "./pages/clubs/Drama";
import Creative from "./pages/clubs/Creative";
import Music from "./pages/clubs/Music";
import Dance from "./pages/clubs/Dance";
import EventGallery from "./pages/EventGallery";
import EventRegister from "./pages/EventRegister";
import ClubJoin from "./pages/ClubJoin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/clubs/literary" element={<Literary />} />
          <Route path="/clubs/drama" element={<Drama />} />
          <Route path="/clubs/creative" element={<Creative />} />
          <Route path="/clubs/music" element={<Music />} />
          <Route path="/clubs/dance" element={<Dance />} />
          <Route path="/gallery/:eventId" element={<EventGallery />} />
          <Route path="/register/:eventId" element={<EventRegister />} />
          <Route path="/join/:clubId" element={<ClubJoin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
