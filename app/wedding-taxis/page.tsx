import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Camera, Clock, Shield, CheckCircle, Star, Gift, Sparkles } from "lucide-react"
import Header from "@/components/site-header"
import Footer from "@/components/site-footer"

export default function WeddingTaxisPage() {
  const recentServices = [
    "Book New Taxi Christchurch",
    "Wedding Taxis",
    "Executive Travel",
    "Airport Transport",
    "Group Taxi"
  ]

  const features = [
    {
      icon: Heart,
      title: "Bridal Party Transport",
      description: "Elegant vehicles for the bride and groom"
    },
    {
      icon: Gift,
      title: "Wedding Packages",
      description: "Special rates for wedding day transport"
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description: "Luxurious backdrops for wedding photos"
    },
    {
      icon: Sparkles,
      title: "Special Decorations",
      description: "Vehicle decorations available on request"
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('/christchurch-city-night-taxi.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-yellow-400 mb-4 text-sm">
              <span>Home</span>
              <span>→</span>
              <span>Wedding Taxis Christchurch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wedding Taxis Christchurch
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Recent Services */}
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Recent Services</h3>
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
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-slate-800">Book Wedding Transport</h3>
                <form className="space-y-5">
                  <Input placeholder="Bride/Groom Name" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" />
                  <Input placeholder="Contact Email" type="email" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" />
                  <Input placeholder="Wedding Venue Address" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" />
                  <Input placeholder="Ceremony Date" type="date" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" />
                  <Input placeholder="Pickup Time" type="time" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" />
                  <Input placeholder="Number of Passengers" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" />
                  <select className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="0" selected>Number of Baby Seats: 0</option>
                    <option value="1">Number of Baby Seats: 1</option>
                    <option value="2">Number of Baby Seats: 2</option>
                    <option value="3">Number of Baby Seats: 3</option>
                  </select>
                  <Textarea placeholder="Special Wedding Requirements..." rows={4} className="border-slate-200 focus:border-rose-500 focus:ring-rose-500" />
                  <Button className="w-full h-12 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Wedding Transport
                  </Button>
                </form>
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
                <h2 className="text-4xl font-bold mb-8 text-slate-800">Wedding Taxis Christchurch</h2>
                
                {/* Hero Image */}
                <div className="mb-10">
                  <img 
                    src="/weeding.webp" 
                    alt="Wedding Taxis Christchurch"
                    className="w-full h-140 object-cover rounded-xl shadow-2xl"
                  />
                </div>

                <div className="prose max-w-none space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Christchurch Taxis – Your Perfect Wedding Day Transport</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Make your special day even more memorable with our elegant wedding transport services. 
                      We understand that your wedding day is one of the most important days of your life, 
                      and we're honored to be part of your celebration by providing luxurious, reliable, 
                      and professional transportation services.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      Our wedding taxi services ensure that you, your bridal party, and guests arrive at 
                      your ceremony and reception venues in style and comfort. From the bride's grand arrival 
                      to the couple's romantic departure, we provide seamless transportation that adds elegance 
                      to your wedding day timeline.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">Elegant Wedding Transport Solutions</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Our comprehensive wedding transport services include:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                          <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                            <div className="bg-primary/10 p-3 rounded-full">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h5 className="font-semibold mb-2">{feature.title}</h5>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">1. Bridal Party Transportation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our premium vehicles provide elegant transportation for the bride, groom, and bridal party. 
                      We ensure immaculate vehicles that serve as beautiful backdrops for your wedding photos 
                      while providing comfortable and stress-free transportation to your ceremony venue.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">2. Guest Transportation Services</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Coordinate transportation for your wedding guests with our group transport services. 
                      We can arrange shuttle services between hotels, ceremony venues, and reception locations, 
                      ensuring all your loved ones arrive safely and on time.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">3. Wedding Day Coordination</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our experienced drivers work closely with your wedding planner to ensure perfect timing 
                      throughout your special day. We understand wedding day schedules and provide punctual, 
                      professional service that allows you to focus on celebrating.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">4. Special Wedding Packages</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We offer customized wedding packages that can include multiple trips, waiting time, 
                      vehicle decorations, and special amenities. Our wedding coordinators work with you 
                      to create a transportation plan that fits your vision and budget.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">5. Luxury Vehicle Options</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Choose from our fleet of luxury vehicles, including executive sedans and spacious vans 
                      for larger bridal parties. All vehicles are professionally detailed and can be decorated 
                      with ribbons or flowers upon request to match your wedding theme.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">Creating Magical Wedding Memories</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Let Christchurch Taxis add elegance and convenience to your wedding day. Our professional 
                      wedding transport services ensure that your journey to "I do" is as beautiful and memorable 
                      as the destination. Contact us today to discuss your wedding transportation needs and let 
                      us help make your special day absolutely perfect.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                    Book Wedding Transport Now
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
