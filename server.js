// server/server.js (optional - for local development)
const { ApolloServer, gql } = require('apollo-server');
const cors = require('cors');

const typeDefs = gql`
  type PersonalInfo {
    name: String!
    title: String!
    bio: String!
    email: String!
    location: String!
    socialLinks: SocialLinks!
  }

  type SocialLinks {
    github: String!
    linkedin: String!
    twitter: String!
  }

  type SkillItem {
    name: String!
    level: Int!
    icon: String!
  }

  type SkillCategory {
    category: String!
    items: [SkillItem!]!
  }

  type Project {
    id: ID!
    title: String!
    description: String!
    technologies: [String!]!
    githubUrl: String
    liveUrl: String
    featured: Boolean!
    image: String
  }

  type Query {
    portfolio: Portfolio!
    project(id: ID!): Project
    course(id: ID!): Course
  }

  type Portfolio {
    personalInfo: PersonalInfo!
    skills: [SkillCategory!]!
    projects: [Project!]!
    courses: [Course!]!
  }

  type Course {
    id: ID!
    title: String!
    description: String!
    duration: String!
    level: String!
    topics: [String!]!
    enrollmentCount: Int!
    rating: Float
  }
`;

const resolvers = {
  Query: {
    portfolio: () => ({
      personalInfo: {
        name: "Hridesh Bharati",
        title: "Full Stack Developer",
        bio: "Passionate Full Stack Developer with expertise in modern web technologies.",
        email: "contact@hrideshbharati.com",
        location: "India",
        socialLinks: {
          github: "https://github.com/hrideshbharati",
          linkedin: "https://linkedin.com/in/hrideshbharati",
          twitter: "https://twitter.com/hrideshbharati"
        }
      },
      skills: [
        {
          category: "frontend",
          items: [
            { name: "React", level: 95, icon: "bi-react" },
            { name: "JavaScript", level: 90, icon: "bi-filetype-js" },
            { name: "TypeScript", level: 85, icon: "bi-filetype-ts" },
            { name: "HTML5/CSS3", level: 95, icon: "bi-code-slash" },
          ]
        }
      ],
      projects: [
        {
          id: "1",
          title: "E-Commerce Platform",
          description: "Full-featured e-commerce solution",
          technologies: ["React", "Node.js", "MongoDB"],
          githubUrl: "https://github.com/hrideshbharati/ecommerce-platform",
          liveUrl: "https://demo.hrideshbharati.com",
          featured: true,
          image: "/images/ecommerce.jpg"
        }
      ],
      courses: [
        {
          id: "react-basics",
          title: "React Fundamentals",
          description: "Learn React from scratch",
          duration: "8 hours",
          level: "Beginner",
          topics: ["Components", "State", "Props"],
          enrollmentCount: 1250,
          rating: 4.8
        }
      ]
    })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});