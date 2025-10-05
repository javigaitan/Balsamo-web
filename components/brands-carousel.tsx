"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const brands = [
  { name: "Warehouse", logo: "/sub-marcas/auto-parts-warehouse-video.jpg" },
  { name: "Bosch", logo: "/sub-marcas/bosch-logo.png" },
  { name: "Mahle", logo: "/mahle-logo.jpg" },
  { name: "Sachs", logo: "/sachs-logo.jpg" },
  { name: "Valeo", logo: "/valeo-logo.png" },
  { name: "Denso", logo: "/denso-logo.png" },
  { name: "NGK", logo: "/ngk-logo.png" },
  { name: "Brembo", logo: "/brembo-logo.png" },
  { name: "Castrol", logo: "/castrol-logo.png" },
  { name: "Mobil", logo: "/mobil-logo.png" },
  { name: "Shell", logo: "/shell-logo.png" },
  { name: "Total", logo: "/total-logo.png" },
  { name: "Liqui Moly", logo: "/liqui-moly-logo.png" },
  { name: "Mann Filter", logo: "/mann-filter-logo.png" },
  { name: "Hella", logo: "/hella-logo.png" },
  { name: "Osram", logo: "/osram-logo.png" },
]

// Duplicate brands for seamless infinite scroll
const duplicatedBrands = [...brands, ...brands, ...brands]

export function BrandsCarousel() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Marcas de Confianza</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Trabajamos con las marcas más reconocidas del mercado automotriz mundial
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/20 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/20 to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -100 * (brands.length / 5) + "%"],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 400,
                  ease: "linear",
                },
              }}
              className="flex gap-8 lg:gap-12"
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-32 lg:w-40 h-20 lg:h-24 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4 group"
                >
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">Calidad Garantizada</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada marca que representamos ha sido cuidadosamente seleccionada por su compromiso con la calidad,
              innovación y confiabilidad. Desde repuestos originales hasta alternativas de primera línea, ofrecemos
              soluciones para todas las necesidades y presupuestos.
            </p>
          </div>
        </motion.div>

        {/* Brand Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { category: "Motor", count: "2,500+" },
            { category: "Frenos", count: "1,800+" },
            { category: "Suspensión", count: "1,200+" },
            { category: "Eléctrico", count: "3,000+" },
          ].map((item, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-primary mb-1">{item.count}</div>
              <div className="text-sm text-muted-foreground">{item.category}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
