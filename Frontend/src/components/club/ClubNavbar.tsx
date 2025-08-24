import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ClubNavbarProps {
  clubName: string;
  logoSrc: string;
}

const ClubNavbar = ({ clubName, logoSrc }: ClubNavbarProps) => {
  const location = useLocation();
  const isClubPage = /\/clubs\//.test(location.pathname);

  const sectionLinks = [
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Founder", href: "#founder" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link to={isClubPage ? location.pathname : "/"} className="flex items-center gap-2 hover-glow">
          <img src={logoSrc} alt={`${clubName} logo`} className="h-10 w-10 rounded-full" />
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {clubName}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {sectionLinks.map((l) => (
            <a key={l.name} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.name}
            </a>
          ))}
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/clubs">Back to Society</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button asChild size="sm" variant="outline" className="border-primary text-primary">
            <Link to="/clubs">Society</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default ClubNavbar;
