import { Calendar, MapPin, Users } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="fade-in-up max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">
            Experience
          </h2>
          
          <div className="glass-panel p-8 hover-glow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-poppins font-semibold text-2xl mb-2 text-foreground">
                  Tech Fest Volunteer
                </h3>
                
                <div className="flex items-center space-x-4 mb-4 text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="font-inter text-sm">UCER, Prayagraj</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="font-inter text-sm">2023 - Present</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-poppins font-medium text-lg text-foreground mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-muted-foreground">
                        Assisted in managing coding events and technical competitions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-inter text-muted-foreground">
                        Mentored junior students in Data Structures, Algorithms, and C++ fundamentals
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional content for Positions of Responsibility */}
          <div className="text-center mt-12">
            <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
              Impact & Leadership
            </h3>
            <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
              Through my volunteer work, I've helped organize successful tech events and provided guidance to over 50+ students, 
              helping them improve their programming skills and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;