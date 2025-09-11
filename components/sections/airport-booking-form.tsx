"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function AirportBookingForm() {
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
    const content = `**New Booking (Airport Transfer)**\n\n**Name:** ${name}\n**Email:** ${email}\n**Service:** Airport Transfer\n**Passengers:** ${passengers}\n**Baby Seats:** ${babySeats}\n**Pickup:** ${pickup}\n**Dropoff:** ${dropoff}\n**Date/Time:** ${datetime}\n**Message:** ${message}`
    try {
      await fetch("https://discord.com/api/webhooks/1415554573107466302/cuZ4hxaTzcOsDpIKCPInfbuwUx--6CGeV0MYBP9oHJfqBRn7nM7o20l3eorM93aWM9g9", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
      })
      toast({
        title: "Booking submitted",
        description: "Thanks! We'll contact you soon for your airport transfer.",
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
    <form className="space-y-4" onSubmit={onSubmit}>
      <Input name="name" placeholder="Your Name" className="h-12" required />
      <Input name="phone" placeholder="Your Phone" type="tel" className="h-12" required />
      <Input name="email" placeholder="Your Email (Optional)" type="email" className="h-12" />
      <Input name="pickup" placeholder="Pickup Address" className="h-12" required />
      <Input name="dropoff" placeholder="Destination Address" className="h-12" required />
      <Input name="datetime" placeholder="Pickup Date and Time" className="h-12" required />
      <select name="passengers" className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
        <option value="" disabled selected>Number of Passengers</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        {/* 1 to 16 */}
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
      </select>
      <select name="babySeats" className="h-12 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
        <option value="" disabled selected>Number of Baby Seats</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
          <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        {/* 1 to 16 */}
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>

      </select>
      <Textarea name="message" placeholder="Special Message..." rows={4} />
      <Button className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" type="submit" disabled={loading}>
        {loading ? "Booking..." : "Book Now"}
      </Button>
    </form>
  )
}