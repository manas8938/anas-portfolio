// src/data/services.js
import { FaAndroid, FaApple, FaServer, FaPaintBrush, FaGlobe, FaLaptopCode } from 'react-icons/fa';

export const services = [
  {
    id: 1,
    title: "Android App Development",
    description: "Cross-platform mobile apps built using Flutter with clean architecture and Provider for state management.",
    tags: ["Flutter", "Dart", "UI/UX"],
    icon: FaAndroid,
  },
  {
    id: 2,
    title: "iOS App Development",
    description: "Native-like apps for Apple devices using Flutter ensuring high performance and scalability.",
    tags: ["Flutter", "Dart", "UI/UX"],
    icon: FaApple,
  },
  {
    id: 3,
    title: "Back-End Development",
    description: "Scalable server-side solutions with NestJS, Node.js, RESTful APIs, JWT authentication, and Docker.",
    tags: ["NestJS", "Node.js", "TypeORM", "Docker", "MySQL", "PostgreSQL", "Swagger"],
    icon: FaServer,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Intuitive and modern interfaces designed with Figma, focusing on usability and responsive design.",
    tags: ["Figma", "UI/UX", "Design"],
    icon: FaPaintBrush,
  },
  {
    id: 5,
    title: "Web Development",
    description: "Responsive websites and web apps using React.js, Tailwind CSS, and clean architecture principles.",
    tags: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind", "UI/UX"],
    icon: FaLaptopCode,
  },
];
