"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Package, Calendar, MapPin, TrendingUp } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: Package,
    number: 50000,
    suffix: "+",
    label: "Referencias disponibles",
    description: "Amplio stock de repuestos para Renault, Volkswagen y Nissan",
  },
  {
    id: 2,
    icon: Calendar,
    number: 50,
    suffix: "+",
    label: "Años de experiencia",
    description: "Más de medio siglo en el mercado de autopartes",
  },
  {
    id: 3,
    icon: MapPin,
    number: 100,
    suffix: "%",
    label: "Cobertura nacional",
    description: "Presencia en todo el territorio argentino",
  },
  {
    id: 4,
    icon: TrendingUp,
    number: 20000,
    suffix: "+",
    label: "Metros cubiertos",
    description: "Centro de distribución con +20.000 metros cubiertos",
  },
]

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * target)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, target, duration])

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Especialista en autopartes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
Lideres en la especialización de autopartes para vehículo Renault, Volkswagen y Nissan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Animated Number */}
                <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={2000 + index * 200} />

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{stat.label}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
