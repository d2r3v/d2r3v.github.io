export type Experience = {
  id: string
  company: string
  role: string
  period: string
  location?: string
  summary: string
  bullets: string[]
  tech: string[]
  current?: boolean
  featured?: boolean
  caseStudySlug?: string
}

// Order = display order. Featured entries appear on the homepage.

export const experienceData: Experience[] = [
  {
    id: "astin-analytics",
    company: "Astin Analytics",
    role: "Backend Engineer",
    period: "May 2026 – Present",
    location: "Vancouver, BC",
    summary:
      "Backend re-architecture and AI-pipeline security for a computer-vision analytics company.",
    bullets: [
      "Auditing and re-architecting a legacy Python/PostgreSQL backend, identifying scalability, security, and maintainability risks across core services.",
      "Designing a security classification layer for a legacy RAG pipeline: input sanitization, isolated retrieval paths, and reduced unsafe prompt-to-context behavior.",
      "Prototyped Kafka-based event-streaming workflows and validated GCP load-balancing behavior through load-testing experiments for availability-focused deployment planning.",
    ],
    tech: ["Python", "PostgreSQL", "Kafka", "GCP", "Docker"],
    current: true,
    featured: true,
  },
  {
    id: "ubc-research-software-engineer",
    company: "University of British Columbia",
    role: "Research Software Engineer",
    period: "Jan 2026 – Apr 2026",
    summary:
      "Python GitHub-analytics pipeline quantifying student contributions for instructors and research workflows.",
    bullets: [
      "Refactored a Python-based GitHub analytics pipeline to quantify student contributions across PRs, commits, and reviews.",
      "Developed heuristics to detect over-reliance on AI/LLMs in codebases, enabling interpretable metrics for instructors and reproducible analysis for research workflows.",
    ],
    tech: ["Python", "Data Analytics", "Visualizations"],
  },
  {
    id: "ubc-vems",
    company: "UBC Visualization & Emerging Media Studio",
    role: "Software Engineer",
    period: "Sept 2024 – Apr 2026",
    location: "Kelowna, BC",
    summary:
      "Real-time distributed backend services for multi-user XR scientific visualization.",
    bullets: [
      "Engineered real-time backend services supporting cross-device state synchronization for live multi-user XR demo environments.",
      "Reduced interaction latency to under 80 ms by optimizing WebSocket data pipelines and structured input streams.",
      "Improved stability of live visualization sessions used by students, researchers, and visiting stakeholders by resolving networking and synchronization bottlenecks.",
    ],
    tech: ["Unity", "C#", "WebSockets", "Firebase"],
    featured: true,
  },
  {
    id: "ubc-exam-platform",
    company: "UBC",
    role: "Backend Lead, Exam Generation & Analytics Platform",
    period: "May 2025 – Sept 2025",
    location: "Kelowna, BC",
    summary: "Led the backend for the exam analytics platform featured in Projects.",
    bullets: [
      "Architected the microservice backend (Node.js, TypeScript, tRPC, Prisma, PostgreSQL) for exam generation, OMR grading, analytics, and result review.",
      "Automated grading and analytics for 1000+ OMR submissions per exam cycle; designed immutable snapshot-based grading for reproducible audits.",
      "Secured multi-tenant data with JWT-based RBAC and PostgreSQL Row-Level Security, and built same-variant and cross-variant cheating-detection logic.",
    ],
    tech: ["Node.js", "TypeScript", "tRPC", "PostgreSQL", "Prisma"],
    featured: true,
    caseStudySlug: "exam-generation-analysis",
  },
]
