import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-24 md:py-32 max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4 pb-8 border-b border-border">
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Terms and Conditions</h1>
              <p className="text-sm text-muted-foreground">Last updated: November 2025</p>
            </div>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">1. Professional Value</h2>
              <p className="text-muted-foreground leading-relaxed">
                All C.Y. Pictures rates reflect not only the time spent on-site but also the experience, creative
                direction, and professional equipment that make each image possible. The pricing structure recognises
                the years of refinement behind each photo — valuing efficiency and artistry equally.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">2. Booking and Payment</h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  A <strong>50% non-refundable retainer</strong> is required to secure your booking.
                </li>
                <li>
                  The remaining balance is due <strong>on or before the shoot day</strong>.
                </li>
                <li>Bookings are confirmed only once both retainer and written acceptance have been received.</li>
                <li>Payment may be made by bank transfer, PayPal, or other approved method listed on the invoice.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">3. Cancellations and Rescheduling</h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  <strong>Rescheduling:</strong> Clients may reschedule once at no charge with at least{" "}
                  <strong>48 hours notice</strong>.
                </li>
                <li>
                  <strong>Late cancellations:</strong> Cancellations made within 48 hours of the scheduled session
                  forfeit the retainer.
                </li>
                <li>
                  <strong>Weather postponements:</strong> Rescheduling due to weather is free of charge, subject to
                  availability.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">4. Delivery and Storage</h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Final images are delivered via a <strong>private online gallery</strong> for download.
                </li>
                <li>
                  All image files are securely stored for <strong>30 days after delivery</strong>. Beyond this period,
                  C.Y. Pictures is not responsible for backup or retrieval.
                </li>
                <li>
                  <strong>Optional USB Archive:</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>Client-provided USB → no charge</li>
                    <li>
                      Studio USB (up to 1000 photos) → <strong>$50</strong>
                    </li>
                    <li>
                      Studio USB (over 1000 photos) → <strong>$100</strong>
                    </li>
                  </ul>
                </li>
                <li>
                  USB drives are offered as a convenience. The client is responsible for safe storage once the files are
                  delivered.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">5. Editing and Revisions</h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  All packages include professional <strong>colour grading and light retouching</strong> consistent with
                  the C.Y. Pictures style.
                </li>
                <li>
                  Requests for additional edits, alternative styles, or re-edits are billed at{" "}
                  <strong>$40 per image</strong>.
                </li>
                <li>
                  RAW files are available for personal archiving under the applicable licence but may not be re-edited
                  or published without written permission.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">6. Usage and Copyright</h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  All photographs remain the <strong>copyright property of C.Y. Pictures</strong>.
                </li>
                <li>
                  Clients receive a <strong>non-exclusive licence</strong> for personal or agreed commercial use
                  according to their package.
                </li>
                <li>Images may not be resold, modified, or used for other purposes without written consent.</li>
                <li>
                  For commercial or brand shoots, the licence scope (channels, geography, and duration) will be defined
                  in writing.
                </li>
                <li>Unauthorised use or modification may incur retrospective licensing fees or legal action.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">7. Artistic Integrity</h2>
              <p className="text-muted-foreground leading-relaxed">
                C.Y. Pictures retains the right to decline edits or requests that compromise artistic style or brand
                standards. Images are curated and delivered in line with the brand's visual philosophy: calm colour,
                natural light, and authentic storytelling.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">8. Promotional Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                C.Y. Pictures may use selected images from any session for its{" "}
                <strong>portfolio, website, or social media</strong>, unless the client specifically requests otherwise
                in writing prior to the shoot.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">9. Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While every effort is made to ensure safe capture and storage of all images, C.Y. Pictures shall not be
                held liable for unforeseen circumstances including but not limited to equipment failure, injury, or
                force majeure events. In the unlikely event that final images cannot be delivered for reasons beyond
                control, liability is limited to a refund of 70% of the total payment received. The remaining 30% covers
                non-recoverable preparation time, administration, and opportunity costs.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif tracking-tight">10. Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                By booking with C.Y. Pictures, the client acknowledges having read, understood, and agreed to these
                Terms and Conditions.
              </p>
            </section>

            {/* Contact */}
            <section className="pt-8 border-t border-border">
              <div className="space-y-2">
                <p className="font-medium">C.Y. Pictures</p>
                <p className="text-xs text-muted-foreground/60">Yen Studios Pty Ltd ABN: 17 692 874 776</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <a href="mailto:hello@cypictures.com" className="hover:text-foreground transition-colors underline">
                    hello@cypictures.com
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a href="/" className="hover:text-foreground transition-colors underline">
                    www.cypictures.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
