"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"


const brands = [
  { name: "ag", logo: "/sub-marcas/ag.png" },
  { name: "bbb", logo: "/sub-marcas/bbb.png" },
  { name: "Bosch", logo: "/sub-marcas/bosch.png" },
  { name: "cauplas", logo: "/sub-marcas/cauplas.png" },
  { name: "dayco", logo: "/sub-marcas/dayco.png" },
  { name: "dolz", logo: "/sub-marcas/dolz.png" },
  { name: "elring", logo: "/sub-marcas/elring.png" },
  { name: "ficosa", logo: "/sub-marcas/ficosa.png" },
  { name: "fitam", logo: "/sub-marcas/fitam.png" },
  { name: "frasle", logo: "/sub-marcas/frasle.png" },
  { name: "gates", logo: "/sub-marcas/gates.png" },
  { name: "grupo_schaeffler", logo: "/sub-marcas/grupo_schaeffler.png" },
  { name: "hella", logo: "/sub-marcas/hella.png" },
  { name: "lam", logo: "/sub-marcas/lam.png" },
  { name: "litton", logo: "/sub-marcas/litton.png" },
  { name: "magnetimarelli", logo: "/sub-marcas/magnetimarelli.png" },
  { name: "marcas_proveedores", logo: "/sub-marcas/marcas_proveedores.png" },
  { name: "nakata", logo: "/sub-marcas/nakata.png" },
  { name: "ngk", logo: "/sub-marcas/ngk.png" },
  { name: "ntnsnr", logo: "/sub-marcas/ntnsnr.png" },
  { name: "philips", logo: "/sub-marcas/oran.png" },
  { name: "Purflux", logo: "/sub-marcas/philips.png" },
  { name: "sabo", logo: "/sub-marcas/sabo.png" },
  { name: "sachs", logo: "/sub-marcas/sachs.png" },
  { name: "trico", logo: "/sub-marcas/trico.png" },
  { name: "valeo", logo: "/sub-marcas/valeo.png" },
  { name: "viewmax", logo: "/sub-marcas/viewmax.png" },
]

// Duplicate brands for seamless infinite scroll
const duplicatedBrands = [...brands, ...brands, ...brands]

export function BrandsCarousel() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-18 lg:py-24 bg-muted/20 overflow-hidden">
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
            <h3 className="text-xl font-semibold text-foreground mb-4">Especialistas en Todas las Familias de Piezas</h3>
            <p className="text-muted-foreground leading-relaxed">
              En Bálsamo Autopartes ofrecemos soluciones para cada sistema del vehículo, desde los componentes más específicos hasta los más generales.
Nuestra experiencia nos permite brindar una línea completa de repuestos que cubre todas las familias: motor, frenos, suspensión, transmisión, eléctrico y carrocería.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              A través de nuestras marcas Aequipe, Kreisen y Tajiro, abarcamos todo el universo de vehículos Renault, Volkswagen y Nissan, garantizando disponibilidad, compatibilidad y asesoramiento técnico especializado.
            </p>
          </div>
        </motion.div>

        {/* Brand Categories */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
>
  {[
    { category: "Motor", count: "10,000+", icon: "/icons/engine.svg" },
    { category: "Frenos", count: "200+", icon: "/icons/brake.svg" },
    { category: "Suspensión", count: "40,000+", icon: "/icons/suspension.svg" },
    { category: "Eléctrico", count: "5,000+", icon: "/icons/electric.svg" },
    { category: "Transmisión y dirección", count: "3,000+", icon: "/icons/gear.svg" },
    { category: "Carrocería y Accesorios", count: "14,000+", icon: "/icons/car.svg" },
  ].map((item, index) => (
    <div
      key={index}
      className="text-center p-4 bg-white rounded-xl shadow-sm flex flex-col items-center"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full  mb-3">
        <img
          src={item.icon}
          alt={item.category}
          className="h-10 w-10 object-contain text-blue-600"
        />
      </div>
      <div className="text-2xl font-bold text-blue-700 mb-1">{item.count}</div>
      <div className="text-sm text-muted-foreground">{item.category}</div>
    </div>
  ))}
</motion.div>
      </div>
    </section>
  )
}
