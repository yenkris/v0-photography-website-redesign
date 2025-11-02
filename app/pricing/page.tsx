import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingCards } from "@/components/pricing-cards"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PricingCards />
      </div>
      <Footer />
    </main>
  )
}
