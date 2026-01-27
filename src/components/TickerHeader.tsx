import { useEffect, useState } from "react";
import { TICKER_ITEMS } from "@/constants/info";

export function TickerHeader() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="status-online" />
          <span className="font-mono text-xs text-muted-foreground">
            SYSTEM ONLINE
          </span>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          {time.toLocaleTimeString("en-US", { hour12: false })} UTC
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-border bg-card py-1">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-6 px-6">
              <span className="font-mono text-xs font-medium text-foreground">
                {item.symbol}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {item.value}
              </span>
              <span
                className={`font-mono text-xs ${item.positive ? "text-primary" : "text-destructive"}`}
              >
                {item.change}
              </span>
              <span className="text-muted-foreground/30">|</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
