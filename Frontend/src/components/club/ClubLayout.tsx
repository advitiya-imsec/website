import { ReactNode, useEffect } from "react";
import ClubNavbar from "./ClubNavbar";
import ClubFooter from "./ClubFooter";

interface ClubLayoutProps {
  clubName: string;
  logoSrc: string;
  children: ReactNode;
  seoTitle?: string;
}

const ClubLayout = ({ clubName, logoSrc, children, seoTitle }: ClubLayoutProps) => {
  useEffect(() => {
    if (seoTitle) {
      document.title = seoTitle;
    } else {
      document.title = `${clubName} — Advitiya Cultural Society`;
    }
  }, [clubName, seoTitle]);

  return (
    <div className="min-h-screen bg-background">
      <ClubNavbar clubName={clubName} logoSrc={logoSrc} />
      <main className="pt-16">{children}</main>
      <ClubFooter clubName={clubName} logoSrc={logoSrc} />
    </div>
  );
};

export default ClubLayout;
