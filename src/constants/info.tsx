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
    name: "bt_plat",
    description:
      "A comprehensive platform that includes backtesting, real time trading, and IB integration.",
    tech: ["Python", "Pandas", "Spark", "IB API"],
    stars: 4,
    forks: 1,
    status: "PAUSED",
    // change: "+156%",
    link: "https://github.com/Biarys/bt_plat",
  },
  {
    id: "PROJ-002",
    name: "Data Analytics",
    description:
      "This repository contains stock market related research I have done including algo strategies, visualization, etc...",
    tech: ["Python", "Pandas", "Seaborn", "AFL"],
    stars: 1,
    forks: 3,
    status: "STATIC",
    // change: "+89%",
    link: "https://github.com/Biarys/Data-Analytics",
  },
  {
    id: "PROJ-003",
    name: "OptionGator (Private)",
    description:
      "Trading journal application for tracking and analyzing options trades.",
    tech: ["React", "Django", "Postgres", "Docker"],
    // stars: 567,
    // forks: 89,
    status: "IN DEVELOPMENT",
    // change: "+45%",
    link: "https://github.com/Biarys/optiongator",
  },
  {
    id: "PROJ-004",
    name: "Pandamation (Private)",
    description:
      "Video editing application that allows users to create whiteboard animations with the help of AI.",
    tech: ["React", "Django", "Firebase", "OpenCV"],
    // stars: 423,
    // forks: 56,
    status: "IN DEVELOPMENT",
    // change: "+112%",
    link: "https://github.com/Biarys/Pandamation",
  },
];
