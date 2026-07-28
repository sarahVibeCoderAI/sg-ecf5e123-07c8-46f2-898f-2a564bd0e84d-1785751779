import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Calendar, Users, UtensilsCrossed, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Copper + Cloves"
        description="Get in touch with Copper + Cloves for catering, event space bookings, general inquiries, or feedback. We're here to help."
      />
      <Navigation />
      <main>
        <section className="section-padding">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                Let's Connect
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Whether you're planning an event, exploring catering options, or simply want to share feedback — we'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <Card className="border-mushroom/30 bg-white shadow-sm rounded-lg">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-4">
                      <h2 className="font-display text-2xl font-light">Get In Touch</h2>
                      <p className="text-foreground/70 leading-relaxed">
                        Reach out to our team for general inquiries, partnership opportunities, or wellness program collaborations.
                      </p>
                    </div>

                    <div className="space-y-6 pt-4">
                      {/* Phone */}
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div className="space-y-2">
                            <h3 className="font-semibold text-foreground">Phone</h3>
                            <div className="text-sm text-foreground/70 space-y-1">
                              <p>Indiranagar Cafe enquiries: 8904293030</p>
                              <p>Domlur/Wellness Event/Studio enquiries: 9008426703</p>
                              <p>Lavelle Road Cafe enquiries: 8792194527</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">Email</h3>
                            <a 
                              href="mailto:hello@copperandcloves.com"
                              className="text-sm text-primary hover:underline"
                            >
                              hello@copperandcloves.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="border-mushroom/30 bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-kale/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-kale" />
                      </div>
                      <h3 className="font-display text-lg font-light">
                        Cafe Catering
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Bring C+C wellness to your office events, meetings, and celebrations.
                      </p>
                      <a
                        href="mailto:hello@copperandcloves.com"
                        className="text-sm text-kale hover:underline inline-flex items-center"
                      >
                        hello@copperandcloves.com
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-mushroom/30 bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-kale/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-kale" />
                      </div>
                      <h3 className="font-display text-lg font-light">
                        Event Space Bookings
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Host workshops, wellness sessions, or community gatherings at our Studio.
                      </p>
                      <a
                        href="mailto:thestudio@copperandcloves.com"
                        className="text-sm text-kale hover:underline inline-flex items-center"
                      >
                        thestudio@copperandcloves.com
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-mushroom/30 bg-white shadow-sm rounded-lg">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-light mb-6">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-muted/30 border-border"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-muted/30 border-border"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Contact Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="bg-muted/30 border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="inquiry-type" className="text-sm font-medium">
                        Type of Inquiry *
                      </label>
                      <Select required>
                        <SelectTrigger className="bg-muted/30 border-border">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="catering">
                            Catering Services
                          </SelectItem>
                          <SelectItem value="events">
                            Event Space Booking
                          </SelectItem>
                          <SelectItem value="feedback">
                            Product Feedback
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership Opportunity
                          </SelectItem>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        className="bg-muted/30 border-border min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-sage text-white hover:bg-sage/90">
                      Send Message
                    </Button>

                    <p className="text-xs text-foreground/60 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                Visit Our Cafes
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Drop by any of our three Bangalore locations. Walk-ins are always welcome, and our team is ready to welcome you to the C+C community.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  name: "Indiranagar",
                  address: "100 Feet Road, Near Chinmaya Mission Hospital",
                  hours: "7:00 AM - 9:00 PM",
                  phone: "+91 80 4567 8901",
                },
                {
                  name: "Lavelle Road",
                  address: "4 Walton Road, Off Lavelle Road, Ashok Nagar, Bangalore, 560001",
                  hours: "9am - 8pm",
                  phone: "+91 8792194527",
                },
                {
                  name: "Domlur/The Studio",
                  address: "4th Floor, 2nd Cross, Shankanarg Road (off Double road), Domlur, Bangalore, 560071",
                  hours: "7:30am - 8pm",
                  phone: "+91 9008426703",
                },
              ].map((location) => (
                <Card
                  key={location.name}
                  className="border-mushroom/30 bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display text-xl font-light text-sage">
                      {location.name}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-foreground/60 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground/70">{location.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-foreground/60 flex-shrink-0" />
                        <a
                          href={`tel:${location.phone.replace(/\s/g, "")}`}
                          className="text-foreground/70 hover:text-sage transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-foreground/60 flex-shrink-0" />
                        <p className="text-foreground/70">{location.hours}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 border-kale text-kale hover:bg-kale hover:text-white">
                      Get Directions
                    </Button>
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