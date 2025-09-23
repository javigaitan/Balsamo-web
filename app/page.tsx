import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { BrandsCarousel } from "@/components/brands-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <StatsSection />
      <AboutSection />
      <BrandsCarousel />
      <ContactSection />
      <Footer />
    </main>
  )
}
