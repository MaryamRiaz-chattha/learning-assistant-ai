"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Chatbot from "@/components/Chatbot"
import Showcase from "@/components/Showcase"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import PageTransition from "@/components/PageTransition"
import ScrollProgress from "@/components/ScrollProgress"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <PageTransition>
        <main className="min-h-screen bg-black overflow-x-hidden">
          <Header />
          <Hero />
          <Features />
          <Chatbot />
          <Showcase />
          <Contact />
          <Footer />
        </main>
      </PageTransition>
    </>
  )
}
