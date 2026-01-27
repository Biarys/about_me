import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

const projects = [
  {
    id: 'PROJ-001',
    name: 'Trading Bot Framework',
    description: 'High-frequency trading bot with ML-powered predictions and real-time market analysis.',
    tech: ['Python', 'TensorFlow', 'Redis', 'WebSocket'],
    stars: 1243,
    forks: 234,
    status: 'ACTIVE',
    change: '+156%',
    link: 'https://github.com',
  },
  {
    id: 'PROJ-002',
    name: 'Real-time Analytics Dashboard',
    description: 'Live metrics visualization platform processing 10M+ events per day.',
    tech: ['React', 'D3.js', 'ClickHouse', 'Kafka'],
    stars: 892,
    forks: 167,
    status: 'ACTIVE',
    change: '+89%',
    link: 'https://github.com',
  },
  {
    id: 'PROJ-003',
    name: 'Distributed Task Queue',
    description: 'Fault-tolerant job processing system with automatic scaling and retry logic.',
    tech: ['Go', 'PostgreSQL', 'gRPC', 'Docker'],
    stars: 567,
    forks: 89,
    status: 'MAINTAINED',
    change: '+45%',
    link: 'https://github.com',
  },
  {
    id: 'PROJ-004',
    name: 'API Gateway Service',
    description: 'Rate-limited, authenticated gateway handling 50K+ requests per second.',
    tech: ['Rust', 'Redis', 'OpenAPI', 'K8s'],
    stars: 423,
    forks: 56,
    status: 'ACTIVE',
    change: '+112%',
    link: 'https://github.com',
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24" id="projects">
      <div className="container">
        <div className="section-header">PORTFOLIO_HOLDINGS</div>
        
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="terminal-card p-6 hover:border-primary/50 transition-colors group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-mono text-xs text-muted-foreground">{project.id}</span>
                  <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs px-2 py-1 rounded ${
                    project.status === 'ACTIVE' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-4 h-4" />
                    <span className="font-mono text-sm">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <GitFork className="w-4 h-4" />
                    <span className="font-mono text-sm">{project.forks}</span>
                  </div>
                  <span className="font-mono text-sm text-primary">{project.change}</span>
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
