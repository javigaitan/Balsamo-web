"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const brandLogos = [
  { name: "Bosch", src: "/bosch-logo.png" },
  { name: "Continental", src: "/continental-logo.jpg" },
  { name: "Mahle", src: "/mahle-logo.jpg" },
  { name: "Sachs", src: "/sachs-logo.jpg" },
  { name: "Valeo", src: "/valeo-logo.png" },
  { name: "Denso", src: "/denso-logo.png" },
  { name: "NGK", src: "/ngk-logo.png" },
  { name: "Brembo", src: "/brembo-logo.png" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Company Logo */}
            <div className="bg-primary px-4 py-2 rounded-lg inline-block">
              <span className="text-primary-foreground font-bold text-2xl font-sans">BALSAMO</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Líder en autopartes con más de 25 años de experiencia, ofreciendo repuestos de calidad para todo tipo de
              vehículos en toda Argentina.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  <p>Av. Corrientes 1234</p>
                  <p>Buenos Aires, Argentina</p>
                  <p>C1043AAZ</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-slate-300 text-sm">+54 11 4567-8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-slate-300 text-sm">info@balsamo.com.ar</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              {[
                { name: "Nosotros", href: "#about" },
                { name: "Productos", href: "#products" },
                { name: "Infoball 10", href: "#infoball" },
                { name: "Contacto", href: "#contact" },
                { name: "Términos y Condiciones", href: "#terms" },
                { name: "Política de Privacidad", href: "#privacy" },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-slate-300 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Media & Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-slate-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                )
              })}
            </div>

            <div>
              <h4 className="text-sm font-medium text-white mb-3">Nuestras Marcas</h4>
              <div className="grid grid-cols-4 gap-2">
                {brandLogos.map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-colors duration-200"
                  >
                    <img
                      src={brand.src || "/placeholder.svg"}
                      alt={brand.name}
                      className="h-6 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>&copy; 2025 Balsamo Autopartes. Todos los derechos reservados.</p>
            </div>

            {/* Signature */}
            <motion.div whileHover={{ scale: 1.02 }} className="text-slate-500 text-xs text-center md:text-right">
              <p className="opacity-70 hover:opacity-100 transition-opacity duration-200">
                Created by <span className="text-secondary font-medium">Gaitán Javier Emanuel</span> -
                <span className="text-primary font-medium"> Tab Soluciones</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
