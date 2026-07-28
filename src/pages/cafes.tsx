import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MapPin, Clock, Wifi, PawPrint, SunMedium, ArrowRight, Phone, BookOpen, ShoppingBag, Shirt } from "lucide-react";
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
      hours: "9.30am - 8pm Daily",
      phone: "08904293030",
      image: "/c_c_cafe_4_.jpg",
      amenities: ["Dine-in", "Takeaway", "Pet Friendly", "Bookstore", "Boutique Shopping", "Garden Seating", "Indoor Seating"],
      deliveryRadius: "3km delivery radius",
      mapsUrl: "https://maps.app.goo.gl/kX9fR2BjjAFyYdQG7",
    },
    {
      id: 2,
      name: "Lavelle Road",
      address: "4, Walton Rd, Good Earth, off Lavelle Road, KG Halli, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
      hours: "9.30am - 8pm Daily",
      phone: "8792194527",
      image: "/lavelle_road_16_of_23_.jpg",
      amenities: ["Garden Seating", "Indoor Seating", "Takeaway", "Pet Friendly"],
      deliveryRadius: "3km delivery radius",
      mapsUrl: "https://maps.app.goo.gl/ijZsNGVDaDU7A2X79",
    },
    {
      id: 3,
      name: "Domlur/The Studio",
      address: "4th Floor, 167, 2nd Stage, 2nd Cross, Shankarnag Rd, Domlur, Bengaluru, Karnataka 560071",
      hours: "9.30am - 8pm Daily",
      phone: "09008426703",
      image: "/A7406794_1_.jpg",
      amenities: ["Workout Studio", "Dine-in", "Co-working Friendly", "Indoor Seating"],
      deliveryRadius: "3km delivery radius",
      mapsUrl: "https://maps.app.goo.gl/DQs1BRv2DzSW1uN59",
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

        {/* Cafes Grid */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-light">
                Find Your Neighbourhood Café
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {cafes.map((cafe, index) => (
                <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow bg-white p-8">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-6">
                    <Image
                      src={cafe.image}
                      alt={cafe.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-0 space-y-4">
                    <div>
                      <h2 className="font-display text-2xl font-semibold mb-2">
                        {cafe.name}
                      </h2>
                      <p className="text-foreground/70">{cafe.address}</p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <div className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-copper mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-medium text-sm">Hours</p>
                          <p className="text-sm text-foreground/70">{cafe.hours}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {cafe.amenities.map((amenity, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-muted text-foreground/70">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button asChild className="w-full bg-copper hover:bg-copper/90 text-white">
                        <a href={cafe.mapsUrl} target="_blank" rel="noopener noreferrer">
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                          src="/20230628_-_IMG_8524_-_Raj_Kashyap.jpg"
                          alt="Indiranagar cafe"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/IMG_2392.HEIC"
                          alt="Indiranagar community"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src="/IMG_8049.jpeg"
                          alt="Indiranagar events"
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
                  <p className="font-semibold text-foreground/90">Books, brunch & community</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Browse Champaca Bookstore, discover thoughtfully curated local brands, join reading socials, thrift markets with Love Me Twice and puppy adoption days.
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
      </main>
      <Footer />
    </>
  );
}