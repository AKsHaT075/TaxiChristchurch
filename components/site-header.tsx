"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, MouseEvent } from "react"
import { Mail, Phone, Wifi, MapPin, Menu } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Handles anchor navigation: if not on home, go to /#section; else scroll
  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname !== "/") {
      e.preventDefault()
      if (hash === "#home") {
        router.push("/") // Go to homepage directly for home button
      } else {
        router.push(`/${hash}`) // Go to homepage with hash for other sections
      }
      setOpen(false)
    }
    // else, let default anchor behavior work (scrolls to section)
  }

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black py-3 px-4 text-sm font-medium shadow-md">
        <div className="mx-auto max-w-6xl flex justify-between items-center">
          {/* Desktop: email & phone, Mobile: only WiFi */}
          <div className="hidden md:flex items-center gap-6 md:gap-8">
            <a href="mailto:info@taxischristchurch.co.nz" className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200 group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">info@taxischristchurch.co.nz</span>
            </a>
            <a href="tel:+64123456789" className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200 group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>+64 225 286 415</span>
            </a>
          </div>
           <div className="flex md:hidden items-center gap-2 bg-black/10 px-3 py-1 rounded-full">
            <Wifi className="w-4 h-4" />
            <span className="font-semibold">Free WiFi Available</span>
          </div>
         
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-800">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold">Serving Christchurch</span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 px-3 py-1 rounded-full">
              <Wifi className="w-4 h-4" />
              <span className="font-semibold">Free WiFi Available</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b-4 border-primary bg-black shadow-xl backdrop-blur ">
  <div className="mx-auto max-w-6xl px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Taxis Christchurch Home">
          <img 
            src="/Logo-Trans.png" 
            alt="Taxis Christchurch Logo" 
            className="h-22 w-22 object-cover shadow-lg group-hover:scale-105 transition-transform"
          />
          {/* <span className="font-bold text-primary text-lg tracking-wide drop-shadow">Taxis <span className="text-white">Christchurch</span></span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-base font-medium">
          <a href="#home" className="text-white hover:text-primary transition-colors" onClick={e => handleAnchorClick(e, '#home')}>Home</a>
          <a href="#about" className="text-white hover:text-primary transition-colors" onClick={e => handleAnchorClick(e, '#about')}>About Us</a>
          <a href="#services" className="text-primary hover:text-white transition-colors" onClick={e => handleAnchorClick(e, '#services')}>Services</a>
          <a href="#testimonials" className="text-white hover:text-primary transition-colors" onClick={e => handleAnchorClick(e, '#testimonials')}>Testimonials</a>
          <a href="#contact" className="text-white hover:text-primary transition-colors" onClick={e => handleAnchorClick(e, '#contact')}>Contact Us</a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-black text-primary border-2 border-primary hover:bg-primary hover:text-black shadow-md px-6 py-2 rounded-full font-bold text-base transition-all">Book Now</Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-3 rounded-md border-2 border-primary bg-black hover:bg-primary/20 focus:outline-none transition-colors duration-200"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative w-6 h-6 flex flex-col justify-center">
            {/* Top line */}
            <span 
              className={`block w-6 h-0.5 bg-primary transform transition-all duration-300 ease-in-out mb-1 ${
                open ? 'rotate-45 translate-y-2' : 'rotate-0'
              }`}
            />
            {/* Middle line */}
            <span 
              className={`block w-6 h-0.5 bg-primary transform transition-all duration-300 ease-in-out mb-1 ${
                open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}
            />
            {/* Bottom line */}
            <span 
              className={`block w-6 h-0.5 bg-primary transform transition-all duration-300 ease-in-out ${
                open ? '-rotate-45 -translate-y-2' : 'rotate-0'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden border-t-4 border-primary bg-black/95 backdrop-blur transition-all duration-300 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className={`mx-auto max-w-6xl px-4 py-4 grid gap-4 transition-all duration-300 ease-in-out ${
          open ? 'transform translate-y-0' : 'transform -translate-y-4'
        }`}>
            <a href="#home" className="text-white hover:text-primary transition-colors" onClick={e => handleAnchorClick(e, '#home')}>Home</a>
            <a href="#about" className="text-white hover:text-primary transition-colors" onClick={e => handleAnchorClick(e, '#about')}>About Us</a>
            <a href="#services" className="text-primary hover:text-white transition-colors" onClick={e => handleAnchorClick(e, '#services')}>Services</a>
            <a href="#testimonials" className="text-white hover:text-primary transition-colors" onClick={e => handleAnchorClick(e, '#testimonials')}>Testimonials</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors" onClick={e => handleAnchorClick(e, '#contact')}>Contact Us</a>
            <Button className="bg-black text-primary border-2 border-primary hover:bg-primary hover:text-black w-full font-bold rounded-full mt-2">Book Now</Button>
          </nav>
        </div>
      </header>
    </>
  )
}
