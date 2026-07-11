import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-display text-xl font-medium tracking-tight text-primary">
            Copper + Cloves
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/cafes"
            className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
          >
            Our Cafes
          </Link>
          <Link
            href="/subscription"
            className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
          >
            Meal Subscription
          </Link>
          <Link
            href="/products"
            className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
          >
            Shop Products
          </Link>
          <Link
            href="/blog"
            className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
          >
            Blog
          </Link>
          <Link
            href="/careers"
            className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
          >
            Contact
          </Link>
        </div>

        <Button asChild className="text-xs uppercase tracking-wide">
          <Link href="/subscription">Subscribe Now</Link>
        </Button>
      </div>
    </nav>
  );
}