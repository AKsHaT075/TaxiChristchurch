export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
           
            <span className="font-bold text-white">Taxi Christchurch</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Christchurch’s reliable choice for city rides, airport transfers, and executive travel.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#cars">Our Cars</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Airport Transport</li>
            <li>Group Taxi</li>
            <li>Baby Seats</li>
            <li>Executive Travel</li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="font-semibold mb-3 text-white">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Phone: +64 21 000 0000</li>
            <li>Email: info@taxichristchurch.co.nz</li>
            <li>Address: 4 Corfe Street Ilam, Christchurch</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Taxi Christchurch. All rights reserved.</p>
          <p>Made with care in Christchurch.</p>
        </div>
      </div>
    </footer>
  )
}
