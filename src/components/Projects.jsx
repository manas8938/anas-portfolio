import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "MIKNAZ — Saudi Fintech Voucher Race Platform",
    description: "Production-live geofenced voucher platform for the Saudi Arabian market — built solo end-to-end across 5 milestones. Users race to claim vouchers within GPS radius (first click wins) with Redis atomic locking via Lua scripts + PostgreSQL SELECT FOR UPDATE for zero double-claims. Flutter mobile app (iOS/Android) with Firebase OTP, full RTL Arabic/English support, and 27 error states. Vendor & Admin React dashboards, ZATCA Phase 1 e-invoicing, strategy-pattern payment layer (card, Apple Pay, STC Pay) across Moyasar and Tap with HMAC webhook verification, OCI Jeddah (E5.Flex, PM2 cluster, Nginx SSL, Cloudflare CDN). Load tested: p95 = 152ms at 200 concurrent users, 52.1 req/s, zero crashes. Full 4,911-line OpenAPI spec + handover runbook.",
    tags: ["Flutter", "NestJS", "PostgreSQL", "PostGIS", "Redis", "React", "TypeScript", "Oracle Cloud (OCI)", "Cloudflare", "Firebase", "ZATCA", "Resend", "Cloudinary", "Docker", "JWT", "RBAC", "k6", "Moyasar", "Tap Payments"],
    github: null,
    live: "https://www.miknaz.com/",
    image: "/assets/miknaz.png",
  },
  {
    title: "BM.com — Multi-Tenant Booking SaaS",
    description: "Production-deployed booking & scheduling platform for service businesses — built solo end-to-end. Multi-tenant architecture using Postgres Row-Level Security for complete per-business data isolation enforced at the DB layer. Real-time slot locking via unique DB constraints + Supabase Realtime for instant double-booking prevention. Stripe subscriptions (Free/Pro tiers) with webhook-driven status sync, optional per-service deposit payments via Stripe Checkout with idempotent confirmation. Secure token-based no-login cancellation flow, Resend transactional emails for booking confirmations and staff onboarding. Custom 'Ink & Ember' design system with full dark mode. Owner dashboard for branches, staff, services, availability, bookings, and billing. Public per-business booking pages with multi-step service → staff → date → slot widget.",
    tags: ["Next.js 14", "Supabase", "PostgreSQL", "Stripe", "Tailwind CSS", "TypeScript", "Resend", "Vercel", "RLS"],
    github: null,
    live: "https://bm-saas-anas.vercel.app/login",
    image: "/assets/bm.png",
  },
  {
    title: "HS Beauty — E-Commerce Platform",
    description:
      "Full-stack e-commerce platform for a cosmetics brand in Pakistan. Monorepo with separate React storefront and admin apps on a shared NestJS + PostgreSQL (Supabase) backend with Prisma. Passwordless email OTP and Google OAuth for customers, with a separate role-gated password login for admins. Order processing with separate fulfillment and payment status axes, server-side price and stock validation, stock reservation with automatic restock on cancellation, and admin confirm/decline flows with Resend emails. Cut product image payload by 92.6%, consolidated Prisma reads from up to 6 queries into a single SQL JOIN, added 5 indexes, and fixed an N+1 query. Hardened for launch with tiered rate limiting, Helmet security headers, magic-byte upload validation, refresh-token rotation, and an append-only admin audit log.",
    tags: ["React", "NestJS", "PostgreSQL", "Prisma", "Supabase", "Cloudinary", "Resend", "Docker", "Tailwind CSS", "Google OAuth", "Helmet", "Rate Limiting"],
    github: null,
    image: "/assets/hs-beauty.jpg",
  },
  {
    title: "Multi-Tenant SaaS Backend",
    description:
      "Developed an enterprise-grade multi-tenant backend using NestJS, PostgreSQL, Prisma, and Docker. Implemented tenant-based data isolation, RBAC (Owner/Admin/Member), JWT authentication, secure REST APIs, and subscription/plan management. Integrated background workers with Redis + BullMQ for audit logging, email notifications, and subscription checks.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "JWT", "OAuth2", "RBAC", "REST API", "Docker", "Docker Compose", "CI/CD"],
    github: "https://github.com/manas8938/Multi-tenant-SaaS-Backend",
    image: "/assets/backend.png",
  },
  {
    title: "Calvio Mart Website",
    description:
      "Full e-commerce platform built for a direct client with React, NestJS, PostgreSQL, and Docker, exposing 50+ documented REST endpoints covering core commerce workflows. Includes an RBAC-protected admin panel with authentication, user, order, and product management, plus payment gateway integration.",
    tags: ["React.js", "Tailwind CSS", "CSS", "Figma", "Docker", "NestJS", "PostgreSQL", "Swagger", "REST API", "RBAC", "JWT"],
    github: "https://github.com/manas8938/calvio-mart",
    image: "/assets/calvio.png",
  },
  {
    title: "Movr App",
    description:
      "Final Year Project, solo-developed for an external client. Cross-platform Flutter parcel delivery app (Provider, clean architecture) with a NestJS + MySQL + TypeORM backend, JWT-secured REST APIs, real-time parcel tracking, and delivery management.",
    tags: ["Flutter", "Figma", "Docker", "NestJS", "MySQL", "Swagger", "REST API", "TypeORM", "JWT", "Provider"],
    github: "https://github.com/manas8938/movrapp",
    image: "/assets/SmartDeliverySystem.jpeg",
  },
  {
    title: "Kim Long Restaurants",
    description:
      "Modern restaurant website built with React 19, Vite, TypeScript, and Tailwind CSS. Features a responsive design, interactive menu with categories, customer reviews section, contact form with validation, and smooth animations.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/manas8938/kim-long-restaurants",
    live: "https://kimlongrestaurants.netlify.app/",
    image: "/assets/kimlong.png",
  },
  {
    title: "Fitness Tracker App",
    description:
      "Fitness Tracker app built using Flutter and Firebase. Tracks workouts, steps, calories, and sleep; includes workout plans, progress charts, local storage, user authentication, and exportable reports.",
    tags: ["Flutter", "Dart", "Firebase", "Figma"],
    github: "https://github.com/manas8938/CodeAlpha_FitnessTracker",
    image: "/assets/fitness.jpg",
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
                {(project.live || project.github) && <div className='flex gap-2 mt-auto w-full'>
                  {project.live && (
                    <a href={project.live} target='_blank' rel='noopener noreferrer' className='flex-1 text-center py-3 rounded-full font-semibold transition border bg-gradient-to-r from-cyan-600/20 hover:from-cyan-600 hover:to-cyan-500 border-cyan-500/30 hover:border-cyan-400 hover:scale-105'>Live Site</a>
                  )}
                  {project.github && (
                    <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex-1 text-center py-3 rounded-full font-semibold transition border bg-gradient-to-r from-purple-600/20 hover:from-purple-600 hover:to-purple-500 border-purple-500/30 hover:border-purple-400 hover:scale-105'>GitHub</a>
                  )}
                </div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;