import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  express,
  sql,
  bootstrap,
  postman,
  education,
  leetcode,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
} from "../assets";

export  const navLinks = [
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
    title: "Full-Stack Engineer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer (DSA)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "B.Tech in Computer Science (Data Science)",
    company_name: "School of Information Technology, RGPV Bhopal",
    icon: education,
    iconBg: "#383E56",
    date: "2023 - 2027 (Expected)",
    points: [
      "Currently in 7th Semester pursuing B.Tech in CS with specialization in Data Science (Current CGPA: 7.43 / 10.0).",
      "Building a solid academic foundation in Core CS Fundamentals: Data Structures & Algorithms (DSA), OOP, and DBMS.",
      "Specializing in Data Science techniques, database management systems, and high-performance web platform architecture.",
    ],
  },
  {
    title: "AI-Powered Full-Stack Engineer",
    company_name: "CV-Catalyst (Project)",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Architected a full-stack AI platform using React.js, Node.js, Express, and MongoDB to generate ATS-compliant resumes tailored to job descriptions via Gemini 1.5 Flash API.",
      "Engineered dynamic resume parsing & PDF generation pipeline, rendering multi-template layouts with real-time field validation and context-aware keyword matching.",
      "Integrated Razorpay payment gateway with webhooks for secure transaction processing, managing user subscription tiers and payment history.",
      "Implemented secure authentication & authorization using Passport.js and session management for user data privacy.",
    ],
  },
  {
    title: "Full-Stack Web Systems Developer",
    company_name: "Wanderlust (Project)",
    icon: backend,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Developed a scalable full-stack accommodation booking system featuring user listing management, interactive search filters, and customer reviews.",
      "Constructed RESTful API backend architecture following MVC design patterns with centralized error handling and request validation middleware.",
      "Designed optimized MongoDB database schemas with indexing for listings and bookings, accelerating complex search query performance.",
      "Implemented robust authentication & authorization using Passport.js and session management for secure user signup, login, and route protection.",
    ],
  },
  {
    title: "Competitive Programmer & DSA Solver",
    company_name: "LeetCode & GeeksforGeeks",
    icon: leetcode,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Solved 200+ Data Structures & Algorithms (DSA) problems across competitive programming platforms.",
      "Solved 150+ problems on LeetCode and 50+ problems on GeeksforGeeks focusing on Arrays, Strings, Linked Lists, Trees, and Dynamic Programming.",
      "Consistently sharpening time and space complexity optimization skills for scalable web applications and algorithmic problem solving.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to build an AI platform as seamless and efficient as CV-Catalyst, but Kripal proved me wrong.",
    name: "Sara Lee",
    designation: "Product Lead",
    company: "Acme Tech",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
  },
  {
    testimonial:
      "I've never met a full-stack developer who pays such meticulous attention to performance, security, and UI precision like Kripal does.",
    name: "Chris Brown",
    designation: "Engineering Lead",
    company: "DEF Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
  },
  {
    testimonial:
      "After Kripal optimized our backend architecture and database queries, our application speed and search efficiency improved dramatically!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Innovate AI",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
  },
];

const projects = [
  {
    name: "CV-Catalyst",
    description:
      "An intelligent CV/Resume building and optimization platform empowering job seekers to generate ATS-friendly resumes, analyze keyword alignment, and showcase professional achievements with modern templates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kripalsingh6/CV-Catalyst",
  },
  {
    name: "Wanderlust",
    description:
      "A full-stack travel booking & accommodation marketplace enabling users to discover unique stays worldwide, list vacation properties, share authentic reviews, and visualize interactive location maps.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/kripalsingh6/airbnb-project",
  },
];

export { services, technologies, experiences, testimonials, projects };