import { PERSONAL_INFO } from "@/constants/info";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-primary">©</span>
            <span>
              {currentYear} {PERSONAL_INFO.firstName.toUpperCase()}.
              {PERSONAL_INFO.lastName.toUpperCase()}
            </span>
            <span className="text-muted-foreground/30">|</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              PRIVACY
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              TERMS
            </a>
            <span className="text-muted-foreground/30">|</span>
            <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
              <span>BUILD</span>
              <span className="text-primary">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
