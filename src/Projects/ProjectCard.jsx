import { useRef, useState } from "react";
import { Heart, Eye, Github, ExternalLink } from "lucide-react";

const USERNAME = "hridesh-bharati";

export default function ProjectCard({ project }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(project.likes || 0);
  const [imgSrc, setImgSrc] = useState(
    project.live
      ? `https://api.microlink.io/?url=${project.live}&screenshot=true&embed=screenshot.url&meta=false`
      : `https://opengraph.githubassets.com/1/${USERNAME}/${project.name}`
  );
  const [fallback, setFallback] = useState(false);
  const lastTap = useRef(0);

  const githubOG = `https://opengraph.githubassets.com/1/${USERNAME}/${project.name}`;

  /* LIKE (safe) */
  const like = () => {
    setLiked(prev => {
      setLikes(l => (prev ? l - 1 : l + 1));
      return !prev;
    });
  };

  /* DOUBLE TAP */
  const doubleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300 && !liked) like();
    lastTap.current = now;
  };

  return (
    <article className="project-card" onClick={doubleTap}>
      {!fallback ? (
        <img
          src={imgSrc}
          alt={project.title}
          className="project-cover"
          onError={() => {
            if (imgSrc !== githubOG) setImgSrc(githubOG);
            else setFallback(true);
          }}
        />
      ) : (
        <div className="project-cover placeholder">
          {project.title.toUpperCase()}
        </div>
      )}

      <header className="project-header">
        <div className="user">
          <img
            src={`https://github.com/${USERNAME}.png`}
            className="avatar"
            alt="Hridesh Bharati"
          />
          <div>
            <h4>Hridesh Bharati</h4>
            <span>{new Date(project.updated).toDateString()}</span>
          </div>
        </div>

        <div className="views">
          <Eye size={16} /> {project.views}
        </div>
      </header>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="like-bar">
        <button
          className={liked ? "liked" : ""}
          onClick={e => {
            e.stopPropagation();
            like();
          }}
        >
          <Heart />
        </button>
        <span>{likes}</span>
      </div>

      <div className="actions">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            <ExternalLink size={16} /> Live
          </a>
        )}
        <a href={project.github} target="_blank" rel="noreferrer">
          <Github size={16} /> Code
        </a>
      </div>
    </article>
  );
}
