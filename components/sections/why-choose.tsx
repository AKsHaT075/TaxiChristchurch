import { Shield, Clock, CheckCircle2 } from "lucide-react"

const FEATURES = [
  {
    title: "Comfort and Safety",
    icon: Shield,
    desc: "We prioritize comfort and safety with licensed drivers and well-maintained vehicles.",
    number: "01",
  },
  {
    title: "Available Around the Clock",
    icon: Clock,
    desc: "24/7 service for early flights, late nights, and everything in between.",
    number: "02",
  },
  {
    title: "Reliable Service",
    icon: CheckCircle2,
    desc: "Large, modern fleet and pro drivers. We show up and get you there on time.",
    number: "03",
  },
]

export default function WhyChoose() {
  return (
  <section className="bg-white border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
              <div className="w-8 h-px bg-primary"></div>
              Why Choose Us
              <div className="w-8 h-px bg-primary"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-pretty text-black">
              Your hassle-free ride in Christchurch
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              We deliver dependable, on-time rides at transparent prices with professional drivers and a clean fleet.
            </p>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/yellow-taxi-illustration.jpg"
                alt="Yellow taxi illustration"
                className="relative rounded-lg shadow-2xl border border-primary/20 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <ul className="grid gap-6">
            {FEATURES.map((f) => (
              <li
                key={f.title}
                className="rounded-lg border-2 border-primary/10 bg-white p-6 flex items-start gap-4 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-black">{f.title}</h3>
                    <span className="text-primary font-bold text-lg">{f.number}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
