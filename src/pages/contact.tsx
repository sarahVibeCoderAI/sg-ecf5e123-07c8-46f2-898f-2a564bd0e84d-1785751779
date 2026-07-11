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
                <Card className="border-0 shadow-sm rounded-lg">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-4">
                      <h2 className="font-display text-2xl font-light">Get In Touch</h2>
                      <p className="text-foreground/70 leading-relaxed">
                        Reach out to our team for general inquiries, partnership opportunities, or wellness program collaborations.
                      </p>
                    </div>

                    <div className="space-y-6 pt-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-1">Phone</p>
                          <a
                            href="tel:+918012345678"
                            className="text-foreground/70 hover:text-primary transition-colors"
                          >
                            +91 80 1234 5678
                          </a>
                          <p className="text-sm text-foreground/60 mt-1">
                            Mon-Sat, 8:00 AM - 8:00 PM
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-1">Email</p>
                          <a
                            href="mailto:hello@copperandcloves.com"
                            className="text-foreground/70 hover:text-primary transition-colors"
                          >
                            hello@copperandcloves.com
                          </a>
                          <p className="text-sm text-foreground/60 mt-1">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-1">Corporate Office</p>
                          <p className="text-foreground/70">
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
                  <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-display text-lg font-light">
                        Cafe Catering
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
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

                  <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-display text-lg font-light">
                        Event Space Bookings
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
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

              <Card className="border-0 shadow-sm rounded-lg">
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

                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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

        <section className="section-padding bg-card/50">
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
                  className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display text-xl font-light text-primary">
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
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-foreground/60 flex-shrink-0" />
                        <p className="text-foreground/70">{location.hours}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 border-border text-foreground hover:bg-foreground hover:text-background">
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