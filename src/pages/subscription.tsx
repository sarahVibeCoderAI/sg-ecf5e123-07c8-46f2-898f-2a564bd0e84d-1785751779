import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Check, Leaf, TruckIcon, ChefHat, Heart, Target, Search } from "lucide-react";

export default function Subscription() {
  const plans = [
    {
      name: "5-Day Reset",
      price: "₹2,999",
      period: "trial",
      description: "Perfect for testing our hyper-local wellness approach",
      features: [
        "5 consecutive days of meals",
        "Choose breakfast, lunch, or dinner",
        "Fresh from your nearest outlet",
        "Flexible delivery windows",
      ],
      badge: "Try First",
    },
    {
      name: "20-Day Lifestyle",
      price: "₹10,999",
      period: "20 days",
      description: "Build lasting healthy habits with our most popular plan",
      features: [
        "20 days of complete nutrition",
        "Mix breakfast, lunch & dinner",
        "Nutritionist consultation included",
        "Priority delivery slots",
        "₹549 per day",
      ],
      badge: "Most Popular",
      popular: true,
    },
    {
      name: "Monthly Ritual",
      price: "₹15,999",
      period: "30 days",
      description: "Complete transformation with our premium wellness program",
      features: [
        "30 days of chef-crafted meals",
        "Full meal customization",
        "Weekly nutritionist check-ins",
        "Exclusive wellness workshops",
        "₹533 per day",
      ],
      badge: "Best Value",
    },
  ];

  return (
    <>
      <SEO
        title="Meal Subscription | Copper + Cloves"
        description="Complete, chef-crafted nutrition delivered daily. Hyper-local meal subscriptions from your nearest Copper + Cloves cafe."
      />
      <Navigation />
      <main>
        <section className="section-padding pt-16 md:pt-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <Badge className="bg-sage/10 text-sage border-sage/20">
                Hyper-Local Delivery
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
                Complete, Chef-Crafted Nutrition. Delivered Daily.
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                When a Copper + Cloves opens near you, your daily nutrition is handled seamlessly — fresh, intentional, and delivered to your doorstep.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-20">
              <Card className="border-mushroom/30 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Search className="h-5 w-5 text-sage" />
                    <p className="font-medium text-sm uppercase tracking-wide">Check Delivery Eligibility</p>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Enter your Bangalore pincode"
                      className="flex-1"
                    />
                    <Button className="bg-sage text-white hover:bg-sage/90">Check</Button>
                  </div>
                  <p className="text-xs text-foreground/60 mt-2">
                    We currently serve areas within 5km of our Indiranagar, Jayanagar, and Koramangala outlets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-center mb-4">
              How It Works
            </h2>
            <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
              Three simple steps to complete nutritional transformation
            </p>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-mushroom/30 bg-white text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <Target className="h-8 w-8 text-sage" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center mx-auto font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-display text-xl font-light">Select Your Goal</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Choose customized meal tracks designed by nutritionists: Performance, Plant-Based Vitality, or Clean Balance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-mushroom/30 bg-white text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <ChefHat className="h-8 w-8 text-sage" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center mx-auto font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-display text-xl font-light">Hyper-Local Prep</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Your meals are crafted fresh each morning inside your nearest Copper + Cloves outlet kitchen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-mushroom/30 bg-white text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <TruckIcon className="h-8 w-8 text-sage" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center mx-auto font-bold text-sm">
                    3
                  </div>
                  <h3 className="font-display text-xl font-light">Seamless Delivery</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Arrives precisely during your preferred time window, piping fresh and ready to fuel your day.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-center mb-4">
              Choose Your Plan
            </h2>
            <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
              Flexible subscription options designed for your lifestyle
            </p>

            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              {plans.map((plan, i) => (
                <Card
                  key={i}
                  className={`overflow-hidden ${
                    plan.popular
                      ? "border-sage shadow-xl scale-105 bg-white"
                      : "border-mushroom/30 bg-white hover:shadow-lg"
                  } transition-all`}
                >
                  {plan.popular && (
                    <div className="bg-sage text-white text-center py-2 text-xs font-medium uppercase tracking-wide">
                      {plan.badge}
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    {!plan.popular && (
                      <Badge variant="outline" className="w-fit mx-auto mb-3 border-mushroom/40 text-foreground/70">
                        {plan.badge}
                      </Badge>
                    )}
                    <CardTitle className="font-display text-2xl font-light">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-display font-light text-copper">
                        {plan.price}
                      </span>
                      <span className="text-foreground/60 text-sm ml-2">/ {plan.period}</span>
                    </div>
                    <p className="text-sm text-foreground/60 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start text-sm">
                          <Check className="h-5 w-5 text-sage mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-sage text-white hover:bg-sage/90"
                          : "border-sage text-sage hover:bg-sage hover:text-white"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-foreground/60 mb-4">
                Need a custom plan or have dietary restrictions?
              </p>
              <Button asChild variant="outline" className="border-kale text-kale hover:bg-kale hover:text-white">
                <Link href="/contact">Contact Our Nutrition Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}