import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Leaf, Users, MapPin, ArrowRight, Sparkles, Heart, Truck, BookOpen } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Input } from "@/components/ui/input";

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
        <section className="relative h-[600px] lg:h-[700px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/c_c_cafe_1_.jpg"
              alt="Copper + Cloves cafe interior"
              fill
              className="object-cover object-[center_35%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="font-display text-5xl lg:text-7xl font-light leading-tight">
                Wellness, Made Simple.
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed">
                Copper + Cloves is built around one simple question: What helps people live well, consistently?
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                From cafés and meal subscriptions to community events and everyday products, everything we create is designed to make healthy living a little easier.
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

        {/* Our Philosophy Section */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-light text-center mb-20">
              Our Philosophy
            </h2>
            
            <div className="space-y-16 md:space-y-20">
              {/* Statement 1 */}
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="font-display text-2xl md:text-3xl font-semibold italic text-foreground/90">
                  Wellness doesn't have to consume your life.
                </h3>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  We believe in a balanced approach to health that fits seamlessly into your daily routine, not one that demands your entire focus.
                </p>
              </div>

              {/* Statement 2 */}
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="font-display text-2xl md:text-3xl font-semibold italic text-foreground/90">
                  Good health is built in the <em className="not-italic font-normal italic">small choices</em> we make every day.
                </h3>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  It's not about grand gestures or extreme restrictions. It's the consistent, mindful decisions that add up to lasting wellness.
                </p>
              </div>

              {/* Statement 3 */}
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="font-display text-2xl md:text-3xl font-semibold italic text-foreground/90">
                  We're here to make those choices a little easier.
                </h3>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  From nourishing meals to community support, we provide the tools and environment that make healthy living feel effortless.
                </p>
              </div>
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
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }) as any,
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src="/community-outdoor.jpg"
                          alt="Community gathering at Copper + Cloves"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src="/BAG00673.jpg"
                          alt="Community event"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src="/BAG09529.jpg"
                          alt="Community gathering"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src="/DSC06124.jpg"
                          alt="Community connection"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src="/DSC06156.jpg"
                          alt="Community together"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src="/A7401065.JPEG"
                          alt="Community meal"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="space-y-6 lg:pl-8">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sage/10 border border-sage/20">
                  <Heart className="h-4 w-4 text-sage" />
                  <span className="text-sm font-medium text-sage uppercase tracking-wide">Community Events</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-light">
                  Wellness Is Better Together
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  From yoga brunches and reading socials to sober sundowners and community supper-clubs, we're creating spaces where people can slow down, connect and build meaningful friendships.
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

        {/* Products - Coming Soon */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Text & CTA */}
              <div className="space-y-8">
                <h2 className="font-display text-[22px] md:text-[29px] font-light">
                  Bring Copper + Cloves Home
                </h2>
                
                <div className="space-y-6">
                  <p className="text-base text-foreground/80 leading-relaxed">
                    Soon you'll be able to enjoy some of our favourite pantry staples at home. We're launching:
                  </p>
                  
                  <ul className="text-base text-foreground/80 leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Boxes of our signature granola.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Your favourites of our salad dressings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Our much-loved dips like romesco and basil-walnut pesto.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Our SuperSeed topper.</span>
                    </li>
                  </ul>
                </div>

                <form 
                  action="https://docs.google.com/forms/d/e/1FAIpQLSc5JYdpCE0FenQJjlH59-p1Un1rlE_qCGF5PIao6arK9dQt3A/formResponse"
                  method="POST"
                  target="_blank"
                  className="flex flex-col sm:flex-row gap-3 max-w-md pt-4"
                  onSubmit={(e) => {
                    const form = e.currentTarget;
                    const emailInput = form.elements.namedItem('entry.981765683') as HTMLInputElement;
                    
                    setTimeout(() => {
                      if (emailInput) {
                        emailInput.value = '';
                      }
                      alert('Thank you! We\'ll notify you when our pantry staples launch.');
                    }, 100);
                  }}
                >
                  <Input 
                    name="entry.981765683"
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 h-11"
                    required 
                  />
                  <Button type="submit" size="lg" className="sm:w-auto h-11 gap-2 normal-case">
                    Be the first to know
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Right Column: Image */}
              <div className="relative h-[325px] lg:h-[390px] rounded-lg overflow-hidden">
                <Image
                  src="/A7406782_2_.jpg"
                  alt="Copper + Cloves pantry products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journal Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-copper/10 border border-copper/20">
                <BookOpen className="h-4 w-4 text-copper" />
                <span className="text-sm font-medium text-copper uppercase tracking-wide">the Journal</span>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                Recipes you'll come back to. Straightforward nutrition you can trust. Reflections on food, wellbeing and everyday habits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Featured Blog Posts */}
              <Link href="/blog/lemon-coconut-cookies" className="group">
                <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src="https://copperandcloves.com/wp-content/uploads/2020/08/8a0f7b89e524bdb05a21065a97d760a6-1.png"
                      alt="Lemon Coconut Cookies"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">Recipe</Badge>
                    <h3 className="font-display text-xl font-semibold group-hover:text-copper transition-colors">
                      Lemon Coconut Cookies
                    </h3>
                    <p className="text-sm text-foreground/70 line-clamp-2">
                      Bright, citrusy and perfectly chewy - these cookies are a sunshine-in-a-bite moment.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/start-by-slowing-down" className="group">
                <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src="/Sarah_C_C_Subscription_Photoshoot_May_2024-22_1_.jpg"
                      alt="Start By Slowing Down"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="secondary" className="bg-copper/10 text-copper border-copper/20">Lifestyle</Badge>
                    <h3 className="font-display text-xl font-semibold group-hover:text-copper transition-colors">
                      Start By Slowing Down
                    </h3>
                    <p className="text-sm text-foreground/70 line-clamp-2">
                      In a world that glorifies busy, slowing down is a radical act of self-care.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/breakfast-smoothie-bowl" className="group">
                <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src="https://copperandcloves.com/wp-content/uploads/2020/07/0371145292de0f8341535e3601ab5c1d-1.png"
                      alt="Breakfast Smoothie Bowl"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">Nutrition</Badge>
                    <h3 className="font-display text-xl font-semibold group-hover:text-copper transition-colors">
                      Breakfast Smoothie Bowl
                    </h3>
                    <p className="text-sm text-foreground/70 line-clamp-2">
                      A vibrant, nutrient-packed start to your day that tastes as good as it looks.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-copper text-copper hover:bg-copper/5">
                <Link href="/blog">
                  Explore All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}