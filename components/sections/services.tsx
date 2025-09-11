import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Users, Heart, Star, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const items = [
    {
      title: "Airport Transport",
      img: "/aboutus-1.avif",
      desc: "Reliable airport pickups and drop-offs across Christchurch.",
      icon: Plane,
      badge: "24/7",
      color: "bg-blue-500",
      link: "/airport-transport-christchurch",
    },
    {
      title: "Group Taxi",
      img: "/van.jpg",
      desc: "Comfortable vans for groups, with ample luggage space.",
      icon: Users,
      badge: "Up to 8 seats",
      color: "bg-green-500",
      link: "/group-taxi",
    },
    {
      title: "Wedding Taxis",
      img: "/weeding.webp",
      desc: "Elegant transportation for your special wedding day.",
      icon: Heart,
      badge: "Special Day",
      color: "bg-rose-500",
      link: "/wedding-taxis",
    },
    {
      title: "Executive Travel",
      img: "/tesla.jpg",
      desc: "Premium vehicles for business and special occasions.",
      icon: Star,
      badge: "Premium",
      color: "bg-purple-500",
      link: "/executive-travel",
    },
  ]
  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <Phone className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Professional Taxi Services in
            <span className="text-yellow-500"> Christchurch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Choose from our range of reliable transportation services designed to meet your specific travel needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Link key={service.title} href={service.link} className="group">
                <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-yellow-400 hover:-translate-y-2">

                  {/* Image Section */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={service.img || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-3 py-1">
                        {service.badge}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white group-hover:text-black" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {service.desc}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-yellow-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA - Full Width */}
      <div className="bg-black w-full mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center py-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us for personalized transportation services tailored to your specific requirements.
              We're here to make your journey comfortable and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="tel:+64123456789"
                className="bg-yellow-400 hover:bg-white text-black hover:text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg text-center"
              >
                📞 Call Now: +64 225 286 415
              </Link>
              <Link
                href="#contact"
                className="bg-transparent border-2 border-white hover:bg-yellow-400 text-yellow-400 hover:text-black font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg text-center"
              >
                💬 Get Quote Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
