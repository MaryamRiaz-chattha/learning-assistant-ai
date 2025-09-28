"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, BookOpen, Brain, Calculator, FileText, Award, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const Showcase = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const demoFeatures = [
    {
      id: "study-plans",
      icon: BookOpen,
      title: "Personalized Study Plans",
      description: "AI creates custom learning paths based on your goals and progress",
      color: "primary",
      animation: "study",
    },
    {
      id: "quiz-system",
      icon: Brain,
      title: "Adaptive Quizzes",
      description: "Smart quizzes that adjust difficulty based on your performance",
      color: "secondary",
      animation: "quiz",
    },
    {
      id: "problem-solving",
      icon: Calculator,
      title: "Step-by-Step Solutions",
      description: "Get detailed explanations for complex problems",
      color: "primary",
      animation: "solve",
    },
    {
      id: "note-taking",
      icon: FileText,
      title: "Smart Note Organization",
      description: "AI-powered note organization and knowledge connections",
      color: "secondary",
      animation: "notes",
    },
  ]

  const stats = [
    { icon: Users, value: "50K+", label: "Active Students" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: TrendingUp, value: "40%", label: "Grade Improvement" },
    { icon: BookOpen, value: "1M+", label: "Questions Answered" },
  ]

  const getAnimationVariants = (animationType: string) => {
    const animations = {
      study: {
        idle: { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] },
        active: { rotate: [0, 360], scale: [1, 1.2, 1], y: [0, -20, 0] },
      },
      quiz: {
        idle: { y: [0, -10, 0], opacity: [0.8, 1, 0.8] },
        active: { scale: [1, 1.3, 1], rotate: [0, 180, 360] },
      },
      solve: {
        idle: { x: [0, 10, -10, 0] },
        active: { scale: [1, 1.1, 1.2, 1], rotate: [0, -10, 10, 0] },
      },
      notes: {
        idle: { scale: [1, 1.02, 1] },
        active: { y: [0, -30, 0], rotate: [0, 15, -15, 0] },
      },
    }
    return animations[animationType as keyof typeof animations] || animations.study
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Interactive Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            See Our AI in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hover over each feature to see how our AI assistant transforms the learning experience with interactive 3D
            demonstrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Interactive 3D Demo Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-card/50 to-card/20 rounded-3xl border border-border/50 glow-border-purple overflow-hidden relative">
              {/* 3D Demo Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {hoveredFeature ? (
                    <motion.div
                      key={hoveredFeature}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="text-center"
                    >
                      {/* Dynamic 3D Animation based on hovered feature */}
                      <motion.div
                        animate={
                          getAnimationVariants(demoFeatures.find((f) => f.id === hoveredFeature)?.animation || "study")
                            .active
                        }
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-3xl glow-purple flex items-center justify-center mb-4"
                      >
                        {(() => {
                          const feature = demoFeatures.find((f) => f.id === hoveredFeature)
                          const IconComponent = feature?.icon || BookOpen
                          return <IconComponent className="w-16 h-16 text-white" />
                        })()}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">
                        {demoFeatures.find((f) => f.id === hoveredFeature)?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {demoFeatures.find((f) => f.id === hoveredFeature)?.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl glow-border-blue flex items-center justify-center mb-6"
                      >
                        <Brain className="w-20 h-20 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2 text-glow-purple">Hover to Explore</h3>
                      <p className="text-muted-foreground">Move your cursor over the features to see them in action</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/60 rounded-full"
                    animate={{
                      x: [0, Math.random() * 200 - 100],
                      y: [0, Math.random() * 200 - 100],
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
            </div>
          </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {demoFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    hoveredFeature === feature.id
                      ? `bg-${feature.color}/10 border-${feature.color}/50 glow-border-${feature.color === "primary" ? "purple" : "blue"}`
                      : "bg-card/30 border-border/30 hover:border-border/50"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      animate={
                        hoveredFeature === feature.id
                          ? getAnimationVariants(feature.animation).active
                          : getAnimationVariants(feature.animation).idle
                      }
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className={`w-12 h-12 bg-${feature.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className={`w-6 h-6 text-${feature.color}`} />
                    </motion.div>
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-2 transition-all duration-300 ${
                          hoveredFeature === feature.id ? "text-glow-purple" : ""
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-6 rounded-2xl border border-primary/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2">Ready to Experience the Future of Learning?</h3>
              <p className="text-muted-foreground">Join thousands of students already using our AI assistant</p>
            </div>
            <Button className="glow-border-purple hover:glow-purple transition-all duration-300 whitespace-nowrap">
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Showcase
