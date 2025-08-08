import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Palette, Database, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: 'HTML/CSS', level: 90, years: '3+' },
      { name: 'JavaScript', level: 85, years: '2+' },
      { name: 'React', level: 80, years: '1+' },
      { name: 'TypeScript', level: 75, years: '1+' }
    ]
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: 'React Native', level: 85, years: '2+' },
      { name: 'Flutter', level: 80, years: '1+' },
      { name: 'App Store Deployment', level: 70, years: '1+' }
    ]
  },
  {
    title: 'Programming Languages',
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: 'JavaScript', level: 85, years: '2+' },
      { name: 'C/C++', level: 80, years: '2+' },
      { name: 'Python', level: 75, years: '1+' },
      { name: 'Dart', level: 80, years: '1+' }
    ]
  },
  {
    title: 'Design & Tools',
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: 'Figma', level: 85, years: '2+' },
      { name: 'Adobe Creative Suite', level: 75, years: '1+' },
      { name: 'UI/UX Design', level: 80, years: '2+' }
    ]
  },
  {
    title: 'Database & Backend',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'Firebase', level: 80, years: '1+' },
      { name: 'MongoDB', level: 70, years: '1+' },
      { name: 'REST APIs', level: 75, years: '1+' }
    ]
  },
  {
    title: 'Tools & Platform',
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: 'Git/GitHub', level: 85, years: '2+' },
      { name: 'VS Code', level: 90, years: '3+' },
      { name: 'NPM/Yarn', level: 80, years: '2+' }
    ]
  }
];

const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setProgress(skill.level);
          }, index * 100);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [skill.level, index]);

  const getSkillLevel = (level: number) => {
    if (level >= 85) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 65) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">{skill.years}</span>
          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
            {getSkillLevel(skill.level)}
          </span>
        </div>
      </div>
      <div className="w-full bg-muted/30 rounded-full h-2 glass">
        <div
          className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${progress}%` : '0%',
            boxShadow: isVisible ? '0 0 10px rgba(var(--primary), 0.5)' : 'none'
          }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-xs text-muted-foreground">{progress}%</span>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-glass-lg hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="glass-card p-6 rounded-glass text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="glass-card p-6 rounded-glass text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="glass-card p-6 rounded-glass text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </div>
          <div className="glass-card p-6 rounded-glass text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};