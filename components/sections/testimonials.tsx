import { Card, CardContent } from "@/components/ui/card"

const DATA = [
  {
    name: "Tui M.",
    text: "I highly recommend Taxis Christchurch for reliable, on-time transportation in the city.",
  },
  { name: "Sarah M.", text: "Airport transfers are seamless every time. Great communication and clean vehicles." },
  { name: "Aroha S.", text: "Drivers are professional and rides are comfortable and safe." },
  { name: "Kai A.", text: "Excellent for business travel — punctual, courteous, and well-maintained cars." },
]

export default function Testimonials() {
  return (
  <section id="testimonials" className="relative bg-black">
      <div className="absolute inset-0 bg-black/80" aria-hidden />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/christchurch-city-street-at-night.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
            <div className="w-8 h-px bg-primary"></div>
            Testimonials
            <div className="w-8 h-px bg-primary"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-pretty text-white">What our clients say</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Real experiences from satisfied customers across Christchurch</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {DATA.map((t) => (
            <Card key={t.name} className="bg-white/95 backdrop-blur-sm border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-3">
                  <div className="text-primary text-2xl font-bold leading-none">"</div>
                  <div className="flex-1">
                    <p className="text-black leading-relaxed mb-3">{t.text}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <p className="text-sm font-medium text-black">— {t.name}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
