import { FacebookIcon, InstagramIcon } from "./icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/christine-yen-logo.png"
              alt="Chris Yen Photography"
              className="h-16 w-auto brightness-0 invert"
            />
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p className="font-medium">CYPictures</p>
              <p>Sydney</p>
              <p>Newtown, NSW 2042</p>
              <p>Australia</p>
            </div>
          </div>

          {/* Navigation & Description */}
          <div className="space-y-6">
            <nav className="flex gap-6 text-sm">
              <a
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
              >
                Home
              </a>
              <a
                href="/pricing"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
              >
                Pricing
              </a>
              <a
                href="/terms"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
              >
                Terms
              </a>
            </nav>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-2xl">
              Honest imagery through natural light and thoughtful composition. Sydney-based photography that captures
              authentic moments with care and artistry.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ykris98photog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/ykris98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>Copyright ©{currentYear} CY Pictures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
