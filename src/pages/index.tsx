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
                Wellness doesn't have to consume your life.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                You don't need to spend hours meal prepping, count every calorie or track every metric to feel your best.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                We believe good health is built in the small choices we make every day—a nourishing lunch, a walk in the sunshine, time with friends, talking to a stranger, movement you enjoy and moments around the table.
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
                    The Studio
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Movement, breathwork and recovery.
                  </p>
                  <Button asChild variant="link" className="text-copper p-0 h-auto font-semibold">
                    <a href="https://www.thestudiobycopperandcloves.in/" target="_blank" rel="noopener noreferrer">
                      Explore →
                    </a>
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
                    <a href="https://urbanaut.app/about-copperandcloves" target="_blank" rel="noopener noreferrer">
                      Join Us →
                    </a>
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

        {/* Food Made Properly */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Text Content */}
              <div className="space-y-8 lg:sticky lg:top-32">
                <h2 className="font-display text-3xl lg:text-5xl font-light">
                  Food Made Properly
                </h2>
                <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  We believe healthy food should be every bit as satisfying as it is nourishing.
                </p>
                <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                  Everything is made from scratch using seasonal ingredients, with recipes inspired by cafés around the world and flavours you'll genuinely look forward to eating.
                </p>
                
                <p className="text-base lg:text-lg text-foreground/70 leading-relaxed pt-6">
                  Whether you're joining us for brunch or picking up lunch on the go, our food is designed to leave you feeling good long after you've finished eating.
                </p>
              </div>

              {/* Editorial Photo Collage */}
              <div className="grid grid-cols-6 gap-4">
                {/* Row 1 */}
                <div className="col-span-4 aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src="/Cafe-15.jpg"
                    alt="Fresh prepared food"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/C_C_-_B-158.jpg"
                    alt="Cafe detail"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Row 2 */}
                <div className="col-span-3 aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src="/BAG08771.jpg"
                    alt="Colorful bowl"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-3 aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src="/CCa-3.jpg"
                    alt="Fresh ingredients"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Row 3 */}
                <div className="col-span-2 aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/BAG08143.jpg"
                    alt="Plated meal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-4 aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src="/CANDCTOW_15_10-39.JPG"
                    alt="Cafe atmosphere"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Row 4 */}
                <div className="col-span-3 aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/BAG08132.jpg"
                    alt="Fresh bowl"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-3 aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/C-C_Cafe-20.jpg"
                    alt="Cafe interior"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Row 5 */}
                <div className="col-span-6 aspect-[5/2] relative rounded-lg overflow-hidden">
                  <Image
                    src="/BAG08141.jpg"
                    alt="Beautiful spread"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
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