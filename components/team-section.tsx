import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "DANIEL CANUP",
      role: "CEO & Founder",
      image: "/professional-businessman-with-glasses.jpg",
    },
    {
      name: "JAMES HESS",
      role: "Head of Operations",
      image: "/professional-businessman-middle-aged.jpg",
    },
    {
      name: "STEVEN GAUERKE",
      role: "Engineering",
      image: "/professional-engineer-developer.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-16 bg-teal-500 rounded"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mx-6">Excellent Team Workers</h2>
            <div className="h-1 w-16 bg-teal-500 rounded"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200 p-2">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-6">{member.role}</p>

                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
