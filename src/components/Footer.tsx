import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Leftmost Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo-horizontal.png" 
                  alt="Copper + Cloves" 
                  width={200}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-foreground/70 leading-relaxed max-w-xs">
                Making healthy living a little easier.
              </p>
            </div>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/copperandcloves/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Follow us on Instagram
              </a>
              <a
                href="https://chat.whatsapp.com/FMu0HIKYBhyHqOI1qzkbQz?s=cl&p=i&ilr=0&amv=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Join our WhatsApp Community
              </a>
            </div>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/cafes" className="text-foreground/60 hover:text-foreground transition-colors">
                  Our Cafes
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="text-foreground/60 hover:text-foreground transition-colors">
                  Meal Subscription
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-foreground transition-colors">
                  The Journal
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-foreground/60 hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Rightmost Column - Locations */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium uppercase tracking-wide">Our Locations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://maps.app.goo.gl/HxsBbogFjbZVSEpK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Indiranagar, Bangalore
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/uYJyXegy1MTPichcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Lavelle Road, Bangalore
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/DQs1BRv2DzSW1uN59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Domlur, Bangalore
                </a>
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