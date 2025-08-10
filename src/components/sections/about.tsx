import React from 'react';
import { Trophy, GraduationCap, Users, Target, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SITE_CONFIG } from '@/config/settings';

const achievements = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Student Council Captain',
    description: 'Led student body initiatives and represented student interests',
    period: '2023-2024'
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: 'National Football Championship',
    description: 'Participated in national level football competition',
    period: '2023'
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Academic Excellence',
    description: 'Maintained high academic standards throughout B.Tech',
    period: '2022-Present'
  }
];

const timeline = [
  {
    year: '2022-2025',
    title: 'B.Tech in Computer Science',
    institution: 'Poornima Institute, Jaipur',
    description: 'Specializing in software development and computer systems',
    type: 'education'
  },
  {
    year: '2021-2023',
    title: 'Diploma in Physical Education',
    institution: 'GD College Bhuna, Fatehabad',
    description: 'Comprehensive study of sports science and physical fitness',
    type: 'education'
  },
  {
    year: '2023-2024',
    title: 'Student Council Captain',
    institution: 'Poornima Institute',
    description: 'Leadership role managing student affairs and initiatives',
    type: 'leadership'
  }
];

const personalValues = [
  { label: 'Innovation', description: 'Always seeking creative solutions' },
  { label: 'Collaboration', description: 'Working effectively in teams' },
  { label: 'Quality', description: 'Commitment to excellence in every project' },
  { label: 'Growth', description: 'Continuous learning and improvement' }
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a diverse background in technology and leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Personal Story */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-glass-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Abhishek Suthar, a passionate B.Tech student at Poornima Institute, Jaipur, 
                  currently in my 3rd year of Computer Science studies. My journey in technology started 
                  with curiosity and has evolved into a deep passion for creating meaningful digital experiences.
                </p>
                
                <p>
                  What sets me apart is my unique combination of technical skills and leadership experience. 
                  As a former Student Council Captain, I've learned the importance of communication, 
                  teamwork, and bringing diverse perspectives together to solve complex problems.
                </p>
                
                <p>
                  My background in physical education has taught me discipline, perseverance, and the 
                  value of continuous improvement - qualities that I bring to every coding project. 
                  Whether it's debugging a complex application or learning a new framework, 
                  I approach challenges with the same determination that drove me to compete 
                  at the national level in football.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-button"
                  onClick={() => {
                    console.log("downloaded");
                    // Create a temporary link to download the CV
                    const link = document.createElement('a');
                    link.href = SITE_CONFIG.files.resume;
                    link.download = 'Abhishek-Suthar-CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Personal Values */}
            <div className="glass-card p-8 rounded-glass-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {personalValues.map((value, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-primary">{value.label}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Education & Achievements */}
          <div className="space-y-8">
            
            {/* Education Timeline */}
            <div className="glass-card p-8 rounded-glass-lg">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education & Experience
              </h3>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-4 top-8 w-px h-16 bg-gradient-to-b from-primary to-accent opacity-30" />
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.type === 'education' 
                          ? 'bg-gradient-to-r from-primary to-accent' 
                          : 'bg-gradient-to-r from-accent to-primary'
                      }`}>
                        {item.type === 'education' ? (
                          <GraduationCap className="h-4 w-4 text-white" />
                        ) : (
                          <Users className="h-4 w-4 text-white" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <Badge 
                            variant="secondary" 
                            className="text-xs glass bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900"
                          >
                            {item.year}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium text-sm mb-2">
                          <MapPin className="inline h-3 w-3 mr-1" />
                          {item.institution}
                        </p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-card p-8 rounded-glass-lg">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Trophy className="mr-3 h-6 w-6 text-accent" />
                Key Achievements
              </h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-muted/20 rounded-glass hover:scale-105 transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <span className="text-xs text-muted-foreground">{achievement.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="glass-card p-8 rounded-glass-lg">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Target className="mr-3 h-6 w-6 text-primary" />
                Quick Facts
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/20 rounded-glass">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Coding</div>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-glass">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-glass">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">Championship</div>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-glass">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};