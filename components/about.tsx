"use client"

import type React from "react"

export function About() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  const handleImageProtection = (e: React.TouchEvent) => {
    e.preventDefault()
  }

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-sm tracking-widest uppercase text-secondary-foreground/70">About Me</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-balance leading-tight">
              Person Behind the Camera
            </h2>
            <p className="text-lg text-secondary-foreground/90 leading-relaxed">
              Chris is a photographer based in Sydney.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-secondary-foreground/10">
              <img
                src="/chris-photographer-profile.png"
                alt="Chris - Photographer"
                className="w-full h-full object-cover"
                onContextMenu={handleContextMenu}
                onTouchStart={handleImageProtection}
                onTouchEnd={handleImageProtection}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
