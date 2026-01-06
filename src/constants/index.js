import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  angular,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  sqlServer,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Asp.Net Core",
    icon: backend,
  },
  {
    title: "Node.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Microsoft SQL Server",
    icon: sqlServer,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Online Programming & Database Instructor",
    company_name: "University Students (Online)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Present",
    points: [
      "Teaching university students core programming and database subjects to support their academic performance.",
      "Explaining database fundamentals and SQL concepts including queries, joins, and relational design in a simplified, practical manner.",
      "Teaching programming languages such as C++ and Java according to university curriculum.",
      "Helping students understand problem-solving techniques and programming logic to achieve high grades and academic excellence.",
    ],
  },
  {
    title: "Front-End Developer (Angular) Intern",
    company_name: "Elevvo Pathway Remote - Cairo, Egypt",
    icon: web,
    iconBg: "#383E56",
    date: "Jul 2025 - Aug 2025",
    points: [
      "Built responsive and scalable front-end components using Angular, TypeScript, HTML, and CSS, ensuring strong performance and clean code structure.",
      "Improved UI/UX workflows and contributed reusable modules to enhance consistency across the platform.",
      "Recognized as a high-impact contributor and awarded an additional certificate for outstanding performance and active participation during the internship.",
    ],
  },
  {
    title: "IT & Voice Systems Intern",
    company_name: "Agricultural Bank of Egypt Onsite - Cairo, Egypt",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Dec 2024",
    points: [
      "Managed Cisco voice accounts and supported backend IT infrastructure troubleshooting.",
    ],
  },
  {
    title: "Data Integration & API Intern",
    company_name: "BVS Remote - Cairo, Egypt",
    icon: backend,
    iconBg: "#383E56",
    date: "Mar 2024 - May 2024",
    points: [
      "Validated and optimized REST APIs using Postman.",
      "Worked on backend data pipelines ensuring integration with SQL Server and Entity Framework.",
    ],
  },
  {
    title: "NLP & AI Intern",
    company_name: "NajahNow Remote - Cairo, Egypt",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Built a healthcare chatbot using NLP integrated with backend services and APIs.",
    ],
  },
];

const highlights = [
  {
    title: "Clean Architecture",
    detail:
      "Build modular, testable systems with clear boundaries that scale with your product.",
    focus: "Architecture",
    tools: "ASP.NET Core, Angular, Node.js , React",
    icon: backend,
  },
  {
    title: "Performance",
    detail:
      "Optimize load time and runtime behavior for smooth, responsive experiences.",
    focus: "Performance",
    tools: "Angular, React",
    icon: reactjs,
  },
  {
    title: "API Design",
    detail:
      "Design RESTful APIs that are predictable, secure, and easy to integrate.",
    focus: "Backend",
    tools: "ASP.NET Core, Node.js",
    icon: nodejs,
  },
  {
    title: "UI Craft",
    detail:
      "Deliver polished, accessible interfaces that translate business needs into user value.",
    focus: "Frontend",
    tools: "Tailwind CSS, SCSS, Bootstrap",
    icon: web,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Car rental platform that lets users browse, book, and manage rentals with a fast, responsive UI.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi using .NET",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/Nour-Sherif-Ali/Car-Rental-System.git",
  },
  {
    name: "E-Commerce",
    description:
      "E-commerce web app with product browsing, cart, and checkout flows tailored for smooth shopping.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "REST API using ASP.NET",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/Nour-Sherif-Ali/E-Commerce-Project.git",
  },
  {
    name: "Trip Guide",
    description:
      "Travel planner that helps users explore destinations and organize trips with curated guides.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/Nour-Sherif-Ali/Travel-Planner-.git",
  },
];

export { services, technologies, experiences, highlights, projects };
