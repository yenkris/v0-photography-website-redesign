"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "./icons"

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">Investment</p>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-balance leading-tight">
            Sessions & Pricing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Calm, honest images with gentle direction and natural light. Clear pricing, no surprises.
          </p>
        </div>

        {/* Base Session Info */}
        <div className="max-w-2xl mb-12 p-6 rounded-2xl border bg-card">
          <div className="space-y-2">
            <h3 className="text-xl font-serif">Base Session — $100</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>30 minutes shooting</li>
              <li>Lighting & posing guidance</li>
              <li>1 location (Sydney Metro)</li>
            </ul>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif mb-6">Delivery Options</h3>
          <p className="text-muted-foreground mb-8">Select one package below (base session included in all totals).</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Essence</CardTitle>
                <p className="text-sm text-muted-foreground">Simple and focused.</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-serif mb-4">
                  $190 <span className="text-base font-normal text-muted-foreground">total</span>
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckIcon size={16} />3 professionally edited photos
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Private gallery delivery
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Includes Base Session
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToContact} className="w-full bg-transparent" variant="outline">
                  Enquire
                </Button>
              </CardFooter>
            </Card>

            <Card className="rounded-2xl border-2 border-accent">
              <CardHeader>
                <CardTitle className="text-xl">Harmony</CardTitle>
                <p className="text-sm text-muted-foreground">Edits + RAWs together.</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-serif mb-4">
                  $280 <span className="text-base font-normal text-muted-foreground">total</span>
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckIcon size={16} />3 edited photos
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    All RAW images
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Includes Base Session
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToContact} className="w-full">
                  Enquire
                </Button>
              </CardFooter>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Clarity</CardTitle>
                <p className="text-sm text-muted-foreground">Full flexibility.</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-serif mb-4">
                  $220 <span className="text-base font-normal text-muted-foreground">total</span>
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    All RAW images
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Personal-use licence
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Includes Base Session
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToContact} className="w-full bg-transparent" variant="outline">
                  Enquire
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Event Coverage */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif mb-4">Event Coverage</h3>
          <p className="text-muted-foreground mb-8">
            Community, creative, or corporate events. Natural, documentary style with gentle direction for key moments.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
                <p className="text-sm text-muted-foreground">Up to 2 hours</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-serif mb-4">
                  $240 <span className="text-base font-normal text-muted-foreground">+ delivery</span>
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Candid & key moments
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Private gallery
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Optional edit bundles
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToContact} variant="outline" className="w-full bg-transparent">
                  Enquire
                </Button>
              </CardFooter>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Half Day</CardTitle>
                <p className="text-sm text-muted-foreground">Up to 4 hours</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-serif mb-4">
                  $480 <span className="text-base font-normal text-muted-foreground">+ delivery</span>
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Run sheet support
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Hero moments & details
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    48–72 hr preview available
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToContact} variant="outline" className="w-full bg-transparent">
                  Enquire
                </Button>
              </CardFooter>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Full Day</CardTitle>
                <p className="text-sm text-muted-foreground">Up to 8 hours</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-serif mb-4">
                  $960 <span className="text-base font-normal text-muted-foreground">+ delivery</span>
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Comprehensive coverage
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Back-up & file safety
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon size={16} />
                    Team add-ons available
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToContact} variant="outline" className="w-full bg-transparent">
                  Enquire
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Add-ons & Info */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          <div className="rounded-2xl border p-6 bg-card">
            <h4 className="text-lg font-serif mb-4">Add-ons</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Extra edits</span>
                <span className="font-medium text-foreground">$40 each</span>
              </li>
              <li className="flex justify-between">
                <span>Extra time</span>
                <span className="font-medium text-foreground">$120/hr</span>
              </li>
              <li className="flex justify-between">
                <span>Travel (outside Sydney Metro)</span>
                <span className="font-medium text-foreground">Quoted</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-card">
            <h4 className="text-lg font-serif mb-4">Style & Ethos</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Minimal, documentary-led, with an eye for quiet details. Sustainable, people-first practices.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">natural light</span>
              <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">gentle direction</span>
              <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">authentic moments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
