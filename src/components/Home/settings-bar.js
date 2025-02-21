"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus, RotateCcw, Type } from "lucide-react"
import { useFontSize } from "@/contexts/font-size-context"

export function SettingsBar() {
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize()
  const [showFontControls, setShowFontControls] = useState(false)

  return (
    <div className="flex items-center justify-end space-x-2 border-b bg-background p-2">
      <div className="flex items-center space-x-2">
        {showFontControls && (
          <>
            <Button variant="outline" size="icon" onClick={decreaseFontSize}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="min-w-[3ch] text-center">{fontSize}</span>
            <Button variant="outline" size="icon" onClick={increaseFontSize}>
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={resetFontSize}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </>
        )}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowFontControls(!showFontControls)}
          className={showFontControls ? "bg-muted" : ""}
        >
          <Type className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

