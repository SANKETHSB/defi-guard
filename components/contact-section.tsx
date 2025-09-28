"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-teal-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-balance">REQUEST A CALL BACK</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/80 focus:border-white/50 h-12"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/80 focus:border-white/50 h-12"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/80 focus:border-white/50 h-12"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/80 focus:border-white/50 h-12"
                />
              </div>

              <Textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/80 focus:border-white/50"
              />

              <Button type="submit" size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">
                SEND
              </Button>
            </form>
          </div>

          {/* Bitcoin Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl font-bold text-white">₿</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
