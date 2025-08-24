interface ClubFooterProps {
  clubName: string;
  logoSrc: string;
}

const ClubFooter = ({ clubName, logoSrc }: ClubFooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <img src={logoSrc} alt={`${clubName} footer logo`} className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-semibold">{clubName}</p>
            <p className="text-sm text-muted-foreground">Advitiya Cultural Society</p>
          </div>
        </div>
        <nav className="grid gap-2">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary">About</a>
          <a href="#activities" className="text-sm text-muted-foreground hover:text-primary">Activities</a>
          <a href="#events" className="text-sm text-muted-foreground hover:text-primary">Events</a>
          <a href="#gallery" className="text-sm text-muted-foreground hover:text-primary">Gallery</a>
          <a href="#founder" className="text-sm text-muted-foreground hover:text-primary">Founder</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
        </nav>
        <div className="text-sm text-muted-foreground">
          <p>&copy; {year} {clubName}. All rights reserved.</p>
          <p className="mt-2">Built with love by Advitiya Cultural Society.</p>
        </div>
      </div>
    </footer>
  );
};

export default ClubFooter;
