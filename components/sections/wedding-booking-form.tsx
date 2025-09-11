"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function WeddingBookingForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setLoading(true)
    const name = fd.get("name") || "-"
    const email = fd.get("email") || "-"
    const venue = fd.get("venue") || "-"
    const date = fd.get("date") || "-"
    const time = fd.get("time") || "-"
    const passengers = fd.get("passengers") || "-"
    const babySeats = fd.get("babySeats") || "-"
    const message = fd.get("message") || "-"
    const content = `**New Booking (Wedding Taxis)**\n\n**Bride/Groom:** ${name}\n**Email:** ${email}\n**Service:** Wedding Taxis\n**Passengers:** ${passengers}\n**Baby Seats:** ${babySeats}\n**Wedding Venue:** ${venue}\n**Ceremony Date:** ${date}\n**Pickup Time:** ${time}\n**Special Requirements:** ${message}`
    try {
      await fetch("https://discord.com/api/webhooks/1415554573107466302/cuZ4hxaTzcOsDpIKCPInfbuwUx--6CGeV0MYBP9oHJfqBRn7nM7o20l3eorM93aWM9g9", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
      })
      toast({
        title: "Wedding transport booking submitted",
        description: "Thanks! We'll contact you soon for your special day transport.",
      })
      e.currentTarget.reset()
    } catch (err) {
      toast({
        title: "Error",
        description: "There was a problem sending your booking. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <Input name="name" placeholder="Bride/Groom Name" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" required />
      <Input name="email" placeholder="Contact Email" type="email" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" required />
      <Input name="venue" placeholder="Wedding Venue Address" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" required />
      <Input name="date" placeholder="Ceremony Date" type="date" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" required />
      <Input name="time" placeholder="Pickup Time" type="time" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" required />
      <Input name="passengers" placeholder="Number of Passengers" className="h-12 border-slate-200 focus:border-rose-500 focus:ring-rose-500" required />
      <select name="babySeats" className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
        <option value="0" selected>Number of Baby Seats: 0</option>
        <option value="1">Number of Baby Seats: 1</option>
        <option value="2">Number of Baby Seats: 2</option>
        <option value="3">Number of Baby Seats: 3</option>
      </select>
      <Textarea name="message" placeholder="Special Wedding Requirements..." rows={4} className="border-slate-200 focus:border-rose-500 focus:ring-rose-500" />
      <Button className="w-full h-12 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300" type="submit" disabled={loading}>
        {loading ? "Booking..." : "Book Wedding Transport"}
      </Button>
    </form>
  )
}
