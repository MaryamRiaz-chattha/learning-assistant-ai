"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm your AI Learning Buddy. How can I help you study today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [avatarState, setAvatarState] = useState<"idle" | "thinking" | "speaking">("idle")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)
    setAvatarState("thinking")

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Let me break it down for you step by step...",
        "I'd be happy to help you understand this concept better. Here's what you need to know:",
        "Excellent! This is a fundamental topic. Let me explain it in a way that's easy to remember:",
        "I can see you're working hard on your studies! Here's my explanation:",
        "That's an interesting problem. Let me guide you through the solution process:",
      ]

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
      setAvatarState("speaking")

      // Return to idle state after speaking
      setTimeout(() => setAvatarState("idle"), 2000)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const avatarVariants = {
    idle: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    thinking: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
    speaking: {
      scale: [1, 1.05, 1],
      y: [0, -5, 0],
      transition: {
        duration: 0.8,
        repeat: 3,
      },
    },
  }

  return (
    <section id="chat" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10"></div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Bot className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium">Interactive AI Chat</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Chat with Your{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              AI Learning Assistant
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience real-time conversations with our intelligent AI tutor. Ask questions, get explanations, and
            receive personalized learning guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 flex flex-col items-center"
          >
            <div className="relative mb-6">
              <motion.div
                variants={avatarVariants}
                animate={avatarState}
                className="w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl glow-border-blue flex items-center justify-center relative overflow-hidden"
              >
                {/* 3D Avatar placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full glow-blue flex items-center justify-center">
                  <Bot className="w-16 h-16 text-white" />
                </div>

                {/* Thinking particles */}
                <AnimatePresence>
                  {avatarState === "thinking" && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [-20, -40, -60],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                          className="absolute top-8 left-1/2 w-2 h-2 bg-secondary rounded-full"
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>

                {/* Speaking waves */}
                <AnimatePresence>
                  {avatarState === "speaking" && (
                    <>
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, 2 + i * 0.5, 4 + i],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.1,
                          }}
                          className="absolute inset-0 border-2 border-secondary/30 rounded-3xl"
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Status indicator */}
              <div className="text-center mt-4">
                <div className="flex items-center justify-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      avatarState === "idle"
                        ? "bg-green-500"
                        : avatarState === "thinking"
                          ? "bg-yellow-500 animate-pulse"
                          : "bg-blue-500 animate-pulse"
                    }`}
                  />
                  <span className="text-sm text-muted-foreground capitalize">{avatarState}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl glow-border-purple overflow-hidden">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4 border-b border-border/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Learning Assistant</h3>
                    <p className="text-sm text-muted-foreground">Always here to help you learn</p>
                  </div>
                  <div className="ml-auto flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div
                ref={chatContainerRef}
                className="h-96 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
              >
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground ml-4"
                            : "bg-secondary/20 text-foreground mr-4"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === "ai" && <Bot className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />}
                          {message.sender === "user" && (
                            <User className="w-4 h-4 text-primary-foreground mt-0.5 flex-shrink-0" />
                          )}
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex justify-start"
                    >
                      <div className="bg-secondary/20 px-4 py-3 rounded-2xl mr-4">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-4 h-4 text-secondary" />
                          <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.2,
                                }}
                                className="w-2 h-2 bg-secondary rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="border-t border-border/50 p-4">
                <div className="flex items-center space-x-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about your studies..."
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="glow-border-primary hover:glow-primary transition-all duration-300"
                  >
                    {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Powered by advanced AI - Press Enter to send
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Chatbot
