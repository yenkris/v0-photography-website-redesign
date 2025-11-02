"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "./icons"

export function PricingCards() {
  const scrollToContact = () => {
    window.location.href = "/#contact"
  }

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">Investment</p>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-balance leading-tight">
            Sessions & Pricing
          </h1>
          <p className="text-muted-foreground text-lg">
            Calm, honest images with gentle direction and natural light. Clear pricing, no surprises.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <Card className="rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Base Session — $100</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>30 min shoot time</p>
              <p>Lighting & posing guidance</p>
              <p>1 location (Sydney Metro)</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-serif mb-3">Delivery Options</h2>
            <p className="text-muted-foreground">Select one package below (base session included in all totals).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Essence */}
            <Card className="rounded-2xl border hover:border-gray-300 transition-colors">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-bold">Essence</CardTitle>
                <p className="text-sm text-muted-foreground">Simple and focused.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-bold">$190</p>
                  <p className="text-sm text-muted-foreground">total</p>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3 professionally edited photos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Password-protected gallery (30 days access)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Includes Base Session (30 min shoot time)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full rounded-lg h-11 text-sm bg-transparent"
                >
                  Enquire
                </Button>
              </CardFooter>
            </Card>

            {/* Harmony */}
            <Card className="rounded-2xl border-2 border-foreground hover:border-foreground/80 transition-colors">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-bold">Harmony</CardTitle>
                <p className="text-sm text-muted-foreground">Edits + unedited images together.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-bold">$280</p>
                  <p className="text-sm text-muted-foreground">total</p>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3 edited photos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">All unedited images</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Includes Base Session (30 min shoot time)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToContact} className="w-full rounded-lg h-11 text-sm">
                  Enquire
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-serif mb-3">Event Coverage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Community, creative, or corporate events. Natural, documentary style with gentle direction for key
              moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <Card className="rounded-2xl border hover:border-gray-300 transition-colors">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-bold">Starter</CardTitle>
                <p className="text-sm text-muted-foreground">Up to 2 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-bold">$460</p>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3 edited photos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Candid & key moments</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Optional edit bundles</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic">Ideal for small community or creative events</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full rounded-lg h-11 text-sm bg-transparent"
                >
                  Enquire
                </Button>
              </CardFooter>
            </Card>

            {/* Half Day */}
            <Card className="rounded-2xl border hover:border-gray-300 transition-colors">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-bold">Half Day</CardTitle>
                <p className="text-sm text-muted-foreground">Up to 4 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-bold">$840</p>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">5 edited photos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Run sheet support</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Hero moments & details</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">48-72 hr preview available</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic">For Rotary, showcases, small conferences</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full rounded-lg h-11 text-sm bg-transparent"
                >
                  Enquire
                </Button>
              </CardFooter>
            </Card>

            {/* Full Day */}
            <Card className="rounded-2xl border hover:border-gray-300 transition-colors">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-bold">Full Day</CardTitle>
                <p className="text-sm text-muted-foreground">Up to 8 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-bold">$1,660</p>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">8 edited photos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Run sheet support</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Hero moments & details</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      USB of photos (incl. if client provides stick, +$50 up to 1000 photos, +$100 for more)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Team add-ons available</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic">
                  For major events, campaigns, or full-day documentation
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full rounded-lg h-11 text-sm bg-transparent"
                >
                  Enquire
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Add-ons */}
          <Card className="rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Add-ons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Extra edits</span>
                <span className="text-sm font-medium">$40 each</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">All unedited images</span>
                <span className="text-sm font-medium">+$120</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">3 edits + all unedited images</span>
                <span className="text-sm font-medium">+$180 (best value)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Travel (outside Sydney Metro)</span>
                <span className="text-sm font-medium">Quoted</span>
              </div>
            </CardContent>
          </Card>

          {/* Style & Ethos */}
          <Card className="rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Style & Ethos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Minimal, documentary-led, with an eye for quiet details. Sustainable, people-first practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full border text-xs">natural light</span>
                <span className="px-3 py-1 rounded-full border text-xs">gentle direction</span>
                <span className="px-3 py-1 rounded-full border text-xs">authentic moments</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
