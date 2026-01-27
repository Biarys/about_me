import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Building2, Calendar } from "lucide-react";
import { JOB_EXPERIENCE } from "@/constants/info";

export function ExperienceSection() {
  return (
    <section className="py-24" id="experience">
      <div className="container">
        <div className="section-header">TRADE_HISTORY</div>

        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8">
          Career <span className="text-primary">Positions</span>
        </h2>

        {/* Table Header */}
        <div className="terminal-card mb-2">
          <div className="grid grid-cols-12 gap-4 p-4 font-mono text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
            <div className="col-span-2">TXN ID</div>
            <div className="col-span-3">Position</div>
            <div className="col-span-2">Entry</div>
            <div className="col-span-2">Exit</div>
            <div className="col-span-1">Duration</div>
            <div className="col-span-1">P/L</div>
            <div className="col-span-1">Status</div>
          </div>
        </div>

        {/* Trade Rows */}
        <div className="space-y-2">
          {JOB_EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="terminal-card overflow-hidden group"
            >
              {/* Main Row */}
              <div className="grid grid-cols-12 gap-4 p-4 items-center data-row cursor-pointer">
                <div className="col-span-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.id}
                  </span>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-accent" />
                    <div>
                      <div className="font-mono text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {exp.role}
                        {exp.previousRole && (
                          <span className="text-primary ml-1">
                            ↑ {exp.previousRole}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-1 font-mono text-sm text-primary">
                    <TrendingUp className="w-3 h-3" />
                    {exp.entry}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-1 font-mono text-sm text-muted-foreground">
                    {exp.status === "ACTIVE" ? (
                      <span className="text-primary">{exp.exit}</span>
                    ) : (
                      <>
                        <TrendingDown className="w-3 h-3" />
                        {exp.exit}
                      </>
                    )}
                  </div>
                </div>
                <div className="col-span-1">
                  <span className="font-mono text-sm text-muted-foreground">
                    {exp.duration}
                  </span>
                </div>
                <div className="col-span-1">
                  <span className="font-mono text-sm text-primary font-medium">
                    {exp.performance}
                  </span>
                </div>
                <div className="col-span-1">
                  <span
                    className={`font-mono text-xs px-2 py-1 rounded ${
                      exp.status === "ACTIVE"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* Expanded Details */}
              <div className="px-4 pb-4 border-t border-border/50">
                <div className="pt-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 items-start justify-end">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="font-mono text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="terminal-card mt-6 p-4"
        >
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div>
                <div className="metric-label">Total Positions</div>
                <div className="font-mono text-xl font-bold text-foreground">
                  {JOB_EXPERIENCE.length}
                </div>
              </div>
              <div>
                <div className="metric-label">Career Duration</div>
                <div className="font-mono text-xl font-bold text-foreground">
                  8+ Years
                </div>
              </div>
              <div>
                <div className="metric-label">Avg. Performance</div>
                <div className="font-mono text-xl font-bold text-primary">
                  +89%
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="font-mono text-xs">Last updated: 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
