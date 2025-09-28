"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT", href: "#about" },
    { name: "FEATURES", href: "#features" },
    { name: "TEAM", href: "#team" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-bold text-lg font-space-grotesk shadow-lg">
              DEFIGUARD
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-all duration-200 text-sm font-medium hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-foreground/80 hover:text-foreground hover:bg-accent/50"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground hover:bg-accent/50">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="text-foreground">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-sm rounded-lg mt-2 border border-border/50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-200 hover:bg-accent/50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
