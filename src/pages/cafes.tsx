import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Script from "next/script";
import { MapPin, Clock, Wifi, PawPrint, SunMedium, ArrowRight, Phone, BookOpen, ShoppingBag, Shirt, Instagram, Utensils, Navigation } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Cafes() {
  const cafes = [
    {
      id: 1,
      name: "Indiranagar",
      description: "Our flagship, set in a beautiful white bungalow.",
      address: "549A, 9th A Main Rd, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
      hours: "9.30am - 8pm on weekdays and 8.30pm on weekends",
      phone: "+91 8904293030",
      image: "/c_c_cafe_4_.jpg",
      amenities: ["Dine-in", "Takeaway", "Pet Friendly", "Bookstore", "Boutique Shopping", "Garden Seating", "Indoor Seating"],
      deliveryRadius: "3km delivery radius",
      mapsUrl: "https://maps.app.goo.gl/HxsBbogFjbZVSEpK7",
      tags: []
    },
    {
      id: 2,
      name: "Lavelle Road",
      address: "4, Walton Rd, Good Earth, off Lavelle Road, KG Halli, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
      hours: "9am - 8pm",
      phone: "+91 8792194527",
      image: "/lavelle_road_16_of_23_.jpg",
      amenities: ["Garden Seating", "Indoor Seating", "Takeaway", "Pet Friendly"],
      deliveryRadius: "3km delivery radius",
      mapsUrl: "https://maps.app.goo.gl/uYJyXegy1MTPichcA",
      tags: ["dine in", "boutique shopping"]
    },
    {
      id: 3,
      name: "Domlur/The Studio",
      address: "4th Floor, 167, 2nd Stage, 2nd Cross, Shankarnag Rd, Domlur, Bengaluru, Karnataka 560071",
      hours: "7.30am to 8pm",
      phone: "+91 9008426703",
      image: "/A7406794_1_.jpg",
      amenities: ["Workout Studio", "Dine-in", "Co-working Friendly", "Indoor Seating"],
      deliveryRadius: "3km delivery radius",
      mapsUrl: "https://maps.app.goo.gl/DQs1BRv2DzSW1uN59",
      tags: []
    },
  ];

  return (
    <>
      <SEO
        title="Our Cafes | Copper + Cloves"
        description="Visit our premium plant-based wellness cafes across Bangalore. Spacious cafes always filled with natural light."
      />
      <Navigation />
      <main>
        {/* Hero - Photo Collage with Text Overlay */}
        <section className="relative">
          {/* Photo Collage Grid */}
          <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
            <div className="grid grid-cols-4 grid-rows-3 gap-2 h-full">
              {/* Large hero image - top left, 2x2 */}
              <div className="col-span-2 row-span-2 relative">
                <Image
                  src="/DSC04391.jpeg"
                  alt="Copper + Cloves food"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />
              </div>
              
              {/* Top right - stacked */}
              <div className="relative">
                <Image
                  src="/IMG_8074_1_.JPG"
                  alt="Fresh dishes"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 45%' }}
                />
              </div>
              <div className="relative">
                <Image
                  src="/c_c_cafe_42_.jpg"
                  alt="Artisan coffee"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />
              </div>
              
              {/* Middle right */}
              <div className="col-span-2 relative">
                <Image
                  src="/DSC04320.jpeg"
                  alt="Colorful brunch"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 45%' }}
                />
              </div>
              
              {/* Bottom row */}
              <div className="relative">
                <Image
                  src="/DSC00427.JPG"
                  alt="Cafe plates"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />
              </div>
              <div className="relative">
                <Image
                  src="/DSC08534.jpg"
                  alt="Brunch spread"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 45%' }}
                />
              </div>
              <div className="col-span-2 relative">
                <Image
                  src="/A7406787.jpg"
                  alt="Menu highlights"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />
              </div>
            </div>
            
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container">
                <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                    Come Hungry
                  </h1>
                  <p className="text-lg text-white/90 leading-relaxed">
                    From colourful brunches and vibrant salads to sandwiches, smoothies and great coffee, our menu is full of dishes you'll want to come back for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cafe Cards Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-light text-center mb-16">
              Find Your Neighbourhood Cafe
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Indiranagar */}
              <Card className="overflow-hidden border-mushroom/30 hover:shadow-xl transition-all duration-300 rounded-lg group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/c_c_cafe_20_.jpg"
                    alt="Copper + Cloves Indiranagar"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-light mb-2">Indiranagar</h3>
                    <p className="text-sm text-foreground/60 flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span>1137, 12th Main Rd, HAL 2nd Stage, Indiranagar, Bangalore 560008</span>
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Mon-Sun: 8am - 9pm</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="tel:8904293030" className="hover:text-primary transition-colors">
                        8904293030
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-foreground/70">
                      <Utensils className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Dine-in • Takeaway • Delivery (2km radius)</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a 
                        href="https://maps.app.goo.gl/UhfKk7CmRZbDSVGq8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Directions
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a 
                        href="https://www.zomato.com/bangalore/copper-cloves-indiranagar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Order Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Lavelle Road */}
              <Card className="overflow-hidden border-mushroom/30 hover:shadow-xl transition-all duration-300 rounded-lg group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/lavelle_road_16_of_23_.jpg"
                    alt="Copper + Cloves Lavelle Road"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-light mb-2">Lavelle Road</h3>
                    <p className="text-sm text-foreground/60 flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span>45, Lavelle Rd, Shanthala Nagar, Ashok Nagar, Bangalore 560001</span>
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Mon-Sun: 8am - 9pm</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="tel:8792194527" className="hover:text-primary transition-colors">
                        8792194527
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-foreground/70">
                      <Utensils className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Dine-in • Takeaway • Delivery (2km radius)</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a 
                        href="https://maps.app.goo.gl/hQm1LSm3dYNqCDfu5" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Directions
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a 
                        href="https://www.zomato.com/bangalore/copper-cloves-1-lavelle-road" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Order Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Domlur */}
              <Card className="overflow-hidden border-mushroom/30 hover:shadow-xl transition-all duration-300 rounded-lg group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/raj_3_of_23_.jpg"
                    alt="Copper + Cloves Domlur"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-light mb-2">Domlur</h3>
                    <p className="text-sm text-foreground/60 flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span>77, 1st Floor, 6th Cross Rd, Domlur I Stage, Domlur, Bangalore 560071</span>
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Mon-Sat: 9am - 6pm (Closed Sundays)</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="tel:9008426703" className="hover:text-primary transition-colors">
                        9008426703
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-foreground/70">
                      <Utensils className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Meal prep studio • Event space</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a 
                        href="https://maps.app.goo.gl/nZSeDhZC8jxfPg5s8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Directions
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a 
                        href="mailto:thestudio@copperandcloves.com"
                      >
                        Enquire
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* More Than Just Cafés */}
        <section className="py-16 lg:py-24">
          <div className="container">
            {/* Header with Photo Overlay */}
            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-center mb-12">
                More Than Just Cafés.
              </h2>
              
              {/* Hero Image with Text Overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/BAG00879_1_.jpg"
                    alt="Community gathering at Copper + Cloves"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
                    <p className="text-white text-xl sm:text-2xl lg:text-3xl text-center max-w-3xl font-light leading-relaxed">
                      At Copper + Cloves, <span className="font-semibold">we believe connection is the missing pillar of wellness.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Body Copy */}
              <div className="max-w-3xl mx-auto space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Good food has always brought people together, but in a world of busy schedules, endless convenience and more time spent online than ever before, genuine connection doesn't always happen by chance.
                </p>
                <p>
                  That's why <span className="font-semibold">we create spaces designed for more than just eating.</span> Places to meet friends, discover something new, linger over another coffee, browse a book, bring your dog, join a run club, attend a workshop or simply spend a little longer than you planned.
                </p>
                <p>
                  Each of our cafés has its own personality, <span className="font-semibold">shaped by the people, partners and community around it.</span> Together, they're designed to make it easier to connect—with others, with your neighbourhood and with yourself.
                </p>
                <p>
                  Because <span className="font-semibold">if you leave feeling a little more connected than when you arrived, we've done our job.</span>
                </p>
              </div>
            </div>

            {/* Three Community Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Indiranagar */}
              <Card className="overflow-hidden border-border bg-white">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/c_c_cafe_9_.jpg"
                          alt="Indiranagar community"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/c_c_cafe_20_.jpg"
                          alt="Indiranagar cafe space"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/DSC00234.jpeg"
                          alt="Indiranagar gathering"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-display text-2xl font-semibold">Indiranagar</h3>
                  <p className="font-semibold text-foreground/90">Books, dogs & retail therapy.</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Shop our well-curated bookstore and retail section, grab a meal for the road, or bring your dog along for breakfast on the lawn.
                  </p>
                </CardContent>
              </Card>

              {/* Lavelle Road */}
              <Card className="overflow-hidden border-border bg-white">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/raj_10_of_23_.jpg"
                          alt="Lavelle Road cafe"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/raj_3_of_23_.jpg"
                          alt="Lavelle Road atmosphere"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/raj_17_of_23_.jpg"
                          alt="Lavelle Road community"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/raj_23_of_23_.jpg"
                          alt="Lavelle Road space"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/dog_at_lavelle.jpeg"
                          alt="Dog-friendly Lavelle Road cafe"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-display text-2xl font-semibold">Lavelle Road</h3>
                  <p className="font-semibold text-foreground/90">Brunch, shopping & slow weekends.</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Re-fuel after a Cubbon run, browse Good Earth and Nicobar, join one of our seasonal workshops and community gatherings.
                  </p>
                </CardContent>
              </Card>

              {/* Domlur/The Studio */}
              <Card className="overflow-hidden border-border bg-white">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/BAG02912.jpg"
                          alt="Domlur Studio"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/BAG09552.jpg"
                          alt="Domlur yoga and movement"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/BAG09564.jpg"
                          alt="Domlur workshops"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/C1373T01.jpg"
                          alt="Domlur creative space"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/DSC04892.jpg"
                          alt="Domlur community gathering"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/DSC08847.jpg"
                          alt="Domlur wellness activities"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-display text-2xl font-semibold">Domlur/ The Studio</h3>
                  <p className="font-semibold text-foreground/90">Move, create & connect.</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Home to yoga and Pilates brunches, sound healing, creative workshops and Analog Club—our monthly digital detox gathering.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Community Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 max-w-2xl mx-auto">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join Our WhatsApp Community
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-copper text-copper hover:bg-copper/5">
                <a href="https://urbanaut.app/about-copperandcloves" target="_blank" rel="noopener noreferrer">
                  Check Out Upcoming Events
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20 bg-[#FAF8F5] border-t border-[#E8E2DA]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <p className="uppercase tracking-[1.5px] text-xs text-foreground/60 font-semibold">
                COMMUNITY & MOVEMENT
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">
                Follow the Ritual{" "}
                <a 
                  href="https://www.instagram.com/copperandcloves/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-[#A36A53] transition-colors"
                >
                  @copperandcloves
                </a>
              </h2>
              <a
                href="https://www.instagram.com/copperandcloves/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-[#A36A53] transition-colors text-sm"
              >
                Join 15k+ mindful living community members
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Instagram Grid - Live Feed via Behold */}
            <div className="w-full">
              {/* @ts-expect-error - behold-widget is a custom web component from Behold.so */}
              <behold-widget feed-id="oO9ZBaWmPzk1V5xbqPS0"></behold-widget>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <a 
                  href="https://www.instagram.com/copperandcloves/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Behold Widget Script */}
      <Script id="behold-widget-script" strategy="afterInteractive">
        {`
          (() => {
            if(window.__bhldScript)return;window.__bhldScript=true;
            const d=document,s=d.createElement("script");s.type="module";
            s.src="https://w.behold.so/widget.js";setTimeout(()=>{d.head.append(s);},0);
          })();
        `}
      </Script>
    </>
  );
}