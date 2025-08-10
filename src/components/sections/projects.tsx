import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import projectsData from '@/data/projects.json';

const filterOptions = ['All', 'Full Stack', 'Web App', 'Mobile'];

export const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filterProjects = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => 
        project.category.toLowerCase() === filter.toLowerCase()
      );
      setProjects(filtered);
    }
  };

  const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="glass-card max-w-4xl max-h-[90vh] overflow-y-auto rounded-glass-lg p-8 w-full">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-64 object-cover rounded-glass mb-4"
              />
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string, index: number) => (
                      <Badge key={index} variant="secondary" className="glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.repoUrl && (
                    <Button variant="outline" size="sm" className="glass-button" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button size="sm" className="glass-button bg-gradient-to-r from-primary to-accent" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-foreground">Role</h5>
                  <p className="text-muted-foreground text-sm">{project.role}</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">Duration</h5>
                  <p className="text-muted-foreground text-sm">{project.duration}</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">Team Size</h5>
                  <p className="text-muted-foreground text-sm">{project.teamSize}</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">Status</h5>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {project.challenges && (
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Challenges & Solutions</h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Showcasing my best work in web and mobile development
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => filterProjects(filter)}
                className={`px-6 py-2 rounded-pill transition-all duration-300 ${
                  activeFilter === filter
                    ? 'glass-button bg-gradient-to-r from-primary to-accent text-white'
                    : 'glass-button text-muted-foreground hover:text-foreground'
                }`}
              >
                <Filter className="mr-2 h-4 w-4 inline" />
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-glass-lg overflow-hidden hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-card rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-card rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="glass">
                    {project.category}
                  </Badge>
                  <Badge
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-muted/20 text-muted-foreground rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full glass-button group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};