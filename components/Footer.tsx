"use client"

import { motion } from "framer-motion"

const Footer = () => {
  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Discord", href: "#" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg glow-purple"></div>
              <span className="text-xl font-bold text-glow-purple">LearnAI</span>
            </motion.div>
            <p className="text-muted-foreground mb-4">
              Your AI Learning Buddy - Making education interactive, engaging, and personalized with cutting-edge 3D
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "Chat", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Connect</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="text-muted-foreground hover:text-secondary hover:text-glow-blue transition-all duration-200"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="text-muted-foreground">© 2025 LearnAI. All rights reserved. Built by Maryam Riaz.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
