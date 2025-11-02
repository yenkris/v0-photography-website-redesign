"use client"

import type React from "react"
import Masonry from "react-masonry-css"
import Link from "next/link"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  const handleImageProtection = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  const photos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%202-JyyAZ7nvB2lQEDLGS2y8zhl0uJD7wb.jpg",
      alt: "Graduation celebration with historic university building",
      rotation: "rotate-2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P3060120%20%28with%20Logo%29-XRW7rRSqbCGoWS2jCrWSxhxvP0rHOd.jpg",
      alt: "Stage performance with flowing fabric",
      rotation: "-rotate-1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00020%20%28with%20Logo%29_Reduced-Xf4FGdntlQLAiIIEBlMjftx7Da9xDl.jpg",
      alt: "Outdoor portrait with tropical dress",
      rotation: "rotate-3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29.png-8bZuxVrg6AJVbN3dTOmrzRwy1WuqAl.jpeg",
      alt: "ANZAC Day ceremony handshake",
      rotation: "-rotate-2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P4253687%20%28with%20Logo%29-uFQ9FKWWN13ioy6zyEHZBDb2yOBWKe.jpg",
      alt: "Rotary volunteers at community BBQ",
      rotation: "rotate-1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%282%29.png-dEtJTMAr6eqYDU6XGSsVVaFzu9Zggv.jpeg",
      alt: "Friends group in urban plaza",
      rotation: "-rotate-3",
    },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <div className="space-y-2">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">Sydney Photography</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-balance">Chris Yen</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">Photographer</p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Capturing stellar moments, preserving every detail. Honest imagery through natural light and thoughtful
            composition.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/61478811835?text=Hi%20Chris%2C%20I'm%20interested%20in%20your%20photography%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors duration-300 font-medium"
            >
              WhatsApp Me
            </a>
            <Link
              href="/pricing"
              className="px-8 py-3 border border-border rounded-full hover:bg-muted transition-colors duration-300 font-medium"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Masonry breakpointCols={breakpointColumnsObj} className="gallery-grid" columnClassName="gallery-grid_column">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`group transition-all duration-500 hover:scale-105 hover:z-10 hover:rotate-0 ${photo.rotation}`}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                  onContextMenu={handleContextMenu}
                  onTouchStart={handleImageProtection}
                  onTouchEnd={handleImageProtection}
                  draggable={false}
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  )
}
