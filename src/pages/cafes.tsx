import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MapPin, Clock, Wifi, PawPrint, SunMedium, ArrowRight } from "lucide-react";

export default function Cafes() {
  const cafes = [
    {
      name: "Indiranagar",
      address: "100 Feet Road, Indiranagar, Bangalore 560038",
      image: "/generated/outlet-exterior.png",
      amenities: ["Outdoor Seating", "Wi-Fi Enabled", "Pet Friendly"],
      hours: "7:00 AM - 9:00 PM",
      delivery: "Hyper-local delivery within 5km radius",
    },
    {
      name: "Jayanagar",
      address: "4th Block, Jayanagar, Bangalore 560011",
      image: "/generated/outlet-exterior.png",
      amenities: ["Co-working Space", "Wi-Fi Enabled", "Outdoor Seating"],
      hours: "7:00 AM - 9:00 PM",
      delivery: "Hyper-local delivery within 5km radius",
    },
    {
      name: "Koramangala",
      address: "5th Block, Koramangala, Bangalore 560095",
      image: "/generated/outlet-exterior.png",
      amenities: ["Wi-Fi Enabled", "Pet Friendly", "Event Space"],
      hours: "7:00 AM - 10:00 PM",
      delivery: "Hyper-local delivery within 5km radius",
    },
  ];

  return (
    <>
      <SEO
        title="Our Cafes | Copper + Cloves"
        description="Visit our premium plant-based wellness cafes across Bangalore. Hyper-local delivery available within 5km radius."
      />
      <Navigation />
      <main>
        <section className="section-padding pt-16 md:pt-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
                Your Neighborhood Sanctuaries in Bangalore
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Three sun-drenched spaces across the city, each designed as a retreat for nourishment, community, and mindful living.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {cafes.map((cafe, i) => (
                <Card key={i} className="overflow-hidden border-mushroom/30 bg-white hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cafe.image}
                      alt={`${cafe.name} cafe location`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-light mb-2">{cafe.name}</h3>
                      <p className="text-sm text-foreground/60 flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-sage" />
                        {cafe.address}
                      </p>
                    </div>

                    <Badge className="bg-sage/10 text-sage border-sage/20">
                      {cafe.delivery}
                    </Badge>

                    <div className="space-y-2 pt-2">
                      <p className="text-sm font-medium uppercase tracking-wide text-foreground/80">Amenities</p>
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

                    <div className="flex items-center text-sm text-foreground/60 pt-2">
                      <Clock className="h-4 w-4 mr-2 text-sage" />
                      {cafe.hours}
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