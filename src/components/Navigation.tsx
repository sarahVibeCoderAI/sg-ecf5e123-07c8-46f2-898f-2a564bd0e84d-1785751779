"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cafes", label: "Our Cafés" },
  { href: "/subscription", label: "Meal Subscription" },
  { href: "/blog", label: "Journal" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're within the first 800px (hero + manifesto sections)
      setIsAtTop(window.scrollY < 800);
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamic text color classes based on scroll position
  const textColorClass = isAtTop 
    ? "text-[#F4EEE6]" 
    : "text-foreground/70";
  
  const hoverColorClass = isAtTop
    ? "hover:text-white"
    : "hover:text-primary";

  const menuIconClass = isAtTop
    ? "text-[#F4EEE6]"
    : "text-foreground";

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b transition-all duration-300"
      style={{
        borderColor: isAtTop ? 'rgba(244, 238, 230, 0.15)' : 'rgba(0, 0, 0, 0.08)',
        backgroundColor: isAtTop ? 'rgba(48, 88, 83, 0.4)' : 'rgba(250, 247, 242, 0.65)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: isAtTop 
          ? '0 4px 24px rgba(0, 0, 0, 0.12)' 
          : '0 2px 16px rgba(0, 0, 0, 0.04)'
      }}>
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/logo-horizontal.png" 
              alt="Copper + Cloves" 
              width={250}
              height={50}
              className="h-10 w-auto object-contain transition-opacity duration-300"
              style={{ 
                filter: isAtTop ? 'brightness(0) invert(1)' : 'none' 
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-10">
            <Link
              href="/cafes"
              className={`text-[11px] font-medium ${textColorClass} ${hoverColorClass} transition-colors uppercase tracking-wider whitespace-nowrap`}
            >
              Our Cafes
            </Link>
            <Link
              href="/subscription"
              className={`text-[11px] font-medium ${textColorClass} ${hoverColorClass} transition-colors uppercase tracking-wider whitespace-nowrap`}
            >
              Meal Subscription
            </Link>
            <Link
              href="/blog"
              className={`text-[11px] font-medium ${textColorClass} ${hoverColorClass} transition-colors uppercase tracking-wider whitespace-nowrap`}
            >
              Journal
            </Link>
            <Link
              href="/careers"
              className={`text-[11px] font-medium ${textColorClass} ${hoverColorClass} transition-colors uppercase tracking-wider whitespace-nowrap`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`text-[11px] font-medium ${textColorClass} ${hoverColorClass} transition-colors uppercase tracking-wider whitespace-nowrap`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className={menuIconClass}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button asChild size="lg" className="w-full text-[11px] uppercase tracking-wider">
                      <Link href="/subscription" onClick={() => setOpen(false)}>
                        Subscribe Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Subscribe Button - Desktop */}
            <div className="hidden lg:block flex-shrink-0">
              <Button 
                asChild 
                size="default" 
                className={`text-[11px] uppercase tracking-wider px-6 transition-all duration-300 ${
                  isAtTop 
                    ? 'bg-[#C5A394] hover:bg-[#C5A394]/90 text-white border-[#C5A394]' 
                    : ''
                }`}>
                <Link href="/subscription">Subscribe Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}