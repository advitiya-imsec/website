interface FounderSectionProps {
  clubName: string;
  founder: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
}

const FounderSection = ({ clubName, founder }: FounderSectionProps) => {
  return (
    <section id="founder" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Founder</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-card rounded-xl p-6 shadow-sm">
            <div className="flex justify-center">
              <img
                src={founder.image}
                alt={`${clubName} founder ${founder.name}`}
                className="w-36 h-36 rounded-full object-cover ring-2 ring-primary/20"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">{founder.name}</h3>
              <p className="text-sm text-muted-foreground">{founder.role}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{founder.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
