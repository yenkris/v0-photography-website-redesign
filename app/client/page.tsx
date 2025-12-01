"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DownloadIcon, LockIcon } from "@/components/icons"
import Masonry from "react-masonry-css"

interface ClientGallery {
  clientName: string
  eventDate: string
  images: Array<{ id: number; src: string; alt: string }>
}

const clientGalleries: Record<string, ClientGallery> = {
  DEMO2025: {
    clientName: "John & Sarah",
    eventDate: "Wedding - October 25, 2025",
    images: [
      {
        id: 1,
        src: "/images/untitled-20design-20-286-29.jpeg",
        alt: "Friends group on historic stone steps",
      },
      {
        id: 2,
        src: "/images/untitled-20design-20-282-29.jpeg",
        alt: "Friends group in urban plaza with blue flowers",
      },
      {
        id: 3,
        src: "/images/untitled-20design-20-284-29.jpeg",
        alt: "Friends on heritage staircase",
      },
    ],
  },
  CLIENT001: {
    clientName: "Emma Wilson",
    eventDate: "Photo Session - 13 October 2025",
    images: [
      {
        id: 1,
        src: "/images/untitled-20design-20-285-29.jpeg",
        alt: "Graduation portrait with medal and white fur stole",
      },
      {
        id: 2,
        src: "/images/untitled-20design-202.jpg",
        alt: "Graduation celebration with cap raised",
      },
      {
        id: 3,
        src: "/images/untitled-20design-20-287-29.jpeg",
        alt: "Graduation celebration toast with champagne in archway",
      },
      {
        id: 4,
        src: "/images/untitled-20design-20-288-29.jpeg",
        alt: "Outdoor graduation embrace on green lawn",
      },
      {
        id: 5,
        src: "/images/untitled-20design-20-289-29.jpeg",
        alt: "Romantic couple photo at waterfront pier",
      },
      {
        id: 6,
        src: "/images/untitled-20design-20-2810-29.jpeg",
        alt: "Romantic couple photo at waterfront with Sydney skyline",
      },
    ],
  },
  ROTARY2024: {
    clientName: "Rotary Club Sydney",
    eventDate: "Community BBQ Event - April 25, 2024",
    images: [
      { id: 1, src: "/rotary-event-community-gathering.jpg", alt: "Community members gathered at event table" },
      { id: 2, src: "/rotary-volunteer-shankar-thumbs-up.jpg", alt: "Volunteer Shankar giving thumbs up" },
      { id: 3, src: "/rotary-anzac-day-ceremony.jpg", alt: "ANZAC Day ceremony with Rotary volunteers" },
      { id: 4, src: "/rotary-group-photo-evening.jpg", alt: "Group photo with volunteers and community at dusk" },
      { id: 5, src: "/people-rotary-event-photography.jpg", alt: "Rotary volunteers serving at BBQ event" },
    ],
  },
  ISLA_CP25: {
    clientName: "ISLA Program - City of Sydney",
    eventDate: "Welcome Event - November 2024",
    images: [
      {
        id: 1,
        src: "/images/pb293161.jpg",
        alt: "ISLA group photo with welcome signs",
      },
      {
        id: 2,
        src: "/images/pb293172.jpg",
        alt: "ISLA participant with Welcome to Sydney backdrop",
      },
      {
        id: 3,
        src: "/images/pb293175.jpg",
        alt: "Participant holding Living my best life sign",
      },
      {
        id: 4,
        src: "/images/pb293195.jpg",
        alt: "Participant with I love Australia sign",
      },
      {
        id: 5,
        src: "/images/pb293187.jpg",
        alt: "Two ISLA volunteers together",
      },
      {
        id: 6,
        src: "/images/pb293180.jpg",
        alt: "Participant holding Living my best life sign from behind",
      },
      {
        id: 7,
        src: "/images/pb293154.jpg",
        alt: "ISLA group photo with colorful welcome signs",
      },
      {
        id: 8,
        src: "/images/pb293167.jpg",
        alt: "ISLA participant with Living my best life sign",
      },
      {
        id: 9,
        src: "/images/pb293224.jpg",
        alt: "Panel discussion with City of Sydney backdrop",
      },
      {
        id: 10,
        src: "/images/pb293205.jpg",
        alt: "Participant holding I love Sydney sign",
      },
      {
        id: 11,
        src: "/images/pb293231.jpg",
        alt: "Panel discussion with green City of Sydney banner",
      },
      {
        id: 12,
        src: "/images/pb293237.jpg",
        alt: "Panelist speaking with microphone",
      },
      {
        id: 13,
        src: "/images/pb293214.jpg",
        alt: "Three participants with G'Day mate and I love Australia signs",
      },
      {
        id: 14,
        src: "/images/pb293235.jpg",
        alt: "Panel discussion close-up",
      },
      {
        id: 15,
        src: "/images/pb293230.jpg",
        alt: "Full panel with moderator and speakers",
      },
      {
        id: 16,
        src: "/images/pb293288.jpg",
        alt: "Panel from audience perspective with IR audio system",
      },
      {
        id: 17,
        src: "/images/pb293283.jpg",
        alt: "Panelist speaking during discussion",
      },
      {
        id: 18,
        src: "/images/pb293244.jpg",
        alt: "Panel discussion with presentation slide",
      },
      {
        id: 19,
        src: "/images/pb293258.jpg",
        alt: "Panelist laughing during discussion",
      },
      {
        id: 20,
        src: "/images/pb293281.jpg",
        alt: "Panel with all speakers engaged",
      },
      {
        id: 21,
        src: "/images/pb293262.jpg",
        alt: "Panelist gesturing while speaking",
      },
      {
        id: 22,
        src: "/images/pb293299.jpg",
        alt: "Panel discussion with ISLA banner visible",
      },
      {
        id: 23,
        src: "/images/pb293273.jpg",
        alt: "Full panel view with moderator and speakers",
      },
      {
        id: 24,
        src: "/images/pb293277.jpg",
        alt: "Close-up of panelist during discussion",
      },
      {
        id: 25,
        src: "/images/pb293239.jpg",
        alt: "Panel discussion with Meet Our Panelists slide",
      },
      {
        id: 26,
        src: "/images/pb293384.jpg",
        alt: "Audience members at ISLA event with people in background",
      },
      {
        id: 27,
        src: "/images/pb293318.jpg",
        alt: "Panelist in green checkered blazer during conversation",
      },
      {
        id: 28,
        src: "/images/pb293302.jpg",
        alt: "Panel discussion with three speakers on stage",
      },
      {
        id: 29,
        src: "/images/pb293317.jpg",
        alt: "Panelist in green blazer looking down during discussion",
      },
      {
        id: 30,
        src: "/images/pb293332.jpg",
        alt: "Panel with microphone holder and speakers engaged",
      },
      {
        id: 31,
        src: "/images/pb293383.jpg",
        alt: "Audience members in ISLA t-shirts eating during event",
      },
      {
        id: 32,
        src: "/images/pb293347.jpg",
        alt: "Four panelists on stage during discussion",
      },
      {
        id: 33,
        src: "/images/pb293364.jpg",
        alt: "Panel discussion from alternate angle",
      },
      {
        id: 34,
        src: "/images/pb293380.jpg",
        alt: "Two speakers with City banner in background",
      },
      {
        id: 35,
        src: "/images/pb293367.jpg",
        alt: "Three panelists during event discussion",
      },
      {
        id: 36,
        src: "/images/pb293417.jpg",
        alt: "Group celebration with hands raised at ISLA event",
      },
      {
        id: 37,
        src: "/images/pb293401.jpg",
        alt: "Audience looking up during presentation with ISLA banner",
      },
      {
        id: 38,
        src: "/images/pb293409.jpg",
        alt: "Full panel of five speakers on stage",
      },
      {
        id: 39,
        src: "/images/pb293408.jpg",
        alt: "Panel members from behind during discussion",
      },
      {
        id: 40,
        src: "/images/pb293399.jpg",
        alt: "Wide audience shot during presentation",
      },
      {
        id: 41,
        src: "/images/img-2733-2.jpg",
        alt: "Speaker in green checkered blazer smiling with microphone",
      },
      {
        id: 42,
        src: "/images/img-2736-2.jpg",
        alt: "Presenter with highs lows and buffaloes slide",
      },
      {
        id: 43,
        src: "/images/pb293117.jpg",
        alt: "Portrait of speaker in green checkered blazer",
      },
      {
        id: 44,
        src: "/images/img-2726.jpg",
        alt: "Host in striped shirt speaking with papers",
      },
      {
        id: 45,
        src: "/images/img-2728.jpg",
        alt: "Two hosts presenting event with title slide",
      },
      {
        id: 46,
        src: "/images/img-2735-2.jpg",
        alt: "Speaker presenting highs lows and buffaloes to audience",
      },
      {
        id: 47,
        src: "/images/img-2727.jpg",
        alt: "Event hosts with International Student Career Panel 2025 slide",
      },
      {
        id: 48,
        src: "/images/pb293115.jpg",
        alt: "Speaker engaging with seated audience members",
      },
    ],
  },
  YESPCYCROTARY2025: {
    clientName: "YES! Rotary / PCYC",
    eventDate: "Scholarship Awards - November 2025",
    images: [
      {
        id: 1,
        src: "/images/monika-202.jpg",
        alt: "Monika receiving The Arts scholarship award",
      },
      {
        id: 2,
        src: "/images/yousef-201.jpg",
        alt: "Yousef receiving Education scholarship award",
      },
      {
        id: 3,
        src: "/images/tesha.jpg",
        alt: "Tesha receiving Environment / Education scholarship award",
      },
      {
        id: 4,
        src: "/images/monika-201.jpg",
        alt: "Monika standing with award presenters",
      },
      {
        id: 5,
        src: "/images/lilly-202.jpg",
        alt: "Lilly receiving Sports scholarship award",
      },
      {
        id: 6,
        src: "/images/yousef-202.jpg",
        alt: "Yousef standing with award presenters",
      },
      {
        id: 7,
        src: "/images/lilly-201.jpg",
        alt: "Lilly standing with award presenters",
      },
      {
        id: 8,
        src: "/images/group-202.jpg",
        alt: "Group photo of scholarship recipients with officials",
      },
      {
        id: 9,
        src: "/images/averhry-201.jpg",
        alt: "Averhry standing with award presenters",
      },
      {
        id: 10,
        src: "/images/averhry-202.jpg",
        alt: "Averhry receiving scholarship award",
      },
      {
        id: 11,
        src: "/images/akshleen.jpg",
        alt: "Akshleen standing with award presenters",
      },
      {
        id: 12,
        src: "/images/group.jpg",
        alt: "Large group photo of all recipients and officials",
      },
    ],
  },
  ISLA_SHIV: {
    clientName: "Isla & Shiv",
    eventDate: "Event - November 2025",
    images: [
      {
        id: 1,
        src: "/images/img-2733.jpg",
        alt: "Speaker smiling and engaging with audience during presentation",
      },
      {
        id: 2,
        src: "/images/img-2735.jpg",
        alt: "Speaker gesturing with hand raised during 'highs, lows & buffaloes' presentation",
      },
      {
        id: 3,
        src: "/images/pa041918.jpeg",
        alt: "Workshop session with speaker and participant reading 'Super Side Kicks' book",
      },
      {
        id: 4,
        src: "/images/img-2736.jpg",
        alt: "Speaker gesturing during presentation to audience",
      },
      {
        id: 5,
        src: "/images/pa041926.jpeg",
        alt: "Speaker discussing materials with participant during workshop",
      },
      {
        id: 6,
        src: "/images/pa041938.jpg",
        alt: "Speaker presenting technical content about AI pronunciation and speech analysis",
      },
      {
        id: 7,
        src: "/images/pa041930.jpg",
        alt: "Interactive workshop moment with speaker and participant discussing mechanics",
      },
    ],
  },
}

