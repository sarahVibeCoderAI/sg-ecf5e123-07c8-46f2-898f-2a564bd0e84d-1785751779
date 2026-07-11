import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            Copper + Cloves
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/cafes"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Our Cafes
          </Link>
          <Link
            href="/subscription"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Meal Subscription
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Shop Products
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/careers"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        <Button asChild className="hidden md:inline-flex">
          <Link href="/subscription">Subscribe Now</Link>
        </Button>
      </div>
    </nav>
  );
}