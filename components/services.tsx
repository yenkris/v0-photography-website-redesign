"use client"

import type React from "react"

import { ArrowRightIcon } from "./icons"

export function Services() {
  const services = [
    {
      title: "People",
      description:
        "Inspiring event coverage and empowering portraits, capturing your cherished moments and confident self-expression.",
      image: "/people-rotary-event-photography.jpg",
    },
    {
      title: "Landscapes & Nature",
      description:
        "Elevating landscapes and celebrating nature's beauty, capturing awe-inspiring scenes and serene tranquility.",
      image: "/cherry-blossoms-nature-photography.jpg",
    },
    {
      title: "Wildlife",
      description:
        "Documenting wildlife in their natural habitat, preserving the beauty and wonder of the natural world.",
      image: "/pelican-wildlife-photography.jpg",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  const handleImageProtection = (e: React.TouchEvent) => {
    e.preventDefault()
  }

  return (
    <section id="services" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-balance leading-tight">
            Capturing stellar moments, preserving every detail
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="space-y-4 group">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onContextMenu={handleContextMenu}
                  onTouchStart={handleImageProtection}
                  onTouchEnd={handleImageProtection}
                  draggable={false}
                />
              </div>
              <h3 className="text-2xl font-serif">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-accent hover:underline inline-flex items-center gap-1 group"
              >
                More info
                <ArrowRightIcon size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
