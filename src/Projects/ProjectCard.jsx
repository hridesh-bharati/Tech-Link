import { useRef, useState } from "react";
import {
  Heart,
  Eye,
  Github,
  ExternalLink,
  Star,
  Calendar,
  Code
} from "lucide-react";

const USERNAME = "hridesh-bharati";

export default function ProjectCard({ project }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(project.likes || 0);
  const lastTap = useRef(0);

  const imgSrc = project.live
    ? `https://api.microlink.io/?url=${project.live}&screenshot=true&embed=screenshot.url&meta=false`
    : `https://opengraph.githubassets.com/1/${USERNAME}/${project.name}`;

  const like = () => {
    setLiked(prev => {
      setLikes(l => (prev ? l - 1 : l + 1));
      return !prev;
    });
  };

  const doubleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300 && !liked) like();
    lastTap.current = now;
  };

  return (
    <article className="project-card" onClick={doubleTap}>
      {/* COVER */}
      <div className="project-cover-container">
        <img
          src={imgSrc}
          alt={project.title}
          className="project-cover"
        />

        <div className="cover-overlay">
          <div className="project-badges">
            {project.live && (
              <span className="badge primary">🚀 Live</span>
            )}
            <span className="badge">
              <Star size={12} /> {project.stars || "100"}+
            </span>
            {project.tech && (
              <span className="badge">
                <Code size={12} /> {project.tech}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="project-header">
        <div className="user">
          <img
            src={`https://github.com/${USERNAME}.png`}
            className="avatar"
            alt="Hridesh Bharati"
          />
          <div className="user-info">
            <h4>Hridesh Bharati</h4>
            <span>
              <Calendar size={12} />
              {new Date(project.updated).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })}
            </span>
          </div>
        </div>

        <div className="views">
          <Eye size={14} />
          {project.views || "1.2k"}
        </div>
      </header>

      {/* CONTENT */}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">
        {project.description || "A modern project built with clean architecture."}
      </p>

      {/* INTERACTION */}
      <div className="interaction-bar">
        <div className="like-section">
          <button
            className={`like-button ${liked ? "liked" : ""}`}
            onClick={e => {
              e.stopPropagation();
              like();
            }}
          >
            <Heart size={18} />
          </button>
          <span className="like-count">{likes}</span>
        </div>

        <div className="action-buttons">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="action-button primary"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="action-button"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </article>
  );
}
