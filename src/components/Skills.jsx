import React from 'react';
import { FaMobileAlt, FaCode, FaServer, FaPaintBrush, FaGlobe, FaDatabase, FaDocker, FaFire, FaLock, FaCogs, FaKey, FaUserShield, FaMapMarkerAlt, FaBell, FaEnvelope, FaAws, FaCheckCircle, FaNetworkWired } from 'react-icons/fa';
import { SiTypescript, SiPrisma, SiRedis, SiPostgresql, SiSwagger, SiVite, SiOracle, SiCloudflare, SiMongodb, SiSupabase, SiSocketdotio, SiNginx, SiJest, SiFlutter } from 'react-icons/si';

const categories = [
  { label: "Mobile", items: [{ name: "Flutter", icon: SiFlutter, color: "#02569B" }, { name: "Dart", icon: FaCode, color: "#0175C2" }, { name: "Riverpod", icon: FaMobileAlt, color: "#00B4D8" }, { name: "Provider", icon: FaMobileAlt, color: "#7C3AED" }, { name: "GoRouter", icon: FaGlobe, color: "#06B6D4" }, { name: "Geolocator", icon: FaMapMarkerAlt, color: "#10B981" }, { name: "FCM", icon: FaBell, color: "#FFCA28" }, { name: "APNS", icon: FaBell, color: "#A3A3A3" }] },
  { label: "Frontend", items: [{ name: "React", icon: FaGlobe, color: "#61DAFB" }, { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, { name: "Tailwind CSS", icon: FaCode, color: "#06B6D4" }, { name: "Vite", icon: SiVite, color: "#646CFF" }, { name: "React Router", icon: FaGlobe, color: "#CA4245" }] },
  { label: "Backend", items: [{ name: "NestJS", icon: FaServer, color: "#E0234E" }, { name: "Node.js", icon: FaServer, color: "#339933" }, { name: "REST APIs", icon: FaCogs, color: "#FF6B6B" }, { name: "WebSockets", icon: FaNetworkWired, color: "#8B5CF6" }, { name: "JWT", icon: FaKey, color: "#F7DF1E" }, { name: "OAuth2", icon: FaLock, color: "#EB5424" }, { name: "RBAC", icon: FaUserShield, color: "#8B5CF6" }, { name: "BullMQ", icon: FaCogs, color: "#FF4438" }, { name: "Redis", icon: SiRedis, color: "#DC382D" }] },
  { label: "Database", items: [{ name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }, { name: "MySQL", icon: FaDatabase, color: "#4479A1" }, { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, { name: "Firebase", icon: FaFire, color: "#FFCA28" }, { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" }, { name: "TypeORM", icon: FaDatabase, color: "#FE0902" }, { name: "Prisma", icon: SiPrisma, color: "#5A67D8" }] },
  { label: "Real-Time & Async", items: [{ name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" }, { name: "Redis Locks", icon: SiRedis, color: "#DC382D" }, { name: "Background Jobs", icon: FaCogs, color: "#F59E0B" }] },
  { label: "DevOps & Cloud", items: [{ name: "OCI", icon: SiOracle, color: "#F80000" }, { name: "AWS", icon: FaAws, color: "#FF9900" }, { name: "Docker", icon: FaDocker, color: "#2496ED" }, { name: "Nginx", icon: SiNginx, color: "#009639" }, { name: "PM2", icon: FaServer, color: "#2B037A" }, { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" }, { name: "CI/CD", icon: FaCogs, color: "#6366F1" }] },
  { label: "Testing", items: [{ name: "Jest", icon: SiJest, color: "#C21325" }, { name: "Supertest", icon: FaCheckCircle, color: "#10B981" }, { name: "Flutter Analyzer", icon: SiFlutter, color: "#02569B" }] },
];

const Skills = () => (
  <section id="skills" className="py-24 bg-gradient-to-b from-purple-950/20 to-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Tech Stack</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Technologies I use to build scalable web apps, mobile apps, and enterprise-grade backends.</p>
      </div>
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col md:flex-row md:items-start gap-4 py-5 border-b border-purple-500/10">
            <div className="md:w-44 flex-shrink-0">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">{cat.label}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default"
                  >
                    <Icon className="text-sm flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12" style={{ color: tech.color }} />
                    <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;