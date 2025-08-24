
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="mt-16 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/Advitiya.png" alt="Advitiya Cultural Society" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="font-bold text-lg">Advitiya Cultural Society</h3>
                <p className="text-sm text-muted-foreground">Unmatched. Unparalleled. Unforgettable.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Advitiya Cultural Society is the premier cultural organization fostering creativity, 
              talent, and artistic expression. We bring together diverse clubs to create 
              unforgettable experiences and celebrate the rich cultural heritage.
            </p>
            <div className="flex items-center gap-3">
              <img src="/assets/IMS-LOGO.png" alt="IMS Engineering College" className="h-10 w-10" />
              <div>
                <a href="http://imsec.ac.in/" target="_"><p className="font-semibold text-sm">IMS Engineering College</p></a>
                <p className="text-xs text-muted-foreground">Ghaziabad</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="grid gap-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</a>
              <a href="/clubs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Clubs</a>
              <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Extras</h4>
            <nav className="grid gap-2">
              <a href="https://mail.google.com/a/imsec.ac.in/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mail</a>
            </nav>
          </div>

          {/* <div>
            <h4 className="font-semibold mb-4">Our Clubs</h4>
            <nav className="grid gap-2">
              <a href="/clubs/literary" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shrutivang</a>
              <a href="/clubs/drama" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pratyaksha</a>
              <a href="/clubs/creative" className="text-sm text-muted-foreground hover:text-primary transition-colors">Anukriti</a>
              <a href="/clubs/music" className="text-sm text-muted-foreground hover:text-primary transition-colors">Aaroh</a>
              <a href="/clubs/dance" className="text-sm text-muted-foreground hover:text-primary transition-colors">Udgam</a>
            </nav>
          </div> */}
        </div>

        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Advitiya Cultural Society. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Advitiya" target="_blank" rel="noopener noreferrer">
             <Facebook className="h-6 w-6"/>
            </a>
            <a href="https://www.instagram.com/advitiya_imsec/" target="_blank" rel="noopener noreferrer">
             <InstagramIcon className="h-6 w-6"/>
            </a>
            <a href="https://chat.whatsapp.com/IN9j2zDboap1vwLPUHAV1l" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="Culturalsociety.advitiya@imsec.ac.in">
              <CgMail />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;