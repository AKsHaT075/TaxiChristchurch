import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Briefcase, Clock, Shield, CheckCircle, Crown, Car, Wifi } from "lucide-react"
import Header from "@/components/site-header"
import Footer from "@/components/site-footer"

export default function ExecutiveTravelPage() {
  const recentServices = [
    "Book New Taxi Christchurch",
    "Executive Travel",
    "Airport Transport",
    "Wedding Taxis",
    "Group Taxi"
  ]

  const features = [
    {
      icon: Crown,
      title: "Premium Vehicles",
      description: "Luxury sedans and executive cars"
    },
    {
      icon: Briefcase,
      title: "Business Travel",
      description: "Professional corporate transport"
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "WiFi and charging ports available"
    },
    {
      icon: Shield,
      title: "Discrete Service",
      description: "Professional and confidential"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
       <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('/christchurch-city-night-taxi.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-yellow-400 mb-4 text-sm">
              <span>Home</span>
              <span>→</span>
              <span>Executive Travel Christchurch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Executive Travel Christchurch
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
                <h3 className="text-2xl font-bold mb-8 text-slate-800">Book Executive Transport</h3>
                <form className="space-y-5">
                  <Input placeholder="Your Name" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" />
                  <Input placeholder="Company Email" type="email" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" />
                  <Input placeholder="Pickup Address" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" />
                  <Input placeholder="Destination Address" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" />
                  <Input placeholder="Date & Time Required" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" />
                  <select className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="" disabled selected>Number of Passengers</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                 <select className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="" disabled selected>Number of Baby Seats</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  
                  </select>
                  <Textarea placeholder="Special Corporate Requirements..." rows={4} className="border-slate-200 focus:border-purple-500 focus:ring-purple-500" />
                  <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Executive Transport
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
                <h2 className="text-4xl font-bold mb-8 text-slate-800">Executive Travel Christchurch</h2>
                
                {/* Hero Image */}
                <div className="mb-10">
                  <img 
                    src="/tesla.jpg" 
                    alt="Executive Travel Christchurch"
                    className="w-full h-120 object-cover rounded-xl shadow-2xl"
                  />
                </div>

                <div className="prose max-w-none space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Christchurch Taxis – Premium Executive Travel Services</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Experience the pinnacle of professional transportation with our executive travel services. 
                      Designed for business professionals, corporate executives, and discerning clients who 
                      demand the highest standards of service, comfort, and reliability for their transportation needs.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      Our executive travel service combines luxury vehicles, professional chauffeurs, and 
                      personalized service to ensure your journey is productive, comfortable, and reflects 
                      the professional image you wish to project. Whether for business meetings, corporate 
                      events, or important occasions, we deliver excellence in every detail.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">Premium Executive Transport Features</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Our comprehensive executive services include:
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
                    <h4 className="text-xl font-bold mb-3">1. Luxury Vehicle Fleet</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our executive fleet features premium sedans and luxury vehicles, all immaculately 
                      maintained and equipped with modern amenities. Each vehicle offers spacious, comfortable 
                      interiors with leather seating, climate control, and a smooth, quiet ride that allows 
                      you to work or relax during your journey.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">2. Professional Chauffeur Service</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our experienced chauffeurs are professionally trained, impeccably dressed, and 
                      committed to providing discrete, courteous service. They understand the importance 
                      of punctuality, confidentiality, and creating a professional atmosphere that meets 
                      executive standards.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">3. Corporate Account Management</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We offer dedicated corporate account management with streamlined booking processes, 
                      monthly billing, detailed reporting, and priority service. Our corporate solutions 
                      are designed to meet the ongoing transportation needs of businesses and their executives.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">4. Meeting and Event Transportation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Coordinate transportation for business meetings, corporate events, conferences, and 
                      client entertainment. We provide reliable scheduling, multiple pickup and drop-off 
                      points, and can accommodate groups of various sizes with our executive vehicle options.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">5. Airport Executive Transfers</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our premium airport transfer service includes flight monitoring, meet and greet service, 
                      assistance with luggage, and direct transportation to your destination. We ensure 
                      executive travelers experience seamless transitions from airport to their final destination.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">6. Flexible Hourly Services</h4>
                    <p className="text-gray-600 leading-relaxed">
                      For executives with multiple appointments or events, we offer flexible hourly charter 
                      services. Your dedicated chauffeur and vehicle remain available throughout your 
                      schedule, providing the ultimate in convenience and time management.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">Excellence in Executive Transportation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Trust Christchurch Taxis to deliver the executive transportation experience that matches 
                      your professional standards. Our commitment to excellence, attention to detail, and 
                      understanding of corporate needs makes us the preferred choice for executive travel 
                      in Christchurch. Contact us to discuss your executive transportation requirements.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                    Book Executive Transport Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
