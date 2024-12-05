import { Project } from "@/Types/project";

const techSlugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "postman",
    "jupyter",
    "jupyterlab",
    "graphql",
    "tailwindcss",
    "reactnative",
    "cplusplus",
    "clang",
    "rust",
    "cairo",
];

const mernProjects: Project[] = [
  {
    title: "Chitran",
    description: "A full-stack web application built with React, TypeScript, and Node.js. Features include authentication, real-time updates, and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
    link: "https://chitran.vercel.app/",
    github: "https://github.com/Sagar-Puniyani/Chitran"
  },
  {
    title: "True Feedback Message Hub",
    description: "A scalable e-commerce solution with advanced features like real-time inventory, payment processing, and analytics dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["Next.js","oAuth", "MongoDB", "Stripe", "Redux"],
    link: "https://devtruefeedbackmessagehub.vercel.app/"
  },
  {
    title: "Calories Tracker",
    description: "An intelligent analytics platform that leverages machine learning to provide actionable insights from user data.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    link: "https://huggingface.co/spaces/SagarPuniyani/calories_tracker"
  }
];



export  {techSlugs, mernProjects};