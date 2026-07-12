import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MapPin, Clock, Wifi, PawPrint, SunMedium, ArrowRight, Phone, BookOpen, ShoppingBag, Shirt } from "lucide-react";

export default function Cafes() {
  const cafes = [
    {
      name: "Indiranagar Flagship",
      address: "549A 9th A Main, Hoyasala Nagar, Indiranagar, Bengaluru, Karnataka, 560038",
      phone: "89042 93030",
      image: "/c_c_cafe_4_.jpg",
      description: "Housed in a bungalow-conversion on a leafy-lane. We have indoor and garden seating, and you'll also find a bookstore (Champaca), thrift store (Love Me Twice) and a sustainable clothing store (No Nasties), so there's plenty of reasons to visit us.",
      amenities: ["Garden seating", "Ready-to-eat salads", "Perfect brunch spot", "Boutique shopping"],
      hours: "7:00 AM - 9:00 PM",
      featured: true,
    },
    {
      name: "Lavelle Road",
      address: "4, Walton Road, off Lavelle Road, KG Halli, Ashok Nagar, Bengaluru, Karnataka, 560001",
      phone: "+91 80 1234 5678",
      image: "/lavelle_road_16_of_23_.jpg",
      description: "A cosy neighbourhood spot, just off Lavelle Road. The perfect brunch spot post a Cubbon Park run, and in the centre of the CBD - this is your office lunch sorted. We share the space with Good Earth and Nicobar, so you can shop and grab lunch at the same time. Pick up one of our jars or our granola from our pantry.",
      amenities: ["Garden seating", "Ready-to-eat salads", "Perfect brunch spot", "Boutique shopping"],
      hours: "9:00 AM - 7:00 PM",
      featured: true,
    },
    {
      name: "Koramangala",
      address: "5th Block, Koramangala, Bangalore 560095",
      phone: "+91 80 4567 8903",
      image: "/generated/outlet-exterior.png",
      description: "Our newest location in the heart of Bangalore's tech hub.",
      amenities: ["Wi-Fi Enabled", "Pet Friendly", "Event Space"],
      hours: "7:00 AM - 10:00 PM",
      delivery: "Hyper-local delivery within 5km radius",
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
        <section className="section-padding pt-16 md:pt-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
                Find Your Neighbourhood Cafe
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Spacious cafes always filled with natural light. The perfect place to meet friends, enjoy freshly-made meals from scratch and pick up items from our pantry.
              </p>
            </div>

            <div className="space-y-12">
              {cafes.map((cafe, i) => (
                <Card key={i} className={`overflow-hidden border-mushroom/30 bg-white hover:shadow-xl transition-shadow ${cafe.featured ? 'lg:grid lg:grid-cols-2' : ''}`}>
                  <div className={`${cafe.featured ? 'aspect-[4/3] lg:aspect-auto' : 'aspect-[4/3]'} overflow-hidden`}>
                    <img
                      src={cafe.image}
                      alt={`${cafe.name} cafe location`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-10 space-y-6">
                    <div>
                      <h3 className="font-display text-3xl font-light mb-3">{cafe.name}</h3>
                      {cafe.description && (
                        <p className="text-foreground/70 leading-relaxed mb-4">
                          {cafe.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-sage" />
                        <p className="text-sm text-foreground/80">{cafe.address}</p>
                      </div>

                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-sage" />
                        <a href={`tel:${cafe.phone.replace(/\s/g, '')}`} className="text-sm text-foreground/80 hover:text-sage transition-colors">
                          {cafe.phone}
                        </a>
                      </div>

                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3 flex-shrink-0 text-sage" />
                        <p className="text-sm text-foreground/80">{cafe.hours}</p>
                      </div>
                    </div>

                    {cafe.delivery && (
                      <Badge className="bg-sage/10 text-sage border-sage/20">
                        {cafe.delivery}
                      </Badge>
                    )}

                    <div className="space-y-3 pt-2">
                      <p className="text-sm font-medium uppercase tracking-wide text-foreground/80">
                        {cafe.featured ? "What You'll Find" : "Amenities"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cafe.amenities.map((amenity, j) => (
                          <span
                            key={j}
                            className="text-xs px-3 py-1.5 rounded-full bg-oat border border-mushroom/20 text-foreground/70"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button size="sm" variant="outline" className="flex-1 border-kale text-kale hover:bg-kale hover:text-white">
                        Get Directions
                      </Button>
                      <Button size="sm" className="flex-1 bg-sage text-white hover:bg-sage/90">
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto border-mushroom/30 bg-white p-8">
                <CardContent className="space-y-4 p-0">
                  <SunMedium className="h-12 w-12 mx-auto text-sage" />
                  <h3 className="font-display text-2xl font-light">More Locations Coming Soon</h3>
                  <p className="text-foreground/70">
                    We're expanding across Bangalore. Join our community to be the first to know when we open near you.
                  </p>
                  <Button asChild className="bg-sage text-white hover:bg-sage/90">
                    <Link href="/contact">
                      Stay Updated
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}