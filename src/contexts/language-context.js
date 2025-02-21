"use client"

import { createContext, useContext, useState } from "react"


const translations = {
  "trending.title": {
    en: "Trending Topics",
    bn: "ট্রেন্ডিং টপিকস",
  },
  "trending.subtitle": {
    en: "What people are talking about",
    bn: "মানুষ কি নিয়ে আলোচনা করছে",
  },
  "category.environment": {
    en: "Environment",
    bn: "পরিবেশ",
  },
  "category.technology": {
    en: "Technology",
    bn: "প্রযুক্তি",
  },
  "category.science": {
    en: "Science",
    bn: "বিজ্ঞান",
  },
  "category.finance": {
    en: "Finance",
    bn: "অর্থনীতি",
  },
  "category.health": {
    en: "Health",
    bn: "স্বাস্থ্য",
  },
  mentions: {
    en: "mentions",
    bn: "উল্লেখ",
  },
  readMore: {
    en: "Read More",
    bn: "আরো পড়ুন",
  },
}

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"))
  }

  const t = (key) => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

