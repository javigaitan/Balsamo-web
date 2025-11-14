import type React from "react"
import type { Metadata } from "next"
import { Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Balsamo - Especialista en repuestos del automotor",
  description:
    "Líder en autopartes con más de 50 años de experiencia. Encuentra repuestos de calidad para tu vehículo.",
  keywords: [
    "autopartes",
    "repuestos",
    "Balsamo Autopartes",
    "repuestos para autos",
    "autopartes Córdoba",
    "repuestos originales",
    "repuestos automotor",
    "accesorios automotrices",
  ],
  authors: [{ name: "Balsamo Autopartes", url: "https://www.balsamo.com.ar" }],
  generator: "v0.app",
  category: "Automotor",
  icons: {
    icon: "/logobalsamo-icon.png",
    shortcut: "/logobalsamo-icon.png",
    apple: "/logobalsamo-icon.png",
  },
  openGraph: {
    title: "Balsamo - Especialista en repuestos del automotor",
    description:
      "Líder en autopartes con más de 25 años de experiencia. Encuentra repuestos de calidad para tu vehículo.",
    url: "https://www.balsamo.com.ar/",
    siteName: "Balsamo Autopartes",
    images: [
      {
        url: "/logobalsamo-icon.png",
        width: 512,
        height: 512,
        alt: "Logo Balsamo Autopartes",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${oswald.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
