"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

import Logo from '../public/logo.png'

const brandLogos = [
  { name: "Aequipe", src: "/marcas/marca_aequipe.png" },
  { name: "Kreisen", src: "/marcas/marca_kreisen.png" },
  { name: "Oxion", src: "/marcas/marca_oxion.png" },
  { name: "Tajiro", src: "/marcas/marca_tajiro.png" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Nosotros", href: "#about" },
    { name: "Infoball 10", href: "#infoball" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
         <div className="bg-primary px-4 py-2 rounded-lg flex items-center justify-center">
      <Image
        src={Logo}
        alt="Logo BALSAMO"
        className="object-contain h-6 lg:h-8 w-auto"
        priority
      />
    </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Brand Logos */}
            <div className="flex items-center space-x-4 pl-6 border-l border-border">
              {brandLogos.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  <img src={brand.src || "/placeholder.svg"} alt={brand.name} className="h-8 w-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {item.name}
              </motion.a>
            ))}

            {/* Mobile Brand Logos */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Nuestras marcas:</p>
              <div className="grid grid-cols-2 gap-4">
                {brandLogos.map((brand) => (
                  <div key={brand.name} className="flex justify-center">
                    <img
                      src={brand.src || "/placeholder.svg"}
                      alt={brand.name}
                      className="h-8 w-auto object-contain opacity-70"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
