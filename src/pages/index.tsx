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
        description="Premium plant-based cafes designed with your wellness in mind. Hyper-local meal subscriptions and artisanal products across Bangalore."
      />
      <Navigation />
      <main>
        <section className="section-padding pt-12 md:pt-16">
          <div className="container">
            <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
              <div className="space-y-8 lg:pr-8">
                <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
                  Cafes designed with your wellness in mind.
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-xl">
                  Colourful, nourishing food, made from scratch with love, every day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    <Link href="/cafes">Explore Our Cafes</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/subscription">Start Meal Subscription</Link>
                  </Button>
                </div>
              </div>
              <div className="relative lg:order-first lg:order-last">
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="/hero-main.jpg"
                    alt="Copper + Cloves cafe - premium plant-based wellness"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container">
            <div className="text-center space-y-3 mb-16">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                The C+C Philosophy
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Three pillars of intentional wellness, woven into every experience.
              </p>
            </div>
            <div className="grid gap-0 md:grid-cols-3 divide-x divide-border">
              <div className="p-8 md:p-10 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-light">Move & Refuel</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Designed for post-workout recovery using clean, whole-food nutrition. The perfect pit-stop to nourish your body after movement.
                </p>
              </div>

              <div className="p-8 md:p-10 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-display text-2xl font-light">Meet & Connect</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Sunlit gathering sanctuaries to find community or work mindfully. Where conversation flows as easily as your morning brew.
                </p>
              </div>

              <div className="p-8 md:p-10 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-light">Complete Care</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Seamlessly bridging in-cafe dining with hyper-local lifestyle solutions. When a C+C opens near you, your daily nutrition is handled.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="flex items-end justify-between mb-12">
              <div className="space-y-2">
                <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                  Our Bestsellers
                </h2>
                <p className="text-lg text-foreground/60">
                  Artisanal products crafted in-house, available at all cafes.
                </p>
              </div>
              <Button variant="link" className="hidden sm:inline-flex text-primary hover:text-primary/80" asChild>
                <Link href="/products">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "High-Protein Granola Blend",
                  price: "₹425",
                  image: "/generated/product-granola.png",
                  badge: "Pick Up In-Store",
                },
                {
                  name: "Superfood Seed Mix",
                  price: "₹550",
                  image: "/generated/product-granola.png",
                  badge: "Pick Up In-Store",
                },
                {
                  name: "House-Made Roasted Dip",
                  price: "₹320",
                  image: "/generated/product-granola.png",
                  badge: "Add to Subscription",
                },
                {
                  name: "Daily Harvest Salad",
                  price: "₹380",
                  image: "/generated/product-granola.png",
                  badge: "Add to Subscription",
                },
              ].map((product) => (
                <Card key={product.name} className="group cursor-pointer border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-lg">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <Badge variant="secondary" className="text-xs font-normal bg-secondary/10 text-secondary border-0">
                      {product.badge}
                    </Badge>
                    <h3 className="font-sans font-medium text-base text-foreground">
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

        <section className="section-padding bg-card/50">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="relative">
                <div className="aspect-[3/2] overflow-hidden rounded-lg shadow-xl">
                  <img
                    src="/generated/community-gathering.png"
                    alt="Community gathering at Copper + Cloves"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium uppercase tracking-wide">
                  <Heart className="h-4 w-4" />
                  <span>Community Events</span>
                </div>
                <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                  Your Home Away From Home
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Join us for cooking workshops, nutrition discussions, and community meetups. Our sun-drenched spaces are designed for connection, learning, and shared wellness.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/70">Monthly plant-based cooking masterclasses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/70">Nutrition science talks with wellness experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/70">Weekend community brunches and gatherings</span>
                  </li>
                </ul>
                <Button asChild size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
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