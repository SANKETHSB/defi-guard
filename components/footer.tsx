import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const companyLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  const supportLinks = [
    { name: "FAQ", href: "#faq" },
    { name: "Terms Of Services", href: "#terms" },
    { name: "404", href: "#404" },
    { name: "Register", href: "#register" },
    { name: "Login", href: "#login" },
    { name: "Coming Soon", href: "#coming-soon" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ]

  return (
    <footer className="bg-dark-section text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">OUR COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-teal-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">SUPPORT</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-teal-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded mt-0.5 flex-shrink-0"></div>
                <p className="text-white/70">105 Todd Weaver Rd, Alto GA, 30510</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded flex-shrink-0"></div>
                <p className="text-white/70">(802) 202-1022</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded flex-shrink-0"></div>
                <p className="text-white/70">support@defiguard.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">NEWSLETTER</h3>
            <div className="space-y-4">
              <div className="flex">
                <Input
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-r-none focus:border-teal-400"
                />
                <Button className="bg-teal-500 hover:bg-teal-600 rounded-l-none">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-teal-500 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-teal-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-white">2025 All Rights Reserved. Design by DefiGuard</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
