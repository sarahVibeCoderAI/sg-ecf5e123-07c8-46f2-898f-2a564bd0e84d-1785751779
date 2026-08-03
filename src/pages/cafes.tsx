import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Script from "next/script";
import { MapPin, Clock, Wifi, PawPrint, SunMedium, ArrowRight, Phone, BookOpen, ShoppingBag, Shirt, Instagram } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious } from
"@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Cafes() {
  const cafes = [
  {
    id: 1,
    name: "Indiranagar",
    description: "Our flagship, set in a beautiful white bungalow.",
    address: "549A, 9th A Main Rd, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
    hours: "Monday: 11:30am – 8:00pm | Tuesday – Thursday: 9:30am – 8:00pm | Friday – Sunday: 9:30am – 8:30pm",
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
    address: "4, Walton Rd, Good Earth, off Lavelle Road, Ashok Nagar, Bengaluru, Karnataka 560001",
    hours: "Monday – Sunday: 9:00am – 8:00pm",
    phone: "+91 8792194527",
    image: "/raj_11_of_23_.jpg",
    amenities: ["Garden Seating", "Indoor Seating", "Takeaway", "Pet Friendly", "Dine In", "Boutique Shopping"],
    deliveryRadius: "3km delivery radius",
    mapsUrl: "https://maps.app.goo.gl/uYJyXegy1MTPichcA",
    tags: []
  },
  {
    id: 3,
    name: "Domlur/The Studio",
    address: "4th Floor, 167, 2nd Stage, 2nd Cross, Shankarnag Rd, Domlur, Bengaluru, Karnataka 560071",
    hours: "Monday – Sunday: 9:00am – 8:00pm",
    phone: "+91 9008426703",
    image: "/A7406794_1_.jpg",
    amenities: ["Workout Studio", "Dine-in", "Take Away", "Co-working Friendly", "Indoor Seating", "Natural Light", "Solo Friendly"],
    deliveryRadius: "3km delivery radius",
    mapsUrl: "https://maps.app.goo.gl/DQs1BRv2DzSW1uN59",
    tags: []
  }];


  return (
    <>
      <SEO
        title="Our Cafes | Copper + Cloves"
        description="Visit our premium plant-based wellness cafes across Bangalore. Spacious cafes always filled with natural light." />
      
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
                  style={{ objectPosition: 'center 40%' }} />
                
              </div>
              
              {/* Top right - stacked */}
              <div className="relative">
                <Image
                  src="/IMG_8074_1_.JPG"
                  alt="Fresh dishes"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 45%' }} />
                
              </div>
              <div className="relative">
                <Image
                  src="/c_c_cafe_42_.jpg"
                  alt="Artisan coffee"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }} />
                
              </div>
              
              {/* Middle right */}
              <div className="col-span-2 relative">
                <Image
                  src="/DSC04320.jpeg"
                  alt="Colorful brunch"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 45%' }} />
                
              </div>
              
              {/* Bottom row */}
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image
                  src="/IMG_5274.jpeg"
                  alt="Cafe interior detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw" />
                
              </div>
              <div className="relative">
                <Image
                  src="/DSC08534.jpg"
                  alt="Brunch spread"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 45%' }} />
                
              </div>
              <div className="col-span-2 relative">
                <Image
                  src="/A7406787.jpg"
                  alt="Menu highlights"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }} />
                
              </div>
            </div>
          </div>

          {/* Text Content Below Hero */}
          <div className="container max-w-4xl py-12 lg:py-16">
            <div className="text-center space-y-6">
              <h1 className="font-display text-4xl lg:text-5xl font-light">
                Nourishment Begins Here
              </h1>
              <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Fresh food made from scratch. Coffee worth lingering over. Spaces designed for conversation, connection and the little moments that make everyday life a little richer.
              </p>
            </div>
          </div>
        </section>

        {/* Cafes Grid */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="text-center mb-12 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-light">
                Find Your Neighbourhood Café
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-5xl mx-auto">
                Nourishment Begins Here. Fresh food made from scratch. Coffee worth lingering over. Spaces designed for conversation, connection and the little moments that make everyday life a little richer.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
              {cafes.map((cafe) =>
              <Card key={cafe.id} className="overflow-hidden border-border bg-card hover:shadow-lg transition-shadow flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                    src={cafe.image}
                    alt={`${cafe.name} cafe`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw" />
                  
                  </div>
                  <CardContent className="p-8 space-y-4 flex flex-col flex-1">
                    <div>
                      <h2 className="font-display text-2xl font-semibold mb-2">
                        {cafe.name}
                      </h2>
                      <p className="text-foreground/70">{cafe.address}</p>
                    </div>

                    {cafe.tags.length > 0 &&
                  <div className="flex flex-wrap gap-2">
                        {cafe.tags.map((tag, idx) =>
                    <Badge key={idx} variant="secondary" className="bg-muted text-foreground/70">
                            {tag}
                          </Badge>
                    )}
                      </div>
                  }

                    <div className="space-y-3 pt-4">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Phone</p>
                          <a href={`tel:${cafe.phone.replace(/\s/g, '')}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                            {cafe.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Hours</p>
                          <p className="text-sm text-foreground/70">{cafe.hours}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {cafe.amenities.map((amenity, idx) =>
                      <Badge key={idx} variant="secondary" className="bg-muted text-foreground/70">
                            {amenity}
                          </Badge>
                      )}
                      </div>
                    </div>

                    <div className="pt-6 mt-auto border-t border-border">
                      <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                        <a href={cafe.mapsUrl} target="_blank" rel="noopener noreferrer">
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Community Cards Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container max-w-7xl">
            {/* Three Community Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-12">
              {/* Indiranagar */}
              <Card className="overflow-hidden border-border bg-white">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/Indiranagar-events/c_c_cafe_7_.jpg"
                          alt="Indiranagar community event"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/Indiranagar-events/IMG_3706.jpeg"
                          alt="Indiranagar gathering"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/Indiranagar-events/IMG_4524.jpeg"
                          alt="Indiranagar cafe space"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/Indiranagar-events/IMG_25612023Raj_Kashyap.JPG"
                          alt="Indiranagar reading social"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <CardContent className="p-8 space-y-3">
                  <h3 className="font-display text-2xl font-semibold">Indiranagar</h3>
                  <p className="font-semibold text-foreground/90">Books, brunch & community.</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Browse Champaca Bookstore, discover thoughtfully curated local brands, join reading socials, thrift markets and puppy adoption days.
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
                          src="/lavelle-road/raj_3_of_23_.jpg"
                          alt="Lavelle Road outdoor seating"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/lavelle-road/raj_17_of_23_.jpg"
                          alt="Lavelle Road cafe interior"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/lavelle-road/raj_23_of_23_.jpg"
                          alt="Lavelle Road garden"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/lavelle-road/dog_at_lavelle.jpeg"
                          alt="Dog friendly at Lavelle Road"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <CardContent className="p-8 space-y-3">
                  <h3 className="font-display text-2xl font-semibold">Lavelle Road</h3>
                  <p className="font-semibold text-foreground/90">Brunch, shopping & slow weekends.</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Settle in after a Cubbon run, browse Good Earth and Nicobar, or join one of our seasonal workshops and community gatherings.
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
                          src="/studio-events/BAG02912.jpg"
                          alt="Domlur Studio"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/studio-events/BAG09564.jpg"
                          alt="Domlur workshops"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/studio-events/BAG09544_1_.jpg"
                          alt="Domlur movement session"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/studio-events/C1373T01.jpg"
                          alt="Domlur creative space"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/studio-events/C1425T01_2_.jpg"
                          alt="Domlur community gathering"
                          fill
                          className="object-cover" />
                        
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <CardContent className="p-8 space-y-3">
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
                Connect with us{" "}
                <a
                  href="https://www.instagram.com/copperandcloves/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-[#A36A53] transition-colors">
                  
                  @copperandcloves
                </a>
              </h2>
              <a
                href="https://www.instagram.com/copperandcloves/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-[#A36A53] transition-colors text-sm">
                
                join our 17k strong community
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
                asChild>
                
                <a
                  href="https://www.instagram.com/copperandcloves/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2">
                  
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm tracking-wider text-foreground/60 uppercase">
              Plan your visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Everything you need to know before dropping by.
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions about opening hours, laptop policies, parking, or pets? We've got you covered.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-0">
            {/* Question 1 */}
            <AccordionItem value="item-1" className="border-b border-border/30 py-6">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl font-normal hover:text-primary transition-colors normal-case">
                What are your opening hours?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-foreground/70 leading-relaxed pt-4 space-y-6">
                <p>Our cafés each have slightly different opening hours, so we've listed them below.</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Indiranagar</h4>
                    <p>Monday: 11:30am – 8:00pm<br />
                    Tuesday – Thursday: 9:30am – 8:00pm<br />
                    Friday – Sunday: 9:30am – 8:30pm</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Lavelle Road</h4>
                    <p>Monday – Sunday: 9:00am – 7:00pm</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Domlur / The Studio</h4>
                    <p>Monday – Saturday: 7:30am – 8:00pm<br />
                    Sunday: 7:30am – 5:30pm</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Question 2 */}
            <AccordionItem value="item-2" className="border-b border-border/30 py-6">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl font-normal hover:text-primary transition-colors normal-case">
                Is there parking?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-foreground/70 leading-relaxed pt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Indiranagar</h4>
                  <p>There's street parking along 9th A Main, where we're located. During the week it's usually easy to find a spot, but weekends can get busy. We don't currently offer valet parking, and we're just a two-minute walk from Indiranagar Metro Station, so we'd recommend taking the Metro or a cab if you can.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Lavelle Road</h4>
                  <p>Parking around Lavelle Road is limited. We usually recommend parking at UB City, which is just a three-minute walk away. We're also hoping to introduce valet parking in the future.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Domlur / The Studio</h4>
                  <p>Domlur is a quieter neighbourhood, and you'll usually find street parking in the surrounding lanes.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Question 3 */}
            <AccordionItem value="item-3" className="border-b border-border/30 py-6">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl font-normal hover:text-primary transition-colors normal-case">
                Can I work from the café?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-foreground/70 leading-relaxed pt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Domlur / The Studio</h4>
                  <p>Absolutely. Domlur is our most work-friendly café, with plenty of natural light, free Wi-Fi and lots of plug points. We also offer half-day and full-day co-working passes. If you're looking to balance work with wellbeing, you can even join a class at The Studio before or after your workday.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Indiranagar</h4>
                  <p>During the week, we have a dedicated co-working room where laptops are welcome. Our garden and main café are laptop-free spaces on weekdays, creating a calmer atmosphere for everyone. At weekends, we don't accommodate co-working anywhere in the café—we'd much rather you came to slow down, enjoy brunch and spend time with friends.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Lavelle Road</h4>
                  <p>Laptops are welcome at our indoor tables on weekdays, with free Wi-Fi and plug points available along the high bar. Our garden is always a laptop-free space, and we don't offer co-working on weekends.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Question 4 */}
            <AccordionItem value="item-4" className="border-b border-border/30 py-6">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl font-normal hover:text-primary transition-colors normal-case">
                Where can I order Copper + Cloves for delivery?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-foreground/70 leading-relaxed pt-4">
                <p>If you're in Bangalore, you can order your favourite Copper + Cloves dishes through Swiggy or Zomato. Everything is prepared fresh in small batches in our kitchen before it's delivered to your door.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Question 5 */}
            <AccordionItem value="item-5" className="border-b border-border/30 py-6">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl font-normal hover:text-primary transition-colors normal-case">
                Do you take reservations?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-foreground/70 leading-relaxed pt-4">
                <p>We're a walk-in café, so we don't take bookings.</p>
                <p className="mt-4">If there's a wait, we'll add your name to our waitlist. In the meantime, grab a coffee, browse the bookstore or our partner stores, or simply relax—we'll let you know as soon as your table is ready.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Question 6 */}
            <AccordionItem value="item-6" className="border-b border-border/30 py-6">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl font-normal hover:text-primary transition-colors normal-case">
                Are your cafés pet friendly?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-foreground/70 leading-relaxed pt-4">
                <p>Yes! Dogs are welcome at our Indiranagar and Lavelle Road cafés, and we even have a menu created especially for them. Unfortunately, the Studio/Domlur is not pet-friendly.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Question 7 */}
            <AccordionItem value="item-7" className="border-b border-border/30 py-6">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl font-normal hover:text-primary transition-colors normal-case">
                Do you have vegan and gluten-free options?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-foreground/70 leading-relaxed pt-4">
                <p>Everything on our menu is 100% plant-based, with plenty of gluten-free options available including gluten-free bread (it's seeded and very delicious) as a chargeable substitute. If you have other allergies or dietary requirements, just let our team know and we'll be happy to help.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Support CTA Block */}
          <div className="mt-16 p-8 bg-muted/30 border border-border/30 rounded-lg text-center space-y-4">
            <p className="text-lg text-foreground/80">
              Planning a large group visit, event, or private gathering?
            </p>
            <p className="text-base text-foreground/70">
              Reach out to our cafe managers directly or book a space.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Contact our cafe teams</Link>
            </Button>
          </div>
        </div>
      </section>

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
    </>);

}