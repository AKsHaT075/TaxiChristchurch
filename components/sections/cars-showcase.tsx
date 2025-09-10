export default function CarsShowcase() {
  return (
  <section id="cars" className="w-full bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
            <div className="w-8 h-px bg-primary"></div>
            Our Fleet
            <div className="w-8 h-px bg-primary"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-pretty text-black">Let's check available cars</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Modern, clean, and reliable vehicles for every journey</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/aboutus-1.avif" 
              alt="Compact taxi car" 
              className="relative w-full rounded-lg shadow-2xl border border-primary/20 transition-transform duration-300 group-hover:scale-[1.02]" 
            />
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
              <h3 className="font-semibold">Compact Cars</h3>
              <p className="text-sm text-slate-300">Perfect for city travel</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/weeding.webp" 
              alt="Taxi van for groups" 
              className="relative w-full rounded-lg shadow-2xl border border-primary/20 transition-transform duration-300 group-hover:scale-[1.02]" 
            />
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
              <h3 className="font-semibold">Group Vans</h3>
              <p className="text-sm text-slate-300">Spacious for larger groups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
