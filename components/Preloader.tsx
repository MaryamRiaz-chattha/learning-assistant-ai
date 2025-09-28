"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Sparkles } from "lucide-react"

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative z-10 text-center">
            {/* Main loader animation */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className="w-24 h-24 mx-auto mb-8 relative"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>

              {/* Inner brain icon */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Brain className="w-10 h-10 text-primary" />
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-glow-purple">Initializing AI Assistant</h2>
              <p className="text-muted-foreground">Preparing your learning experience...</p>

              {/* Progress bar */}
              <div className="w-64 mx-auto">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Loading</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary glow-purple rounded-full"
                  />
                </div>
              </div>

              {/* Loading steps */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="flex items-center justify-center space-x-2 text-sm text-muted-foreground"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span>
                  {progress < 30
                    ? "Loading 3D models..."
                    : progress < 60
                      ? "Initializing AI brain..."
                      : progress < 90
                        ? "Setting up interactions..."
                        : "Almost ready!"}
                </span>
              </motion.div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full"
                animate={{
                  x: [0, Math.random() * 400 - 200],
                  y: [0, Math.random() * 400 - 200],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: "50%",
                  top: "50%",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
