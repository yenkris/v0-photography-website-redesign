"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

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

  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [isHomePage, pathname])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleClientLoginClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === "/client") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      const event = new Event("storage")
      window.dispatchEvent(event)
    } else {
      window.location.href = "/client"
    }
    setIsMenuOpen(false)
  }

  const NavButton = ({ section, children }: { section: string; children: React.ReactNode }) => {
    if (isHomePage) {
      return (
        <button
          onClick={() => {
            scrollToSection(section)
            setIsMenuOpen(false)
          }}
          className="text-sm font-medium hover:text-accent transition-colors text-left"
        >
          {children}
        </button>
      )
    }

    return (
      <Link
        href={`/#${section}`}
        className="text-sm font-medium hover:text-accent transition-colors text-left"
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </Link>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-background/90 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {isHomePage ? (
            <button onClick={() => scrollToSection("hero")} className="hover:opacity-80 transition-opacity">
              <Image
                src="/christine-yee-logo.png"
                alt="Christine Yee Photography"
                width={240}
                height={80}
                className="h-14 w-auto"
                priority
              />
            </button>
          ) : (
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/christine-yee-logo.png"
                alt="Christine Yee Photography"
                width={240}
                height={80}
                className="h-14 w-auto"
                priority
              />
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavButton section="about">About</NavButton>
            <NavButton section="services">Services</NavButton>
            <NavButton section="portfolio">Gallery</NavButton>
            <Link href="/pricing" className="text-sm font-medium hover:text-accent transition-colors">
              Pricing
            </Link>
            <button
              onClick={handleClientLoginClick}
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              {isClientLoggedIn ? "My Gallery" : "Client Login"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <NavButton section="about">About</NavButton>
              <NavButton section="services">Services</NavButton>
              <NavButton section="portfolio">Gallery</NavButton>
              <Link
                href="/pricing"
                className="text-sm font-medium hover:text-accent transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <button
                onClick={handleClientLoginClick}
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors text-left"
              >
                {isClientLoggedIn ? "My Gallery" : "Client Login"}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
