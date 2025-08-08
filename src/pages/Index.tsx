import React, { useEffect } from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer/footer';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Index = () => {
  useEffect(() => {
    // Set SEO meta tags
    document.title = 'Abhishek Suthar - Web & Mobile Developer | React Native | Flutter';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Passionate B.Tech student specializing in web and mobile development. Expert in React Native, Flutter, JavaScript, and modern frontend technologies. Available for internships and freelance projects.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abhishek Suthar",
      "jobTitle": "Web & Mobile Developer",
      "description": "B.Tech student specializing in React Native and Flutter development",
      "url": window.location.href,
      "sameAs": [
        "https://github.com/abhisheksuthar31",
        "https://linkedin.com/in/abhisheksuthar"
      ],
      "knowsAbout": [
        "React Native",
        "Flutter",
        "JavaScript",
        "Web Development",
        "Mobile Development"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <ThemeToggle />
    </main>
  );
};

export default Index;
