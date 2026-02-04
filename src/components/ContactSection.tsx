import { motion } from "framer-motion";
import { Send, Terminal, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { PERSONAL_INFO } from "@/constants/info";
import emailjs from "@emailjs/browser";

emailjs.init({ publicKey: "GHazbMEjy5OwBgt4d" });

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      emailjs.send("service_x0bcrw4", "template_hfctupt", {
        title: "Contact from Biarys.io by " + formData.name,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-24 bg-card/50" id="contact">
      <div className="container">
        <div className="section-header">INITIATE_CONTACT</div>

        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8">
          Execute <span className="text-primary">Trade</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal-card p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">
                  STATUS
                </span>
              </div>
              <p className="text-lg mb-2">
                Currently{" "}
                <span className="text-primary font-mono">AVAILABLE</span> for
                new opportunities
              </p>
              <p className="text-muted-foreground">
                Open to full-time positions, contract work, and interesting side
                projects.
              </p>
            </div>

            <div className="grid gap-4">
              <InfoCard icon={Clock} label="Response Time" value="< 24 hours" />
              <InfoCard
                icon={MapPin}
                label="Location"
                value={PERSONAL_INFO.location}
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="terminal-card p-6">
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Sender ID
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-secondary border border-border rounded px-4 py-3 font-mono text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Return Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-secondary border border-border rounded px-4 py-3 font-mono text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Message Payload
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 font-mono text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Let's build something great..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-mono font-medium py-3 rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {status === "idle" && (
                    <>
                      <Send className="w-4 h-4" />
                      TRANSMIT MESSAGE
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      PROCESSING...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <span className="text-primary-foreground">✓</span>
                      MESSAGE SENT
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="terminal-card p-4 flex items-center gap-4">
      <Icon className="w-5 h-5 text-accent" />
      <div>
        <div className="font-mono text-xs text-muted-foreground uppercase">
          {label}
        </div>
        <div className="font-mono text-foreground">{value}</div>
      </div>
    </div>
  );
}
