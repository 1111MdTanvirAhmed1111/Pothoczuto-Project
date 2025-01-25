"use client"

import { useTheme } from '@/components/ThemeProvider'

export function ColorPicker() {
  const { 
    primaryColor, 
    secondaryColor, 
    accentColor, 
    backgroundColor,
    textColor,
    setPrimaryColor, 
    setSecondaryColor, 
    setAccentColor,
    setBackgroundColor,
    setTextColor
  } = useTheme()

  return (
    <div className="flex flex-wrap justify-around items-center p-2 gap-2">
      <label className="cursor-pointer">
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          className="sr-only"
        />
        <div 
          className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-inner transition-transform hover:scale-110"
          style={{ backgroundColor: primaryColor }}
          title="Primary Color"
        />
      </label>
      <label className="cursor-pointer">
        <input
          type="color"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
          className="sr-only"
        />
        <div 
          className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-inner transition-transform hover:scale-110"
          style={{ backgroundColor: secondaryColor }}
          title="Secondary Color"
        />
      </label>
      <label className="cursor-pointer">
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          className="sr-only"
        />
        <div 
          className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-inner transition-transform hover:scale-110"
          style={{ backgroundColor: accentColor }}
          title="Accent Color"
        />
      </label>

      <label className="cursor-pointer">
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="sr-only"
        />
        <div 
          className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-inner transition-transform hover:scale-110"
          style={{ backgroundColor: textColor }}
          title="Text Color"
        />
      </label>
    </div>
  )
}

