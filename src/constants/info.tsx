// top level rolling ticker items
export const TICKER_ITEMS = [
  { symbol: "REACT", value: "18.3.1", change: "+2.4%", positive: true },
  { symbol: "TS", value: "5.3.3", change: "+1.8%", positive: true },
  { symbol: "NODE", value: "20.11", change: "+0.5%", positive: true },
  { symbol: "PYTHON", value: "3.12", change: "+3.2%", positive: true },
  { symbol: "RUST", value: "1.75", change: "+4.1%", positive: true },
  { symbol: "GO", value: "1.22", change: "+1.2%", positive: true },
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
  { name: "TypeScript", level: 95, trend: "up", category: "Languages" },
  { name: "React", level: 92, trend: "up", category: "Frontend" },
  { name: "Node.js", level: 88, trend: "stable", category: "Backend" },
  { name: "Python", level: 85, trend: "up", category: "Languages" },
  { name: "PostgreSQL", level: 82, trend: "up", category: "Database" },
  { name: "AWS", level: 78, trend: "up", category: "Cloud" },
  { name: "Docker", level: 80, trend: "stable", category: "DevOps" },
  { name: "GraphQL", level: 75, trend: "up", category: "API" },
];

// job experience data for ExperienceSection
export const JOB_EXPERIENCE = [
  {
    id: "TXN-2023-001",
    company: "TechCorp Inc.",
    role: "Senior Full-Stack Developer",
    type: "LONG",
    status: "ACTIVE",
    entry: "2023-01",
    exit: "Present",
    duration: "2y+",
    performance: "+156%",
    description:
      "Leading development of microservices architecture and real-time data pipelines.",
    highlights: ["Team Lead", "System Design", "Mentorship"],
  },
  {
    id: "TXN-2021-002",
    company: "StartupX",
    role: "Full-Stack Developer",
    previousRole: "Junior Developer",
    type: "LONG",
    status: "CLOSED",
    entry: "2021-03",
    exit: "2022-12",
    duration: "1y 9m",
    performance: "+89%",
    description:
      "Built scalable e-commerce platform handling 100K+ daily transactions.",
    highlights: ["Promotion", "React", "Node.js"],
  },
  {
    id: "TXN-2019-003",
    company: "Agency Digital",
    role: "Frontend Developer",
    type: "LONG",
    status: "CLOSED",
    entry: "2019-06",
    exit: "2021-02",
    duration: "1y 8m",
    performance: "+67%",
    description:
      "Developed responsive web applications for Fortune 500 clients.",
    highlights: ["Client Work", "Vue.js", "Performance"],
  },
  {
    id: "TXN-2018-004",
    company: "CodeLab Academy",
    role: "Junior Developer",
    type: "LONG",
    status: "CLOSED",
    entry: "2018-01",
    exit: "2019-05",
    duration: "1y 4m",
    performance: "+45%",
    description:
      "Started career building internal tools and learning best practices.",
    highlights: ["First Role", "Python", "SQL"],
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
