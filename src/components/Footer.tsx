import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-primary">
              Copper + Cloves
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your home away from home. Nourishing Bangalore with premium plant-based wellness, one meal at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cafes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Cafes
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="text-muted-foreground hover:text-foreground transition-colors">
                  Meal Subscription
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold">Our Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Indiranagar, Bangalore</li>
              <li>Jayanagar, Bangalore</li>
              <li>Koramangala, Bangalore</li>
            </ul>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                <a href="tel:+918012345678" className="hover:text-foreground transition-colors">
                  +91 80 1234 5678
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:hello@copperandcloves.com" className="hover:text-foreground transition-colors">
                  hello@copperandcloves.com
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold">Join Our Community</h4>
            <p className="text-sm text-muted-foreground">
              Get wellness tips, recipes, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
              />
              <Button type="submit" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Copper + Cloves. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}