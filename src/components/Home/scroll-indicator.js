"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: [0, 5, 0],
            transition: {
              y: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              },
            },
          }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-center rounded-full bg-background/80 p-1 shadow-sm">
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

