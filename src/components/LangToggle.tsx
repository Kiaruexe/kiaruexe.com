import type { Locale } from "@/data/profile"
import { localePath } from "@/i18n"
import { Button } from "@/components/ui/button"

export function LangToggle({
  locale,
  currentLabel,
  esLabel,
  enLabel,
}: {
  locale: Locale
  currentLabel: string
  esLabel: string
  enLabel: string
}) {
  const next: Locale = locale === "es" ? "en" : "es"
  const href = localePath[next]
  const label = next === "en" ? "EN" : "ES"
  const nextName = next === "en" ? enLabel : esLabel

  return (
    <Button
      asChild
      variant="ghost"
      className="font-meta h-8 rounded-md px-2.5 text-xs text-muted-foreground hover:text-foreground"
    >
      <a href={href} hrefLang={next} aria-label={`${currentLabel}: ${nextName}`}>
        {label}
      </a>
    </Button>
  )
}
