"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    type: "imagen",
    content: {
      src: "/fotos_web_banner/banner_07.png",
      title: "Calidad que Impulsa tu Vehículo",
      subtitle: "Más de 25 años brindando repuestos de primera calidad",
      cta: "Ver Catálogo",
    },
  },
  {
    id: 2,
    type: "image",
    content: {
      src: "/modern-auto-parts-store.png",
      title: "Tecnología de Vanguardia",
      subtitle: "Repuestos originales y alternativos para todas las marcas",
      cta: "Conocer Más",
    },
  },
  {
    id: 3,
    type: "svg-text",
    content: {
      title: "Experiencia y Confianza",
      subtitle: "Líderes en el mercado argentino de autopartes",
      description:
        "Con presencia en todo el país, ofrecemos soluciones integrales para talleres, distribuidores y usuarios finales.",
      cta: "Contactanos",
      stats: [
        { number: "25+", label: "Años de experiencia" },
        { number: "50K+", label: "Repuestos disponibles" },
        { number: "95%", label: "Cobertura nacional" },
      ],
    },
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {slides[currentSlide].type === "video" && <VideoSlide slide={slides[currentSlide]} />}
          {slides[currentSlide].type === "image" && <ImageSlide slide={slides[currentSlide]} />}
          {slides[currentSlide].type === "svg-text" && <SvgTextSlide slide={slides[currentSlide]} />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8 pointer-events-none z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Play/Pause Control */}
      <div className="absolute top-8 right-8">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>
    </section>
  )
}

function VideoSlide({ slide }: { slide: any }) {
  return (
    <div className="relative h-full flex items-center justify-center bg-gradient-to-r from-primary/90 to-primary/70">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-6xl font-bold mb-6 text-balance"
        >
          {slide.content.title}
        </motion.h1>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl mb-8 text-balance"
        >
          {slide.content.subtitle}
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            {slide.content.cta}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

function ImageSlide({ slide }: { slide: any }) {
  return (
    <div className="relative h-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${slide.content.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-white">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold mb-6 text-balance"
          >
            {slide.content.title}
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl mb-8 text-balance max-w-2xl"
          >
            {slide.content.subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              {slide.content.cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SvgTextSlide({ slide }: { slide: any }) {
  return (
    <div className="relative h-full bg-gradient-to-br from-background to-muted/50">
      <div className="h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">{slide.content.title}</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{slide.content.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {slide.content.stats.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="text-lg px-8 py-3">
                {slide.content.cta}
              </Button>
            </motion.div>
          </motion.div>

          {/* SVG Illustration */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <svg width="400" height="400" viewBox="0 0 400 400" className="w-full max-w-md">
              <defs>
                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>

              {/* Car silhouette */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6 }}
                d="M80 250 L120 220 L160 210 L240 210 L280 220 L320 250 L320 280 L300 280 L300 300 L280 300 L280 280 L120 280 L120 300 L100 300 L100 280 L80 280 Z"
                fill="url(#primaryGradient)"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />

              {/* Wheels */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                cx="130"
                cy="290"
                r="20"
                fill="hsl(var(--foreground))"
              />
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                cx="270"
                cy="290"
                r="20"
                fill="hsl(var(--foreground))"
              />

          
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
