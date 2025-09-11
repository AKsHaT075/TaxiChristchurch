"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactSection() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setLoading(true)
    // Build message for Discord
    const name = fd.get("name") || "-"
    const phone = fd.get("phone") || "-"
    const email = fd.get("email") || "-"
    const subject = fd.get("subject") || "-"
    const message = fd.get("message") || "-"
    const content = `**Contact Us Submission**\n\n**Name:** ${name}\n**Phone:** ${phone}\n**Email:** ${email}\n**Subject:** ${subject}\n**Message:** ${message}`
    try {
      await fetch("https://discord.com/api/webhooks/1415554206391336960/LWuXGZ7-REKzfmkyPCWtINCw7US5tZ6P49CYkBzsmKHkUj-FiGgKRia2Gx1xppTZKE4-", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
      })
      toast({
        title: "Message sent",
        description: `Thanks ${name} — we’ll be in touch shortly.`,
      })
      e.currentTarget.reset()
    } catch (err) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
  <section id="contact" aria-label="Contact Taxis Christchurch" className="bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <div className="w-12 h-[2px] bg-primary"></div>
            <span>Contact Us</span>
            <div className="w-12 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-pretty text-black max-w-3xl mx-auto leading-tight">
            Ready to book your ride? <span className="text-primary">Let's connect</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Professional taxi services available 24/7. Get in touch for bookings, quotes, or any questions about our services.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 items-start">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Card className="bg-white border-2 border-primary/10 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
              <CardHeader className="pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-black flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">✉</span>
                  </div>
                  Send us a message
                </CardTitle>
                <p className="text-slate-600 mt-2">Fill out the form below and we'll get back to you within hours</p>
              </CardHeader>
              <CardContent className="pt-0">
                <form className="grid gap-6" onSubmit={onSubmit} aria-label="Contact form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-black">Your Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="John Smith" 
                        required 
                        className="h-12 border-2 border-slate-200 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-black">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="+64 225 286 415" 
                        required 
                        className="h-12 border-2 border-slate-200 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-black">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="you@email.com" 
                      className="h-12 border-2 border-slate-200 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold text-black">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Booking, Quote, Question..." 
                      className="h-12 border-2 border-slate-200 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-black">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your transportation needs..." 
                      rows={5} 
                      required 
                      className="border-2 border-slate-200 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-black text-white hover:bg-slate-800 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 h-12 font-semibold shadow-lg hover:shadow-xl"
                    disabled={loading}
                    aria-label="Send message"
                  >
                    {loading ? "Sending..." : "Send Message 📧"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-black">Call Now</h3>
                      <p className="text-slate-600 text-sm mb-2">Available 24/7 for immediate bookings</p>
                      <a className="text-primary font-bold text-xl hover:underline" href="tel:+64210000000">
                        +64 225 286 415
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-black">Email Us</h3>
                      <p className="text-slate-600 text-sm mb-2">For quotes and general inquiries</p>
                      <a className="text-primary font-bold hover:underline" href="mailto:info@taxischristchurch.co.nz">
                        info@taxischristchurch.co.nz
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

             

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-black">Service Hours</h3>
                      <p className="text-slate-600 text-sm mb-2">Always here when you need us</p>
                      <p className="text-black font-bold text-lg">24/7 Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