const getStorageKey = (accessCode: string) => {
  // Versioning specific codes to reset their counters
  if (accessCode === "YESPCYCROTARY2025") {
    return `gallery_first_login_${accessCode}_v3`
  }
  return `gallery_first_login_${accessCode}`
}

const calculateDaysRemaining = (accessCode: string): { daysRemaining: number; isFirstLogin: boolean } => {
  const storageKey = getStorageKey(accessCode)
  const firstLoginStr = localStorage.getItem(storageKey)

  if (!firstLoginStr) {
    // First time login - store current timestamp
    const now = new Date().toISOString()
    localStorage.setItem(storageKey, now)
    return { daysRemaining: 30, isFirstLogin: true } // Full 30 days on first login
  }

  // Calculate days elapsed since first login
  const firstLogin = new Date(firstLoginStr)
  const now = new Date()
  const daysElapsed = Math.floor((now.getTime() - firstLogin.getTime()) / (1000 * 60 * 60 * 24))
  const daysRemaining = 30 - daysElapsed

  return { daysRemaining: Math.max(0, daysRemaining), isFirstLogin: false } // Don't show negative days
}

const sendFirstAccessNotification = async (clientName: string, accessCode: string) => {
  try {
    const response = await fetch("/api/notify-first-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientName,
        accessCode,
        timestamp: new Date().toISOString(),
      }),
    })

    const data = await response.json()
    console.log("[v0] First access notification sent:", data)
  } catch (error) {
    console.error("[v0] Failed to send first access notification:", error)
  }
}

