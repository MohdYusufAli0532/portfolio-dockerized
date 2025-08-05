import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'United College of Engineering and Research, Prayagraj',
      period: '2022 – Present',
      grade: 'CGPA: 8.08'
    },
    {
      degree: 'Senior Secondary (U.P. Board)',
      institution: 'Government Inter College, Prayagraj',
      period: '2021',
      grade: '70.40%'
    }
  ];

  const certifications = [
    {
      title: 'Offline DSA Workshop',
      provider: 'GeeksforGeeks',
      duration: '1 Month, 2025'
    },
    {
      title: 'C++ Programming',
      provider: 'Udemy',
      duration: 'Completed'
    },
    {
      title: 'Java Programming (Beginner to OOP)',
      provider: 'Udemy',
      duration: 'Completed'
    },
    {
      title: 'Machine Learning',
      provider: 'Growth Ninja',
      duration: 'Completed'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="fade-in-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">
            Education & Certifications
          </h2>
          
          <div className="glass-panel p-8 md:p-12 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/20 rounded-xl mr-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold text-2xl text-foreground">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="glass-panel p-6 hover-glow transition-all duration-300">
                      <h4 className="font-poppins font-semibold text-lg mb-2 text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="font-inter text-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-inter text-sm text-muted-foreground">
                          {edu.period}
                        </span>
                        <span className="glow-tag font-mono text-sm px-2 py-1 rounded">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/20 rounded-xl mr-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold text-2xl text-foreground">
                    Certifications
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="glass-panel p-5 hover-glow transition-all duration-300">
                      <h4 className="font-poppins font-semibold text-lg mb-1 text-foreground">
                        {cert.title}
                      </h4>
                      <p className="font-inter text-primary font-medium mb-1">
                        {cert.provider}
                      </p>
                      <span className="font-inter text-sm text-muted-foreground">
                        {cert.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;