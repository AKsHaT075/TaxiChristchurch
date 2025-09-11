import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plane, Clock, Users, Shield, CheckCircle, Star } from "lucide-react"

import Header from "@/components/site-header"
import Footer from "@/components/site-footer"
import AirportBookingForm from "@/components/sections/airport-booking-form"

export default function AirportTransportPage() {
  const recentServices = [
    "Book New Taxi Christchurch",
    "Baby Seats",
    "Group Travel",
    "Top Christchurch Airport",
    "Airport Transport Christchurch"
  ]

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock airport transfers"
    },
    {
      icon: Shield,
      title: "Flight Tracking",
      description: "We monitor your flight for delays"
    },
    {
      icon: Users,
      title: "Meet & Greet",
      description: "Professional driver service"
    },
    {
      icon: CheckCircle,
      title: "Fixed Pricing",
      description: "No surge pricing or hidden fees"
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('/christchurch-city-night-taxi.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-yellow-400 mb-4 text-sm">
              <span>Home</span>
              <span>→</span>
              <span>Airport Transport Christchurch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Airport Transport Christchurch
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Services */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Recent Services</h3>
                <div className="space-y-2">
                  {recentServices.map((service, index) => (
                    <div key={index} className="bg-black text-white px-4 py-2 rounded text-sm font-medium">
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-slate-800">Book Your Taxi</h3>
                <AirportBookingForm />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-4 rounded-t-xl">
              <Badge variant="secondary" className="bg-black text-yellow-400 font-semibold px-4 py-2">
                SERVICE DETAILS
              </Badge>
            </div>
            
            <Card className="rounded-t-none shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-10">
                <h2 className="text-4xl font-bold mb-8 text-slate-800">Airport Transport Christchurch</h2>
                
                {/* Hero Image */}
                <div className="mb-10">
                  <img 
                    src="/aboutus-1.avif" 
                    alt="Airport Transport Christchurch"
                    className="w-full h-120 object-cover rounded-xl shadow-2xl"
                  />
                </div>

                <div className="prose max-w-none space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-slate-800">Christchurch Taxis – Your Reliable Airport Transport Christchurch</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Christchurch airport transfers can be beautifully landscaped, vibrant and welcoming 
                      hospitality, but after long flights, it can be daunting to navigate such a large city – that's where 
                      Christchurch taxis come in: they really get your airport arrival effortless & provide with the 
                      local knowledge they need to arrive at the beginning of a holiday.
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Plan your next airport transport service with Christchurch Taxis with ease! Let go of the hassles 
                      associated with waiting taxis or public transportation and book online using our user-friendly 
                      website – simply enter your flight details, choose your service of choice and choose a vehicle size 
                      to accommodate both yourself and your luggage! Plus, thanks to our brilliant ranking system we 
                      match you with our best drivers - for your convenience we're the superior choice.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-slate-800">Seamless Journeys Start Here: Tailored Airport Transport Services by Christchurch Taxis</h4>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                      Our services are tailored to suit a range of customer needs and preferences, including those that 
                      include pets. Take a look at what we have on offer:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                      {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                          <div key={index} className="flex items-start gap-5 p-6 bg-gradient-to-br from-gray-50 to-yellow-50 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-xl shadow-lg">
                              <IconComponent className="w-7 h-7 text-black" />
                            </div>
                            <div>
                              <h5 className="font-bold mb-3 text-slate-800 text-lg">{feature.title}</h5>
                              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-slate-800">1. Arranging Airport Transfers in Advance: Peace of Mind from Your First Touchdown</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Uncomplicated Booking: Our user-friendly online booking system makes reserving airport 
                      transport Christchurch services quick and simple, simply by entering your flight details, selecting 
                      your preferred pickup time, vehicle type, and any special requirements. Our system quickly 
                      calculates an estimated fare, giving you enough time to budget accordingly. Alternatively, for 
                      those preferring personalised assistance, we also offer telephone booking with one of our helpful 
                      customer service representatives.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-slate-800">2. Real-Time Flight Tracking</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Real-Time Flight Tracking: Simplify flight arrival monitoring with our system that automatically 
                      tracks your flight and adjusts pickup time accordingly, guaranteeing our driver will be waiting 
                      when you land regardless of arrival time.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-slate-800">3. Meet and Greet Service</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Confirmation and Updates: Get instant booking confirmation that includes information such as 
                      your driver's name, expected arrival time, contact information and any updates should anything 
                      change with your booking or travel plans.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-slate-800">Embrace the Christchurch Adventure with Confidence</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Christchurch Taxis will ensure a seamless arrival, setting the scene for an incredible airport 
                      transport Christchurch experience. Book airport transport or any of our taxi services online and let 
                      us make this trip memorable for you! We look forward to welcoming you into Christchurch and 
                      making the journey one that you will remember fondly for years.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                    Book Airport Transport Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
