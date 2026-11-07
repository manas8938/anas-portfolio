import React from 'react';

const timeline = [
  {
    title: "Full-Stack Developer (Freelance Contract)",
    subtitle: "Upwork, Saudi Arabia Client · Remote",
    location: "",
    period: "Feb 2026 – Present",
    bullets: [
      <>
        Architected and built{' '}
        <a
          href="https://www.miknaz.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          MIKNAZ
        </a>{' '}
        end to end across five milestones: a Flutter mobile app, NestJS backend, two React dashboards, ZATCA-compliant e-invoicing, dual payment gateways, and Arabic/English RTL support.
      </>,
      "Engineered a zero-double-claim voucher system using Redis Lua atomic locks and PostgreSQL row locking, keeping claim processing transaction-safe under concurrent requests.",
      "Designed a strategy-pattern payment layer for card, Apple Pay, and STC Pay across two gateways, with HMAC webhook verification and idempotent payment-status handling.",
      "Hardened the platform against IDOR, CSRF, and brute-force attacks with JWT blacklisting, per-identity rate limits, CSPRNG OTPs, AES-256-GCM encryption, and GPS anti-spoofing; closed a Cloudflare origin-bypass gap.",
      "Built 200+ automated tests and load-tested at 200 concurrent users: 152 ms p95 response time, 52.1 req/s, zero errors. Audited all four codebases before launch and fixed payment and notification gaps.",
      "Deployed and operate production on Oracle Cloud (Jeddah) with PM2, Nginx/SSL, Cloudflare CDN, and Sentry; wrote a 4,911-line OpenAPI spec and handover runbook.",
    ],
    tags: ["Flutter", "NestJS", "React", "PostgreSQL", "PostGIS", "Redis", "TypeScript", "OCI", "Cloudflare", "Docker", "JWT", "Moyasar", "Tap Payments", "ZATCA", "Sentry"],
    color: "cyan",
  },
  {
    title: "Backend Developer (Freelance Development Team)",
    subtitle: "Contract, International Clients · Peshawar, Pakistan",
    location: "",
    period: "Mar 2023 – Oct 2025",
    bullets: [
      "Built 9 backend systems from scratch in Node.js/NestJS and PostgreSQL for international clients, working in client GitHub organizations through pull requests and code review: Order, Inventory & Payment Engine; Reliable Job & Webhook Platform; Usage Metering & Billing Backend; Booking & Ticket Reservation Engine; Event Ingestion & Analytics Pipeline; Authorization & Access Policy Service; Durable Workflow Execution Engine; API Traffic Replay & Regression Platform; Geospatial Matching Engine.",
      "Commerce & billing: prevented overselling and double-booking with PostgreSQL transactions and row-level locks plus short-lived Redis holds with TTL, and added idempotency keys so retried payment and usage requests were never charged twice.",
      "Async processing & reliability: built Redis/BullMQ queues with retries, exponential backoff, and dead-letter queues; HMAC-signed webhooks; persisted workflow state so long-running jobs resume after crashes; and batched writes for high event volume.",
      "Security & platform: implemented JWT auth with RBAC and policy checks through NestJS guards, replayed captured API traffic against new builds to catch regressions before release, and used PostGIS spatial indexes for fast nearby-provider matching.",
      "Engineering practice: modular NestJS domain modules, schema design with versioned migrations (TypeORM/Prisma), query tuning and indexing, Jest unit and integration tests, Swagger/OpenAPI docs, Dockerized builds, and post-deployment smoke tests.",
    ],
    tags: ["Node.js", "NestJS", "PostgreSQL", "PostGIS", "Redis", "BullMQ", "TypeORM", "Prisma", "Jest", "Swagger", "Docker", "JWT"],
    color: "purple",
  },
  {
    title: "Mobile Application Developer Intern",
    subtitle: "CodeAlpha · Remote",
    location: "",
    period: "Aug 2025 – Sep 2025",
    bullets: [
      "Built a Flutter fitness-tracking app with Firebase Authentication and real-time Firestore sync.",
    ],
    tags: ["Flutter", "Firebase", "Firestore"],
    color: "pink",
  },
  {
    title: "Student Software Developer",
    subtitle: "CECOS University · Peshawar, Pakistan",
    location: "",
    period: "Mar 2024 – Jul 2025",
    bullets: [
      "Fixed the university's slow internal system by adding a Redis caching layer in front of the database, significantly reducing response times under load.",
      "Movr (Final Year Project, Nov 2024 – Mar 2025): solo-developed a cross-platform Flutter app (Provider, clean architecture) with a NestJS + MySQL + TypeORM backend, JWT-secured REST APIs, and real-time tracking, delivered for an external client.",
    ],
    tags: ["Redis", "Flutter", "NestJS", "MySQL", "TypeORM", "JWT"],
    color: "cyan",
  },
  {
    title: "BS Software Engineering",
    subtitle: "CECOS University of IT & Emerging Sciences · Peshawar, Pakistan",
    location: "",
    period: "Oct 2021 – Oct 2025",
    bullets: [],
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
  if (typeof text !== 'string') return text;
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
                {item.bullets.length > 0 && <ul className="space-y-1 mb-4">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-gray-600">▸</span>
                      <span>{renderBullet(b)}</span>
                    </li>
                  ))}
                </ul>}
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