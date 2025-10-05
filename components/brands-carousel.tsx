"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const brands = [
  { name: "Aniceto", logo: "/sub-marcas/aniceto.png" },
  { name: "Bitron", logo: "/sub-marcas/bitron.jpg" },
  { name: "Bosch", logo: "/sub-marcas/bosch.jpg" },
  { name: "Bufalo", logo: "/sub-marcas/buffalo.jpg" },
  { name: "Cauplas", logo: "/sub-marcas/cauplas.jpg" },
  { name: "Corteco", logo: "/sub-marcas/corteco.jpg" },
  { name: "Countier", logo: "/sub-marcas/coutier.jpg" },
  { name: "Denso", logo: "/sub-marcas/denso-1.png" },
  { name: "Dolz", logo: "/sub-marcas/dolz.jpg" },
  { name: "Fitam", logo: "/sub-marcas/fitam.jpg" },
  { name: "Frasle", logo: "/sub-marcas/frasle.jpg" },
  { name: "Gates", logo: "/sub-marcas/gates.jpg" },
  { name: "Litton", logo: "/sub-marcas/litton.jpg" },
  { name: "Tagline", logo: "/sub-marcas/Logo_Tagline-Combos_01-01.png" },
  { name: "Aequipe", logo: "/sub-marcas/logo-aequipe.jpg" },
  { name: "Kreisen", logo: "/sub-marcas/logo-kreisen.jpg" },
  { name: "LAM", logo: "/sub-marcas/logo-LAM.jpeg" },
  { name: "OXION", logo: "/sub-marcas/logo-oxion.jpg" },
  { name: "Marelli", logo: "/sub-marcas/marelli.jpg" },
  { name: "ngk", logo: "/sub-marcas/ngk.jpg" },
  { name: "Oran", logo: "/sub-marcas/oran.jpg" },
  { name: "Purflux", logo: "/sub-marcas/purflux.jpg" },
  { name: "rm", logo: "/sub-marcas/rm.jpg" },
  { name: "Sabo", logo: "/sub-marcas/sabo.jpg" },
  { name: "s", logo: "/sub-marcas/s.jpeg" },
  { name: "Sachs", logo: "/sub-marcas/sachs.jpg" },
  { name: "Schaeffer", logo: "/sub-marcas/schaeffler-logo.jpg" },
  { name: "SNR", logo: "/sub-marcas/snr-ntn.jpg" },
  { name: "tajiro", logo: "/sub-marcas/tajiro-e1750338372930.jpg" },
  { name: "valeo", logo: "/sub-marcas/valeo.jpg" },
  { name: "zf", logo: "/sub-marcas/zf.jpg" },
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
                  duration: 1000,
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
