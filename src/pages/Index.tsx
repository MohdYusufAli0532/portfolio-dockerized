import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ExtraCurricularSection from '@/components/ExtraCurricularSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    // Add scroll-triggered animations
    const splashTimer = setTimeout(() => setShowSplash(false), 1200);
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      clearTimeout(splashTimer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen />}
      <Navigation />
      <HeroSection />
      <div className="fade-in-up"><AboutSection /></div>
      <div className="fade-in-up"><SkillsSection /></div>
      <div className="fade-in-up"><ProjectsSection /></div>
      <div className="fade-in-up"><ExperienceSection /></div>
      <div className="fade-in-up"><EducationSection /></div>
      <div className="fade-in-up"><ExtraCurricularSection /></div>
      <div className="fade-in-up"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
