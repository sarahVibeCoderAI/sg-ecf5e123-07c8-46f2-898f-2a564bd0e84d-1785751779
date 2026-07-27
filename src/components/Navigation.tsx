import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cafes", label: "Our Cafés" },
  { href: "/subscription", label: "Meal Subscription" },
  { href: "/blog", label: "Journal" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-horizontal.png"
              alt="Copper + Cloves"
              width={160}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-1 gap-10">
            <Link
              href="/cafes"
              className="text-[11px] font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              Our Cafes
            </Link>
            <Link
              href="/subscription"
              className="text-[11px] font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              Meal Subscription
            </Link>
            <Link
              href="/blog"
              className="text-[11px] font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              Journal
            </Link>
            <Link
              href="/careers"
              className="text-[11px] font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-[11px] font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              Contact
            </Link>
          </div>

          <div className="flex-shrink-0">
            <Button asChild size="default" className="text-[11px] uppercase tracking-wider px-6">
              <Link href="/subscription">Subscribe Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}