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
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[600px] lg:h-[700px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/hero-image/IMG_25612023Raj_Kashyap.JPG"
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

        {/* Editorial Brand Manifesto - Our Purpose */}
        <section 
          className="py-18 px-6 lg:py-[140px] lg:px-[8%]"
          style={{ 
            backgroundColor: '#305853',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)'
          }}>
          <div className="max-w-6xl mx-auto">
            {/* Tier 1: The Hero Statement */}
            <div className="text-center space-y-6 mb-16 lg:mb-24">
              <p 
                className="uppercase tracking-[0.2em] text-[0.85rem] font-semibold"
                style={{ color: '#C5A394' }}>
                OUR PURPOSE
              </p>
              
              <h2 
                className="font-display font-light leading-[1.05]"
                style={{ 
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                  color: '#F4EEE6'
                }}>
                We believe we're all looking for the same thing.
              </h2>

              <p 
                className="font-display italic leading-[1.2] mt-5"
                style={{ 
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: '#C5A394'
                }}>
                To feel nourished.<br />
                Not just by the food we eat, but by the way we live.
              </p>
            </div>

            {/* Tier 2: Narrative Split / Context Box */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-24 max-w-5xl mx-auto">
              <div className="lg:col-span-5">
                <p 
                  className="font-display leading-[1.3]"
                  style={{ 
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                    color: '#F4EEE6'
                  }}>
                  Healthy living has become far more complicated than it needs to be.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p 
                  className="leading-[1.8]"
                  style={{ 
                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                    color: 'rgba(244, 238, 230, 0.85)'
                  }}>
                  We're surrounded by conflicting advice, wellness trends and endless trackers promising to optimise every part of our lives.
                </p>
                <p 
                  className="leading-[1.8]"
                  style={{ 
                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                    color: 'rgba(244, 238, 230, 0.85)'
                  }}>
                  We think there's a simpler way.
                </p>
              </div>
            </div>

            {/* Tier 3: The 5 Nourishment Principles - Horizontal Magazine Grid */}
            <div 
              className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6 py-12 lg:py-12 my-12 lg:my-16"
              style={{
                borderTop: '1px solid rgba(142, 148, 122, 0.3)',
                borderBottom: '1px solid rgba(142, 148, 122, 0.3)'
              }}>
              {[
                { index: '+', text: 'Nourishing food.' },
                { index: '+', text: 'Movement you enjoy.' },
                { index: '+', text: 'Time outdoors.' },
                { index: '+', text: 'Conversations around the table.' },
                { index: '+', text: 'A strong community.' }
              ].map((principle, idx) => (
                <div 
                  key={idx}
                  className="space-y-4 opacity-0 animate-fade-in"
                  style={{ 
                    animationDelay: `${idx * 150}ms`,
                    animationFillMode: 'forwards'
                  }}>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: '#8E947A' }}>
                    {principle.index}
                  </span>
                  <p 
                    className="font-display font-normal leading-[1.2]"
                    style={{ 
                      fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)',
                      color: '#F4EEE6'
                    }}>
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tier 4: The Climax & Anchor Conclusion */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <p 
                className="leading-[1.7]"
                style={{ 
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
                  color: '#8E947A'
                }}>
                These are the things that nourish us.
              </p>
              <p 
                className="font-display font-medium leading-[1.1]"
                style={{ 
                  fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                  color: '#C5A394'
                }}>
                That's what we're building at Copper + Cloves.
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
                Everything we create is designed to make healthy living a little easier.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cafés */}
              <Link href="/cafes" className="block group">
                <Card className="bg-card border-border hover:shadow-lg transition-all h-full">
                  <CardContent className="p-8 space-y-4">
                    <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                      Gather
                    </Badge>
                    <h3 
                      className="font-display text-2xl font-semibold group-hover:opacity-80 transition-colors"
                      style={{ color: '#305853' }}>
                      Cafés
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Beautiful spaces designed for everyday nourishment.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Meal Subscription */}
              <Link href="/subscription" className="block group">
                <Card className="bg-card border-border hover:shadow-lg transition-all h-full">
                  <CardContent className="p-8 space-y-4">
                    <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                      Nourish Every Day
                    </Badge>
                    <h3 
                      className="font-display text-2xl font-semibold group-hover:opacity-80 transition-colors"
                      style={{ color: '#305853' }}>
                      Meal Subscription
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Healthy eating on autopilot.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Studio */}
              <a 
                href="https://www.thestudiobycopperandcloves.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group">
                <Card className="bg-card border-border hover:shadow-lg transition-all h-full">
                  <CardContent className="p-8 space-y-4">
                    <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                      Nourish Your Body
                    </Badge>
                    <h3 
                      className="font-display text-2xl font-semibold group-hover:opacity-80 transition-colors"
                      style={{ color: '#305853' }}>
                      The Studio
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Movement, breathwork and recovery.
                    </p>
                  </CardContent>
                </Card>
              </a>

              {/* Community */}
              <a 
                href="https://urbanaut.app/about-copperandcloves" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group">
                <Card className="bg-card border-border hover:shadow-lg transition-all h-full">
                  <CardContent className="p-8 space-y-4">
                    <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                      Connect
                    </Badge>
                    <h3 
                      className="font-display text-2xl font-semibold group-hover:opacity-80 transition-colors"
                      style={{ color: '#305853' }}>
                      Community
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Events that bring people together.
                    </p>
                  </CardContent>
                </Card>
              </a>

              {/* Recipes & Journal */}
              <Link href="/blog" className="block group">
                <Card className="bg-card border-border hover:shadow-lg transition-all h-full">
                  <CardContent className="p-8 space-y-4">
                    <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                      Read
                    </Badge>
                    <h3 
                      className="font-display text-2xl font-semibold group-hover:opacity-80 transition-colors"
                      style={{ color: '#305853' }}>
                      Recipes & Journal
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Simple recipes, mindful eating and practical wellness advice.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Coming Soon */}
              <Card className="bg-muted/50 border-border hover:shadow-lg transition-all h-full">
                <CardContent className="p-8 space-y-4">
                  <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                    Nourish at Home
                  </Badge>
                  <h3 className="font-display text-2xl font-semibold text-sage">
                    Our Products
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
                        <Image
                          src="/community-outdoor.jpg"
                          alt="Community gathering at Copper + Cloves"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <Image
                          src="/BAG00673.jpg"
                          alt="Community event"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <Image
                          src="/BAG09529.jpg"
                          alt="Community gathering"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <Image
                          src="/DSC06124.jpg"
                          alt="Community connection"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <Image
                          src="/DSC06156.jpg"
                          alt="Community together"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-2xl">
                        <Image
                          src="/A7401065.JPEG"
                          alt="Community meal"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
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
                <h2 className="font-display text-3xl lg:text-5xl font-light">
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

        {/* Our Studio */}
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }) as any,
            ]}
            className="absolute inset-0 h-full"
          >
            <CarouselContent className="h-full ml-0">
              <CarouselItem className="pl-0 h-full basis-full">
                <div className="relative h-[500px] lg:h-[600px] w-full">
                  <Image src="/studio-general/FIT_P57.jpg" alt="Studio movement class" fill className="object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 h-full basis-full">
                <div className="relative h-[500px] lg:h-[600px] w-full">
                  <Image src="/studio-general/Mat_Pilates_by_Physique_57.jpg" alt="Mat pilates session" fill className="object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 h-full basis-full">
                <div className="relative h-[500px] lg:h-[600px] w-full">
                  <Image src="/studio-general/DSC08847.jpg" alt="Wellness event at the studio" fill className="object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 h-full basis-full">
                <div className="relative h-[500px] lg:h-[600px] w-full">
                  <Image src="/studio-general/C1360T01.jpg" alt="Studio space" fill className="object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 h-full basis-full">
                <div className="relative h-[500px] lg:h-[600px] w-full">
                  <Image src="/studio-general/C1373T01.jpg" alt="Movement studio" fill className="object-cover" />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-0 bg-black/50 z-10" />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white space-y-6 px-6 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sage/10 border border-sage/20">
                <Heart className="h-4 w-4 text-sage" />
                <span className="text-sm font-medium text-sage uppercase tracking-wide">Wellbeing</span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-light">
                Our Studio
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed">
                Daily schedule of movement classes and wellness events.
              </p>
              <div className="pt-2">
                <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                  <a href="https://www.thestudiobycopperandcloves.in/" target="_blank" rel="noopener noreferrer">
                    Explore Our Studio
                  </a>
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
                <h2 className="font-display text-[28px] md:text-[36px] font-light whitespace-nowrap">
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
                    <Image
                      src="https://copperandcloves.com/wp-content/uploads/2020/08/8a0f7b89e524bdb05a21065a97d760a6-1.png"
                      alt="Lemon Coconut Cookies"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
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
                    <Image
                      src="/Sarah_C_C_Subscription_Photoshoot_May_2024-22_1_.jpg"
                      alt="Start By Slowing Down"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
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
                    <Image
                      src="https://copperandcloves.com/wp-content/uploads/2020/07/0371145292de0f8341535e3601ab5c1d-1.png"
                      alt="Breakfast Smoothie Bowl"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
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