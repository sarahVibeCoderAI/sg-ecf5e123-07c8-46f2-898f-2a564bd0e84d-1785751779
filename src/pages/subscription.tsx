import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Check, Target, ChefHat, Truck, Leaf, Heart, Clock, ArrowRight } from "lucide-react";

export default function Subscription() {
  const plans = [
    {
      name: "5-Day Reset",
      description: "Perfect for trying our complete nutrition approach",
      price: "₹2,499",
      period: "5 days",
      features: [
        "Daily breakfast + lunch",
        "Curated nutrition track",
        "Fresh morning prep",
        "Doorstep delivery",
      ],
    },
    {
      name: "20-Day Lifestyle",
      description: "Build sustainable wellness habits",
      price: "₹8,999",
      period: "20 days",
      features: [
        "All meals (breakfast, lunch, dinner)",
        "Personalized meal tracks",
        "Nutritionist consultation",
        "Priority delivery slots",
        "Weekly wellness check-ins",
      ],
      recommended: true,
    },
    {
      name: "Monthly Ritual",
      description: "Total nutritional lifestyle solution",
      price: "₹12,499",
      period: "30 days",
      features: [
        "Complete meal coverage",
        "Custom nutrition planning",
        "Bi-weekly nutritionist calls",
        "Flexible meal swaps",
        "Complimentary retail items",
        "VIP event access",
      ],
    },
  ];

  const tracks = [
    {
      icon: Target,
      name: "Performance",
      description: "High-protein, nutrient-dense meals for athletic recovery and muscle building",
    },
    {
      icon: Leaf,
      name: "Plant-Based Vitality",
      description: "Complete nutrition from whole plant foods, optimized for energy and longevity",
    },
    {
      icon: Heart,
      name: "Clean Balance",
      description: "Balanced macros and micronutrients for sustainable wellness and weight management",
    },
  ];

  return (
    <>
      <SEO
        title="Meal Subscription | Copper + Cloves - Daily Chef-Crafted Plant-Based Nutrition"
        description="Complete, chef-crafted nutrition delivered daily. Hyper-local meal subscriptions designed by nutritionists, prepared fresh each morning in your nearest C+C outlet."
      />
      <Navigation />
      <main>
        <section className="section-padding">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                  Complete, Chef-Crafted Nutrition. Delivered Daily.
                </h1>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Hyper-local delivery radius ensures your meals arrive piping fresh. When a C+C opens near you, your daily nutrition is seamlessly handled.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="#plans">View Plans</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                    <Link href="/cafes">Our Locations</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
                  <img
                    src="/generated/meal-prep-bowls.png"
                    alt="Fresh plant-based meal prep bowls"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-card/50">
          <div className="container">
            <div className="text-center space-y-3 mb-16">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                How It Works
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Three simple steps to total nutritional lifestyle solutions.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <h3 className="font-display text-xl font-light">Choose Your Direction</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Select expert-curated meal tracks designed by nutritionists: Performance, Plant-Based Vitality, or Clean Balance.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <ChefHat className="h-8 w-8 text-secondary" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                    2
                  </div>
                  <h3 className="font-display text-xl font-light">Hyper-Local Craft</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Your meals are prepared fresh each morning inside your nearest C+C outlet kitchen using intentionally sourced ingredients.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <h3 className="font-display text-xl font-light">Direct Delivery</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Arrives precisely during your preferred time window, piping fresh and ready to fuel your day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="text-center space-y-3 mb-12">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                Meal Tracks Designed for You
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Choose the nutrition track that aligns with your wellness goals.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tracks.map((track) => (
                <Card key={track.name} className="border-0 shadow-sm rounded-lg p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <track.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-light">{track.name}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {track.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="section-padding bg-background">
          <div className="container">
            <div className="text-center space-y-3 mb-12">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                Choose Your Plan
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Flexible subscription duration models designed for every wellness journey.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`border-0 shadow-sm rounded-lg relative ${
                    plan.recommended ? "ring-2 ring-primary shadow-lg" : ""
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs uppercase tracking-wide">
                        Recommended
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-light">{plan.name}</h3>
                      <p className="text-sm text-foreground/60">{plan.description}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-display text-4xl font-light text-primary">
                        {plan.price}
                      </div>
                      <p className="text-sm text-foreground/60">for {plan.period}</p>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className={`w-full ${
                        plan.recommended
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-foreground text-background hover:bg-foreground/90"
                      }`}
                    >
                      Select Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-card/50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg rounded-lg p-8 md:p-12 space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                    Check Delivery Eligibility
                  </h2>
                  <p className="text-foreground/70">
                    Enter your Bangalore pincode to verify hyper-local delivery availability.
                  </p>
                </div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="text"
                    placeholder="Enter Pincode (e.g., 560038)"
                    className="flex-1 bg-background border-border"
                    maxLength={6}
                  />
                  <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Check Availability
                  </Button>
                </form>
                <div className="text-center text-sm text-foreground/60">
                  <p>Current delivery coverage: Indiranagar, Jayanagar, Koramangala (5km radius from each outlet)</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}