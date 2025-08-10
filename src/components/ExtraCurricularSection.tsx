import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ExtraCurricularSection = () => {
  const achievements = [
    '1st Place - Chess Fest (University-wide competition)',
    'Champion - Chess Fest Enigma',
    'Consistently ranked top in campus chess events'
  ];

  const images = ['/chess/1.png', '/chess/2.png', '/chess/3.png'];

  return (
    <section id="extracurricular" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="fade-in-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">
            Extra Curricular
          </h2>

          <div className="glass-panel p-8 md:p-12 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Chess Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {achievements.map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>

                <div className="pt-2">
                  <h4 className="text-lg font-semibold text-foreground">Volunteering & Organization</h4>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    Yusuf volunteered as an event coordinator for Chess Fest, helping organize fixtures, schedules, and logistics. He streamlined registrations, set up the pairing and timing system, coordinated with the venue and sponsors, and ensured smooth round transitions and fair play throughout the event. He also contributed to Chess Fest Enigma, assisting with operations and awards.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-3">
                    <li>Coordinated 50+ players across multiple brackets</li>
                    <li>Led a team of volunteers; handled registrations and communications</li>
                    <li>Implemented pairing and time controls; kept rounds on schedule</li>
                    <li>Managed venue setup, equipment, sponsorships, and prize distribution</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <Carousel className="w-full max-w-xl mx-auto">
                  <CarouselContent>
                    {images.map((src, idx) => (
                      <CarouselItem key={idx}>
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-secondary">
                          <img src={src} alt={`Chess achievement ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-secondary/60 hover:bg-secondary text-foreground border-border" />
                  <CarouselNext className="bg-secondary/60 hover:bg-secondary text-foreground border-border" />
                </Carousel>
                <p className="text-center text-xs text-muted-foreground mt-3">Swipe or use arrows to view photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;