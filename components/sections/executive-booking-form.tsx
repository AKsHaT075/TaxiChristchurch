"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ExecutiveBookingForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setLoading(true)
    const name = fd.get("name") || "-"
    const email = fd.get("email") || "-"
    const pickup = fd.get("pickup") || "-"
    const dropoff = fd.get("dropoff") || "-"
    const datetime = fd.get("datetime") || "-"
    const passengers = fd.get("passengers") || "-"
    const babySeats = fd.get("babySeats") || "-"
    const message = fd.get("message") || "-"
    const content = `**New Booking (Executive Travel)**\n\n**Name:** ${name}\n**Email:** ${email}\n**Service:** Executive Travel\n**Passengers:** ${passengers}\n**Baby Seats:** ${babySeats}\n**Pickup:** ${pickup}\n**Dropoff:** ${dropoff}\n**Date/Time:** ${datetime}\n**Corporate Requirements:** ${message}`
    try {
      await fetch("https://discord.com/api/webhooks/1415554573107466302/cuZ4hxaTzcOsDpIKCPInfbuwUx--6CGeV0MYBP9oHJfqBRn7nM7o20l3eorM93aWM9g9", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
      })
      toast({
        title: "Executive booking submitted",
        description: "Thanks! We'll contact you soon for your executive transport.",
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
      <Input name="name" placeholder="Your Name" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" required />
      <Input name="email" placeholder="Company Email" type="email" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" required />
      <Input name="pickup" placeholder="Pickup Address" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" required />
      <Input name="dropoff" placeholder="Destination Address" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" required />
      <Input name="datetime" placeholder="Date & Time Required" className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500" required />
      <select name="passengers" className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
        <option value="" disabled selected>Number of Passengers</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <select name="babySeats" className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
        <option value="" disabled selected>Number of Baby Seats</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <Textarea name="message" placeholder="Special Corporate Requirements..." rows={4} className="border-slate-200 focus:border-purple-500 focus:ring-purple-500" />
      <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300" type="submit" disabled={loading}>
        {loading ? "Booking..." : "Book Executive Transport"}
      </Button>
    </form>
  )
}
