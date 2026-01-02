// src\Projects\useGithubProjects.js
import { useEffect, useState } from "react";

const USERNAME = "hridesh-bharati";
const API = `https://api.github.com/users/${USERNAME}/repos?sort=updated`;

export default function useGithubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => {
        if (!Array.isArray(data)) return;

        setProjects(
          data
            .filter(repo => !repo.fork)
            .map(repo => ({
              id: repo.id,
              name: repo.name,
              title: repo.name.replace(/[-_]/g, " "),
              description:
                repo.description || "Modern live web project",
              github: repo.html_url,
              live: repo.homepage,
              updated: repo.updated_at,
              views: Math.floor(Math.random() * 1000),
              likes: Math.floor(Math.random() * 50)
            }))
        );
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading };
}
