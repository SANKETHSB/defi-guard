import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-mesh flex items-center overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/blockchain-network-pattern.jpg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Blockchain
              <span className="text-teal-400 block">Development</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 text-pretty max-w-2xl">
              Build your own blockchain-based platform tailored to your business needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">
                GET A QUOTE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-3"
              >
                ABOUT US
              </Button>
            </div>
          </div>

          {/* Phone/Device Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                  {/* Screen content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 flex items-center justify-center">
                    {/* Bitcoin logo */}
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-white">₿</span>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-8 left-8 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-12 right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-16 right-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  </div>

                  {/* Screen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/20 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
