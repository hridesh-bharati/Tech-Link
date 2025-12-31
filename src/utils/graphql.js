// src/utils/graphql.js
import { gql } from '@apollo/client';

// Queries
export const GET_PORTFOLIO_DATA = gql`
  query GetPortfolioData {
    portfolio {
      personalInfo {
        name
        title
        bio
        email
        location
        socialLinks {
          github
          linkedin
          twitter
        }
      }
      skills {
        category
        items {
          name
          level
          icon
        }
      }
      projects {
        id
        title
        description
        technologies
        githubUrl
        liveUrl
        featured
        image
      }
      courses {
        id
        title
        description
        duration
        level
        topics
        enrollmentCount
      }
    }
  }
`;

export const GET_PROJECT_DETAILS = gql`
  query GetProjectDetails($id: ID!) {
    project(id: $id) {
      id
      title
      description
      detailedDescription
      technologies
      githubUrl
      liveUrl
      createdAt
      updatedAt
      images
      features
      challenges
      solutions
      seoKeywords
    }
  }
`;

export const GET_COURSE_DETAILS = gql`
  query GetCourseDetails($id: ID!) {
    course(id: $id) {
      id
      title
      description
      detailedDescription
      instructor {
        name
        bio
      }
      modules {
        title
        lessons {
          title
          duration
          content
        }
      }
      duration
      level
      prerequisites
      resources
      enrollmentCount
      rating
      seoKeywords
    }
  }
`;

// Mutations
export const UPDATE_VISITOR_COUNT = gql`
  mutation UpdateVisitorCount($page: String!) {
    updateVisitorCount(page: $page) {
      count
      lastVisited
    }
  }
`;

export const SUBSCRIBE_NEWSLETTER = gql`
  mutation SubscribeNewsletter($email: String!, $name: String) {
    subscribeNewsletter(email: $email, name: $name) {
      success
      message
    }
  }
`;

// Local cache queries
export const localQueries = {
  getSkills: () => {
    return {
      frontend: [
        { name: "React", level: 95, icon: "bi-react" },
        { name: "JavaScript", level: 90, icon: "bi-filetype-js" },
        { name: "TypeScript", level: 85, icon: "bi-filetype-ts" },
        { name: "HTML5/CSS3", level: 95, icon: "bi-code-slash" },
        { name: "Bootstrap", level: 90, icon: "bi-bootstrap" },
        { name: "Tailwind CSS", level: 85, icon: "bi-wind" }
      ],
      backend: [
        { name: "Node.js", level: 90, icon: "bi-node-plus" },
        { name: "Express.js", level: 88, icon: "bi-server" },
        { name: "GraphQL", level: 85, icon: "bi-diagram-3" },
        { name: "MongoDB", level: 80, icon: "bi-database" },
        { name: "PostgreSQL", level: 75, icon: "bi-database-check" },
        { name: "REST APIs", level: 90, icon: "bi-plug" }
      ],
      tools: [
        { name: "Git/GitHub", level: 90, icon: "bi-git" },
        { name: "Docker", level: 75, icon: "bi-docker" },
        { name: "AWS", level: 70, icon: "bi-cloud" },
        { name: "Jest", level: 80, icon: "bi-check-circle" },
        { name: "Webpack", level: 75, icon: "bi-gear" },
        { name: "Figma", level: 65, icon: "bi-palette" }
      ]
    };
  },

  getProjects: () => {
    return [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce solution with real-time inventory and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        githubUrl: "https://github.com/hrideshbharati/ecommerce-platform",
        liveUrl: "https://demo.hrideshbharati.com",
        featured: true,
        seoKeywords: "ecommerce platform, online store, react ecommerce, full stack project"
      },
      {
        id: 2,
        title: "Task Management System",
        description: "Collaborative task management with real-time updates and team features.",
        technologies: ["React", "GraphQL", "PostgreSQL", "WebSockets"],
        githubUrl: "https://github.com/hrideshbharati/task-manager",
        liveUrl: "https://tasks.hrideshbharati.com",
        featured: true,
        seoKeywords: "task management, productivity app, team collaboration, graphql project"
      }
    ];
  },

  getCourses: () => {
    return [
      {
        id: "react-basics",
        title: "React Fundamentals",
        description: "Learn React from scratch with hands-on projects",
        duration: "8 hours",
        level: "Beginner",
        topics: ["Components", "State", "Props", "Hooks"],
        enrollmentCount: 1250,
        rating: 4.8
      },
      {
        id: "nodejs-masterclass",
        title: "Node.js Masterclass",
        description: "Build scalable backend applications with Node.js",
        duration: "12 hours",
        level: "Intermediate",
        topics: ["Express", "Authentication", "Database", "API Design"],
        enrollmentCount: 890,
        rating: 4.7
      }
    ];
  }
};