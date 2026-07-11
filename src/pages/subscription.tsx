import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Check, ChefHat, Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function Subscription() {
  const plans = [
    {
      name: "5-Day Trial",
      price: "₹2,499",
      period: "5 days",
      description: "Experience the C+C difference",
      meals: "Breakfast + Lunch",
      features: [
        "2 meals daily for 5 days",
        "Nutritionist-designed menu",
        "Hyper-local delivery",
        "Pause or cancel anytime",
      ],
      badge: "Most Popular",
      highlighted: true,
    },
    {
      name: "20-Day Lifestyle",
      price: "₹8,999",
      period: "20 days",
      description: "Build your wellness routine",
      meals: "Breakfast + Lunch + Snack",
      features: [
        "3 meals daily for 20 days",
        "Custom dietary adjustments",
        "Priority delivery slots",
        "Nutrition consultation call",
      ],
      badge: null,
      highlighted: false,
    },
    {
      name: "Monthly Ritual",
      price: "₹12,499",
      period: "30 days",
      description: "Complete holistic nourishment",
      meals: "All Meals + Snacks",
      features: [
        "All meals + snacks for 30 days",
        "Personalized meal tracking",
        "Exclusive retail discounts",
        "Monthly wellness workshop access",
      ],
      badge: "Best Value",
      highlighted: false,
    },
  ];

  return (
    <>
      <SEO
        title="Meal Subscription | Copper + Cloves - Daily Plant-Based Nutrition Delivered"
        description="Chef-crafted, nutritionist-designed plant-based meals delivered daily. Hyper-local prep and seamless doorstep delivery across Bangalore."
      />
      <Navigation />
      <main>
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 lg:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="mb-2">
                  Hyper-Local Delivery
                </Badge>
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                  Complete, Chef-Crafted Nutrition. Delivered Daily.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When a Copper + Cloves opens near you, your daily nutrition is handled seamlessly. Fresh meals crafted in your neighborhood kitchen, delivered to your doorstep during your preferred time window.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Currently serving Indiranagar, Jayanagar & Koramangala (5km radius)</span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-xl border border-border/50 shadow-2xl">
                  <img
                    src="/generated/meal-prep-bowls.png"
                    alt="Fresh meal prep at Copper + Cloves"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to transform your daily nutrition.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-border/50 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary">1</span>
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Select Your Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Choose from customized meal tracks designed by nutritionists: Performance Fuel, Plant-Based Vitality, or Clean Balance. Each tailored to your wellness journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-secondary">2</span>
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <ChefHat className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Hyper-Local Prep</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your meals are crafted fresh each morning inside your nearest C+C outlet kitchen. Locally sourced ingredients, zero preservatives, maximum nutrition.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary">3</span>
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Seamless Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Arrives precisely during your preferred time window, piping fresh and ready to fuel your day. Track your delivery in real-time through our app.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Choose Your Plan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible subscriptions designed for your lifestyle. Pause, adjust, or cancel anytime.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`border-border/50 ${
                    plan.highlighted
                      ? "ring-2 ring-primary shadow-xl scale-105"
                      : "hover:border-primary/30"
                  } transition-all duration-300`}
                >
                  <CardHeader className="pb-4">
                    {plan.badge && (
                      <Badge variant={plan.highlighted ? "default" : "secondary"} className="mb-4 w-fit">
                        {plan.badge}
                      </Badge>
                    )}
                    <CardTitle className="font-display text-2xl">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="font-display text-4xl font-bold text-primary">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">/ {plan.period}</span>
                      </div>
                      <p className="text-sm font-medium text-secondary">{plan.meals}</p>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                      size="lg"
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

        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-center">
                    Check Delivery Eligibility
                  </CardTitle>
                  <p className="text-center text-muted-foreground">
                    Enter your pincode to see if we deliver to your neighborhood
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode</Label>
                    <div className="flex gap-2">
                      <Input
                        id="pincode"
                        type="text"
                        placeholder="560038"
                        className="flex-1"
                      />
                      <Button>Check</Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Currently delivering within 5km radius of our Indiranagar, Jayanagar, and Koramangala outlets
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Questions About Our Subscriptions?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team is here to help you find the perfect meal plan for your wellness goals. Reach out for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/cafes">
                    Visit a Cafe
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}