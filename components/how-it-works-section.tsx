import { Button } from "@/components/ui/button"

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-16 bg-teal-500 rounded"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mx-6">How It Works</h2>
            <div className="h-1 w-16 bg-teal-500 rounded"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our blockchain platform ensures secure, transparent, and fast digital transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Make Payments */}
          <div className="bg-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                <div className="w-8 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">MAKE PAYMENTS</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Send and receive secure payments instantly with blockchain technology
            </p>
          </div>

          {/* Create Wallet */}
          <div className="bg-teal-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              <div className="w-12 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center relative">
                <div className="w-8 h-6 bg-white rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">CREATE YOUR WALLET</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Easily create a secure blockchain wallet for your digital assets
            </p>
          </div>

          {/* Buy/Sell Orders */}
          <div className="bg-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              <div className="w-12 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-lg">₿</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">BUY OR SELL ORDERS</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Place buy or sell orders instantly on our secure blockchain platform
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">Read More</Button>
        </div>
      </div>
    </section>
  )
}
