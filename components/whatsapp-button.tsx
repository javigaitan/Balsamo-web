"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "5493513020497"
  const message = "Hola! Tengo una consulta"

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className=" cursor-pointer fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-subtle"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </button>
  )
}
