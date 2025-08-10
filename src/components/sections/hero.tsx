import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import headshot from '@/assets/headshot.jpg';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Web & Mobile
                </span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fadeInUp [animation-delay:0.2s] opacity-0">
                Building polished user experiences with modern technologies.
                Passionate about creating seamless digital solutions.
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl animate-fadeInUp [animation-delay:0.4s] opacity-0">
                B.Tech Student at Poornima Institute, Jaipur | Former Student Council Captain | 
                National Football Championship Participant
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp [animation-delay:0.6s] opacity-0">
              <Button 
                size="lg" 
                className="glass-button bg-gradient-to-r from-primary to-accent text-white hover:shadow-2xl group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-button group"
                onClick={() => {
                  // Download resume from URL
                  const resumeUrl = "https://drive.google.com/file/d/1dGcmUxHKjhGK7wE2vEn4FZxQwE8R9tE1/view?usp=sharing";
                  window.open(resumeUrl, '_blank');
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fadeInUp [animation-delay:0.8s] opacity-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Championship</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight [animation-delay:0.4s] opacity-0">
            <div className="relative">
              {/* Floating Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse-glow"></div>
              
              {/* Profile Image Container */}
              <div className="relative glass-card p-2 rounded-full animate-float">
                <img
                  src={headshot}
                  alt="Abhishek Suthar"
                  className="w-80 h-80 rounded-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse [animation-delay:1s]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};