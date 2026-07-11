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

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium uppercase tracking-wide">Our Locations</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Indiranagar, Bangalore</li>
              <li>Jayanagar, Bangalore</li>
              <li>Koramangala, Bangalore</li>
            </ul>
            <div className="pt-2">
              <p className="text-sm text-foreground/60">
                <a href="tel:+918012345678" className="hover:text-foreground transition-colors">
                  +91 80 1234 5678
                </a>
              </p>
              <p className="text-sm text-foreground/60">
                <a href="mailto:hello@copperandcloves.com" className="hover:text-foreground transition-colors">
                  hello@copperandcloves.com
                </a>
              </p>
            </div>
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