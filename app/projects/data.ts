export type Project = {
  id: string
  slug: string
  title: string
  description: string
  overview: string
  architecture: string
  decisions: string
  impact: string
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
    description: "Applied ML pipeline utilizing CNNs and CRNN OCR to identify medications via smartphone cameras, integrated with OpenFDA.",
    overview: "An applied machine learning system tackling a critical accessibility challenge: accurately identifying medications for visually impaired and elderly users. This is not a standard toy dataset project; it relies on complex multi-modal ML pipelines to fuse visual shape features with OCR text extraction, validated against real-time medical datasets.",
    architecture: "- PyTorch/TensorFlow CNN for visual pill classification (shape, color, scoring)\n- CRNN-based OCR pipeline dedicated to reading faint or curved pill imprints\n- Live integration with the OpenFDA API for authoritative drug metadata\n- Optimized mobile interface for real-time edge or hybrid inference",
    decisions: "Chose a dual-model architecture. A standalone CNN extracts pure visual features, while a specialized CRNN handles the difficult OCR task of reading curved, low-contrast pill imprints. Fusing these outputs significantly improved confidence scores. Bound the inference engine directly to the OpenFDA API to guarantee users receive live, federally verified medication warnings rather than static, outdated payloads.",
    impact: "Engineered a robust assistive technology pipeline capable of handling poor lighting and varied camera angles, addressing a tangible safety need for demographics managing complex prescriptions.",
    tech: ["TensorFlow", "PyTorch", "OpenCV", "CRNN OCR", "Python", "OpenFDA API"],
    githubUrl: "https://github.com/d2r3v",
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
