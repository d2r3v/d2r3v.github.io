export type Project = {
  id: string
  slug: string
  title: string
  description?: string
  overview?: string
  architecture?: string
  decisions?: string
  impact?: string
  summary?: string
  tagline?: string
  metrics?: string[]
  contributions?: string[]
  diagram?: string
  diagramTitle?: string
  visuals?: { title: string; src: string; caption: string }[]
  standoutSections?: { title: string; content: string | string[] }[]
  tech: string[]
  githubUrl: string
  demoUrl?: string
  reportUrl?: string
  status?: string
  featured?: boolean
}

// Shown on the homepage as a "Currently building" one-liner when non-empty.
export const currentlyBuilding = ""

// Order = display order. First three are featured.

export const projectsData: Project[] = [
  {
    id: "exam-generation",
    slug: "exam-generation-analysis",
    title: "Exam Generation & Analytics Platform",
    tagline:
      "Microservice backend processing 1000+ OMR submissions per exam cycle, with reproducible grading and cross-variant cheating detection.",
    summary:
      "Backend system for generating exam variants, grading 1000+ student OMR submissions per cycle, and running analytics and collusion-detection pipelines for faculty review.",
    metrics: [
      "Graded 1000+ student OMR submissions per exam cycle with deterministic, reproducible results",
      "Flagged suspicious answer patterns via pairwise similarity scoring and re-grading against alternate variant keys",
      "Enforced multi-tenant isolation with PostgreSQL Row-Level Security and audit-safe immutable exam snapshots",
    ],
    contributions: [
      "Designed the microservice backend (auth, exam, results, analytics) using Node.js, TypeScript, tRPC, and PostgreSQL.",
      "Built the CSV ingestion pipeline mapping raw OMR responses to normalized, validated student records.",
      "Implemented the grading engine with partial credit, negative marking, and immutable variant snapshots so historical grades survive later edits to exams.",
      "Developed the collusion-detection module: pairwise answer similarity, weighted and normalized scoring, cross-variant re-grading, and thresholds with performance caps for large cohorts.",
    ],
    visuals: [
      {
        title: "System Overview",
        src: "/System_architecture.png",
        caption:
          "Microservice architecture with API gateway routing requests across auth, exam generation, and analytics services",
      },
      {
        title: "Grading & Analytics Pipeline",
        src: "/Grading & Analytics Pipeline.png",
        caption:
          "End-to-end pipeline from CSV ingestion to grading, analytics, and anomaly detection.",
      },
    ],
    standoutSections: [
      {
        title: "Collusion Detection Engine",
        content:
          "Rather than relying on metadata, the pipeline compares student answer patterns directly: pairwise matched-answer and incorrect-match counts, weighted similarity scores, and cross-variant re-grading that scores each student's answers against alternate variant keys to catch cases where responses fit a different variant better than the assigned one. Thresholds, batching, and comparison caps keep the analysis tractable at cohort scale, and flagged pairs are surfaced with human-readable reasons for faculty review rather than automated verdicts.",
      },
      {
        title: "Data Integrity by Design",
        content:
          "Every published exam, variant answer key, and student result is captured as an immutable snapshot, so grades remain reproducible and auditable even if questions are edited later. Multi-tenant isolation is enforced at the database layer with PostgreSQL Row-Level Security and request-scoped user context rather than trusting application code alone.",
      },
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "tRPC",
      "PostgreSQL",
      "Prisma",
      "React",
      "Docker",
    ],
    githubUrl: "",
    reportUrl: "/Exam_Gen_Project_Report.pdf",
    status: "Completed",
    featured: true,
  },
  {
    id: "xr-vertebrate",
    slug: "xr-vertebrate-visualization",
    title: "XR Vertebrate Learning System & Real-Time Visualization Infrastructure",
    tagline:
      "Unity-based anatomy learning system for classroom use, backed by real-time multi-user synchronization infrastructure.",
    summary:
      "Interactive 3D application built in Unity for exploring vertebrate anatomy without physical dissection, deployed to biology classrooms and driven by low-latency multi-user synchronization built at UBC's Visualization & Emerging Media Studio.",
    metrics: [
      "Used in classroom sessions by 150+ biology students",
      "Maintained 60+ FPS with high-poly anatomy models on a large-format video wall deployment",
      "Reduced interaction latency to under 80 ms by optimizing WebSocket data pipelines and structured input streams",
    ],
    contributions: [
      "Built the runtime model-loading system mapping instructor folder workspaces to in-app assets, so lecturers could swap specimens without engineering help.",
      "Engineered cross-device state synchronization for multi-user sessions over WebSockets, keeping live demos stable for classes and visiting stakeholders.",
      "Ran usability testing and eliminated motion sickness reports by anchoring interactions to stable visual reference frames.",
      "Tuned rendering thresholds and camera behavior for a high-resolution video wall with strict frame-rate requirements.",
    ],
    diagram: `Controller Input → Interaction System → Model Controller → Renderer
                                   ↓
                          Runtime Model Loader`,
    standoutSections: [
      {
        title: "Explored System Extensions & Tradeoffs",
        content:
          "CROSS-DEVICE ACCESS (WEB-BASED RENDERING)\nGoal: Make the system usable without high-end hardware.\nApproach: Explored WebSockets and remote rendering, but the infrastructure cost was high for a teaching deployment. We adopted Sketchfab embedding instead, which met most of the accessibility goals with minimal engineering overhead, trading custom guided labs for scalability.\n\nMOBILE GYROSCOPE CONTROLLER\nGoal: Replace traditional input with phone-based controls via QR code.\nTech: Explored real-time sensor streaming over Firebase.\nOutcome: Deferred. Real-time synchronization at classroom density added more failure modes than the interaction was worth. Key insight: in teaching environments, reliability beats novelty.",
      },
      {
        title: "Reliability & Interaction Design Challenges",
        content:
          "CONTROLLER RELIABILITY UNDER LOAD\nProblem: Bluetooth controllers dropped frequently in high-density labs, causing erratic model behavior.\nSolution: Software-level input validation, fallbacks, and safe defaults on signal loss, which stabilized live sessions.\n\nDESIGNING FOR DIFFERENT MENTAL MODELS\nObservation: Usability tests showed instructors preferred structured, predictable actions while students preferred fluid direct manipulation.\nApproach: Iterated on control schemes to balance the two — a reminder that 'intuitive' is context-dependent.",
      },
    ],
    tech: ["Unity", "C#", "WebSockets", "XR SDKs", "Sketchfab", "Firebase"],
    githubUrl: "",
    status: "Completed",
    featured: true,
  },
  {
    id: "pillcare",
    slug: "pillcare",
    title: "PillCare",
    tagline:
      "Multi-modal ML system combining vision and OCR to identify pills under real-world ambiguity.",
    summary:
      "Deep learning system identifying medications from real-world images (vision + OCR imprints), reaching 84% accuracy via gated modality fusion.",
    metrics: [
      "Reached 84% identification accuracy across 16 drug classes using gated vision-OCR fusion",
      "Outperformed the vision-only baseline by +3.6% on visually ambiguous pills",
      "Expanded the training set 3x (to 707 images) with targeted offline augmentation, worth +9% accuracy alone",
    ],
    contributions: [
      "Built the multi-stage pipeline: preprocessing → OCR → fusion → inference, using MobileNetV2 and a CRNN.",
      "Designed the gated fusion mechanism that weighs visual vs. OCR signals per-input, suppressing noisy text influence.",
      "Handled severe class imbalance with balanced class weights and targeted augmentation, ensuring non-zero recall on rare classes.",
      "Automated dataset expansion via the openFDA API and exported the model to TFLite for edge deployment.",
    ],
    diagramTitle: "Model Pipeline (Vision + OCR Fusion)",
    diagram: `Image Input
     ↓
[Vision: MobileNetV2]    [OCR: CRNN]
       ↓                      ↓
 [Visual Features]      [Text Features]
             ↘          ↙
        [Confidence Gate]
                 ↓
          [Fusion Layer]
                 ↓
          Classification`,
    standoutSections: [
      {
        title: "The Gated Fusion Idea",
        content:
          "Most pill identification approaches rely on either image classification or text lookup, and both break down in real conditions (worn imprints, look-alike pills). Instead of weighting vision and OCR equally, PillCare uses a confidence gate that decides when OCR should influence the prediction: ignored when no readable text exists, trusted when visual ambiguity is high. This raised accuracy to 84%, +3.6% over the vision-only baseline.",
      },
      {
        title: "Data Beats Model Complexity",
        content:
          "Data quality returned more than architecture changes: 3x targeted offline augmentation was worth +9% accuracy, the single largest improvement. Severe class imbalance initially made the model ignore minority classes like amoxicillin; balanced class weights plus targeted augmentation restored non-zero recall across all 16 classes.",
      },
    ],
    tech: ["TensorFlow", "Keras", "OpenCV", "MobileNetV2", "CRNN", "OpenFDA API"],
    githubUrl: "https://github.com/d2r3v/PillCare",
    status: "Completed",
    featured: true,
  },
  {
    id: "burnout-detection",
    slug: "developer-burnout-detection",
    title: "Detecting Developer Burnout from GitHub Activity",
    tagline:
      "Unsupervised pipeline identifying burnout risk from behavioral telemetry across 25 open-source repositories.",
    summary:
      "Data pipeline analyzing temporal GitHub activity — 20K+ commits and 7K+ pull requests across 25 repositories over 8 months — using anomaly detection to surface early burnout signals.",
    metrics: [
      "Processed 20K+ commits and 7K+ pull requests across 25 open-source repositories over 8 months",
      "Identified a recurring 'Surge-and-Stop' pattern: intense activity bursts reliably followed by 2+ weeks of inactivity",
      "Found timing and intensity signals (late-night, weekend work) more predictive of burnout than commit-message sentiment",
    ],
    contributions: [
      "Built the time-series ingestion pipeline over the GitHub API, with bot filtering and timezone normalization across distributed teams.",
      "Engineered behavioral features (late-night ratios, intensity spikes, activity windows) from noisy raw event data.",
      "Designed a composite risk score using Isolation Forest anomaly detection, without any labeled burnout dataset to train on.",
    ],
    diagram: `[GitHub API]
     ↓
[Data Pipeline: Ingestion & Filter]
     ↓
[Feature Engineering: Temporal & Sentiment]
     ↓
[Risk Scoring: Isolation Forest]
     ↓
[Visualization & Insights]`,
    standoutSections: [
      {
        title: "Key Finding: The Surge-and-Stop Pattern",
        content:
          "Long-window activity analysis revealed a distinct pattern: intense bursts of work reliably followed by two or more weeks of complete inactivity. Time-series analysis showed that when and how intensely people worked (late nights, weekends, spikes) predicted imminent disengagement better than the emotional tone of their commit messages. Contributors in high-responsibility roles showed a higher baseline risk.",
      },
      {
        title: "Working Without Labels",
        content:
          "There is no labeled 'burnout' dataset, so the scoring system had to be built unsupervised: filtering bots and low-signal contributors, normalizing timezones across globally distributed teams, and converting noisy asynchronous event streams into clean weekly time series suitable for anomaly detection.",
      },
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "GitHub API", "Isolation Forest"],
    githubUrl: "",
    reportUrl: "/Burnout_Detection.pdf",
    status: "Completed",
    featured: false,
  },
  {
    id: "reflect-ai",
    slug: "reflect-ai",
    title: "Reflect AI",
    tagline: "Safety-aware LLM chat backend with risk classification and response routing.",
    summary:
      "A FastAPI + React Native system exploring how safety classification and structured execution make LLM chat applications more reliable. In progress.",
    overview:
      "Reflect AI is an exploration of the execution layer around an LLM: classifying message risk before generation, routing responses through different modes, and bypassing the model entirely with deterministic responses in crisis scenarios.",
    metrics: [
      "Built a working risk-classification → mode-selection → response-routing pipeline with a deterministic crisis bypass",
      "Shipped authenticated persistent conversations: JWT auth, async database sessions, Alembic migrations, and message/safety-event logging",
    ],
    contributions: [
      "Designed the safety pipeline: incoming messages are risk-classified, routed to a response mode, and crisis-flagged messages bypass the LLM for deterministic responses.",
      "Built the FastAPI backend with JWT authentication, async SQLAlchemy sessions, and Alembic-managed migrations.",
      "Implemented persistent conversation storage with message and safety-event logging for auditability.",
      "Built the React Native (Expo) client with secure token handling.",
    ],
    standoutSections: [
      {
        title: "What I Learned",
        content: [
          "AI systems are mostly not model calls — state, safety routing, and execution flow are where the engineering lives",
          "Deterministic paths matter: the crisis bypass exists precisely because some responses should never depend on a model",
          "Clean early abstractions (context, routing, execution) prevent painful refactors later",
        ],
      },
      {
        title: "Roadmap (not yet built)",
        content: [
          "Tool orchestration in the execution pipeline",
          "Multi-step reasoning over persisted context",
          "Pluggable LLM providers",
        ],
      },
    ],
    tech: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "JWT", "React Native (Expo)"],
    githubUrl: "https://github.com/d2r3v/reflect-ai",
    status: "In Progress",
    featured: false,
  },
]