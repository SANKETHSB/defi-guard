import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?key=pqv77')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-16 bg-teal-500 rounded"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mx-6">Services We Provide</h2>
            <div className="h-1 w-16 bg-teal-500 rounded"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bitcoin Transaction */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border-4 border-teal-500">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Bitcoin Transaction</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              A Bitcoin transaction is a digital transfer of BTC between wallets using blockchain technology. It is
              verified by miners, recorded on a public ledger, and requires a sender, receiver, and digital signature.
            </p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2">READ MORE</Button>
          </div>

          {/* Bitcoin Exchange */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border-4 border-teal-500">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <div className="w-6 h-4 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-teal-500 text-xs font-bold">$</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Bitcoin Exchange</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              A Bitcoin exchange is a platform where users buy, sell, and trade Bitcoin for fiat or other
              cryptocurrencies. It provides real-time pricing, secure transactions, and liquidity for seamless crypto
              trading.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2">READ MORE</Button>
          </div>

          {/* Bitcoin Mining */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border-4 border-teal-500">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Bitcoin Mining</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Bitcoin mining is the process of validating transactions and adding them to the blockchain by solving
              complex cryptographic puzzles. Miners earn BTC rewards for securing the network using computational power.
            </p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2">READ MORE</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
