"use client"

import { motion } from "framer-motion"
import { MessageCircle, BookOpen, Brain, FileText, Zap, Target, Users, Clock } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Ask Questions",
      description:
        "Get instant answers to any question with our AI-powered assistant that understands context and provides detailed explanations.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: BookOpen,
      title: "Get Study Help",
      description:
        "Receive personalized study plans, explanations, and guidance tailored to your learning style and pace.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Brain,
      title: "Take Quizzes",
      description:
        "Test your knowledge with adaptive quizzes that adjust difficulty based on your performance and learning progress.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: FileText,
      title: "Smart Notes",
      description:
        "Create, organize, and enhance your notes with AI suggestions, summaries, and intelligent connections.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5",
    },
  ]

  const additionalFeatures = [
    { icon: Zap, title: "Lightning Fast", description: "Instant responses powered by advanced AI" },
    { icon: Target, title: "Personalized", description: "Adapts to your unique learning style" },
    { icon: Users, title: "Collaborative", description: "Study with friends and share knowledge" },
    { icon: Clock, title: "24/7 Available", description: "Learn anytime, anywhere, at your pace" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Excel in Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our AI-powered platform combines cutting-edge technology with proven educational methods to create the
            ultimate learning experience.
          </p>
        </motion.div>

        {/* Main features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-border/50 hover:border-${feature.color}/50 transition-all duration-300 glow-border-${feature.color === "primary" ? "purple" : "blue"} hover:glow-${feature.color === "primary" ? "purple" : "blue"}`}
              >
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-${feature.color}/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 text-${feature.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-glow-purple transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                  {/* Hover effect indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className={`h-1 bg-gradient-to-r from-${feature.color} to-transparent rounded-full mt-6 transition-all duration-300`}
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/30 rounded-full group-hover:bg-secondary transition-colors duration-300"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-4 rounded-2xl border border-primary/20">
            <span className="text-lg font-medium">Ready to transform your learning?</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:glow-purple transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
