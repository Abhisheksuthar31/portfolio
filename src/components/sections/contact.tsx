import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Hidden field for spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return; // Likely spam
    }

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual Formspree endpoint
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simulate success for demo
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or use the email link below.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'abhisheksuthar3112@gmail.com',
      href: 'mailto:abhisheksuthar3112@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Jaipur, Rajasthan, India',
      href: null
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'github.com/abhisheksuthar31',
      href: 'https://github.com/abhisheksuthar31'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-glass-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <p className="text-muted-foreground mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology. Whether you're looking for a developer for your team, 
                need help with a project, or want to explore potential collaborations, I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/abhisheksuthar31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:scale-110 transition-all duration-300 group"
                  >
                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />
                  </a>
                  <a
                    href="https://linkedin.com/in/abhisheksuthar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:scale-110 transition-all duration-300 group"
                  >
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-blue-600" />
                  </a>
                  <a
                    href="mailto:abhisheksuthar3112@gmail.com"
                    className="p-3 glass-card rounded-lg hover:scale-110 transition-all duration-300 group"
                  >
                    <Mail className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="glass-card p-6 rounded-glass-lg bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-glass-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass bg-transparent border-border"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass bg-transparent border-border"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass bg-transparent border-border"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass bg-transparent border-border resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full glass-button bg-gradient-to-r from-primary to-accent text-white hover:shadow-2xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By sending this message, you agree to be contacted regarding your inquiry.
              </p>
            </form>

            {/* Fallback Contact Info */}
            <div className="mt-8 p-4 bg-muted/20 rounded-glass">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                <span>
                  Form not working? Email me directly at{' '}
                  <a
                    href="mailto:abhisheksuthar3112@gmail.com"
                    className="text-primary hover:underline"
                  >
                    abhisheksuthar3112@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};