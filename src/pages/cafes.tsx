import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MapPin, Clock, Wifi, PawPrint, SunMedium, ArrowRight, Phone, BookOpen, ShoppingBag, Shirt } from "lucide-react";
import Image from "next/image";

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
        {/* Hero */}
        <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
                Find Your Neighbourhood Café
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Whether it's a slow breakfast, lunch with friends or coffee in the afternoon, our cafés are designed to be places you'll want to come back to. Fresh, seasonal food made from scratch, warm hospitality and spaces that invite you to stay a while.
              </p>
            </div>
          </div>
        </section>

        {/* Cafes Grid */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container max-w-6xl">
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
      </main>
      <Footer />
    </>
  );
}