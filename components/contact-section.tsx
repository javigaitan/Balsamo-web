"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useForm } from "react-hook-form"
import { Mail, Phone, MapPin, Clock, Send, User, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FormType = "customer" | "company"

interface CustomerFormData {
  name: string
  email: string
  phone: string
  comment: string
}

interface CompanyFormData {
  name: string
  companyName: string
  tradeName: string
  email: string
  phone: string
  province: string
  city: string
  vatCategory: string
  cuit: string
  hasShop: string
}

const provinces = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
]

const vatCategories = [
  "Responsable Inscripto",
  "Monotributista",
  "Exento",
  "Consumidor Final",
  "Responsable No Inscripto",
]

export function ContactSection() {
  const [formType, setFormType] = useState<FormType>("customer")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const customerForm = useForm<CustomerFormData>()
  const companyForm = useForm<CompanyFormData>()

  const onSubmitCustomer = async (data: CustomerFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Customer form data:", data)
    alert("¡Gracias por contactarnos! Te responderemos pronto.")
    customerForm.reset()
    setIsSubmitting(false)
  }

  const onSubmitCompany = async (data: CompanyFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Company form data:", data)
    alert("¡Gracias por tu interés! Nuestro equipo comercial se pondrá en contacto contigo.")
    companyForm.reset()
    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={ref} className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Contactanos</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Estamos aquí para ayudarte. Elige la opción que mejor se adapte a tu perfil y nos pondremos en contacto
                contigo.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Dirección",
                  content: "Av. Corrientes 1234, CABA, Argentina",
                },
                {
                  icon: Phone,
                  title: "Teléfono",
                  content: "+54 11 4567-8900",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@balsamoautopartes.com.ar",
                },
                {
                  icon: Clock,
                  title: "Horarios",
                  content: "Lun - Vie: 8:00 - 18:00 | Sáb: 8:00 - 13:00",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-muted/30 rounded-2xl h-64 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Mapa interactivo</p>
                <p className="text-sm text-muted-foreground">Av. Corrientes 1234, CABA</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Form Type Selector */}
            <div className="mb-8">
              <div className="flex bg-muted rounded-lg p-1">
                <button
                  onClick={() => setFormType("customer")}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all duration-200 ${
                    formType === "customer"
                      ? "bg-white shadow-sm text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span className="font-medium">Soy cliente final</span>
                </button>
                <button
                  onClick={() => setFormType("company")}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all duration-200 ${
                    formType === "company"
                      ? "bg-white shadow-sm text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span className="font-medium">Soy empresa</span>
                </button>
              </div>
            </div>

            {/* Customer Form */}
            {formType === "customer" && (
              <motion.form
                key="customer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={customerForm.handleSubmit(onSubmitCustomer)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customer-name">Nombre completo</Label>
                    <Input
                      id="customer-name"
                      {...customerForm.register("name", { required: "Este campo es requerido" })}
                      className="mt-1"
                    />
                    {customerForm.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">{customerForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="customer-phone">Teléfono</Label>
                    <Input
                      id="customer-phone"
                      {...customerForm.register("phone", { required: "Este campo es requerido" })}
                      className="mt-1"
                    />
                    {customerForm.formState.errors.phone && (
                      <p className="text-sm text-destructive mt-1">{customerForm.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="customer-email">Email</Label>
                  <Input
                    id="customer-email"
                    type="email"
                    {...customerForm.register("email", {
                      required: "Este campo es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido",
                      },
                    })}
                    className="mt-1"
                  />
                  {customerForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">{customerForm.formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="customer-comment">Comentario</Label>
                  <Textarea
                    id="customer-comment"
                    {...customerForm.register("comment", { required: "Este campo es requerido" })}
                    rows={4}
                    className="mt-1"
                    placeholder="Cuéntanos qué repuesto necesitas o cómo podemos ayudarte..."
                  />
                  {customerForm.formState.errors.comment && (
                    <p className="text-sm text-destructive mt-1">{customerForm.formState.errors.comment.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </motion.form>
            )}

            {/* Company Form */}
            {formType === "company" && (
              <motion.form
                key="company"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={companyForm.handleSubmit(onSubmitCompany)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company-name">Nombre</Label>
                    <Input
                      id="company-name"
                      {...companyForm.register("name", { required: "Este campo es requerido" })}
                      className="mt-1"
                    />
                    {companyForm.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">{companyForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company-phone">Teléfono</Label>
                    <Input
                      id="company-phone"
                      {...companyForm.register("phone", { required: "Este campo es requerido" })}
                      className="mt-1"
                    />
                    {companyForm.formState.errors.phone && (
                      <p className="text-sm text-destructive mt-1">{companyForm.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company-email">Email</Label>
                  <Input
                    id="company-email"
                    type="email"
                    {...companyForm.register("email", {
                      required: "Este campo es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido",
                      },
                    })}
                    className="mt-1"
                  />
                  {companyForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">{companyForm.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company-legal-name">Razón Social</Label>
                    <Input
                      id="company-legal-name"
                      {...companyForm.register("companyName", { required: "Este campo es requerido" })}
                      className="mt-1"
                    />
                    {companyForm.formState.errors.companyName && (
                      <p className="text-sm text-destructive mt-1">
                        {companyForm.formState.errors.companyName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company-trade-name">Nombre de Fantasía</Label>
                    <Input id="company-trade-name" {...companyForm.register("tradeName")} className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company-province">Provincia</Label>
                    <Select onValueChange={(value) => companyForm.setValue("province", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seleccionar provincia" />
                      </SelectTrigger>
                      <SelectContent>
                        {provinces.map((province) => (
                          <SelectItem key={province} value={province}>
                            {province}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {companyForm.formState.errors.province && (
                      <p className="text-sm text-destructive mt-1">{companyForm.formState.errors.province.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company-city">Ciudad</Label>
                    <Input
                      id="company-city"
                      {...companyForm.register("city", { required: "Este campo es requerido" })}
                      className="mt-1"
                    />
                    {companyForm.formState.errors.city && (
                      <p className="text-sm text-destructive mt-1">{companyForm.formState.errors.city.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company-vat">Categoría IVA</Label>
                    <Select onValueChange={(value) => companyForm.setValue("vatCategory", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seleccionar categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {vatCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {companyForm.formState.errors.vatCategory && (
                      <p className="text-sm text-destructive mt-1">
                        {companyForm.formState.errors.vatCategory.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company-cuit">CUIT</Label>
                    <Input
                      id="company-cuit"
                      {...companyForm.register("cuit", { required: "Este campo es requerido" })}
                      className="mt-1"
                      placeholder="XX-XXXXXXXX-X"
                    />
                    {companyForm.formState.errors.cuit && (
                      <p className="text-sm text-destructive mt-1">{companyForm.formState.errors.cuit.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company-shop">¿Tienes un taller de repuestos?</Label>
                  <Select onValueChange={(value) => companyForm.setValue("hasShop", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Sí, tengo un taller de repuestos</SelectItem>
                      <SelectItem value="planning">No, pero planeo abrir uno</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  {companyForm.formState.errors.hasShop && (
                    <p className="text-sm text-destructive mt-1">{companyForm.formState.errors.hasShop.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
