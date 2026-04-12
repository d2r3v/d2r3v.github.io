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
  standoutSections?: { title: string; content: string }[]
  tech: string[]
  githubUrl: string
  demoUrl?: string
  reportUrl?: string
}

export const projectsData: Project[] = [
  {
    id: "exam-generation",
    slug: "exam-generation-analysis",
    title: "Scalable Exam Generation & Analytics Platform (Microservices + Data Pipelines)",
    tagline: "Backend system processing 1000+ student exam submissions with automated grading, analytics, and cross-variant cheating detection.",
    summary: "Backend system for generating exam variants, processing 1000+ student OMR data, and running analytics + cheating detection pipelines.",
    metrics: [
      "Processed OMR data for 1000+ student submissions per exam cycle",
      "Detected cross-variant anomalies using statistical comparison pipelines",
      "Handled high-volume CSV ingestion and validation over independent microservices"
    ],
    contributions: [
      "Designed microservice backend (Auth, Exam, Analytics) using tRPC + PostgreSQL.",
      "Built CSV ingestion pipeline mapping OMR responses to structured student records.",
      "Implemented deterministic grading engine (partial credit, negative marking, snapshots).",
      "Developed cheating detection using cross-variant similarity + statistical risk scoring."
    ],
    visuals: [
      {
        title: "System Overview",
        src: "/System_architecture.png",
        caption: "Microservice architecture with API gateway routing requests across auth, exam generation, and analytics services"
      },
      {
        title: "Grading & Analytics Pipeline",
        src: "/Grading & Analytics Pipeline.png",
        caption: "End-to-end pipeline from CSV ingestion to grading, analytics, and anomaly detection."
      }
    ],
    standoutSections: [
      {
        title: "Algorithmic Cheating Detection Engine",
        content: "A core capability of the system is applied statistical anomaly detection. Rather than relying on simple metadata, the pipeline conducts cross-variant answer comparisons. It actively regrades students against incorrectly shifted answer keys to track specific statistical similarities, utilizing risk scoring to surface potential academic misconduct purely from OMR data patterns."
      },
      {
        title: "Scalability & Data Integrity Design",
        content: "Designed to handle 1000+ students per exam cycle with heavy concurrent workflows. Built on a strictly typed, full-stack architecture running Node.js and React. On the database layer, strict multi-tenant isolation is enforced via PostgreSQL Row-Level Security (RLS) while audit-safe historic integrity is guaranteed by maintaining immutable snapshots of exams mapped to specific submissions. Designed to ensure reproducible grading and audit-safe results through immutable snapshots and variant-specific mappings."
      }
    ],
    tech: ["Node.js", "TypeScript", "tRPC", "PostgreSQL", "Prisma", "React", "Microservices"],
    githubUrl: "",
    reportUrl: "/Exam_Gen_Project_Report.pdf"
  },
  {
    id: "xr-vertebrate",
    slug: "xr-vertebrate-visualization",
    title: "Interactive 3D Vertebrate Learning System (XR + Large-Scale Visualization)",
    tagline: "Immersive classroom application integrating dynamic 3D asset pipelines",
    summary: "Interactive spatial computing application built in Unity to visualize complex vertebrate anatomy, enabling 100+ students to learn interactively without physical dissection.",
    metrics: [
      "Deployed and rigorously tested with 100+ active biology students",
      "Rendered high-fidelity volumetric anatomy models maintaining a steady 60+ FPS",
      "Achieved 90% cross-device accessibility parity leveraging Sketchfab integration"
    ],
    contributions: [
      "Built dynamic model loading system mapping folder workspaces seamlessly to improve lecture flow.",
      "Designed an intuitive interaction layer optimized for low cognitive load and input precision.",
      "Conducted usability testing removing motion sickness by implementing stable visual reference bases.",
      "Optimized rendering thresholds and camera speeds for a strict high-resolution video wall deployment."
    ],
    diagram: `Controller Input → Interaction System → Model Controller → Renderer
                                   ↓
                          Runtime Model Loader`,
    standoutSections: [
      {
        title: "Explored System Extensions & Tradeoffs",
        content: "CROSS-DEVICE ACCESSIBILITY (WEB-BASED RENDERING)\nGoal: Make the system accessible without high-end hardware.\nApproach: Explored WebSockets and remote rendering. Due to the high infrastructure cost, we opted to use Sketchfab instead, achieving ~90% of accessibility goals with minimal engineering overhead, trading custom guided labs for scalability.\n\nMOBILE-BASED CONTROLLER (GYROSCOPE INTERACTION)\nGoal: Replace traditional input with mobile controls via QR code.\nTech: Explored real-time sensor streaming over Firebase.\nOutcome: Deferred implementation because real-time synchronization scaling in a dense lab setting added too much complexity. Key insight: Interaction design must balance novelty with reliability in teaching environments."
      },
      {
        title: "Reliability & Interaction Design Challenges",
        content: "CONTROLLER RELIABILITY UNDER LOAD\nProblem: Bluetooth controllers frequently disconnected in high-density labs, causing erratic model behavior.\nSolution: We implemented software-level input validation, added fallbacks, and enforced safe defaults upon signal loss, significantly stabilizing the system.\n\nDESIGNING FOR DIFFERENT USER MENTAL MODELS\nObservation: Usability tests showed that older instructors preferred structured, predictable actions, whereas younger students preferred fluid, direct manipulation.\nApproach: We iterated on control schemes to balance simplicity, responsiveness, and predictability—proving that 'intuitive' design is context-dependent."
      }
    ],
    tech: ["Unity", "C#", "XR SDKs", "Sketchfab", "Distributed Rendering", "UX Design"],
    githubUrl: "",
  },
  {
    id: "pillcare",
    slug: "pillcare",
    title: "PillCare",
    tagline: "Multi-modal ML system combining vision and OCR to identify pills under real-world ambiguity.",
    summary: "Deep learning system identifying medications from real-world images (vision + OCR imprints), achieving 84% accuracy via gated modality fusion.",
    metrics: [
      "Achieved 84% identification accuracy using gated modality fusion",
      "Outperformed vision-only baseline by +3.6% on extremely ambiguous visual features",
      "Expanded training dataset by 3x (707 images) utilizing targeted offline augmentation"
    ],
    contributions: [
      "Built multi-stage ML pipeline mapping preprocessing → OCR → fusion → inference utilizing MobileNetV2 and CRNN models.",
      "Designed gated fusion mechanism dynamically weighing visual vs. OCR inputs, dampening noisy text influence.",
      "Optimized cross-entropy loss across 16 imbalanced drug classes via targeted offline augmentation.",
      "Automated dataset expansion using openFDA APIs and deployed the full graph to edge devices via TFLite."
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
        content: "Most pill identification systems rely on either image classification or text lookup, which breaks down in real-world conditions (missing text, similar pills). Instead of treating vision and OCR equally, PillCare employs a confidence gate that decides when OCR should influence predictions. This allows the system to ignore OCR when no readable text exists and use it when visual ambiguity is high. This approach raised accuracy to 84% (+3.6% over vision-only)."
      },
      {
        title: "Data and Class Imbalance Challenges",
        content: "Addressing data quality provided greater returns than model complexity. A 3x offline augmentation gave the most significant improvement (+9%). Furthermore, a severe class imbalance caused the model to ignore minority classes (e.g., amoxicillin). Utilizing `compute_class_weight(\"balanced\")` combined with targeted augmentation successfully optimized cross-entropy loss across all 16 drug classes, guaranteeing non-zero recall for rare pills."
      }
    ],
    tech: ["TensorFlow", "Keras", "OpenCV", "MobileNetV2", "CRNN", "OpenFDA API"],
    githubUrl: "https://github.com/d2r3v/PillCare",
  },
  {
    id: "reflect-ai",
    slug: "reflect-ai",
    title: "Reflect AI — Memory-Aware Support Companion",
    tagline: "A full-stack AI system designed to maintain conversational memory, apply safety-aware response routing, and provide structured context persistence across sessions.",
    summary: "Reflect AI is a full-stack AI system designed to maintain conversational memory, apply safety-aware response routing, and provide structured context persistence across sessions.",
    overview: "Most AI chat systems treat conversations as stateless interactions. Reflect AI explores how persistent memory and structured execution pipelines can create more reliable and context-aware AI systems.",
    contributions: [
      "Designed a memory-aware conversation system with persistent context retrieval",
      "Built a modular backend architecture (FastAPI) supporting context, tools, and execution pipelines",
      "Implemented end-to-end authentication with secure token handling in a React Native (Expo) app",
      "Structured the system for future tool orchestration and multi-step reasoning",
      "Designed a safety-aware response pipeline (risk classification → mode selection → controlled response flow)"
    ],
    standoutSections: [
      {
        title: "System Design Highlights",
        content: "Separation of concerns between mobile client and backend services\nPlanned execution pipeline: context → tool selection → execution → response\nDeterministic handling of context updates to avoid race conditions in future parallel execution\nExtensible architecture for integrating LLM providers and external tools"
      },
      {
        title: "What I Learned",
        content: "Designing AI systems requires more than model calls — state, safety, and execution flow matter\nClean abstractions early (context, tools, orchestration) prevent major refactors later\nBuilding for extensibility is a balance between not overengineering and not boxing yourself in"
      }
    ],
    tech: ["AI Systems", "Full Stack", "System Design", "Mobile + Backend", "FastAPI", "Pydantic", "JWT Auth", "React Native (Expo)", "Context API", "PBKDF2 password hashing"],
    githubUrl: "https://github.com/d2r3v/reflect-ai",
  },
  {
    id: "burnout-detection",
    slug: "developer-burnout-detection",
    title: "Detecting Developer Burnout from GitHub Activity (Data + ML Pipeline)",
    tagline: "Unsupervised learning pipeline identifying engineering burnout entirely from behavioral telemetry",
    summary: "Data science pipeline analyzing temporal GitHub activity using Isolation Forests to detect early signals of developer burnout before critical turnover.",
    metrics: [
      "Ingested and evaluated thousands of commits from multiple open-source repositories",
      "Correlated 'Surge-and-Stop' patterns with periods of ≥2 weeks of developer inactivity",
      "Filtered noisy unstructured text and normalized asynchronous logic across global time zones"
    ],
    contributions: [
      "Built time-series data ingestion pipeline processing massive behavioral telemetry from open-source startups.",
      "Developed an extraction system mapping noisy behaviors (late-night work, intensity spikes) to structured indicators.",
      "Designed composite burnout risk scoring function using unsupervised anomaly detection mapping behaviors to inactivity."
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
        title: "Key Findings: The Surge-and-Stop Pattern",
        content: "By visualizing and mapping out activity data over long periods, we identified a distinct \"Surge-and-Stop\" pattern: intense bursts of work are reliably followed by 2 or more weeks of complete inactivity. Time-series analysis proved that work timing (such as late-night or weekend commits) and intensity were significantly stronger predictive signals of imminent burnout than the emotional tone embedded in those commits. We also found that developers in high-responsibility roles demonstrated a higher baseline risk."
      },
      {
        title: "Engineering Highlights in Unstructured Data",
        content: "A major engineering challenge was building a reliable composite scoring system despite the absolute lack of any manually labeled 'burnout' datasets. We handled noisy text data from thousands of commit messages, navigated complex time zone normalizations across highly distributed open-source teams, and filtered out low-signal contributors and bots. The pipeline successfully transforms vast amounts of asynchronous unstructured GitHub data into a clean, actionable time-series for detecting overwork patterns."
      }
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "GitHub API", "Isolation Forest"],
    githubUrl: "",
    reportUrl: "/Burnout_Detection.pdf"
  }
]
