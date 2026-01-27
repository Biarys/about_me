import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { PROJECTS } from "@/constants/info";

export function ProjectsSection() {
  return (
    <section className="py-24" id="projects">
      <div className="container">
        <div className="section-header">PORTFOLIO_HOLDINGS</div>

        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
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
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.id}
                  </span>
                  <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-xs px-2 py-1 rounded ${
                      project.status === "ACTIVE"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
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
                  <span className="font-mono text-sm text-primary">
                    {project.change}
                  </span>
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
