import { useState } from "react";
import { Search } from "lucide-react";
import useGithubProjects from "./useGithubProjects";
import ProjectCard from "./ProjectCard";
import "./projects.css";

export default function Projects() {
  const { projects, loading } = useGithubProjects();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="projects-grid">
        <div className="projects-header">
          <div className="search-container">
            <span className="search-icon">
              <Search />
            </span>
            <input className="search-input" disabled placeholder="Loading…" />
          </div>
        </div>

        {[1, 2, 3].map(i => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-cover"></div>
            <div className="skeleton-text short"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="projects-grid w-100">
      {/* SEARCH */}
      <div className="projects-header mt-3">
        <div className="search-container">
          <span className="search-icon">
            <Search />
          </span>
          <input
            className="search-input"
            placeholder="Search projects…"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* EMPTY */}
      {filteredProjects.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No projects found</h3>
          <p>Try a different keyword</p>
        </div>
      )}

      {/* LIST */}
      {filteredProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
