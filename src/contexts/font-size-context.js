"use client"

import { createContext, useContext, useState } from "react"



const FontSizeContext = createContext(undefined)

export function FontSizeProvider({ children }) {
  const [fontSize, setFontSize] = useState(16)

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 1, 24))
  }

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 1, 12))
  }

  const resetFontSize = () => {
    setFontSize(16)
  }

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize, resetFontSize }}>
      <div style={{ fontSize: `${fontSize}px` }}>{children}</div>
    </FontSizeContext.Provider>
  )
}

export function useFontSize() {
  const context = useContext(FontSizeContext)
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider")
  }
  return context
}

