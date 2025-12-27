import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from '../components/Shared/GradientText';

const GITHUB_USERNAME = 'hridesh-bharati';
const CACHE_DURATION = 10 * 60 * 1000;
const THUMBNAIL_FALLBACKS = ['/posters/poster.png', '/posters/poster.webp', '/poster.png', '/poster.webp'];

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchGitHubProjects = async () => {
    const cached = localStorage.getItem('github-projects');
    const cachedTime = localStorage.getItem('github-projects-time');

    if (cached && cachedTime && Date.now() - cachedTime < CACHE_DURATION) {
      setProjects(JSON.parse(cached));
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
      );
      const data = await response.json();
      const originalRepos = data.filter(repo => !repo.fork);

      const formattedProjects = originalRepos.map(repo => {
        const title = repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const thumbnail = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/public/posters/poster.png`;
        
        let category = 'web';
        if (repo.topics?.includes('mobile')) category = 'mobile';
        else if (repo.topics?.includes('tool')) category = 'tool';
        else if (repo.topics?.includes('game')) category = 'game';

        return {
          id: repo.id,
          title,
          description: repo.description || 'A personal project showcasing my skills.',
          category,
          tags: [...(repo.topics || []), repo.language].filter(Boolean).slice(0, 5),
          thumbnail,
          liveUrl: repo.homepage || `https://${repo.name}.vercel.app`,
          githubUrl: repo.html_url,
          featured: repo.stargazers_count >= 2,
        };
      });

      setProjects(formattedProjects);
      localStorage.setItem('github-projects', JSON.stringify(formattedProjects));
      localStorage.setItem('github-projects-time', Date.now());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const filters = [
    { id: 'all', label: 'All', icon: 'bi-grid' },
    { id: 'web', label: 'Web', icon: 'bi-globe' },
    { id: 'mobile', label: 'Mobile', icon: 'bi-phone' },
    { id: 'tool', label: 'Tools', icon: 'bi-tools' },
    { id: 'game', label: 'Games', icon: 'bi-controller' },
    { id: 'featured', label: 'Featured', icon: 'bi-star' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : activeFilter === 'featured'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category === activeFilter);

  const refreshProjects = () => {
    localStorage.removeItem('github-projects');
    localStorage.removeItem('github-projects-time');
    fetchGitHubProjects();
  };

  const handleImageError = (e) => {
    const img = e.target;
    let currentIndex = THUMBNAIL_FALLBACKS.indexOf(img.src) + 1;
    
    if (currentIndex < THUMBNAIL_FALLBACKS.length) {
      img.src = THUMBNAIL_FALLBACKS[currentIndex];
    } else {
      // Last fallback - generic project image
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUYxRjYiLz48cGF0aCBkPSJNMTUwIDgwaDEwMHY0MEgxNTB6IiBmaWxsPSIjMDA3QUZGIi8+PHBhdGggZD0iTTUwIDE0MGgxMDB2MjBINTB6IiBmaWxsPSIjMDA3QUZGIi8+PHBhdGggZD0iTTI1MCAxNDBoMTAwdjIwSDI1MHoiIGZpbGw9IiMwMDdBRkYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSI2MCIgcj0iMjAiIGZpbGw9IiMwMDdBRkYiLz48L3N2Zz4=';
      img.alt = 'Project thumbnail';
    }
  };

  return (
    <div className="projects-page">
      {/* HERO */}
      <section className="projects-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="page-title">
              My <GradientText>Projects</GradientText>
            </h1>
            <p className="page-subtitle">Real-time projects from my GitHub portfolio</p>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="projects-filters">
        <div className="container">
          <div className="filters-header">
            <h3>Filter Projects</h3>
            <div className="filters-actions">
              <motion.button
                onClick={refreshProjects}
                className="btn-refresh"
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="bi bi-arrow-clockwise"></i>
              </motion.button>
              <span>{filteredProjects.length} projects</span>
            </div>
          </div>
          <div className="filter-buttons">
            {filters.map(filter => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`bi ${filter.icon}`}></i> {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="projects-grid-section">
        <div className="container">
          {loading ? (
            <div className="loading">
              <div className="loading-spinner"></div>
              <p>Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-inbox"></i>
              <p>No projects found</p>
              <button onClick={refreshProjects} className="btn btn-outline">
                Refresh Projects
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={`project-card ${project.featured ? 'featured' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="project-thumbnail">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        onError={handleImageError}
                        loading="lazy"
                      />
                      {project.featured && (
                        <div className="featured-badge">
                          <i className="bi bi-star-fill"></i> Featured
                        </div>
                      )}
                    </div>

                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-footer">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <i className="bi bi-rocket-takeoff"></i> Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <i className="bi bi-github"></i> Code
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}
        </div>
      </section>

      <style jsx>{`
        .projects-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          color: #334155;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .projects-hero {
          padding: 80px 0;
          text-align: center;
        }

        .page-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-filters {
          padding: 40px 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(226, 232, 240, 1);
          border-bottom: 1px solid rgba(226, 232, 240, 1);
        }

        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .filters-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
        }

        .filters-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          color: #64748b;
        }

        .btn-refresh {
          background: white;
          border: 2px solid #e2e8f0;
          color: #3b82f6;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 10px;
          border-radius: 50%;
          transition: all 0.3s;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-refresh:hover {
          background: #f1f5f9;
          border-color: #3b82f6;
          transform: rotate(180deg);
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .filter-btn {
          padding: 12px 24px;
          border: 2px solid #e2e8f0;
          background: white;
          color: #64748b;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .filter-btn:hover:not(.active) {
          border-color: #3b82f6;
          color: #3b82f6;
          background: #f8fafc;
        }

        .projects-grid-section {
          padding: 60px 0;
        }

        .loading {
          text-align: center;
          padding: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid #e2e8f0;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .empty-state {
          text-align: center;
          padding: 60px;
          color: #64748b;
          font-size: 1.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .empty-state i {
          font-size: 3rem;
          color: #94a3b8;
          margin-bottom: 10px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.3s;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .project-card.featured {
          border: 2px solid #f59e0b;
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.15);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #3b82f6;
        }

        .project-thumbnail {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
        }

        .project-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .project-card:hover .project-thumbnail img {
          transform: scale(1.05);
        }

        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);
        }

        .project-body {
          padding: 25px;
        }

        .project-body h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1e293b;
        }

        .project-body p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-tag {
          background: #f1f5f9;
          color: #475569;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid #e2e8f0;
        }

        .project-tag:hover {
          background: #e2e8f0;
        }

        .project-footer {
          padding: 20px 25px 25px;
          display: flex;
          gap: 12px;
          border-top: 1px solid #f1f5f9;
          background: #f8fafc;
        }

        .btn {
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          flex: 1;
          justify-content: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .btn-secondary {
          background: white;
          color: #475569;
          border: 2px solid #e2e8f0;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          color: #334155;
        }

        .btn-outline {
          background: transparent;
          color: #3b82f6;
          border: 2px solid #3b82f6;
          padding: 10px 24px;
        }

        .btn-outline:hover {
          background: #3b82f6;
          color: white;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-buttons {
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 10px;
          }
          
          .filters-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }
          
          .project-footer {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;