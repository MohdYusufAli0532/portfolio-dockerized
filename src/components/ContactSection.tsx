import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes - would integrate with actual form handler
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="fade-in-up max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Get In Touch
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Feel free to send me a message.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-panel p-8 hover-glow">
              <h3 className="font-poppins font-semibold text-2xl mb-6 text-foreground">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full glass-panel border-primary/30 bg-transparent text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full glass-panel border-primary/30 bg-transparent text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full glass-panel border-primary/30 bg-transparent text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full hover-lift font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins font-semibold text-2xl mb-6 text-foreground">
                  Let's Connect
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a passionate developer, have a project in mind, 
                  or just want to connect, I'd love to hear from you. Let's build something amazing together!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 hover-glow flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-foreground">Email</h4>
                    <a 
                      href="mailto:yusuf0532ali@gmail.com"
                      className="font-inter text-muted-foreground hover:text-primary transition-colors"
                    >
                      yusuf0532ali@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="glass-panel p-6 hover-glow flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-foreground">Phone</h4>
                    <a 
                      href="tel:+919336745459"
                      className="font-inter text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91-9336745459
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="font-inter text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Response Time:</span> I typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;