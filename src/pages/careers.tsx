import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Heart, Sparkles, UtensilsCrossed, TrendingUp, ArrowRight } from "lucide-react";

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: "Holistic Work Culture",
      description: "Work-life balance, mental wellness support, and a team that genuinely cares about your growth.",
    },
    {
      icon: UtensilsCrossed,
      title: "Culinary Skill Training",
      description: "Learn from award-winning chefs and nutritionists. Expand your plant-based culinary expertise.",
    },
    {
      icon: Sparkles,
      title: "Healthy Shift Meals",
      description: "Complimentary meals during shifts. Fuel your day with the same premium nutrition we serve.",
    },
    {
      icon: TrendingUp,
      title: "Clear Career Scaling",
      description: "Structured growth paths from team member to leadership. We promote from within.",
    },
  ];

  const openings = [
    {
      department: "Cafe Operations",
      roles: [
        {
          title: "Cafe Manager - Indiranagar",
          type: "Full-time",
          location: "Indiranagar, Bangalore",
          description: "Lead daily operations, team management, and customer experience for our flagship location. 3+ years F&B management experience required.",
        },
        {
          title: "Barista & Front-of-House Associate",
          type: "Full-time",
          location: "All Locations",
          description: "Create exceptional customer experiences while crafting specialty beverages. Prior barista experience preferred but not required.",
        },
      ],
    },
    {
      department: "Culinary & Kitchen",
      roles: [
        {
          title: "Head Chef - Plant-Based Cuisine",
          type: "Full-time",
          location: "Koramangala, Bangalore",
          description: "Lead kitchen operations and menu innovation for our meal subscription program. 5+ years culinary experience, plant-based expertise required.",
        },
        {
          title: "Prep Cook / Kitchen Assistant",
          type: "Full-time",
          location: "Jayanagar, Bangalore",
          description: "Support daily meal prep, ingredient handling, and kitchen cleanliness. Entry-level position with growth opportunities.",
        },
      ],
    },
    {
      department: "Growth & Marketing",
      roles: [
        {
          title: "Digital Marketing Manager",
          type: "Full-time",
          location: "Bangalore (Hybrid)",
          description: "Drive brand awareness and subscription growth through social media, content, and partnerships. 3+ years digital marketing experience in wellness/F&B.",
        },
      ],
    },
    {
      department: "Retail & Supply Chain",
      roles: [
        {
          title: "Procurement & Vendor Relations Specialist",
          type: "Full-time",
          location: "Bangalore",
          description: "Manage hyper-local supplier relationships, quality control, and inventory optimization. 2+ years procurement experience preferred.",
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Careers | Join the Copper + Cloves Team"
        description="Help us craft the future of plant-based hospitality in Bangalore. Explore open positions in cafe operations, culinary, marketing, and more."
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
                Come Build Something With Us
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Copper + Cloves is building a modern wellness brand centred around one simple idea: making healthy living a little easier.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                As we grow, we're looking for kind, curious people who care about doing great work and creating experiences that genuinely make a difference to people's everyday lives.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                Why Join Copper + Cloves?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                More than a job — it's a community dedicated to wellness, intentional growth, and making plant-based nourishment accessible.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="border-mushroom/30 bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center mx-auto">
                      <benefit.icon className="h-6 w-6 text-sage" />
                    </div>
                    <h3 className="font-display text-lg font-light">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                Current Openings
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Explore open positions across our cafes and central operations. We're actively expanding and looking for exceptional talent.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {openings.map((department) => (
                <div key={department.department} className="space-y-4">
                  <h3 className="font-display text-2xl font-light text-sage border-b border-border pb-3">
                    {department.department}
                  </h3>
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {department.roles.map((role, index) => (
                      <AccordionItem
                        key={`${department.department}-${index}`}
                        value={`${department.department}-${index}`}
                        className="border border-mushroom/30 rounded-lg px-6 shadow-sm bg-white"
                      >
                        <AccordionTrigger className="hover:no-underline hover:text-sage transition-colors py-6">
                          <div className="flex items-center justify-between w-full pr-4">
                            <div className="text-left">
                              <div className="font-display font-light text-lg">
                                {role.title}
                              </div>
                              <div className="text-sm text-foreground/60 mt-1">
                                {role.location} · {role.type}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 pb-4 space-y-4">
                            <p className="text-foreground/70 leading-relaxed">
                              {role.description}
                            </p>
                            <Button size="sm" className="bg-sage text-white hover:bg-sage/90">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4 mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-light">
                  We're Always Hiring
                </h2>
              </div>

              <div className="space-y-6 text-foreground/70 leading-relaxed">
                <p>
                  Whether you're a chef, barista, front-of-house team member, manager, finance professional, operations specialist, marketing or social media creative, community or events lead, wellness practitioner, or someone who wants to help build what's next, we'd love to hear from you.
                </p>
                <p>
                  We hire for attitude, curiosity and kindness just as much as experience. Whether you're starting your career or looking for your next leadership role, we're always looking for people who want to grow with us.
                </p>
                <p className="font-medium text-foreground">
                  If that sounds like you, we'd love to hear your story.
                </p>
                <p>
                  Send your resume and a short introduction letter to{" "}
                  <a 
                    href="mailto:people@copperandcloves.com"
                    className="text-copper hover:underline font-medium"
                  >
                    people@copperandcloves.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}