import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Heart, Sparkles, UtensilsCrossed, TrendingUp } from "lucide-react";
import Image from "next/image";

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

        {/* We're Always Hiring */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Photo Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/c_c_cafe_36_.jpg"
                    alt="Team at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/DSC06545.jpg"
                    alt="Cafe team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/BAG00651.jpg"
                    alt="Kitchen team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/BAG00661.jpg"
                    alt="Team culture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/DSC08778-2.jpg"
                    alt="Working together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Openings Section */}
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-semibold text-center">We're growing so we're always hiring!</h2>
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