export default function ClientGalleryPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessCode, setAccessCode] = useState("")
  const [error, setError] = useState("")
  const [currentGallery, setCurrentGallery] = useState<ClientGallery | null>(null)
  const [currentAccessCode, setCurrentAccessCode] = useState<string>("")
  const [daysRemaining, setDaysRemaining] = useState<number>(30)
  const [isExpired, setIsExpired] = useState(false)
  const [firstLoginDate, setFirstLoginDate] = useState<string>("")

  const isViewOnlyClient = currentAccessCode === "DEMO2025" || currentAccessCode === "CLIENT001"

  useEffect(() => {
    if (currentAccessCode && isAuthenticated) {
      const updateDaysRemaining = () => {
        const { daysRemaining: remaining } = calculateDaysRemaining(currentAccessCode)
        setDaysRemaining(remaining)
        setIsExpired(remaining === 0)

        const storageKey = getStorageKey(currentAccessCode)
        const firstLoginStr = localStorage.getItem(storageKey)
        if (firstLoginStr) {
          const firstLogin = new Date(firstLoginStr)
          const formatted = firstLogin.toLocaleString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
          setFirstLoginDate(formatted)
        }
      }

      updateDaysRemaining()

      const interval = setInterval(updateDaysRemaining, 1000 * 60 * 60)

      return () => clearInterval(interval)
    }
  }, [currentAccessCode, isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const code = accessCode.toUpperCase()
    const gallery = clientGalleries[code]

    if (gallery) {
      const { daysRemaining: remaining, isFirstLogin } = calculateDaysRemaining(code)

      if (remaining === 0) {
        setError("This access code has expired. Please contact us for assistance.")
        return
      }

      if (isFirstLogin) {
        sendFirstAccessNotification(gallery.clientName, code)
      }

      setIsAuthenticated(true)
      setCurrentGallery(gallery)
      setCurrentAccessCode(code)
      setDaysRemaining(remaining)
      setError("")
    } else {
      setError("Invalid access code. Please check your email for the correct code.")
    }
  }

  const handleDemoCodeClick = (code: string) => {
    setAccessCode(code)
    setError("")
  }

  const handleDownload = async (imageId: number) => {
    const image = currentGallery?.images.find((img) => img.id === imageId)
    if (!image) return

    try {
      const response = await fetch(image.src)
      const blob = await response.blob()

      const url = window.URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = `photo-${imageId}.jpg`
      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  const handleDownloadAll = async () => {
    if (!currentGallery) return

    for (const image of currentGallery.images) {
      await handleDownload(image.id)
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }

  const handleImageProtection = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    return false
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  }

  if (!isAuthenticated || !currentGallery) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-32 pb-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center space-y-2">
                  <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <LockIcon size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-3xl font-serif">Client Gallery Access</CardTitle>
                  <CardDescription className="text-base">
                    Enter your unique access code to view your private gallery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="accessCode" className="text-sm font-medium">
                        Access Code
                      </label>
                      <Input
                        id="accessCode"
                        type="text"
                        placeholder="Enter your access code"
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        className="uppercase"
                        required
                      />
                      {error && <p className="text-sm text-destructive">{error}</p>}
                    </div>
                    <Button type="submit" className="w-full">
                      Access Gallery
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Important Information:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Gallery access is valid for 30 days from first login</li>
                      <li>• Your access code was sent to your email</li>
                      <li>• Download your photos before access expires</li>
                    </ul>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Can't find your code?{" "}
                      <a
                        href={`https://wa.me/61478811835?text=Hi%20Chris,%20I%20need%20help%20accessing%20my%20gallery`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Contact us
                      </a>
                    </p>
                  </div>

                  <div className="mt-6 p-3 bg-accent/10 rounded-lg">
                    <p className="text-xs text-center text-muted-foreground mb-2">Demo codes to preview:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span
                        className="font-mono text-xs font-bold bg-background px-2 py-1 rounded cursor-pointer hover:bg-accent/20 transition-colors"
                        onClick={() => handleDemoCodeClick("DEMO2025")}
                      >
                        DEMO2025
                      </span>
                      <span
                        className="font-mono text-xs font-bold bg-background px-2 py-1 rounded cursor-pointer hover:bg-accent/20 transition-colors"
                        onClick={() => handleDemoCodeClick("ROTARY2024")}
                      >
                        ROTARY2024
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
                Welcome,{" "}
                {currentAccessCode === "DEMO2025"
                  ? "ISLA"
                  : currentAccessCode === "CLIENT001"
                    ? "Sri & Evan"
                    : currentAccessCode === "ISLA_SHIV"
                      ? "SHIV@ISLA"
                      : currentAccessCode === "ISLA_CP25"
                        ? "ISLA Program - City of Sydney"
                        : currentGallery.clientName}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your exclusive gallery from photoshoot.{" "}
                {isViewOnlyClient ? "View your images below." : "Download your high-resolution images below."}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm">
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${daysRemaining > 7 ? "bg-green-500" : daysRemaining > 3 ? "bg-yellow-500" : "bg-red-500"}`}
                />
                <span>
                  {daysRemaining > 0
                    ? `Access expires in ${daysRemaining} ${daysRemaining === 1 ? "day" : "days"}`
                    : "Access expired - Contact us to extend"}
                </span>
              </div>
            </div>

            {!isViewOnlyClient && (
              <div className="flex justify-center mb-8">
                <Button size="lg" className="gap-2" onClick={handleDownloadAll}>
                  <DownloadIcon size={20} />
                  Download All Images
                </Button>
              </div>
            )}

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="gallery-grid"
              columnClassName="gallery-grid_column"
            >
              {currentGallery.images.map((image) => (
                <div
                  key={image.id}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 mb-6"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-auto object-cover protected-image"
                    onContextMenu={handleImageProtection}
                    onTouchStart={handleImageProtection as any}
                    onTouchEnd={handleImageProtection as any}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Image {image.id}</span>
                      {!isViewOnlyClient && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="gap-2"
                          onClick={() => handleDownload(image.id)}
                        >
                          <DownloadIcon size={16} />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>

            <div className="mt-12 p-6 bg-muted/30 rounded-2xl space-y-4">
              <h3 className="font-serif text-xl">Gallery Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-1">Total Images</p>
                  <p>{currentGallery.images.length} high-resolution photos</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Access Period</p>
                  <p>30 days from {firstLoginDate || "first login"}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Image Format</p>
                  <p>High-resolution JPEG files</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Usage Rights</p>
                  <p>Personal use as per terms & conditions</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Need help or have questions?{" "}
                  <a
                    href={`https://wa.me/61478811835?text=Hi%20Chris,%20I%20have%20a%20question%20about%20my%20gallery`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Contact Chris on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
