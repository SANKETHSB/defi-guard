export function StatsSection() {
  return (
    <section className="py-20 bg-stats-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/blockchain-network-pattern.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-lg font-medium mb-2">The Cryptocurrency</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            <span className="text-teal-400">AWESOME FACTS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Projects Completed */}
          <div className="text-center group">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="w-10 h-8 bg-white rounded-sm flex items-center justify-center relative">
                  <div className="w-6 h-5 bg-gray-300 rounded-sm flex items-center justify-center">
                    <div className="w-4 h-3 bg-gray-600 rounded-sm"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="text-5xl font-bold text-white mb-4">1150</div>
            <h3 className="text-xl font-semibold text-white/90 mb-2">PROJECT COMPLETED</h3>
          </div>

          {/* Happy Clients */}
          <div className="text-center group">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-black rounded-full mb-1"></div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="text-5xl font-bold text-white mb-4">5223</div>
            <h3 className="text-xl font-semibold text-white/90 mb-2">HAPPY CLIENTS</h3>
          </div>

          {/* Workers Employed */}
          <div className="text-center group">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center relative">
                  <div className="flex space-x-1">
                    <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-5xl font-bold text-white mb-4">4522</div>
            <h3 className="text-xl font-semibold text-white/90 mb-2">WORKERS EMPLOYED</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
