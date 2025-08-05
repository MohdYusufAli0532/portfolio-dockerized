import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Space Weather Storm Predictor',
      description: 'Built a predictive model using XGBoost on geomagnetic indices to forecast space weather storms. Deployed with a responsive Streamlit app and a reproducible pipeline.',
      tags: ['Python', 'XGBoost', 'Streamlit'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Smart Presence Face Attendance System',
      description: 'A real-time facial recognition system using OpenCV for attendance logging, featuring a GUI with CSV export and session history.',
      tags: ['OpenCV', 'Tkinter', 'Facial Recognition'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'SMS/Email Spam Classifier',
      description: 'Engineered an NLP pipeline using TF-IDF and Naive Bayes, delivered with an intuitive GUI for real-time prediction.',
      tags: ['Scikit-learn', 'NLP', 'Naive Bayes'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Face Recognition System',
      description: 'Achieved robust identity verification using CNN embeddings and FaceNet architecture.',
      tags: ['Python', 'FaceNet', 'CNNs'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Hospital Management System',
      description: 'Developed a file-based patient and doctor management system using core Java principles.',
      tags: ['Java', 'java.io', 'File Handling'],
      liveDemo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="fade-in-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glass-panel p-6 hover-glow hover-scale transition-all duration-300 group"
              >
                <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="glow-tag font-mono text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 hover-lift bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover-lift glass-panel border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;