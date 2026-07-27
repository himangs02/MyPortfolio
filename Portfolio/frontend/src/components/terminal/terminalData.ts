export const TERMINAL_BANNER = `
██╗  ██╗██╗███╗   ███╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██╗  ██╗██╗   ██╗
██║  ██║██║████╗ ████║██╔══██╗████╗  ██║██╔════╝ ██╔════╝██║  ██║██║   ██║
███████║██║██╔████╔██║███████║██╔██╗ ██║██║  ███╗███████╗███████║██║   ██║
██╔══██║██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║   ██║╚════██║██╔══██║██║   ██║
██║  ██║██║██║ ╚═╝ ██║██║  ██║██║ ╚████║╚██████╔╝███████║██║  ██║╚██████╔╝
╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ 
`;

export const AVAILABLE_COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
  "resume",
  "github",
  "linkedin",
  "clear",
  "time",
  "download",
  "banner",
  "joke",
  "weather",
  "exit"
];

export const SKILLS_DATA = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express"],
  Database: ["MongoDB", "MySQL", "Prisma"],
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  Tools: ["Git", "GitHub", "VS Code", "Docker", "Postman", "Linux"]
};

export const PROJECTS_DATA = [
  {
    name: "Project 1",
    description: "A full-stack web application for managing tasks.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/himangs02/project1",
    demo: "https://project1.demo.com"
  },
  {
    name: "Project 2",
    description: "An AI-powered portfolio generator.",
    techStack: ["Next.js", "Tailwind CSS", "OpenAI"],
    github: "https://github.com/himangs02/project2",
    demo: "https://project2.demo.com"
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Full Stack Developer Intern",
    company: "Tech Corp",
    duration: "June 2023 - Present",
    description: "Developed and maintained web applications using React and Node.js."
  }
];

export const EDUCATION_DATA = [
  {
    degree: "B.Tech in Computer Science",
    institution: "University of Technology",
    year: "2020 - 2024"
  }
];



export const JOKES = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "I've got a really good UDP joke to tell you, but I don't know if you'll get it.",
  "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'"
];


