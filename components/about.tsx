import { ArrowUpRight, GraduationCap, Lightbulb, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

const values = [
  { icon: GraduationCap, title: "Learning by building", text: "Fourth-year Software Engineering student at Injibara University, growing my craft through study and hands-on projects." },
  { icon: Lightbulb, title: "Locally minded", text: "I care about technology that reflects real needs and opens up opportunities in the communities around me." },
  { icon: MapPin, title: "Rooted in Injibara", text: "Building from Injibara, Ethiopia, with a belief that ambitious digital products can start anywhere." },
];

export function About() {
  return (
    <section id="about" className="border-y border-border/70 bg-surface/50 py-24 sm:py-28">
      <div className="section-wrap grid gap-12 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
        <div>
          <p className="eyebrow mb-4">A little about me</p>
          <h2 className="section-title max-w-sm">Technology with a local point of view.</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-muted">
            I&apos;m Chalachew, a software engineering student and full-stack developer who enjoys taking an idea from a rough sketch to a working product. My studies at {profile.university} give me a strong foundation; building for real users teaches me what matters most.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            As the founder of <span className="font-semibold text-foreground">ሁለገብ ገበያ (Hulegeb Gebeya)</span>, I&apos;m exploring how digital marketplaces and service brokerage can make everyday opportunities easier to find in Injibara. I&apos;m motivated by useful software, thoughtful engineering, and the people on the other side of the screen.
          </p>
          <a href="#projects" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-accent hover:gap-3">
            Explore what I&apos;m building <ArrowUpRight size={16} />
          </a>
          <div className="mt-10 grid gap-6 border-t border-border pt-7 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={18} className="mb-3 text-accent" />
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
