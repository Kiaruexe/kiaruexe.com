export const profile = {
  name: "Isabel Espejo",
  fullName: "Isabel María Espejo Delgado",
  email: "isa@kiaruexe.com",
  linkedin: "https://linkedin.com/in/isabel-espejo-delgado",
  github: "https://github.com/Kiaruexe",
  photo: "/isabel.jpg",
  available: true,
  projects: [
    {
      id: "videogames",
      repo: "https://github.com/Kiaruexe/videogames",
      demo: "https://videogame-gamma.vercel.app/",
      image: "/projects/videogames.png" as string | undefined,
      stack: ["JavaScript", "HTML", "CSV"],
    },
    {
      id: "hogar",
      repo: "https://github.com/Kiaruexe/hogar-felino",
      demo: undefined as string | undefined,
      image: undefined as string | undefined,
      stack: ["Laravel", "PHP", "Blade"],
    },
    {
      id: "incidencias",
      repo: "https://github.com/Kiaruexe/Proyecto_Incidencias",
      demo: undefined as string | undefined,
      image: undefined as string | undefined,
      stack: ["PHP", "HTML", "CSS"],
    },
  ],
  jobs: [
    {
      id: "aubay",
      start: "03/2026",
      end: "05/2026",
      href: "https://www.aubay.es/",
      stack: ["Python", "SQL", "Excel"],
    },
    {
      id: "asesclick",
      start: "03/2025",
      end: "06/2025",
      href: undefined as string | undefined,
      stack: ["Vue 3", "Laravel", "SQL"],
    },
    {
      id: "osuna",
      start: "03/2021",
      end: "06/2021",
      href: undefined as string | undefined,
      stack: [] as string[],
    },
  ],
  education: [
    {
      id: "iabd",
      start: "10/2025",
      end: "05/2026",
    },
    {
      id: "daw",
      start: "2023",
      end: "06/2025",
    },
  ],
  skills: {
    data: ["Python", "SQL", "Excel", "Pandas", "Power BI"],
    backend: ["PHP", "Laravel", "Node.js", "MySQL"],
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue 3", "React"],
    tools: ["Git", "GitHub", "Linux", "Docker", "Vercel"],
  },
} as const

export type Locale = "es" | "en"
export type ProjectId = (typeof profile.projects)[number]["id"]
export type JobId = (typeof profile.jobs)[number]["id"]
export type EducationId = (typeof profile.education)[number]["id"]
export type SkillGroup = keyof typeof profile.skills
