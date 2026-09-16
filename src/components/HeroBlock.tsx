import { Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function HeroBlock({
  title,
  subtitle,
  contact,
  contactAria,
  availableLabel,
  available,
  email,
  photo,
  name,
  initials,
  linkedin,
  github,
}: {
  title: string
  subtitle: string
  contact: string
  contactAria: string
  availableLabel: string
  available: boolean
  email: string
  photo: string
  name: string
  initials: string
  linkedin: string
  github: string
}) {
  return (
    <section className="hero-in flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
      <Avatar className="size-36 shrink-0 sm:size-40">
        <AvatarImage src={photo} alt={name} width={160} height={160} className="object-top" />
        <AvatarFallback delayMs={500} className="font-display text-2xl text-foreground">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0">
        <h1 className="font-display text-3xl leading-[1.12] text-foreground sm:text-4xl">
          {title}
        </h1>

        {available ? (
          <p className="font-meta mt-3 inline-flex items-center gap-2 text-sm text-primary">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {availableLabel}
          </p>
        ) : null}

        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="size-9 rounded-md text-muted-foreground hover:border-foreground hover:text-foreground"
          >
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.25h4.56V24H.22zM8.34 8.25h4.37v2.14h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.99h-4.56v-7.97c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.06 2.07-3.06 4.21V24H8.34z" />
              </svg>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="size-9 rounded-md text-muted-foreground hover:border-foreground hover:text-foreground"
          >
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.79 8.21 10.37.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.91-.01 3.31 0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
          </Button>
          <Button asChild className="rounded-md px-4">
            <a href={`mailto:${email}`} aria-label={contactAria}>
              <Mail data-icon="inline-start" />
              {contact}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
