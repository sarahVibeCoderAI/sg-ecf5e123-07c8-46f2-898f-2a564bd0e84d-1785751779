import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Wifi, Clock, PawPrint, Leaf, ArrowRight, Navigation as NavigationIcon } from "lucide-react";

export default function Cafes() {
  const outlets = [
    {
      name: "Indiranagar Sanctuary",
      address: "100 Feet Road, Near Metro Station, Indiranagar, Bangalore 560038",
      deliveryRadius: "Hyper-local delivery within 5km radius",
      amenities: [
        { icon: Wifi, label: "Co-working Friendly" },
        { icon: Leaf, label: "Outdoor Seating" },
        { icon: PawPrint, label: "Pet Friendly" },
      ],
      hours: "Mon-Sun: 7:00 AM - 9:00 PM",
      image: "/generated/outlet-exterior.png",
      mapLink: "https://maps.google.com",
    },
    {
      name: "Jayanagar Wellness Hub",
      address: "4th Block, 9th Main Road, Near RTO Circle, Jayanagar, Bangalore 560011",
      deliveryRadius: "Hyper-local delivery within 5km radius",
      amenities: [
        { icon: Wifi, label: "Co-working Friendly" },
        { icon: Leaf, label: "Outdoor Seating" },
        { icon: PawPrint, label: "Pet Friendly" },
      ],
      hours: "Mon-Sun: 7:00 AM - 9:00 PM",
      image: "/generated/outlet-exterior.png",
      mapLink: "https://maps.google.com",
    },
    {
      name: "Koramangala Nourish Point",
      address: "5th Block, 80 Feet Road, Near Sony Signal, Koramangala, Bangalore 560095",
      deliveryRadius: "Hyper-local delivery within 5km radius",
      amenities: [
        { icon: Wifi, label: "Co-working Friendly" },
        { icon: Leaf, label: "Outdoor Seating" },
        { icon: PawPrint, label: "Pet Friendly" },
      ],
      hours: "Mon-Sun: 7:00 AM - 9:00 PM",
      image: "/generated/outlet-exterior.png",
      mapLink: "https://maps.google.com",
    },
  ];

  return (
    <>
      <SEO
        title="Our Cafes | Copper + Cloves - Premium Wellness Cafes in Bangalore"
        description="Visit our three premium plant-based wellness cafes across Bangalore. Sun-drenched sanctuaries in Indiranagar, Jayanagar, and Koramangala with hyper-local delivery."
      />
      <Navigation />
      <main>
        <section className="section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                Your Neighborhood Sanctuaries in Bangalore
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Sun-drenched spaces designed for wellness, community, and nourishment. Each location offers grab-and-go meals, retail products, and hyper-local delivery within 5km.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="container">
            <div className="grid gap-12 lg:gap-16">
              {outlets.map((outlet) => (
                <Card key={outlet.name} className="border-0 shadow-sm overflow-hidden rounded-lg">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-[4/3] md:aspect-auto">
                      <img
                        src={outlet.image}
                        alt={outlet.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-8 lg:p-12 space-y-6">
                      <div className="space-y-3">
                        <h2 className="font-display text-2xl font-light tracking-tight lg:text-3xl">
                          {outlet.name}
                        </h2>
                        <div className="flex items-start space-x-2 text-foreground/60">
                          <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <p className="text-sm leading-relaxed">{outlet.address}</p>
                        </div>
                      </div>

                      <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span>{outlet.deliveryRadius}</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-3">
                          {outlet.amenities.map((amenity) => (
                            <div
                              key={amenity.label}
                              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-border bg-background text-sm"
                            >
                              <amenity.icon className="h-4 w-4 text-primary" />
                              <span>{amenity.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-foreground/60">
                        <Clock className="h-4 w-4" />
                        <span>{outlet.hours}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button asChild size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                          <a href={outlet.mapLink} target="_blank" rel="noopener noreferrer">
                            <NavigationIcon className="mr-2 h-4 w-4" />
                            Get Directions
                          </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="flex-1 border-foreground text-foreground hover:bg-foreground hover:text-background">
                          <Link href="/subscription">
                            Order Grab & Go
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-card/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                Coming to Your Neighborhood Soon
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We're expanding across Bangalore. Join our newsletter to be the first to know when we open near you, and get exclusive launch offers.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  Request a Location
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