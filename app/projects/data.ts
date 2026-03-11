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
    description: "A full-stack system for generating multiple exam variants, grading OMR responses, and detecting potential cheating patterns. Built with microservices, tRPC, and PostgreSQL.",
    overview: "A comprehensive full-stack system built to manage real exam workflows for large student cohorts. It features automated exam variant generation to prevent copying, and a sophisticated snapshot-based grading system to ensure grading consistency even if base exams change later. The system also includes cross-variant cheating detection by statistically comparing student answer similarities, alongside deep instructor analytics on question difficulty and discrimination.",
    architecture: "- React frontend\n- Node.js backend microservices\n- tRPC for end-to-end type-safe API communication\n- PostgreSQL database with Prisma ORM\n- Snapshot-based grading system\n- Advanced analytics and cheating detection engine",
    decisions: "- Employed a microservices architecture to independently scale the resource-heavy variant generation and grading pipelines.\n- Utilized tRPC to guarantee strict end-to-end type safety between the React frontend and Node.js backend.\n- Adopted PostgreSQL via Prisma ORM for relational data integrity, implementing snapshot-based entities to immutably link student submissions to specific exam variants.",
    impact: "Built as a production-grade system designed to support real, high-stakes exam workflows and large student cohorts, drastically reducing manual grading and generation time.",
    tech: ["Node.js", "TypeScript", "tRPC", "PostgreSQL", "Prisma", "React", "Microservices"],
    githubUrl: "https://github.com/d2r3v",
  },
  {
    id: "xr-vertebrate",
    slug: "xr-vertebrate-visualization",
    title: "XR Vertebrate Visualization",
    description: "An immersive Unity-based XR application deployed in real classrooms for exploring vertebrate anatomy.",
    overview: "A specialized spatial computing application built in Unity and C# for exploring complex vertebrate anatomy in an immersive environment. Designed specifically for classroom research deployment, it brings traditional textbook learning into the physical space, enabling deep interactive anatomy learning.",
    architecture: "- Unity and C# application running on XR hardware\n- Integration with distributed rendering systems to maintain visual fidelity\n- Custom device input pipeline for VR/AR controllers and navigation\n- Real classroom deployment architecture",
    decisions: "Prioritized custom hardware input pipelines to ensure intuitive and precise interactions for students handling intricate 3D anatomical structures. Integrated distributed rendering systems to deliver high-polygon assets without compromising the strict frame-rate requirements necessary to prevent motion sickness in XR environments.",
    impact: "Successfully deployed and tested with over 100 students in real classroom environments, demonstrating tangible improvements in spatial understanding of anatomy.",
    tech: ["Unity", "C#", "XR SDKs", "Distributed Rendering", "Blender"],
    githubUrl: "https://github.com/d2r3v",
  },
  {
    id: "pillcare",
    slug: "pillcare",
    title: "PillCare",
    description: "An assistive mobile system utilizing CNNs and CRNN OCR pipelines to help users identify medications.",
    overview: "An applied machine learning system designed to solve a critical accessibility issue: helping visually impaired and elderly users accurately identify medications using a smartphone camera. Moving beyond a standard AI demo, it leverages complex multi-modal pipelines drawing on live open datasets.",
    architecture: "- CNN image classifier for pill shape and color recognition\n- CRNN-based OCR pipeline for reading pill imprint text\n- OpenFDA API integration to retrieve live drug metadata and warnings\n- Mobile-friendly interface optimized for accessibility and real-time identification",
    decisions: "Implemented a robust dual-model approach: a Convolutional Neural Network (CNN) for extracting visual shape/color features, and a Convolutional Recurrent Neural Network (CRNN) to read often-faint text imprints. Integrated directly with the OpenFDA API to pull authoritative, real-time medical data, ensuring users receive accurate and up-to-date medication context.",
    impact: "Demonstrated strong assistive technology capabilities, providing a necessary, life-improving tool for visually impaired and elderly demographics who manage complex prescriptions.",
    tech: ["TensorFlow", "PyTorch", "OpenCV", "CRNN OCR", "Python", "OpenFDA API"],
    githubUrl: "https://github.com/d2r3v",
  },
  {
    id: "burnout-detection",
    slug: "developer-burnout-detection",
    title: "Developer Burnout Detection Research",
    description: "A data-driven research project analyzing developer activity patterns to detect early signals of burnout via behavioral anomalies.",
    overview: "A reproducible research workflow focused on analyzing developer well-being and productivity. The project ingests vast amounts of behavioral data to detect early signals of developer burnout, turning metadata into actionable insights without intruding on privacy.",
    architecture: "- Automated GitHub API data ingestion and parsing\n- Natural Language Processing (NLP) for sentiment analysis on commit messages and PR discussions\n- Anomaly detection pipeline utilizing Isolation Forest algorithms\n- Highly structured data analysis pipelines built in Python",
    decisions: "Constructed detailed data pipelines using Pandas to ingest GitHub API logs efficiently. Applied Isolation Forest for anomaly detection to spotlight non-standard behavioral patterns without the need for extensive manually labeled burnout datasets. Integrated sentiment analysis on text communications to correlate mood with activity spikes.",
    impact: "Established a reproducible, scalable research pipeline for analyzing developer well-being, capable of predicting high-risk burnout patterns before they manifest as critical turnover.",
    tech: ["Python", "Pandas", "Scikit-learn", "GitHub API", "Isolation Forest"],
    githubUrl: "https://github.com/d2r3v",
  }
]
