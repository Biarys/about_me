// top level rolling ticker items
export const TICKER_ITEMS = [
  { symbol: "REACT", value: "18.3.1", change: "+2.4%", positive: true },
  { symbol: "TS", value: "5.3.3", change: "+1.8%", positive: true },
  { symbol: "SPARK", value: "4.1", change: "+0.5%", positive: true },
  { symbol: "DJANGO", value: "6.0", change: "+1.15%", positive: true },
  { symbol: "PYTHON", value: "3.12", change: "+3.2%", positive: true },
  { symbol: "TERRAFORM", value: "1.14", change: "-4.1%", positive: false },
  { symbol: "GO", value: "1.25", change: "+3.27%", positive: true },
  { symbol: "BIGQUERY", value: "2.58", change: "+5.9%", positive: true },
  { symbol: "FIREBASE", value: "7.1", change: "+4.04%", positive: true },
  { symbol: "DOCKER", value: "4.58", change: "-1.2%", positive: false },
];

// personal info for HeroSection and ContactSection
export const PERSONAL_INFO = {
  firstName: "Biarys",
  lastName: "Saktaganov",
  title: "Data Engineer",
  bio: "Building scalable, reliable data infrastructures and analytics pipelines. Specializing in real-time and batch processing, distributed systems, and turning complex problems into clean code.",
  location: "Toronto, Canada (Remote OK)",
  github: "https://github.com/Biarys",
  linkedin: "https://linkedin.com/in/biarys",
  email: "sbiarys@gmail.com",
  years_of_experience: 5,
  projects_completed: 20,
};

// skills data for SkillsSection
export const SKILL_METRICS = [
  { name: "Python", level: 95, trend: "up", category: "Languages" },
  { name: "TypeScript", level: 85, trend: "up", category: "Languages" },
  { name: "Spark", level: 92, trend: "stable", category: "Backend" },
  { name: "React", level: 92, trend: "up", category: "Frontend" },
  { name: "Django", level: 88, trend: "up", category: "Backend" },
  { name: "PostgreSQL", level: 82, trend: "stable", category: "Database" },
  { name: "AWS", level: 78, trend: "up", category: "Cloud" },
  { name: "GCP", level: 78, trend: "up", category: "Cloud" },
  { name: "Docker", level: 80, trend: "down", category: "DevOps" },
  { name: "Terraform", level: 75, trend: "down", category: "DevOps" },
];

// job experience data for ExperienceSection
export const JOB_EXPERIENCE = [
  {
    id: "TSX-2021-003",
    company: "StartupX",
    role: "Full-Stack Developer",
    // previousRole: "Junior Developer", // uncomment to show promotion badge
    status: "CLOSED",
    entry: "2021-08",
    exit: "2024-09",
    duration: "3y 1m",
    performance: "+89%",
    description:
      "Developed and maintained ETL pipelines and API connectors for data ingestion.",
    highlights: ["Python", "AWS", "GCP", "Spark"],
  },
  {
    id: "TSX-2018-002",
    company: "CIBC",
    role: "Production Application Support Analyst",
    status: "CLOSED",
    entry: "2018-08",
    exit: "2020-10",
    duration: "2y 2m",
    performance: "+67%",
    description:
      "Created ETL pipeline for tesing incoming changes and troubleshooted data issues.",
    highlights: ["Python", "SQL", "AWS Chef"],
  },
  {
    id: "TSX-2018-001",
    company: "Columbia International College",
    role: "PHP Developer",
    status: "CLOSED",
    entry: "2018-04",
    exit: "2018-12",
    duration: "9m",
    performance: "+45%",
    description:
      "Developed internal web applications using provided UX templates.",
    highlights: ["PHP", "SQL", "jQuery"],
  },
];

// projects data for ProjectsSection
export const PROJECTS = [
  {
    id: "PROJ-001",
    name: "Trading Bot Framework",
    description:
      "High-frequency trading bot with ML-powered predictions and real-time market analysis.",
    tech: ["Python", "TensorFlow", "Redis", "WebSocket"],
    stars: 1243,
    forks: 234,
    status: "ACTIVE",
    change: "+156%",
    link: "https://github.com",
  },
  {
    id: "PROJ-002",
    name: "Real-time Analytics Dashboard",
    description:
      "Live metrics visualization platform processing 10M+ events per day.",
    tech: ["React", "D3.js", "ClickHouse", "Kafka"],
    stars: 892,
    forks: 167,
    status: "ACTIVE",
    change: "+89%",
    link: "https://github.com",
  },
  {
    id: "PROJ-003",
    name: "Distributed Task Queue",
    description:
      "Fault-tolerant job processing system with automatic scaling and retry logic.",
    tech: ["Go", "PostgreSQL", "gRPC", "Docker"],
    stars: 567,
    forks: 89,
    status: "MAINTAINED",
    change: "+45%",
    link: "https://github.com",
  },
  {
    id: "PROJ-004",
    name: "API Gateway Service",
    description:
      "Rate-limited, authenticated gateway handling 50K+ requests per second.",
    tech: ["Rust", "Redis", "OpenAPI", "K8s"],
    stars: 423,
    forks: 56,
    status: "ACTIVE",
    change: "+112%",
    link: "https://github.com",
  },
];
