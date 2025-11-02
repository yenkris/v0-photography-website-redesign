"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClientLoggedIn, setIsClientLoggedIn] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const checkClientAuth = () => {
      if (typeof window !== "undefined") {
        const accessCode = sessionStorage.getItem("clientAccessCode")
        setIsClientLoggedIn(!!accessCode)
      }
    }

    checkClientAuth()
    const interval = setInterval(checkClientAuth, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const NavButton = ({ section, children }: { section: string; children: React.ReactNode }) => {
    if (isHomePage) {
      return (
        <button
          onClick={() => scrollToSection(section)}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {children}
        </button>
      )
    }
    return (
      <Link
        href={`/#${section}`}
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </Link>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {isHomePage ? (
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:opacity-80 transition-opacity"
            >
              <img src="/christine-yen-logo.png" alt="Chris Yen Photography" className="h-12 w-auto" />
            </button>
          ) : (
            <Link href="/" className="text-foreground hover:opacity-80 transition-opacity">
              <img src="/christine-yen-logo.png" alt="Chris Yen Photography" className="h-12 w-auto" />
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavButton section="about">About</NavButton>
            <NavButton section="gallery">Gallery</NavButton>
            <NavButton section="services">Services</NavButton>
            <Link href="/#pricing" className="text-sm font-medium hover:text-accent transition-colors">
              Pricing
            </Link>
            <NavButton section="contact">Contact</NavButton>
            <Link href="/client" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
              {isClientLoggedIn ? "My Gallery" : "Client Login"}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col p-4 gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-sm font-medium hover:text-accent transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm font-medium hover:text-accent transition-colors"
              >
                Services
              </button>
              <Link
                href="/#pricing"
                className="text-left text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm font-medium hover:text-accent transition-colors"
              >
                Contact
              </button>
              <Link
                href="/client"
                className="text-left text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isClientLoggedIn ? "My Gallery" : "Client Login"}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
