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
import { MapPin, Phone, Mail, Calendar, Users } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Copper + Cloves"
        description="Get in touch with Copper + Cloves for catering, event space bookings, general inquiries, or feedback. We're here to help."
      />
      <Navigation />
      <main>
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 lg:py-28">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Let's Connect
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're planning an event, exploring catering options, or simply want to share feedback — we'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <Card className="border-border/50">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-4">
                      <h2 className="font-display text-2xl font-bold">Get In Touch</h2>
                      <p className="text-muted-foreground">
                        Reach out to our team for general inquiries, partnership opportunities, or wellness program collaborations.
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">Phone</p>
                          <a
                            href="tel:+918012345678"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +91 80 1234 5678
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Mon-Sat, 8:00 AM - 8:00 PM
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">Email</p>
                          <a
                            href="mailto:hello@copperandcloves.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            hello@copperandcloves.com
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">Corporate Office</p>
                          <p className="text-muted-foreground">
                            100 Feet Road, Indiranagar
                            <br />
                            Bangalore, Karnataka 560038
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold">
                        Cafe Catering
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Bring C+C wellness to your office events, meetings, and celebrations.
                      </p>
                      <a
                        href="mailto:catering@copperandcloves.com"
                        className="text-sm text-secondary hover:underline inline-flex items-center"
                      >
                        catering@copperandcloves.com
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold">
                        Event Space Bookings
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Host workshops, wellness sessions, or community gatherings at our cafes.
                      </p>
                      <a
                        href="mailto:events@copperandcloves.com"
                        className="text-sm text-secondary hover:underline inline-flex items-center"
                      >
                        events@copperandcloves.com
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-6">
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
                        className="bg-muted/50"
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
                        className="bg-muted/50"
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
                        className="bg-muted/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="inquiry-type" className="text-sm font-medium">
                        Type of Inquiry *
                      </label>
                      <Select required>
                        <SelectTrigger className="bg-muted/50">
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
                        className="bg-muted/50 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Visit Our Cafes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  name: "Jayanagar",
                  address: "4th Block, 11th Main Road, Near Jayanagar Shopping Complex",
                  hours: "7:00 AM - 9:00 PM",
                  phone: "+91 80 4567 8902",
                },
                {
                  name: "Koramangala",
                  address: "5th Block, 80 Feet Road, Near Sony World Signal",
                  hours: "7:00 AM - 9:00 PM",
                  phone: "+91 80 4567 8903",
                },
              ].map((location) => (
                <Card
                  key={location.name}
                  className="border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display text-xl font-bold text-primary">
                      {location.name}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{location.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <a
                          href={`tel:${location.phone.replace(/\s/g, "")}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <p className="text-muted-foreground">{location.hours}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
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