import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Leaf, Users, MapPin, ArrowRight, Sparkles, Heart, Truck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SEO
        title="Copper + Cloves | Premium Plant-Based Wellness Cafes in Bangalore"
        description="Premium plant-based cafes designed with your wellness in mind. Hyper-local meal subscriptions and artisanal products across Bangalore."
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[85vh] lg:h-screen flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/hero-main.jpg"
              alt="Copper + Cloves interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="font-display text-5xl lg:text-7xl font-light leading-tight">
                Wellness, Made Simple.
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed">
                Copper + Cloves is a modern wellness brand built around one simple belief: feeling your best should fit effortlessly into everyday life.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                From vibrant cafés and flexible meal subscriptions to community events and wellness education, we're here to help you build healthier habits that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                  <Link href="/cafes">Explore Our Cafés</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                  <Link href="/subscription">Start Meal Subscription</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container max-w-4xl text-center">
            <h2 className="font-display text-3xl lg:text-5xl font-light mb-8">
              Our Philosophy
            </h2>
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg lg:text-xl font-bold">
                Wellness Is More Than What You Eat
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                Good health isn't built in a week.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                It's built through the small choices we make every day—what we eat, how we move, the people we surround ourselves with and the moments we make time for ourselves.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                We're here to make those choices a little easier.
              </p>
            </div>
          </div>
        </section>

        {/* Our Ecosystem */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-5xl font-light mb-4">
                Our Ecosystem
              </h2>
              <p className="text-lg lg:text-xl text-foreground/80">
                One Brand. Many Ways to Nourish Yourself.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cafés */}
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-copper">
                    Cafés
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Beautiful spaces designed for everyday nourishment.
                  </p>
                  <Button asChild variant="link" className="text-copper p-0 h-auto font-semibold">
                    <Link href="/cafes">Explore →</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Meal Subscription */}
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-copper">
                    Meal Subscription
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Healthy eating on autopilot.
                  </p>
                  <Button asChild variant="link" className="text-copper p-0 h-auto font-semibold">
                    <Link href="/subscription">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Studio */}
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-copper">
                    Studio
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Movement, breathwork and recovery.
                  </p>
                  <Button asChild variant="link" className="text-copper p-0 h-auto font-semibold">
                    <Link href="/contact">Get in Touch →</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Community */}
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-copper">
                    Community
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Events that bring people together.
                  </p>
                  <Button asChild variant="link" className="text-copper p-0 h-auto font-semibold">
                    <Link href="/contact">Join Us →</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Recipes & Journal */}
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-copper">
                    Recipes & Journal
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Simple recipes, mindful eating and practical wellness advice.
                  </p>
                  <Button asChild variant="link" className="text-copper p-0 h-auto font-semibold">
                    <Link href="/blog">Read →</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Coming Soon */}
              <Card className="bg-muted/50 border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-sage">
                    Coming Soon
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Pantry essentials you'll use every day.
                  </p>
                  <p className="text-sm text-foreground/60 italic">
                    Granola. Dressings. Seed toppers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-light">
                Our Bestsellers
              </h2>
              <Button asChild variant="ghost" className="hidden sm:inline-flex text-sage hover:text-sage/80">
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "High-Protein Granola",
                  image: "/generated/product-granola.png",
                  price: "₹450",
                  badge: "Pick up In-Store",
                },
                {
                  name: "Superfood Seed Mix",
                  image: "/generated/product-granola.png",
                  price: "₹350",
                  badge: "Add to Subscription",
                },
                {
                  name: "House-Made Hummus",
                  image: "/generated/product-granola.png",
                  price: "₹280",
                  badge: "Pick up In-Store",
                },
                {
                  name: "Ready-to-Eat Salad Bowl",
                  image: "/generated/product-granola.png",
                  price: "₹420",
                  badge: "Add to Subscription",
                },
              ].map((product, i) => (
                <Card key={i} className="group overflow-hidden border-mushroom/30 bg-white hover:shadow-xl transition-all">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                      {product.badge}
                    </Badge>
                    <h3 className="font-sans font-medium text-base">{product.name}</h3>
                    <p className="text-lg font-display font-light text-copper">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative">
                <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="/community-outdoor.jpg"
                    alt="Community gathering at Copper + Cloves"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:pl-8">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sage/10 border border-sage/20">
                  <Heart className="h-4 w-4 text-sage" />
                  <span className="text-sm font-medium text-sage uppercase tracking-wide">Community Events</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-light">
                  More than just a cafe.
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  Join us for cooking workshops, nutrition talks, community meetups and reading socials. Community is the missing pillar of wellness and we want to create that friendly-neighbourhood cafe where there's always something going on.
                </p>
                <Button asChild className="bg-sage text-white hover:bg-sage/90">
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