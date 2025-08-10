import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohd-yusuf-ali-365b24248/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/MohdYusufAli0532',
      label: 'GitHub'
    },
    {
      icon: Code,
      href: 'https://leetcode.com/mohdyusuf0358/',
      label: 'LeetCode'
    },
    {
      icon: Mail,
      href: 'mailto:yusuf0532ali@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-8 text-center">
          <h3 className="font-poppins font-bold text-2xl mb-6 text-foreground">
            Mohd Yusuf Ali
          </h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-3 hover-glow transition-all duration-300"
                title={link.label}
              >
                <link.icon size={20} className="text-primary" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-primary/20 pt-8">
            <p className="font-inter text-muted-foreground">
              © {currentYear} Mohd Yusuf Ali. All rights reserved.
            </p>
            <p className="font-inter text-sm text-muted-foreground mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;