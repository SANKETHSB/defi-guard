"use client"

import { useState } from "react"

export function TestimonialsSection() {
  const [currentTestimonial] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What Is Says Our Clients One</h2>
          <p className="text-gray-600 text-lg">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Client Photo */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200 p-2 mb-6">
                <img
                  src="/placeholder.svg?key=client1"
                  alt="Magna Aliqua"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Magna Aliqua.</h3>

              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3">
              <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
