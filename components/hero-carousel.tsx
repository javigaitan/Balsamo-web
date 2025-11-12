"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    type: "image",
    content: {
      src: "/fotos-banner/banner_01.png",
      title: "Especialista en repuestos del automotor",
      subtitle: "Más de 50 años brindando repuestos",
      //cta: "Ver Catálogo",
      //link: "/",
    },
  },
  {
    id: 2,
    type: "image",
    content: {
      src: "/fotos-banner/banner_05.png",
      title: "Repuestos para Renault, Volkswagen y Nissan",
      subtitle: "Más de 50.000 referencias",
      //cta: "Conocer Más",
      //link: "/",
    },
  },
  {
    id: 3,
    type: "svg-text",
    content: {
      src: "",
      title: "Experiencia y confianza",
      subtitle: "Líderes en el mercado argentino de autopartes",
      description:
        "Con presencia en todo el país, ofrecemos soluciones integrales para talleres, distribuidores y usuarios finales.",
      cta: "Contactanos",
      link: "/#contact",
      stats: [
        { number: "50+", label: "Años de experiencia" },
        { number: "50K+", label: "Repuestos disponibles" },
        { number: "100%", label: "Cobertura nacional" },
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
    }, 9000)

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
          transition={{ duration: 0.9, ease: "easeInOut" }}
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
          className="text-xl lg:text-1xl font-normal mb-8 text-balance"
        >
          {slide.content.subtitle}
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {slide.content.cta && (
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              {slide.content.cta}
            </Button>
          )}
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
            className="text-xl lg:text-1xl font-normal mb-8 text-balance max-w-2xl"
          >
            {slide.content.subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {slide.content.cta && (
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                {slide.content.cta}
              </Button>
            )}
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
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">{slide.content.title}</h1>
            <p className="text-xl lg:text-2xl font-normal text-muted-foreground text-balance">{slide.content.subtitle}</p>
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
              {slide.content.cta && slide.content.link && (
                <Button size="lg" className="text-lg px-8 py-3" asChild>
                  <a href={slide.content.link}>{slide.content.cta}</a>
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* SVG Image - Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center max-h-[600px] overflow-auto"
          >
            <img
              src="/fotos-banner/img-cajas-aequipe-banner.png"
              alt="Cajas de repuestos AEQUIPE RENAULT"
              className="w-full h-auto max-w-md object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
