"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-8"
        >
          <motion.div variants={textVariants} className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">AI-Powered Learning</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Meet Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow-purple">
                AI Learning Buddy!
              </span>
            </h1>
          </motion.div>

          <motion.p variants={textVariants} className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty">
            Transform your learning experience with our interactive 3D AI assistant. Get personalized study help, take
            engaging quizzes, and unlock your full potential.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="glow-border-purple hover:glow-purple transition-all duration-300 text-lg px-8 py-6"
            >
              Try Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glow-border-blue hover:glow-blue transition-all duration-300 text-lg px-8 py-6 bg-transparent"
            >
              Watch Video
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={textVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-secondary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex items-center justify-center"
        >
          {/* 3D Model Container */}
          <div className="relative w-full max-w-lg aspect-square">
            {/* Placeholder for Spline 3D model */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl glow-border-purple flex items-center justify-center relative overflow-hidden">
              {/* Animated floating elements */}
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* 3D Assistant Placeholder */}
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full glow-purple opacity-80 flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
              </motion.div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Spline embed placeholder - Replace with actual Spline URL */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0">
              {/* This is where the Spline 3D model would be embedded */}
              {/* <spline-viewer url="https://prod.spline.design/your-3d-model-url"></spline-viewer> */}
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-secondary rounded-full"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
