"use client"

import type React from "react"
import type { GalleryImage } from "@/types/gallery"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const categories = [
    { id: "all", label: "All" },
    { id: "people", label: "People" },
    { id: "events", label: "Events" },
    { id: "memories", label: "Memories" },
  ]

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "/outdoor-portrait-tropical-dress.jpg",
      alt: "Outdoor portrait with natural lighting",
      category: "people",
      aspect: "portrait",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%284%29.png-DS1l8T9NyR1OX3fOqWhJVdzD8jscFz.jpeg",
      alt: "Group of friends on historic building staircase",
      category: "people",
      aspect: "portrait",
    },
    {
      id: 3,
      src: "/stage-performance-flowing-fabric.jpg",
      alt: "Dynamic stage performance photography",
      category: "people",
      aspect: "portrait",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29.png-8bZuxVrg6AJVbN3dTOmrzRwy1WuqAl.jpeg",
      alt: "ANZAC Day ceremony with military officer and civic leaders",
      category: "events",
      aspect: "landscape",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P4253687%20%28with%20Logo%29-uFQ9FKWWN13ioy6zyEHZBDb2yOBWKe.jpg",
      alt: "Rotary International volunteers serving at community BBQ event",
      category: "events",
      aspect: "landscape",
    },
    {
      id: 6,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%282%29.png-dEtJTMAr6eqYDU6XGSsVVaFzu9Zggv.jpeg",
      alt: "Group photo in urban plaza with blue flowers",
      category: "events",
      aspect: "landscape",
    },
    {
      id: 7,
      src: "/graduation-celebration-photo.jpg",
      alt: "Graduation celebration with historic architecture",
      category: "memories",
      aspect: "portrait",
    },
    {
      id: 9,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%285%29.png-8iBE8Ypeh3jqa5F8SvMkntP2UuVX7Q.jpeg",
      alt: "Graduate in academic regalia with white fur stole holding achievement medal",
      category: "memories",
      aspect: "portrait",
    },
  ]

  const filteredImages = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory)

  const getAspectClass = (aspect: string) => {
    switch (aspect) {
      case "portrait":
        return "aspect-[3/4]"
      case "landscape":
        return "aspect-[4/3]"
      case "square":
        return "aspect-square"
      default:
        return "aspect-[4/3]"
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
    <section id="portfolio" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Portfolio Gallery</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Explore our recent work and see the quality and creativity we bring to every project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg bg-muted cursor-pointer">
              <div className={getAspectClass(image.aspect)}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onContextMenu={handleContextMenu}
                  onTouchStart={handleImageProtection}
                  onTouchEnd={handleImageProtection}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to see more?{" "}
            <a href="#hero" className="text-accent hover:underline font-medium">
              Request our full portfolio
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
