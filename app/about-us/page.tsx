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
            Más de 50 años construyendo confianza en el mercado argentino de autopartes
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
              La historia de Bálsamo Autopartes comenzó hace más de seis décadas, cuando Balsamino Bálsamo dio sus primeros pasos como mecánico. Su curiosidad y conocimiento técnico lo llevaron, años después, a comenzar a vender repuestos desde su propio taller, plantando la semilla de lo que hoy es una de las empresas más reconocidas del sector automotor argentino.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En 1959, decidió dedicarse por completo a la venta de autopartes, atendiendo al público minorista con piezas para Institec, Graciela y Auto Unión.
Con la incorporación de sus hijos, la empresa inició un crecimiento sostenido y, en 1972, comenzó a comercializar repuestos a nivel mayorista, especializándose en Rastrojero Diesel.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En 1985, y en sintonía con la evolución del mercado, Bálsamo incorporó repuestos adaptables para vehículos Renault, marcando un antes y un después en su desarrollo.
Décadas más tarde, sumó piezas para Volkswagen, consolidándose como especialista en estas dos marcas.
</p>
 <p className="text-muted-foreground leading-relaxed mb-6">
            En 2018, la compañía lanzó su propia marca de repuestos para Nissan, TAJIRO, y en 2025 presentó InfoBal 10, su nuevo catálogo web, un espacio digital que refleja la experiencia, innovación y espíritu técnico que distingue a Bálsamo.
            </p>
             <p className="text-muted-foreground leading-relaxed mb-6">
              Desde el primer día, nuestro compromiso fue simple pero poderoso: ofrecer repuestos de la más alta calidad con atención personalizada y soporte técnico especializado.
Así, con más de 60 años de trayectoria, seguimos acompañando a talleres, distribuidores y profesionales de todo el país.
              </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Nuestros Valores</h2>

              <div className="space-y-4">
                {[
                  { icon: Award, title: "Calidad", desc: "Productos que cumplen los más altos estándares del mercado" },
                  { icon: Users, title: "Servicio", desc: "Atención cercana, personalizada y profesional" },
                  { icon: Target, title: "Precisión", desc: "El repuesto correcto, en el momento justo" },
                  { icon: Heart, title: "Compromiso", desc: "Dedicación total con nuestros clientes y socios comerciales" },
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
              
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Hitos Importantes</h2>

            <div className="space-y-6">
              {[
  { year: "1944", title: "Origen", desc: "Balsamino Bálsamo inicia la venta de repuestos en su taller de Córdoba." },
  { year: "1959", title: "Fundación Comercial", desc: "Comienza la venta minorista de autopartes." },
  { year: "1968", title: "Expansión Mayorista", desc: "Inicia la distribución de repuestos para Rastrojero Diesel." },
  { year: "1985", title: "Especialización", desc: "Se incorpora la línea Renault, marcando un nuevo rumbo técnico." },
  { year: "1998", title: "Innovación", desc: "Nace la marca Aequipe y se lanza el primer catálogo electrónico, InfoBal 6." },
  { year: "2003", title: "Diversificación", desc: "Surge Kreisen, marca especializada en repuestos para Volkswagen." },
  { year: "2005", title: "Crecimiento Logístico", desc: "Inauguración del centro de distribución de 13.400 m²." },
  { year: "2018", title: "Nueva Marca", desc: "Lanzamiento de TAJIRO, repuestos para Nissan." },
  { year: "2025", title: "Transformación Digital", desc: "Presentación del nuevo catálogo web InfoBal 10." }
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
