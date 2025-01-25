"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { hexToHSL } from '@/lib/color-utils'



const ThemeContext = createContext(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#FF69B4') // Hot Pink
  const [secondaryColor, setSecondaryColor] = useState('#FFFFFF') // White
  const [accentColor, setAccentColor] = useState('#FFB6C1') // Light Pink
  const [backgroundColor, setBackgroundColor] = useState('#FFF0F5') // Lavender blush
  const [textColor, setTextColor] = useState('#333333') // Dark gray
  const [theme, setTheme] = useState('light')

  const toggleTheme = (t) => {
    setTheme(t)
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', hexToHSL(primaryColor))
    document.documentElement.style.setProperty('--secondary', hexToHSL(secondaryColor))
    document.documentElement.style.setProperty('--accent', hexToHSL(accentColor))
    document.documentElement.style.setProperty('--text', hexToHSL(textColor))
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [primaryColor, secondaryColor, accentColor,  textColor, theme])

  return (
    <ThemeContext.Provider value={{
      primaryColor,
      secondaryColor,
      accentColor,
      backgroundColor,
      textColor,
      setPrimaryColor,
      setSecondaryColor,
      setAccentColor,
      setBackgroundColor,
      setTextColor,
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

