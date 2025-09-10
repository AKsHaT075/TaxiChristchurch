import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, UserRoundCheck, Route } from "lucide-react"

const STEPS = [
  {
    title: "Book Your Ride",
    desc: "Send us your trip details to get a confirmed booking with transparent pricing.",
    Icon: PhoneCall,
  },
  {
    title: "Meet Your Driver",
    desc: "Get driver and vehicle details with live updates for on-time pickup.",
    Icon: UserRoundCheck,
  },
  {
    title: "Relax and Enjoy",
    desc: "Safe, clean vehicles and local drivers to get you there comfortably.",
    Icon: Route,
  },
]

export default function Steps() {
  return (
  <section className="bg-black border-t border-primary/10" aria-label="How it works" id="steps">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <div className="w-8 h-px bg-primary"></div>
            How It Works
            <div className="w-8 h-px bg-primary"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">3 Easy Steps for Hiring Our Car</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Simple, fast, and reliable - get your ride in just a few clicks</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map(({ title, desc, Icon }, index) => (
            <Card key={title} className="h-full bg-white border-2 border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="relative">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary flex items-center justify-center text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-black">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
