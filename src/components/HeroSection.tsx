import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 grid-pattern">
      <div className="absolute inset-0 scanlines opacity-50" />
      
      <div className="container relative z-10 flex flex-col justify-center min-h-[calc(100vh-6rem)] py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Terminal prompt */}
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground mb-6">
            <span className="text-primary">~</span>
            <span>./portfolio</span>
            <span className="cursor-blink text-primary">_</span>
          </div>

          {/* Name display */}
          <h1 className="font-mono text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">ALEX</span>
            <span className="text-primary text-glow-primary"> CHEN</span>
          </h1>

          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <span className="status-online" />
            <h2 className="font-mono text-xl md:text-2xl text-muted-foreground">
              Full-Stack Developer
            </h2>
          </div>

          {/* Bio */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Building high-performance systems and elegant interfaces. 
            Specializing in real-time applications, distributed systems, 
            and turning complex problems into clean code.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <StatCard label="Years Active" value="8+" change="+12% YoY" />
            <StatCard label="Projects Shipped" value="50+" change="+23% QoQ" />
            <StatCard label="Lines of Code" value="2.4M" change="+847K YTD" />
            <StatCard label="Coffee/Day" value="∞" change="STABLE" warning />
          </div>

          {/* CTA Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 terminal-card px-6 py-3 font-mono text-sm hover:border-primary transition-colors"
            >
              <span className="text-primary">VIEW PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <div className="flex gap-2">
              <SocialLink href="https://github.com" icon={Github} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="mailto:alex@example.com" icon={Mail} label="Email" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ 
  label, 
  value, 
  change, 
  warning = false 
}: { 
  label: string; 
  value: string; 
  change: string;
  warning?: boolean;
}) {
  return (
    <div className="terminal-card p-4">
      <div className="metric-label">{label}</div>
      <div className={`metric-value ${warning ? 'text-warning' : ''}`}>{value}</div>
      <div className={`font-mono text-xs ${warning ? 'text-warning' : 'text-primary'}`}>
        {change}
      </div>
    </div>
  );
}

function SocialLink({ 
  href, 
  icon: Icon, 
  label 
}: { 
  href: string; 
  icon: React.ElementType; 
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="terminal-card p-3 hover:border-accent transition-colors group"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
    </a>
  );
}
