export const profile = {
  name: "Chalachew Yesuneh",
  role: "Full-Stack Software Engineer & Founder",
  university: "Injibara University",
  location: "Injibara, Ethiopia",
  email: "",
  photo: "/images/profile.jpg",
  cv: "/chalachew-yesuneh-cv.txt",
  links: {
    github: "",
    linkedin: "",
    telegram: "",
  },
};

export const projects = [
  {
    name: "ሁለገብ ገበያ",
    englishName: "Hulegeb Gebeya",
    category: "Startup · Marketplace",
    featured: true,
    description:
      "A local digital marketplace and service-brokerage platform connecting Injibara communities with the products and services they need.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "Telegram API"],
    github: "https://github.com/search?q=Hulegeb+Gebeya&type=repositories",
    demo: "",
    number: "01",
  },
  {
    name: "Hotel Reservation Platform",
    englishName: "",
    category: "Web application · Prototype",
    featured: false,
    description:
      "A MERN-stack reservation-system prototype designed to make it easier for a local hospitality business to manage online bookings.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/search?q=hotel+reservation+MERN&type=repositories",
    demo: "",
    number: "02",
  },
  {
    name: "Employee Management System",
    englishName: "",
    category: "Enterprise · Software architecture",
    featured: false,
    description:
      "An enterprise software requirements and architecture project exploring the design of a structured employee-management solution.",
    technologies: ["Requirements engineering", "System design", "UML"],
    github: "https://github.com/search?q=employee+management+system&type=repositories",
    demo: "",
    number: "03",
  },
  {
    name: "Digital B2B Airtime Distribution",
    englishName: "",
    category: "Telecom · Architecture research",
    featured: false,
    description:
      "Microservice architecture research for streamlining digital airtime distribution between telecom wholesalers and business customers.",
    technologies: ["Microservices", "System architecture", "Telecom"],
    github: "https://github.com/search?q=B2B+airtime+distribution&type=repositories",
    demo: "",
    number: "04",
  },
];

export const skills = [
  {
    title: "Frontend",
    description: "Interfaces built for clarity and speed.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend & data",
    description: "Reliable services and data foundations.",
    items: ["NestJS", "Express.js", "Node.js", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "Languages & tools",
    description: "Practical tools for the whole build cycle.",
    items: ["Java", "C++", "Python", "Docker", "Git", "GitHub Desktop", "PowerShell"],
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Telegram", href: profile.links.telegram },
];
