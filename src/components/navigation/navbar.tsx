import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.svg';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-10 w-10" src={logo} alt="Abhishek Suthar" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/abhisheksuthar31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/abhisheksuthar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:abhisheksuthar3112@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button variant="outline" size="sm" className="glass-button ml-4">
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass-card p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="glass-card mx-4 mt-2 rounded-lg overflow-hidden animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-border">
              <div className="flex items-center justify-center space-x-6 px-5">
                <a
                  href="https://github.com/abhisheksuthar31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/abhisheksuthar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:abhisheksuthar3112@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-3 px-5">
                <Button variant="outline" className="w-full glass-button">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};