import {
  siCplusplus,
  siCss,
  siDocker,
  siExpress,
  siGit,
  siHtml5,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

const icons: Record<string, SimpleIcon | readonly SimpleIcon[]> = {
  "Next.js": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  "HTML & CSS": [siHtml5, siCss],
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  "Express.js": siExpress,
  PostgreSQL: siPostgresql,
  "Prisma ORM": siPrisma,
  Java: siOpenjdk,
  "C++": siCplusplus,
  Python: siPython,
  Git: siGit,
  Docker: siDocker,
};

export function SkillIcon({ name }: { name: string }) {
  const brands = icons[name];
  const brandList = brands ? (Array.isArray(brands) ? brands : [brands]) : [];

  return (
    <span
      className="inline-flex shrink-0 items-center gap-0.5 text-muted"
      aria-hidden="true"
    >
      {brandList.map((brand) => (
        <svg
          key={brand.slug}
          viewBox="0 0 24 24"
          className="size-[18px] fill-current"
          focusable="false"
        >
          <path d={brand.path} />
        </svg>
      ))}
    </span>
  );
}
