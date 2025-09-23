import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Award, Users, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Nuestra Historia</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Más de 25 años construyendo confianza en el mercado argentino de autopartes
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Company Story */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">El Comienzo de una Tradición</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En 1998, con una visión clara y mucha determinación, fundamos Balsamo Autopartes en el corazón de Buenos
              Aires. Lo que comenzó como un pequeño negocio familiar se ha transformado en una de las empresas más
              respetadas del sector automotriz argentino.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desde el primer día, nuestro compromiso ha sido simple pero poderoso: ofrecer repuestos de la más alta
              calidad con un servicio excepcional. Esta filosofía nos ha permitido crecer de manera sostenida,
              ganándonos la confianza de miles de talleres, distribuidores y usuarios finales en todo el país.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Nuestros Valores</h2>

              <div className="space-y-4">
                {[
                  { icon: Award, title: "Calidad", desc: "Productos que cumplen los más altos estándares" },
                  { icon: Users, title: "Servicio", desc: "Atención personalizada y profesional" },
                  { icon: Target, title: "Precisión", desc: "El repuesto correcto para cada necesidad" },
                  { icon: Heart, title: "Compromiso", desc: "Dedicación total con nuestros clientes" },
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ser el socio estratégico de confianza para talleres, distribuidores y usuarios finales, proporcionando
                soluciones integrales en autopartes que superen las expectativas de calidad, disponibilidad y servicio.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consolidarnos como la empresa líder en distribución de autopartes en Argentina, expandiendo nuestra
                presencia regional y siendo reconocidos por nuestra innovación, calidad y compromiso con la excelencia.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Hitos Importantes</h2>

            <div className="space-y-6">
              {[
                { year: "1998", title: "Fundación", desc: "Inicio de operaciones en Buenos Aires" },
                { year: "2005", title: "Expansión", desc: "Apertura de sucursales en el interior" },
                { year: "2010", title: "Modernización", desc: "Implementación de sistemas digitales" },
                { year: "2015", title: "Crecimiento", desc: "Alcanzamos los 1000 clientes activos" },
                { year: "2020", title: "Innovación", desc: "Lanzamiento de plataforma online" },
                { year: "2023", title: "Liderazgo", desc: "Reconocidos como empresa líder del sector" },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para ser parte de nuestra historia?</h2>
            <p className="text-muted-foreground mb-6">
              Únete a los miles de clientes que confían en Balsamo Autopartes
            </p>
            <Link href="/#contact">
              <Button size="lg">Contactanos Hoy</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
