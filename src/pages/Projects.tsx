import { useState } from "react";
import { getProjectsByCategory } from "../data/projects";
import type { Project } from "../data/projects";
import "./Projects.css";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(selectedCategory);

  const categories = [
    { key: "all", label: "Todos" },
    { key: "web", label: "Web Apps" },
    { key: "api", label: "APIs" },
    { key: "desktop", label: "Desktop" },
    { key: "mobile", label: "Mobile" },
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <section className="projects-hero">
          <h1>Meus Projetos</h1>
          <p className="lead">
            Uma coleção dos projetos que desenvolvi, desde APIs robustas até
            interfaces interativas
          </p>
        </section>

        <section className="projects-content">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${
                  selectedCategory === category.key ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageUrl} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          {project.featured && <span className="featured-badge">Destaque</span>}
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag more">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="project-footer">
          <span className="project-category">{project.category}</span>
          <span className="project-date">
            {new Date(project.completedAt).toLocaleDateString("pt-BR")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
