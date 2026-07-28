import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 lg:gap-12">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo-horizontal.png" 
                  alt="Copper + Cloves" 
                  width={250}
                  height={50}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-foreground/70 leading-relaxed max-w-xs">
                Making healthy living a little easier.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href="https://www.instagram.com/copperandcloves/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Follow us on Instagram</span>
              </a>
              
              <a 
                href="https://chat.whatsapp.com/FMu0HIKYBhyHqOI1qzkbQz?s=cl&p=i&ilr=0&amv=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm">Join our WhatsApp Community</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/cafes" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Our Cafes
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Meal Subscription
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  The Journal
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Locations */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Our Locations</h3>
            <ul className="space-y-3">
              <li className="text-sm text-foreground/70">
                Indiranagar, Bangalore
              </li>
              <li className="text-sm text-foreground/70">
                Lavelle Road, Bangalore
              </li>
              <li className="text-sm text-foreground/70">
                Domlur, Bangalore
              </li>
            </ul>
          </div>

          {/* Column 4: Legal Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Copper + Cloves. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}