import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, MapPin, Clock, Shield, CheckCircle, Star, Luggage } from "lucide-react"
import Header from "@/components/site-header"
import Footer from "@/components/site-footer"

export default function GroupTaxiPage() {
  const recentServices = [
    "Book New Taxi Christchurch",
    "Group Taxi",
    "Airport Transport",
    "Top Christchurch Airport",
    "Executive Travel"
  ]

  const features = [
    {
      icon: Users,
      title: "Up to 8 Passengers",
      description: "Spacious vans for large groups"
    },
    {
      icon: Luggage,
      title: "Ample Storage",
      description: "Extra luggage space for all passengers"
    },
    {
      icon: Shield,
      title: "Professional Drivers",
      description: "Experienced drivers for safe travel"
    },
    {
      icon: CheckCircle,
      title: "Group Discounts",
      description: "Special rates for group bookings"
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('/christchurch-city-night-taxi.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-yellow-400 mb-4 text-sm">
              <span>Home</span>
              <span>→</span>
              <span>Group Taxis Christchurch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Group Taxis Christchurch
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
                <h3 className="text-2xl font-bold mb-8 text-slate-800">Book Your Group Taxi</h3>
                <form className="space-y-5">
                  <Input placeholder="Your Name" className="h-12 border-slate-200 focus:border-green-500 focus:ring-green-500" />
                  <Input placeholder="Your Email" type="email" className="h-12 border-slate-200 focus:border-green-500 focus:ring-green-500" />
                  <Input placeholder="Pickup Address" className="h-12 border-slate-200 focus:border-green-500 focus:ring-green-500" />
                  <Input placeholder="Destination Address" className="h-12 border-slate-200 focus:border-green-500 focus:ring-green-500" />
                  <Input placeholder="Pickup Date and Time" className="h-12 border-slate-200 focus:border-green-500 focus:ring-green-500" />
                  <select className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="" disabled selected>Number of Passengers</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                  </select>
                 <select className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="" disabled selected>Number of Baby Seats</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                     <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>

                  </select>
                  <Textarea placeholder="Special Requirements..." rows={4} className="border-slate-200 focus:border-green-500 focus:ring-green-500" />
                  <Button className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Group Taxi
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
                <h2 className="text-4xl font-bold mb-8 text-slate-800">Group Taxi Christchurch</h2>
                
                {/* Hero Image */}
                <div className="mb-10">
                  <img 
                    src="/van.jpg" 
                    alt="Group Taxi Christchurch"
                    className="w-full h-120 object-cover rounded-xl shadow-2xl"
                  />
                </div>

                <div className="prose max-w-none space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Christchurch Taxis – Your Reliable Group Transport Solution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Whether you're traveling with family, friends, or colleagues, our group taxi services provide 
                      comfortable and convenient transportation for up to 8 passengers. Our spacious vans ensure 
                      everyone travels together while enjoying professional service and competitive rates.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      Perfect for airport transfers, corporate events, wedding parties, tourist groups, or any occasion 
                      where multiple passengers need reliable transportation. Our modern fleet of vehicles is equipped 
                      with ample luggage space and comfortable seating to make your journey pleasant and stress-free.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">Comprehensive Group Transport Services</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Our group taxi services are designed to accommodate various group sizes and requirements:
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
                    <h4 className="text-xl font-bold mb-3">1. Spacious Van Fleet</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our modern van fleet can accommodate up to 8 passengers comfortably, with individual seats, 
                      air conditioning, and generous luggage compartments. All vehicles are regularly maintained 
                      and cleaned to ensure the highest standards of comfort and safety.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">2. Flexible Booking Options</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Book online or by phone with our easy reservation system. We offer flexible pickup and 
                      drop-off arrangements, including multiple stops if needed. Our customer service team is 
                      available to help plan your group journey efficiently.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">3. Professional Group Transport</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our experienced drivers are trained to handle group transportation professionally. They 
                      understand the importance of keeping groups together and ensuring everyone arrives safely 
                      and on time at their destination.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">4. Competitive Group Rates</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Enjoy special group rates that make traveling together more economical than multiple 
                      individual taxis. We offer transparent pricing with no hidden fees, and group discounts 
                      for larger bookings or regular customers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">Perfect for Any Group Occasion</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Whether it's a family outing, corporate team building, airport transfers for tour groups, 
                      or special celebrations, our group taxi service ensures everyone travels together comfortably. 
                      Book with confidence knowing your group transportation is in professional hands.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                    Book Group Taxi Now
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
