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
  title: "Balsamo Autopartes - Repuestos de Calidad",
  description:
    "Líder en autopartes con más de 25 años de experiencia. Encuentra repuestos de calidad para tu vehículo.",
  generator: "v0.app",
  icons: {
    icon: "/logobalsamo-icon.png", 
    shortcut: "/logobalsamo-icon.png",
    apple: "/logobalsamo-icon.png", 
  },
  openGraph: {
    title: "Balsamo Autopartes - Repuestos de Calidad",
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
