import type { EducationId, JobId, ProjectId, SkillGroup } from "@/data/profile"

export type Dictionary = {
  htmlLang: string
  metaTitle: string
  metaDescription: string
  brand: string
  contactAria: string
  lang: {
    current: string
    es: string
    en: string
  }
  theme: {
    light: string
    dark: string
  }
  nav: {
    projects: string
    experience: string
    education: string
    skills: string
    about: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    contact: string
    available: string
  }
  sections: {
    projects: string
    experience: string
    education: string
    skills: string
    about: string
    contact: string
  }
  skillGroups: Record<SkillGroup, string>
  about: {
    p1: string
    p2: string
  }
  contact: {
    lead: string
    button: string
  }
  repo: string
  demo: string
  footer: string
  projects: Record<ProjectId, { title: string; blurb: string }>
  jobs: Record<JobId, { role: string; company: string; mode: string; body: string }>
  education: Record<EducationId, { title: string; school: string }>
}
