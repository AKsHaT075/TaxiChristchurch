"use client"

import { MessageCircle, Phone } from "lucide-react"

export default function FloatingActionButtons() {
  const whatsappNumber = "+64225286415" // Replace with your actual WhatsApp number
  const phoneNumber = "+64225286415" // Replace with your actual phone number

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to book a taxi in Christchurch."
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "")
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(message)}`
    
    // Try different methods to open WhatsApp
    try {
      // First try the mobile app URL
      const mobileUrl = `whatsapp://send?phone=${cleanNumber}&text=${encodeURIComponent(message)}`
      window.location.href = mobileUrl
      
      // Fallback to web WhatsApp after a short delay if app doesn't open
      setTimeout(() => {
        window.open(whatsappUrl, "_blank")
      }, 1000)
    } catch (error) {
      // If all else fails, open web WhatsApp
      window.open(whatsappUrl, "_blank")
    }
  }

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <div className="fixed z-50">
      {/* WhatsApp Button - Left Side */}
      <button
        onClick={handleWhatsApp}
        className="fixed left-4 bottom-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute left-16 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Us
        </span>
      </button>

      {/* Call Button - Right Side */}
      <button
        onClick={handleCall}
        className="fixed right-4 bottom-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Call us now"
      >
        <Phone className="w-7 h-7" />
        <span className="absolute right-16 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now
        </span>
      </button>
    </div>
  )
}
