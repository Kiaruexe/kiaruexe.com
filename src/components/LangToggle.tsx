import type { Locale } from "@/data/profile"
import { localePath } from "@/i18n"

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
    <a
      href={href}
      hrefLang={next}
      aria-label={`${currentLabel}: ${nextName}`}
      className="font-meta inline-flex h-8 items-center rounded-md px-2.5 text-xs text-muted-foreground hover:text-foreground"
    >
      {label}
    </a>
  )
}
