import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-wrap flex flex-col gap-4 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Made with <Heart size={13} className="inline text-accent" /> in Injibara.</p>
        <Link href="#hero" className="focus-ring inline-flex items-center gap-2 self-start rounded-sm transition hover:text-accent sm:self-auto">
          Back to top <ArrowUp size={15} />
        </Link>
      </div>
    </footer>
  );
}
