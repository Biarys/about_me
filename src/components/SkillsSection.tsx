import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { SKILL_METRICS } from "@/constants/info";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function SkillsSection() {
  return (
    <section className="py-24 bg-card/50" id="skills">
      <div className="container">
        <div className="section-header">SKILL_METRICS</div>

        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8">
          Technical <span className="text-primary">Proficiency</span>
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="terminal-card overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-border bg-secondary/30 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <div className="col-span-4">Technology</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-4">Proficiency</div>
            <div className="col-span-2 text-right">Trend</div>
          </div>

          {/* Table rows */}
          {SKILL_METRICS.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-border/50 data-row items-center"
            >
              <div className="col-span-4 font-mono font-medium">
                {skill.name}
              </div>
              <div className="col-span-2 font-mono text-xs text-muted-foreground">
                {skill.category}
              </div>
              <div className="col-span-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="font-mono text-sm text-primary w-12">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="col-span-2 flex justify-end">
                <TrendIndicator trend={skill.trend} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrendIndicator({ trend }: { trend: string }) {
  if (trend === "up") {
    return (
      <div className="flex items-center gap-1 text-primary">
        <TrendingUp className="w-4 h-4" />
        <span className="font-mono text-xs">BULLISH</span>
      </div>
    );
  }
  if (trend === "down") {
    return (
      <div className="flex items-center gap-1 text-destructive">
        <TrendingDown className="w-4 h-4" />
        <span className="font-mono text-xs">BEARISH</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 text-muted-foreground">
      <Minus className="w-4 h-4" />
      <span className="font-mono text-xs">STABLE</span>
    </div>
  );
}
