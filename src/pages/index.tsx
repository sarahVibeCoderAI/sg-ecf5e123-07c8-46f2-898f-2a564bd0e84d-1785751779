import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Leaf, Users, MapPin, ArrowRight, Sparkles, Heart, Truck } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="Copper + Cloves | Premium Plant-Based Wellness Cafes in Bangalore"
        description="Your home away from home. A premium chain of high-end, plant-based cafes designed for holistic wellness. Hyper-local meal subscriptions and artisanal products."
      />
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="container py-20 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                    A Premium Chain of High-End, Plant-Based Cafes
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Designed for holistic wellness. Highly nourishing, intentionally sourced, deeply trusted. Your sanctuary for movement, connection, and hyper-local convenience.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <Link href="/cafes">
                      <MapPin className="mr-2 h-5 w-5" />
                      Explore Our Cafes
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="text-base">
                    <Link href="/subscription">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Start Meal Subscription
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-xl border border-border/50 shadow-2xl">
                  <img
                    src="/generated/hero-cafe-interior.png"
                    alt="Sun-drenched Copper + Cloves cafe interior"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                The C+C Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three pillars of intentional wellness, woven into every experience.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Move & Refuel</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The perfect pit-stop post-workout to nourish your body with clean, whole foods. Fuel your movement with meals designed by nutritionists who understand performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Meet & Connect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A sun-drenched sanctuary to gather with your community or work productively. Where conversation flows as easily as your morning brew.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Hyper-Local Convenience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A seamless ecosystem of grab-and-go nourishment, retail products, and doorstep wellness. When a C+C opens near you, your daily nutrition is handled.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container">
            <div className="flex items-end justify-between mb-12">
              <div className="space-y-2">
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Bestsellers
                </h2>
                <p className="text-lg text-muted-foreground">
                  Artisanal products crafted in-house, available at all cafes.
                </p>
              </div>
              <Button variant="link" className="hidden sm:inline-flex" asChild>
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Signature Seed & Nut Granola",
                  price: "₹425",
                  image: "/generated/product-granola.png",
                  badge: "Pick Up In-Store",
                },
                {
                  name: "Superfood Energy Mix",
                  price: "₹550",
                  image: "/generated/product-granola.png",
                  badge: "Pick Up In-Store",
                },
                {
                  name: "Chef's Roasted Red Pepper Dip",
                  price: "₹320",
                  image: "/generated/product-granola.png",
                  badge: "Add to Subscription",
                },
                {
                  name: "Daily Harvest Salad Bowl",
                  price: "₹380",
                  image: "/generated/product-granola.png",
                  badge: "Add to Subscription",
                },
              ].map((product) => (
                <Card key={product.name} className="group cursor-pointer border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.badge}
                    </Badge>
                    <h3 className="font-display font-semibold text-base">
                      {product.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {product.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[3/2] overflow-hidden rounded-xl border border-border/50 shadow-xl">
                  <img
                    src="/generated/community-gathering.png"
                    alt="Community gathering at Copper + Cloves"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <Heart className="h-4 w-4" />
                  <span>Community Events</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Your Home Away From Home
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join us for cooking workshops, nutrition discussions, and community meetups. Our sun-drenched spaces are designed for connection, learning, and shared wellness.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Monthly plant-based cooking masterclasses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Nutrition science talks with wellness experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Weekend community brunches and gatherings</span>
                  </li>
                </ul>
                <Button asChild size="lg" variant="outline">
                  <Link href="/blog">
                    View Upcoming Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}