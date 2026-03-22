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
  contributions?: string[]
  diagram?: string
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
    summary: "A scalable full-stack distributed system built to manage high-stakes exam workflows for large university courses. It generates randomized exam variants, manages thousands of student OMR responses, and runs advanced analytical grading pipelines to detect anomalies.",
    contributions: [
      "Architected a type-safe microservice backend (Auth, Account, Exam Gen, Analytics) using tRPC and PostgreSQL.",
      "Built a robust data ingestion pipeline that parses, validates, and structurally maps messy CSV OMR responses to student records.",
      "Implemented a deterministic grading engine with partial credit and negative marking rules, creating snapshot-based models for reproducible grading.",
      "Engineered an advanced algorithmic Cheating Detection System that flags anomalous scores through cross-variant answer correlations."
    ],
    diagram: `Instructor → API Gateway → Microservices → PostgreSQL → Analytics Engine`,
    standoutSections: [
      {
        title: "Algorithmic Cheating Detection Engine",
        content: "A core capability of the system is applied statistical anomaly detection. Rather than relying on simple metadata, the pipeline conducts cross-variant answer comparisons. It actively regrades students against incorrectly shifted answer keys to track specific statistical similarities, utilizing risk scoring to surface potential academic misconduct purely from OMR data patterns."
      },
      {
        title: "System Scale & Engineering Depth",
        content: "The platform is built to handle heavy concurrent workflows for exams involving 1,000+ students. It relies on a strictly typed, full-stack architecture running Node.js and React. On the database layer, we enforce strict multi-tenant isolation using PostgreSQL Row-Level Security (RLS) and guarantee audit-safe historic integrity by maintaining immutable snapshots of exams mapped to specific student submissions."
      }
    ],
    tech: ["Node.js", "TypeScript", "tRPC", "PostgreSQL", "Prisma", "React", "Microservices"],
    githubUrl: "https://github.com/d2r3v",
    reportUrl: "/Exam_Gen_Project_Report.pdf"
  },
  {
    id: "xr-vertebrate",
    slug: "xr-vertebrate-visualization",
    title: "Interactive 3D Vertebrate Learning System (XR + Large-Scale Visualization)",
    summary: "An interactive 3D anatomy system built to address declining specimen availability in biology labs. It enables 100+ students to explore high-fidelity vertebrate models without physical dissection, supporting both large-scale video wall displays and remote learning workflows.",
    contributions: [
      "Dynamic Model Loading Pipeline: Built a folder-based workspace system enabling seamless runtime switching between datasets, removing the need for manual application restarts during lectures.",
      "Interaction & Navigation System: Designed intuitive controls prioritizing consistency and low cognitive load, allowing for smooth 3D rotation, pose switching, and controlled navigation.",
      "Usability-Driven UI Optimization: Conducted iterative testing to solve motion sickness by introducing a stable reference base, and improved visibility via high-contrast backgrounds and edge outlines.",
      "Large-Scale Display Adaptation: Optimized visual contrast, rendering parameters, and camera behavior specifically for a high-resolution video wall environment."
    ],
    diagram: `User Input → Interaction Layer → 3D Model Controller → Rendering (Video Wall / Local)
                                 ↓
                          Model Pipeline System`,
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
    githubUrl: "https://github.com/d2r3v",
  },
  {
    id: "pillcare",
    slug: "pillcare",
    title: "PillCare",
    summary: "PillCare is a deep learning system that identifies medications from real-world images using both visual features and text imprints. It uses a gated fusion architecture to dynamically weigh visual vs. OCR inputs, improving identification in high-risk scenarios.",
    contributions: [
      "Built a multi-stage ML pipeline (preprocessing → OCR → fusion → inference)",
      "Designed a gated fusion mechanism to reduce noisy feature influence",
      "Implemented class-weighted training to handle severe dataset imbalance",
      "Optimized models for edge deployment using TensorFlow Lite",
      "Automated dataset expansion using openFDA APIs and augmentation pipelines"
    ],
    diagram: `Image Input
↓
[Vision Model: MobileNetV2] → visual features
↓
[OCR Model: CRNN] → text features
↓
[Confidence Gate] → weighs OCR usefulness
↓
[Fusion Layer] → final classification`,
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
    id: "burnout-detection",
    slug: "developer-burnout-detection",
    title: "Detecting Developer Burnout from GitHub Activity (Data + ML Pipeline)",
    summary: "Built a system that detects early burnout signals from developer activity data by analyzing behavioral patterns like late-night work, inconsistent activity, and sudden drop-offs rather than relying on delayed self-reporting surveys.",
    contributions: [
      "Data Pipeline & Ingestion: Built a time-series data pipeline using the GitHub API to ingest commit data, filter bots, and normalize time zones from open-source startups.",
      "Feature Extraction System: Developed an extraction pipeline for key behavioral indicators including late-night work, weekend activity, commit spikes, and sentiment signals.",
      "Risk Scoring Function: Designed a composite burnout risk scoring system using time-series analysis without labeled data, correlating behaviors with future periods of inactivity."
    ],
    diagram: `GitHub API → Data Pipeline → Feature Engineering → Risk Scoring → Visualization`,
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
    githubUrl: "https://github.com/d2r3v",
    reportUrl: "/Burnout_Detection.pdf"
  }
]
