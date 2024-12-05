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
    title: "Developer Portfolio",
    description:
      "A portfolio website for Sagar Puniyani, showcasing his skills, projects, and experience as a full-stack developer.",
    imageUrl:
      "https://res.cloudinary.com/dizsgelec/image/upload/v1733384692/share/lc0tjdigm5ayl7cang71.png",
    tags: ["NextJs", "Tailwind", "farmer-motion", "shadcnUI"],
    link: "https://sagarpuniyani.vercel.app/",
    github: "https://github.com/Sagar-Puniyani/Portfolio",
  },
  {
    title: "True Feedback Message Hub",
    description:
      "An app enabling anonymous feedback to foster open communication, ensuring privacy, real-time insights, and actionable improvements for teams or communities.",
    imageUrl:
      "https://res.cloudinary.com/dizsgelec/image/upload/v1733384692/share/d192lhz75bwqgqacg1ak.png",
    tags: ["NextJs", "oAuth", "MongoDB", "zod", "nodemailer"],
    link: "https://devtruefeedbackmessagehub.vercel.app/",
    github: "https://github.com/Sagar-Puniyani/feedback.co",
  },
  {
    title: "Chitran",
    description:
      "A web application built with React and Tailwind CSS, Solution for managing Images with Features of Background Removal, Color Change, Image Compression, and Image Editing.",
    imageUrl:
      "https://res.cloudinary.com/dizsgelec/image/upload/v1733381763/share/rx7ahdlwo6ioukcyojue.png",
    tags: ["React", "Javascript", "NodeJs", "Tailwind"],
    link: "https://chitran.vercel.app/",
    github: "https://github.com/Sagar-Puniyani/Chitran",
  },
  {
    title: "Contact Book App",
    description:
      "FullStack App Based MVC(model view controller) and Simple CRUD App in React and Node.js to execute basic operations on a contact book.",
    imageUrl:
      "https://res.cloudinary.com/dizsgelec/image/upload/v1733384692/share/nr2qmijguwhtig70unar.png",
    tags: ["React", "NodeJs", "MongoDB", "Express", "MVC", "Tailwind"],
    link: "https://contact-book-app-frontend-self.vercel.app",
    github: "https://github.com/Sagar-Puniyani/Contact-book-app",
  },
  {
    title: "Saffron Dark Theme VS Code Extension",
    description:
      "A VS Code extension that adds a dark theme to VS Code, providing a visually appealing and immersive coding experience.",
    imageUrl:
      "https://res.cloudinary.com/dizsgelec/image/upload/v1733399111/share/edaqkhynhxgelgvm5qit.png",
    tags: [ "npm","Azure", "CSS", "Vsce"],
    link: "https://marketplace.visualstudio.com/items?itemName=sagarpuniyani.saffron-coder-dark",
    github: "https://github.com/Sagar-Puniyani/saffron-theme",
  },
  // {
  //   title: "Playtube",
  //   description:
  //     "MERN stack website touch the real complexity of API and model Architecture.",
  //   imageUrl:
  //     "https://res.cloudinary.com/dizsgelec/image/upload/v1733384692/share/ffqk7jzv6v5m9e4zjz8d.png",
  //   tags: ["React", "Javascript", "NodeJs", "Tailwind"],
  //   link: "https://playtube.vercel.app/",
  //   github: "https://github.com/Sagar-Puniyani/Playtube",
  // },
  {
    title: "Flash Card App",
    description:
      "A web application built with React and Tailwind CSS, Solution for managing Weather with Features of Background Removal, Color Change, Image Compression, and Image Editing.",
    imageUrl:
      "https://res.cloudinary.com/dizsgelec/image/upload/v1733384692/share/z448scdupld46eeddmxc.png",
    tags: ["React", "Javascript", "Express", "TypeScript", "NodeJs", "Tailwind", "CoackroachDB"],
    link: "https://flash-card-app-beige.vercel.app/",
    github: "https://github.com/Sagar-Puniyani/FlashCardApp"
  },
];

const deepLearningProjects: Project[] = [
  {
    title: "Calories Tracker with AI",
    description:
      "Deep learning model build to classify food and to track calories of food by Image user uploads.",
    imageUrl:
      "https://res.cloudinary.com/dizsgelec/image/upload/v1733384692/share/bauccc23vjepc5maegl6.png",
    tags: ["Python", "HuggingFace"],
    link: "https://huggingface.co/spaces/SagarPuniyani/calories_tracker",
    github: "https://huggingface.co/spaces/SagarPuniyani/calories_tracker/tree/main"
  },
  {
    title: "Acute Lymphoblastic Leukemia Detection",
    description:
      "Model build to detect Acute Lymphoblastic Leukemia by Image user uploads and show the result of 3 top most classes accoding to confidence level.",
    imageUrl:
      "https://res.cloudinary.com/dizsgelec/image/upload/v1733384692/share/axka5iyxcymgrj2bm6qy.png",
    tags: ["Python" , "HuggingFace"],
    link: "https://huggingface.co/spaces/SagarPuniyani/leukemia_detection",
    github: "https://github.com/Sagar-Puniyani/LeukemiaDetection-Deployment"
  },
];

export { techSlugs, mernProjects, deepLearningProjects };
