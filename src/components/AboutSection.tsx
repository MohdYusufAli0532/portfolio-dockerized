const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="fade-in-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                A Computer Science student at <span className="font-semibold text-foreground">United College of Engineering and Research</span>, I have a profound passion for building intelligent systems and solving complex problems.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in Data Structures and Algorithms, evidenced by solving over <span className="font-semibold text-primary">600 problems on LeetCode</span>, I am eager to apply my knowledge in Machine Learning and software development to create impactful, real-world solutions.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                My goal is to contribute to innovative projects that push the boundaries of technology and make a meaningful difference in people's lives.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glow-tag px-4 py-2 rounded-lg">
                  <span className="font-mono text-primary font-semibold">600+</span>
                  <span className="font-inter text-sm text-muted-foreground ml-2">LeetCode Problems</span>
                </div>
                <div className="glow-tag px-4 py-2 rounded-lg">
                  <span className="font-mono text-primary font-semibold">8.08</span>
                  <span className="font-inter text-sm text-muted-foreground ml-2">CGPA</span>
                </div>
                <div className="glow-tag px-4 py-2 rounded-lg">
                  <span className="font-mono text-primary font-semibold">5+</span>
                  <span className="font-inter text-sm text-muted-foreground ml-2">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;