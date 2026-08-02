import React from 'react';

const timeline = [
  {
    title: "Full-Stack Developer (Freelance, Solo Contract)",
    subtitle: "Upwork, Saudi Arabia Market",
    location: "",
    period: "Feb 2026 – Present",
    bullets: [
      "Architecture: Architected and built MIKNAZ solo across 5 milestones: a Flutter mobile app, NestJS backend, two React dashboards, ZATCA-compliant e-invoicing, Moyasar/Tap payments, and Arabic/English RTL localization.",
      "Concurrency Engine: Designed a zero-double-claim voucher engine using Redis atomic locking and PostgreSQL transactions, eliminating duplicate redemptions under concurrent load across four user roles.",
      "Security: Hardened MIKNAZ against CSRF, IDOR, and brute-force attacks with JWT blacklisting, timing-safe comparisons, idempotency keys, and AES-256 encryption, on top of Firebase OTP auth and GPS anti-spoofing.",
      "Performance (verified): Built a 200+ automated test suite and independently load-tested the platform at 200 concurrent users: 152ms p95 response time, 52.1 req/s, zero crashes or database errors.",
      "Cloud & Reliability: Deployed and operate the stack on OCI (Jeddah) with PM2 clustering, Nginx/SSL, and Cloudflare CDN, plus Sentry monitoring, daily backups, and 5-minute uptime checks.",
      "Client Trust & Retention: Led client communication throughout delivery; the engagement converted from a fixed-scope contract into an ongoing retainer, with Phase 2 now in planning.",
      "Documentation: Authored a 4,911-line OpenAPI spec and handover runbook, enabling long-term maintainability independent of the original builder.",
      "Design Collaboration: Worked with the UI/UX designer to review Figma prototypes, provide implementation feedback, and refine user flows before development.",
    ],
    tags: ["Flutter", "NestJS", "React", "PostgreSQL", "PostGIS", "Redis", "TypeScript", "OCI", "Cloudflare", "Firebase", "ZATCA", "Resend", "Cloudinary", "Docker", "JWT", "RBAC", "k6", "Moyasar"],
    color: "cyan",
  },
  {
    title: "Freelancer, Team Collaboration",
    subtitle: "Various International Clients",
    location: "Onsite, Peshawar, Pakistan",
    period: "Jan 2023 – Nov 2025",
    bullets: [
      "Backend Developer: Delivered production-ready backend systems for international clients, owning architecture, APIs, authentication, and integrations across SaaS/MVP, web & mobile apps, e-commerce, CRM/ERP, and booking platforms.",
      "Full-Stack Developer: Delivered full-stack projects end to end: architecture, APIs, responsive UIs, authentication, and deployment, with direct ownership of both frontend and backend.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "NestJS", "Node.js", "PostgreSQL", "PostGIS", "MySQL", "MongoDB", "Redis", "BullMQ", "Socket.IO", "Docker", "OCI", "AWS", "Nginx", "PM2", "Cloudflare", "Firebase", "Supabase", "JWT", "OAuth2", "RBAC", "Prisma", "TypeORM"],
    color: "purple",
  },
  {
    title: "Database Engineer (Contract)",
    subtitle: "CECOS University, Department of Computer Science",
    location: "Onsite, Peshawar, Pakistan",
    period: "Mar 2024 – Oct 2025",
    bullets: [
      "Contributed to internal academic and administrative systems as part of the backend engineering team.",
      "Optimized PostgreSQL queries and integrated Redis caching to improve application performance, reduce database load, and decrease response times.",
      "SQL Development: Wrote complex queries using joins, subqueries, CTEs, and window functions; built views, materialized views, stored procedures, functions, and triggers.",
      "Performance Optimization: Diagnosed and resolved slow queries using EXPLAIN ANALYZE, designed and tuned indexes, implemented table partitioning, and ran routine VACUUM/ANALYZE maintenance.",
      "Data Integrity: Enforced primary keys, foreign keys, unique and check constraints, and managed transactions with ACID guarantees and appropriate isolation levels.",
      "Security: Configured user roles, permissions, and access control, enforced SSL/TLS on connections, and maintained audit logs.",
      "Backup & High Availability: Set up automated backups with point-in-time recovery, tested disaster-recovery restores, and configured replication, failover, and read replicas.",
      "Migrations & Monitoring: Managed schema and data migrations with zero-downtime deployments, and monitored CPU/memory usage, slow query logs, connection pools, and alerts.",
      "Backend Collaboration: Wrote optimized queries for API endpoints, tuned TypeORM usage, and implemented Redis caching and connection pooling alongside the backend team.",
    ],
    tags: ["PostgreSQL", "SQL", "Redis", "Docker", "CI/CD", "ORM", "TypeORM", "Replication", "Indexing"],
    color: "pink",
  },
  {
    title: "Mobile Application Developer Intern",
    subtitle: "CodeAlpha",
    location: "Remote",
    period: "Aug 2025 – Sep 2025",
    bullets: [
      "Built a fitness tracker app in Flutter with Firebase Authentication and Firestore for real-time data sync, including signup/login and activity-tracking features.",
    ],
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    color: "pink",
  },
  {
    title: "CECOS University of IT & Emerging Sciences",
    subtitle: "BS Software Engineering · Peshawar, Pakistan",
    location: "",
    period: "Oct 2021 — 2025",
    bullets: [
      "Graduated with a degree in Software Engineering",
    ],
    tags: [],
    color: "yellow",
  },
  {
    title: "Certifications",
    subtitle: "",
    location: "",
    period: "",
    bullets: [
      "IBM SQL & Relational Databases — Jun 2025",
      "AWS Academy Cloud Foundations — Feb 2024",
      "Mobile App Development with Flutter — Mar 2024",
    ],
    tags: [],
    color: "yellow",
  },
];

const colorMap = {
  cyan: "bg-cyan-400 shadow-cyan-400/50",
  purple: "bg-purple-400 shadow-purple-400/50",
  pink: "bg-pink-400 shadow-pink-400/50",
  yellow: "bg-yellow-400 shadow-yellow-400/50",
};

const tagColor = {
  cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
  purple: "bg-purple-500/10 border-purple-500/30 text-purple-300",
  pink: "bg-pink-500/10 border-pink-500/30 text-pink-300",
  yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
};

// Bullets written as "Label: rest of sentence" get their label bolded.
// Falls back to plain text when there's no short leading label.
const renderBullet = (text) => {
  const colonIndex = text.indexOf(':');
  const hasLabel = colonIndex > 0 && colonIndex < 40;
  if (!hasLabel) return text;
  return (
    <>
      <strong className="text-white font-semibold">{text.slice(0, colonIndex + 1)}</strong>
      {text.slice(colonIndex + 1)}
    </>
  );
};

const Experience = () => (
  <section id="experience" className="py-24 bg-gradient-to-b from-black to-purple-950/20">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Experience & Education</h2>
        <p className="text-gray-400 text-lg">My journey building production systems and growing as an engineer.</p>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
        <div className="space-y-10">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-12">
              <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center ${colorMap[item.color]} shadow-lg`}>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    {item.subtitle && <p className="text-gray-400 text-sm">{item.subtitle}</p>}
                  </div>
                  <div className="flex flex-col sm:items-end gap-0.5 pt-1">
                    {item.period && <span className="text-xs font-mono text-gray-500 whitespace-nowrap">{item.period}</span>}
                    {item.location && <span className="text-xs font-mono text-gray-500 whitespace-nowrap">{item.location}</span>}
                  </div>
                </div>
                <ul className="space-y-1 mb-4">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-gray-600">▸</span>
                      <span>{renderBullet(b)}</span>
                    </li>
                  ))}
                </ul>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, k) => (
                      <span key={k} className={`px-2 py-1 text-xs rounded-full border ${tagColor[item.color]}`}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;