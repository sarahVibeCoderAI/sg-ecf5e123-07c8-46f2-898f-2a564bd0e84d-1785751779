import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo-icon.png"
                alt="Copper + Cloves"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h3 className="font-display text-lg font-light text-foreground">
                Copper + Cloves
              </h3>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Your home away from home. Nourishing Bangalore with premium plant-based wellness, one meal at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
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
                <Link href="/products" className="text-foreground/60 hover:text-foreground transition-colors">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://maps.app.goo.gl/kX9fR2BjjAFyYdQG7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper transition-colors"
                >
                  Indiranagar, Bangalore
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/DQs1BRv2DzSW1uN59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper transition-colors"
                >
                  Domlur, Bangalore
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/ijZsNGVDaDU7A2X79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper transition-colors"
                >
                  Lavelle Road, Bangalore
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium uppercase tracking-wide">Join Our Community</h4>
            <p className="text-sm text-foreground/60">
              Get wellness tips, recipes, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background border-border"
              />
              <Button type="submit" size="sm" className="w-full text-xs uppercase tracking-wide">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Copper + Cloves. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}