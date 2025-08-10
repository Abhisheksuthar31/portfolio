import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/abhisheksuthar31',
    icon: <Github className="h-5 w-5" />
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/abhisheksuthar',
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    name: 'Email',
    href: 'mailto:abhisheksuthar3112@gmail.com',
    icon: <Mail className="h-5 w-5" />
  }
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Abhishek Suthar
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Passionate web and mobile developer creating innovative solutions 
              with modern technologies. Always excited to take on new challenges 
              and build amazing user experiences. Created portfolio with Arman & ravi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 glass-card rounded-lg hover:scale-110 transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:abhisheksuthar3112@gmail.com"
                  className="text-sm text-primary hover:underline"
                >
                  abhisheksuthar3112@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-sm text-foreground">Jaipur, Rajasthan</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Abhishek Suthar. Made 
              <a href="/developers.txt" target='_blank'> in Assosiation with </a>
                Arman</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/abhisheksuthar31/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              View Source Code
            </a>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="glass-card hover:scale-110 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-4 pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            Designed and built with modern web technologies • 
            React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};