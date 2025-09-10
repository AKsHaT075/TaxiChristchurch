"use client"

import type React from "react"
import { Fragment, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Header from "@/components/site-header"
import Footer from "@/components/site-footer"
import Services from "@/components/sections/services"
import CarsShowcase from "@/components/sections/cars-showcase"
import Testimonials from "@/components/sections/testimonials"
import WhyChoose from "@/components/sections/why-choose"
import Steps from "@/components/sections/steps"
import Contact from "@/components/sections/contact"

export default function HomePage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Quote request received",
        description: `Thanks ${fd.get("name") || "there"} — we'll contact you shortly.`,
      })
      e.currentTarget.reset()
    }, 700)
  }

  return (
    <Fragment>
      <Header />
      <main>
        {/* Hero + Quote Form */}
        <section
          id="home"
          className="relative min-h-[600px] flex items-center bg-black"
          style={{
            backgroundImage: "url('/banner2-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label="Hero"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-20 grid gap-8 md:grid-cols-2 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-600/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <p className="uppercase tracking-wider text-sm text-orange font-semibold">Taxis Christchurch</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Christchurch taxis: the <span className="text-orange-400">easy, safe way</span> to get there quickly
              </h1>
              <p className="text-slate-300 leading-relaxed text-lg">
                Making city travel easy and reliable for you. Available 24/7 across Christchurch and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+64210000000" className="inline-flex" aria-label="Call Taxis Christchurch">
                  <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700 font-semibold px-8">
                    📞 Call Now
                  </Button>
                </a>
                <a href="#quote" className="inline-flex">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    Get a Quote
                  </Button>
                </a>
              </div>
            </div>

            <Card id="quote" className="backdrop-blur-md bg-white/95 shadow-xl border border-white/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-slate-900">Get a Quote</CardTitle>
                <p className="text-slate-600">Quick and easy booking in seconds</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500" />
                    <Input
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile Number"
                      required
                      className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500" />
                    <Select name="service" defaultValue="">
                      <SelectTrigger className="h-12 w-auto border-slate-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select Your Service" />
                      </SelectTrigger>
                      
                      <SelectContent className="w-full max-w-none">
                        <SelectItem value="standard">🚕 Standard Taxi</SelectItem>
                        <SelectItem value="airport">✈️ Airport Transfer</SelectItem>
                        <SelectItem value="exec">🏢 Executive Travel</SelectItem>
                        <SelectItem value="group">👥 Group Taxi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="passengers"
                      name="passengers"
                      type="number"
                      min={1}
                      placeholder=" Passengers"
                      className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500" />
                   <Input
                      id="babySeats"
                      name="babySeats"
                      type="number"
                      min={0}
                      placeholder="Baby Seats"
                      className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      placeholder="Date Picker"
                      className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500" />
                    <div></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="pickup"
                      name="pickup"
                      placeholder="Pickup Christchurch"
                      className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500" />
                    <Input
                      id="dropoff"
                      name="dropoff"
                    placeholder="Drop Location"
                    className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500" />
                </div>

                <div className="col-span-2">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any Message to Driver"
                    rows={3}
                    className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 resize-none" />
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold h-12 px-8 transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Reserve Car Now"}
                  </Button>
                </div>
              </form>
            </CardContent>
            </Card>
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full bg-white relative py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,204,0,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(255,204,0,0.05)_0%,_rgba(0,0,0,0)_70%)]"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/20 rounded-2xl blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
              <div className="relative">
                <img
                  src="/merced1.avif"
                  alt="Professional yellow taxi on Christchurch street"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border border-primary/20 transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="absolute top-6 left-6 bg-primary text-black px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg transform -rotate-2">
                  🚕 Professional Service
                </div>
                {/* Additional decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            <div className="space-y-8 relative">
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-primary to-transparent"></div>

              <div className="pl-6">
                <div className="inline-flex items-center gap-3 text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                  <div className="w-10 h-[2px] bg-primary"></div>
                  <span className="text-base">About Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-pretty leading-tight text-black mt-4">
                  Ride with <span className="text-primary relative">
                    confidence
                    <span className="absolute -bottom-1 left-0 w-full h-[0.5px] bg-primary/30"></span>
                  </span>,
                  <br />wherever you are in Christchurch
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-lg pl-6">
                Taxis Christchurch delivers safe, punctual, and reliable rides across the city and beyond. From airport
                transfers and executive travel to group bookings and baby seats, we have the fleet and drivers to match
                your needs.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
                  <div className="relative text-center p-6 bg-primary/90 rounded-xl border border-primary shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="text-3xl font-bold text-black mb-1">24/7</div>
                    <div className="text-sm font-medium text-black/80">Always Available</div>
                  </div>
                </div>
                <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
                  <div className="relative text-center p-6 bg-primary/90 rounded-xl border border-primary shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="text-3xl font-bold text-black mb-1">5★</div>
                    <div className="text-sm font-medium text-black/80">Rated Service</div>
                  </div>
                </div>
              </div>

              <div className="pl-6">
                <a href="#contact" className="inline-block">
                  <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5">
                    Speak With Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <CarsShowcase />

      <Testimonials />

      <WhyChoose />

      <section className="relative py-16 md:py-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"></div>
        <div className="relative mx-auto max-w-4xl px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <div className="w-8 h-px bg-primary"></div>
            Ready to Ride?
            <div className="w-8 h-px bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pretty text-white">Ready to book your ride?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Get in touch with our friendly team and experience the best taxi service in Christchurch.
          </p>
          <a href="#contact">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 py-4 shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              Contact Us Now
            </Button>
          </a>
        </div>
      </section>

      <Contact />

      <Steps />
      </main>
      <Footer />
    </Fragment>
  )
}
