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

        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-center mb-16">
              The Copper + Cloves Philosophy
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-mushroom/30 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage/10">
                    <Sparkles className="h-6 w-6 text-sage" />
                  </div>
                  <h3 className="font-display text-xl font-light">Move & Refuel</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    The perfect pit-stop post-workout to nourish your body with clean, whole foods designed for optimal recovery and sustained energy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-mushroom/30 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage/10">
                    <Users className="h-6 w-6 text-sage" />
                  </div>
                  <h3 className="font-display text-xl font-light">Meet & Connect</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Each outlet is a sun-drenched sanctuary to meet new people or connect with loved ones.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-mushroom/30 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage/10">
                    <Heart className="h-6 w-6 text-sage" />
                  </div>
                  <h3 className="font-display text-xl font-light">Holistic Wellness</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Nourish in the cafe, nourish on-the-go with our ready-to-eat salads or let us take care of everything with our meal subscription service.
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