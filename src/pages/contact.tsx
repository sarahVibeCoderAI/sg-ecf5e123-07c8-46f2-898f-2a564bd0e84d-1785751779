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
import { Label } from "@/components/ui/label";

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
                        className="text-sm text-kale hover:underline block break-words"
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
                        className="text-sm text-kale hover:underline block break-words"
                      >
                        thestudio@copperandcloves.com
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-mushroom/30 bg-white shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h2 className="font-display text-2xl font-light mb-4">
                      Send Us a Message
                    </h2>
                    <form className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help?" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your inquiry..." 
                          rows={3}
                          required 
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full md:w-auto"
                        onClick={(e) => {
                          e.preventDefault();
                          const form = e.currentTarget.form;
                          if (form) {
                            const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
                            const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
                            const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value;
                            const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;
                            
                            const mailtoLink = `mailto:hello@copperandcloves.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                            window.location.href = mailtoLink;
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card className="border-mushroom/30 bg-white shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-2xl font-light mb-3">Keep in Touch</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-2">
                      We don't send weekly newsletters or clutter your inbox.
                    </p>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                      Just the occasional update on new menus, community events, journal articles, product launches and other things happening at Copper + Cloves.
                    </p>
                    
                    <form 
                      action="https://docs.google.com/forms/d/e/1FAIpQLSc5JYdpCE0FenQJjlH59-p1Un1rlE_qCGF5PIao6arK9dQt3A/formResponse"
                      method="POST"
                      target="_blank"
                      className="flex flex-col sm:flex-row gap-3"
                      onSubmit={(e) => {
                        const form = e.currentTarget;
                        const emailInput = form.elements.namedItem('entry.981765683') as HTMLInputElement;
                        
                        // Show success message after a short delay (form will submit in new tab)
                        setTimeout(() => {
                          if (emailInput) {
                            emailInput.value = '';
                          }
                          alert('Thank you for signing up! You\'ll receive occasional updates from Copper + Cloves.');
                        }, 100);
                      }}
                    >
                      <Input 
                        id="newsletter-email"
                        name="entry.981765683"
                        type="email" 
                        placeholder="Your email address" 
                        className="flex-1"
                        required 
                      />
                      <Button type="submit" className="sm:w-auto">
                        Keep Me Posted
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
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
              {/* Indiranagar */}
              <Card className="overflow-hidden border-border bg-white">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-display text-2xl font-semibold">Indiranagar</h3>
                  
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p>549A 9th A main Road, Hoyasala Nagar, Indiranagar, Bangalore, 560038</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <a href="tel:+918904293030" className="hover:text-primary transition-colors">
                        +91 8904293030
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p>9.30am - 8pm on weekdays and 8.30pm on weekends</p>
                    </div>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/HxsBbogFjbZVSEpK7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>

              {/* Lavelle Road */}
              <Card className="overflow-hidden border-border bg-white">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-display text-2xl font-semibold">Lavelle Road</h3>
                  
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p>4 Walton Road, Off Lavelle Road, Ashok Nagar, Bangalore, 560001</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <a href="tel:+918792194527" className="hover:text-primary transition-colors">
                        +91 8792194527
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p>9am - 8pm</p>
                    </div>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/uYJyXegy1MTPichcA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>

              {/* Domlur/The Studio */}
              <Card className="overflow-hidden border-border bg-white">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-display text-2xl font-semibold">Domlur/The Studio</h3>
                  
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p>4th Floor, 2nd Cross, Shankanarg Road (off Double road), Domlur, Bangalore, 560071</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <a href="tel:+919008426703" className="hover:text-primary transition-colors">
                        +91 9008426703
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p>7.30am to 8pm</p>
                    </div>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/DQs1BRv2DzSW1uN59"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
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