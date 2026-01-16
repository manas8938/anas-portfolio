import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Multi-Tenant SaaS Backend",
    description:
      "Developed an enterprise-grade multi-tenant backend using Next.js, PostgreSQL, Prisma, and NextAuth.js, Docker. Implemented tenant-based data isolation, RBAC (Owner/Admin/Member), JWT authentication, secure REST APIs, and subscription/plan management. Integrated background workers with Redis + BullMQ for audit logging, email notifications, and subscription checks.",
    tags: ["Nest.js", "Prisma", "PostgreSQL", "Redis", "BullMQ", "JWT", "OAuth2", "RBAC", "REST API", "Docker", "Docker Compose", "CI/CD"],
    github: "",
    image: "/assets/backend.png",
  },
  {
    title: "Kim Long Restaurants",
    description:
      "Modern restaurant website built with React 19, Vite, TypeScript, and Tailwind CSS. Features a responsive design, interactive menu with categories, customer reviews section, contact form with validation, and smooth animations.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS",],
    github: "https://github.com/manas8938/kim-long-restaurants",
    image: "/assets/kimlong.png",
  },
  {
    title: "Calvio Mart Website",
    description:
      "A full-stack E-commerce Website built using React.js for the frontend and NestJS, PostgreSQL, Swagger, Docker for the backend. Features include Auth, User, Admin, Order, and Product management.",
    tags: ["React.js", "Tailwind CSS", "CSS", "Figma", "Docker", "NestJS", "PostgreSQL", "Swagger", "REST API"],
    github: "https://github.com/manas8938/calvio-mart",
    image: "/assets/calvio.png",
  },
  {
    title: "Movr App",
    description:
      "A full-stack parcel delivery system built using Flutter for the frontend and NestJS with MySQL for the backend. Features include parcel tracking, real-time updates, and delivery management.",
    tags: ["Flutter", "Figma", "Docker", "NestJS", "MySQL", "Swagger", "REST API"],
    github: "https://github.com/manas8938/movrapp",
    image: "/assets/SmartDeliverySystem.jpeg",
  },
  {
    title: "Fitness Tracker App",
    description:
      "Fitness Tracker app built using Flutter and Firebase. Tracks workouts, steps, calories, and sleep; includes workout plans, progress charts, local storage, user authentication, and exportable reports.",
    tags: ["Flutter", "Dart", "Firebase", "Figma"],
    github: "https://github.com/manas8938/CodeAlpha_FitnessTracker",
    image: "/assets/fitness.jpg",
  },
  {
    title: "Random Quote Generator App",
    description: "Random app built using Flutter. It generates random quotes.",
    tags: ["Flutter", "Dart"],
    github: "https://github.com/manas8938/CodeAlpha_RandomQuoteGenerator",
    image: "/assets/qoute.png",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollTo({
      left: direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-b from-black to-cyan-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10 p-3 md:p-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:scale-110"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10 p-3 md:p-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:scale-110"
          aria-label="Scroll right"
        >
          <FaChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          role="list"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") scroll("left");
            if (e.key === "ArrowRight") scroll("right");
          }}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-6 pl-2 pr-2 md:pl-0 md:pr-0"
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)] group relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:to-cyan-600/20 transition-all duration-500 z-10" />

              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative z-20 p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto w-full">
                  {project.title === "Multi-Tenant SaaS Backend" ? (
                    <button
                      className="flex-1 text-center py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-600/20 to-cyan-600/20 border border-cyan-500/30 cursor-not-allowed"
                      disabled
                    >
                      In Progress
                    </button>
                  ) : (
                    <a
                      href={project.github || "#"}
                      onClick={(e) => {
                        if (!project.github) e.preventDefault();
                      }}
                      target={project.github ? "_blank" : undefined}
                      rel={project.github ? "noopener noreferrer" : undefined}
                      aria-disabled={!project.github}
                      className={`flex-1 text-center py-3 rounded-full font-semibold transition border ${
                        project.github
                          ? "bg-gradient-to-r from-purple-600/20 to-purple-600/20 hover:from-purple-600 hover:to-purple-500 border-purple-500/30 hover:border-purple-400 hover:scale-105"
                          : "bg-gray-700/20 border-gray-700/30 pointer-events-none opacity-60"
                      }`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
