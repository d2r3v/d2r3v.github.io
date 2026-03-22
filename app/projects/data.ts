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
}

export const projectsData: Project[] = [
  {
    id: "exam-generation",
    slug: "exam-generation-analysis",
    title: "Exam Generation & Analysis System",
    description: "Production-grade system for generating exam variants and grading OMR responses. Built on Node.js microservices with tRPC and PostgreSQL.",
    overview: "A full-stack distributed system built to manage high-stakes exam workflows for large student cohorts. The system automates exam variant generation to mitigate cheating and features a snapshot-based grading engine. This ensures grading logic and historical student submissions remain perfectly consistent even if subsequent edits are made to the base exam. Additional pipelines perform cross-variant cheating detection by statistically analyzing student answer similarities and compute item discrimination indexes for instructors.",
    architecture: "- React frontend delivering the instructor analytics dashboard\n- Node.js backend configured as independent microservices\n- tRPC layer providing strict end-to-end type safety\n- PostgreSQL database leveraging Prisma ORM for schema management\n- Snapshot-based entities to immutably link submissions to specific exam variants",
    decisions: "- Decoupled the resource-heavy variant generation and grading pipelines into isolated microservices to support horizontal scaling during peak exam seasons.\n- Adopted tRPC to eliminate API boundary errors between the React client and Node backend.\n- Engineered snapshot-based data models in PostgreSQL to guarantee historical integrity of student submissions against mutating exam definitions.",
    impact: "Designed to handle real-world academic loads, drastically reducing manual grading hours and providing actionable statistical insights on exam fairness to instructors.",
    tech: ["Node.js", "TypeScript", "tRPC", "PostgreSQL", "Prisma", "React", "Microservices"],
    githubUrl: "https://github.com/d2r3v",
  },
  {
    id: "xr-vertebrate",
    slug: "xr-vertebrate-visualization",
    title: "XR Vertebrate Visualization",
    description: "An immersive Unity/C# spatial computing application deployed to 100+ students for interactive anatomy learning.",
    overview: "A spatial computing application engineered in Unity and C# to visualize complex vertebrate anatomy in an immersive classroom environment. Moving beyond simple 3D viewers, this project required optimizing dense anatomical models for mobile XR hardware while maintaining the strict frame-rate requirements necessary to prevent user motion sickness.",
    architecture: "- Unity and C# application compiled for standalone XR hardware (ARKit/ARCore)\n- Distributed rendering integration to offload high-polygon processing\n- Custom hardware input pipelines tailored for XR controllers and spatial navigation\n- Deployed in a live classroom research setting",
    decisions: "Implemented custom hardware input pipelines to ensure spatial interactions felt intuitive and precise when manipulating intricate 3D bone structures. Integrated a distributed rendering model to stream high-fidelity assets to mobile XR headsets, bypassing the compute limitations of the physical headsets and maintaining a steady 60+ FPS.",
    impact: "Successfully deployed and rigorously tested in a real-world classroom environment with over 100 students, validating the application's stability and its measurable improvement on spatial anatomical comprehension.",
    tech: ["Unity", "C#", "XR SDKs", "Distributed Rendering", "Blender"],
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
    title: "Developer Burnout Detection Research",
    description: "Data engineering pipeline analyzing GitHub activity logs using Isolation Forests to detect early signals of developer burnout.",
    overview: "A reproducible data science pipeline focused on analyzing developer well-being without intruding on privacy. The project ingests extensive behavioral telemetry to identify statistical anomalies that precede developer burnout, transforming raw logs into actionable predictive indicators.",
    architecture: "- Automated data ingestion pipelines interfacing with the GitHub API\n- NLP sentiment analysis running on commit messages and pull request discussions\n- Statistical anomaly detection powered by Isolation Forest algorithms\n- Structured data cleaning and feature engineering pipelines in Python",
    decisions: "Built robust data ingestion pipelines in Pandas to normalize asynchronous event logs from GitHub. Selected an Isolation Forest model for anomaly detection because it reliably highlights non-standard behavioral patterns (e.g., weekend commits, context switching) without the prohibitive requirement of a massive, manually labeled \"burnout\" dataset. Layered NLP sentiment analysis to correlate negative communication patterns with activity spikes.",
    impact: "Established a scalable, privacy-respecting research pipeline capable of predicting high-risk burnout patterns before they manifest as critical engineering turnover.",
    tech: ["Python", "Pandas", "Scikit-learn", "GitHub API", "Isolation Forest"],
    githubUrl: "https://github.com/d2r3v",
  }
]
