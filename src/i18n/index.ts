import type { Locale } from "@/data/profile"
import { en } from "./en"
import { es } from "./es"
import type { Dictionary } from "./types"

export const dictionaries: Record<Locale, Dictionary> = { es, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export const localePath: Record<Locale, string> = {
  es: "/",
  en: "/en",
}
