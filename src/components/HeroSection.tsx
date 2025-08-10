import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohd-yusuf-ali-365b24248/',
      label: 'LinkedIn',
      color: 'hover:text-primary'
    },
    {
      icon: Github,
      href: 'https://github.com/MohdYusufAli0532',
      label: 'GitHub',
      color: 'hover:text-primary'
    },
    {
      icon: Code,
      href: 'https://leetcode.com/mohdyusuf0358/',
      label: 'LeetCode',
      color: 'hover:text-primary'
    },
    {
      icon: Mail,
      href: 'mailto:yusuf0532ali@gmail.com',
      label: 'Email',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Fade Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/src/assets/background-photo.jpg')`,
          filter: 'grayscale(100%) brightness(0.8)'
        }}
      ></div>
      
      {/* Grey Circle Halo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-gray-800/30 to-gray-600/20 blur-3xl"></div>
      </div>
      
      {/* Futuristic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_55%,hsl(var(--brand)/0.15),transparent_60%)] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="fade-in-up flex flex-col items-center justify-center gap-12 lg:gap-20">
          
          {/* Content Panels */}
          <div className="space-y-6 lg:space-y-8 max-w-2xl">
            {/* Greeting Panel */}
            <div className="glass-panel p-6 floating-panel hover-glow">
              <h1 className="font-poppins font-medium text-2xl md:text-3xl text-foreground mb-2">
                Hello, I'm Yusuf Ali
              </h1>
              <p className="font-inter text-muted-foreground">Computer Science Student</p>
            </div>

            {/* Role Panel */}
            <div className="glass-panel p-6 floating-panel hover-glow">
              <h2 className="font-poppins font-medium text-xl md:text-2xl gradient-text mb-2">
                ML & AI Enthusiast
              </h2>
              <p className="font-inter text-muted-foreground">Building intelligent systems</p>
            </div>

            {/* Status Panel */}
            <div className="glass-panel p-6 floating-panel hover-glow">
              <h3 className="font-poppins font-medium text-lg md:text-xl text-foreground mb-2">
                Open to Opportunities
              </h3>
              <p className="font-inter text-muted-foreground">Ready for new challenges</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-3 hover-glow accent-glow transition-all duration-300"
                  title={link.label}
                >
                  <link.icon size={20} className="text-brand" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="font-poppins font-semibold text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground hover-lift mt-6 w-full lg:w-auto ring-brand"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;