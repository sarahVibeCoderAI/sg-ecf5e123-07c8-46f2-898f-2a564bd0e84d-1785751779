import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Leaf, Calendar, Package, MapPin, X, Star } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { TruckIcon, ChefHat, Heart, Pause, Sparkles } from "lucide-react";
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Subscription() {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [openFaq, setOpenFaq] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>("delivery");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqCategories = {
    delivery: {
      label: "Delivery & Radiuses",
      questions: [
        {
          id: "delivery-1",
          question: "Can I choose when and where my meals are delivered?",
          answer: "Yes. Choose from morning, lunchtime or evening delivery, and nominate up to two delivery addresses—perfect if you split your week between home and the office."
        },
        {
          id: "delivery-2",
          question: "Can I receive multiple meals in one delivery?",
          answer: "Yes. Many subscribers choose to receive several meals in a single delivery, making it easy to stock the fridge for the day or even the next few days."
        },
        {
          id: "delivery-3",
          question: "Can I collect my meals instead of paying for delivery?",
          answer: "Yes. You're welcome to collect your meals from our cloud kitchen or any of our three Copper + Cloves cafés. We'll coordinate the most convenient collection point for you, and you'll avoid paying delivery charges."
        },
        {
          id: "delivery-4",
          question: "How are delivery charges calculated?",
          answer: "Delivery charges vary depending on where you live and are calculated based on your delivery area. You'll be able to see the applicable delivery charges when you sign up."
        },
        {
          id: "delivery-5",
          question: "Which areas of Bangalore do you deliver to?",
          answer: "Our core delivery network covers Indiranagar, Domlur, CV Raman Nagar, Cambridge Layout, Ulsoor, the Central Business District, Lavelle Road and many surrounding neighbourhoods.\n\nWe also deliver to areas including Koramangala, Frazer Town, Cooke Town and Cox Town through our delivery partners.\n\nIf you're outside our delivery area, you're always welcome to collect your meals from our cloud kitchen or one of our cafés."
        },
        {
          id: "delivery-6",
          question: "Do you deliver outside Bangalore?",
          answer: "Not at the moment. We're currently focused on serving Bangalore and doing it exceptionally well.\n\nIf you'd love to see Copper + Cloves in your city, we'd love to hear from you. Visit our Contact page and let us know where you'd like us to open next."
        }
      ]
    },
    food: {
      label: "Food, Nutrition & Sourcing",
      questions: [
        {
          id: "food-1",
          question: "What makes the Copper + Cloves meal subscription different?",
          answer: "This isn't typical meal prep. Every week you'll enjoy a new menu inspired by cafés around the world, with fresh breakfasts, salads, warm bowls, snacks and protein shakes made from scratch using seasonal ingredients. It's healthy food you'll genuinely look forward to eating."
        },
        {
          id: "food-2",
          question: "What kind of food can I expect?",
          answer: "Each day you'll have a choice of a breakfast, salad and warm bowl, with a weekly menu inspired by cuisines from around the world. Think Korean Bibimbap, Moroccan grain bowls, Mediterranean salads and nourishing Indian favourites, alongside protein shakes, snacks and fresh juices."
        },
        {
          id: "food-3",
          question: "Is the menu the same every week?",
          answer: "No. Our menu changes every week using seasonal ingredients, so there's always something new to discover while keeping your meals balanced and varied."
        },
        {
          id: "food-4",
          question: "Can you cater for dietary requirements or allergies?",
          answer: "We can easily accommodate gluten-free meals and simple ingredient exclusions, such as removing mushrooms.\n\nOur meal subscription is designed as a thoughtfully curated weekly menu rather than a fully customised meal plan. Because of this, we're not the best fit for highly specialised diets, complex medical nutrition plans or customers with multiple severe allergies.\n\nIf you have a straightforward dietary requirement, please get in touch before subscribing—we're always happy to let you know whether our meal subscription is the right fit for you."
        }
      ]
    },
    flexibility: {
      label: "Pausing, Changes & Flexibility",
      questions: [
        {
          id: "flex-1",
          question: "How does the subscription work?",
          answer: "Choose a credit package and use your credits however you'd like.\n\n• 1 credit = Any meal\n• 0.5 credits = Protein shakes, snacks and beverages\n\nEvery Friday you'll receive a new menu for the following week. Simply choose your meals, select your delivery days and we'll take care of the rest."
        },
        {
          id: "flex-2",
          question: "Can I try the subscription before committing?",
          answer: "Yes. Our Trial Pack includes three meals for ₹999, including delivery, so you can experience the food, portion sizes and service before choosing a credit package."
        },
        {
          id: "flex-3",
          question: "Can I pause my subscription if I'm travelling?",
          answer: "Absolutely. If you're travelling, simply let us know in advance and we'll pause your subscription while you're away. When you're back, we'll resume it from where you left off. Your credits are valid for 35 days, giving you plenty of flexibility."
        }
      ]
    },
    pricing: {
      label: "Pricing & Payment",
      questions: [
        {
          id: "pricing-1",
          question: "How is this different from ordering on Swiggy or Zomato?",
          answer: "Our meal subscription removes the daily decision of what to eat—and the habit of reaching for your phone every lunchtime. Instead of ordering meal by meal, you'll plan your week in advance from an exclusive subscriber menu, with fresh meals ready exactly when you need them. It's a simpler, more consistent way to eat well."
        },
        {
          id: "pricing-2",
          question: "What forms of payment do you accept?",
          answer: "We accept all major credit cards, debit cards, UPI, and net banking."
        },
        {
          id: "pricing-3",
          question: "Are there any setup or cancellation fees?",
          answer: "No. There are no setup or cancellation fees."
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Meal Subscription - Copper + Cloves"
        description="Hyper-local plant-based meal subscriptions delivered fresh to your door in Bangalore. Choose your weekly meals from globally-inspired menus."
      />

      {/* Trust Bar */}
      <div className="bg-sage text-white py-3">
        <div className="container">
          <p className="text-center text-sm lg:text-base font-medium">
            ★★★★★ 4.9 Google Rating | Thousands of meals delivered | Made fresh daily in Bangalore
          </p>
        </div>
      </div>

      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding pt-40 pb-24 bg-gradient-to-b from-oat to-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center max-w-6xl mx-auto">
              <div className="space-y-10">
                <div className="space-y-6">
                  <h1 className="font-display text-4xl lg:text-5xl font-light leading-tight">
                    Put healthy eating on autopilot
                  </h1>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Our meal subscription is designed to make healthy eating easy, convenient, and delicious.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                    <a
                      href="https://wa.me/919008454373?text=Hey%20I'm%20interested%20in%20the%20Copper%20%2B%20Cloves%20nourishing%20meal%20subscription%20-%20can%20I%20get%20more%20details%20on%20how%20the%20service%20works%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Your Subscription
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sage text-sage hover:bg-sage hover:text-white"
                    onClick={() => setShowMenuModal(true)}
                  >
                    View Sample Menu
                  </Button>
                </div>
              </div>
              <div className="aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/Sarah_C_C_Subscription_Photoshoot_May_2024-31.jpg"
                  alt="Healthy meal subscription bowls"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Designed to Fit Your Lifestyle */}
        <section className="hidden lg:block py-6 lg:py-8">
          <div className="container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/Sarah_C_C_Subscription_Photoshoot_May_2024-12_1_.jpg"
                  alt="Meal subscription delivery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-4xl font-light">
                  Finally, healthy eating that works around your schedule
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Whether you're eating at your desk, working from home or getting home late, we'll make sure there's always something nourishing waiting for you.
                </p>
                <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                  <a
                    href="https://wa.me/919008454373?text=Hey%20I'm%20interested%20in%20the%20Copper%20%2B%20Cloves%20nourishing%20meal%20subscription%20-%20can%20I%20get%20more%20details%20on%20how%20it%20works."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Your Subscription
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-8 lg:py-11 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl lg:text-4xl font-light mb-4">
                Trusted by hundreds of customers across Bangalore
              </h2>
              <p className="text-base text-foreground/80 mb-4">
                Don't just take our word for it. Here's what our subscribers have to say.
              </p>
              <p className="text-lg font-semibold text-sage">
                ★★★★★ 4.9/5 on Google
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-start">
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    "I absolutely love their meal subscription. The food is delicious, nutritious and feels really good on the stomach The quality of ingredients can be felt in every bite.. Their menu has the most interesting options to pick from, I'm not even Vegan but thoroughly enjoy their food. Would highly recommend."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    "I cannot praise this meal subscription service highly enough, it is quite simply brilliant. There is a great variety of meals to choose from and they change every week, the delivery is reliable and the staff are very helpful. I am not a vegetarian but I decided six months ago that I needed to change my diet and lifestyle in order to loose weight and to lower my cholesterol and reduce my risk of developing diabetes. So six months later I have now lowered my cholesterol and am no longer in the pre-diabetes category, the meals from Copper and Cloves helped me achieve this. Keep up the great work C + C!"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    "I have been doing the subscription for about 5 months now. Every aspect of it is top notch and thoughtful. When I moved to Bangalore, I was struggling to find the time to make healthy meals that I enjoy eating. I am so glad Copper + Cloves was recommended to me. The team behind Copper + Cloves is amazing too. The build strong relationships with their clients and ensure the logistics of the delivery are smooth."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-sage hover:bg-sage/90 text-white">
                <a
                  href="https://www.google.com/maps/place/Healthy+Meal+Subscription+%2B+Delivery+by+Copper+%2B+Cloves/@12.9639476,77.6357571,17z/data=!3m1!5s0x3bae141c76fe09fd:0x89461a77a9c3fce0!4m8!3m7!1s0x3bae1523f855b2e1:0xcb130a860beec0d7!8m2!3d12.9639476!4d77.638332!9m1!1b1!16s%2Fg%2F11twzdjlwz?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read all our Google Reviews →
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Meals You'll Actually Look Forward To */}
        <section className="py-8 lg:py-11 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-4xl font-light">
                  Meals You'll Actually Look Forward To
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Healthy eating should never feel repetitive.
                </p>
                <div className="space-y-3">
                  <p className="text-base text-foreground/80 leading-relaxed">
                    Every week you'll discover:
                  </p>
                  <ul className="space-y-2 text-base text-foreground/70">
                    <li>• Global flavours inspired by cafés around the world</li>
                    <li>• Three fresh meal choices every day</li>
                    <li>• Breakfasts, salads, warm bowls, snacks & protein shakes</li>
                    <li>• Seasonal ingredients and menus that change weekly</li>
                  </ul>
                </div>
                <p className="text-base text-foreground/70 leading-relaxed">
                  Fresh, vibrant meals you'd happily order from your favourite café. Delivered.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/Sarah_C_C_Subscription_Photoshoot_May_2024-29.jpg"
                  alt="Meal subscription"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-display text-lg font-semibold">Global Flavours</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    From Korean and Mexican to Moroccan and Mediterranean, as well as twists on our favourite Indian classics, our menu changes every week, bringing fresh flavours from around the world to your table.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-display text-lg font-semibold">Colourful by Nature</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Every salad is made with 12+ fresh ingredients, creating vibrant meals naturally rich in fibre, plant diversity and micronutrients.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-display text-lg font-semibold">Crafted from Scratch</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    We make our dressings, sauces and marinades in-house using premium ingredients and seasonal produce, so every meal tastes fresh from the kitchen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-display text-lg font-semibold">Flexible by Design</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Choose from breakfasts, salads, warm bowls, protein shakes and snacks to build a subscription that works around your routine.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Photo Carousel */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-4 min-w-max">
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/Sarah_C_C_Subscription_Photoshoot_May_2024-47.jpg"
                    alt="Meal subscription"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/Sarah_C_C_Subscription_Photoshoot_May_2024-19.jpg"
                    alt="Meal subscription"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/Sarah_C_C_Subscription_Photoshoot_May_2024-45_1_.jpg"
                    alt="Meal subscription"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/Sarah_C_C_Subscription_Photoshoot_May_2024-34.jpg"
                    alt="Meal subscription"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/Sarah_C_C_Subscription_Photoshoot_May_2024-32.jpg"
                    alt="Meal subscription"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/Sarah_C_C_Subscription_Photoshoot_May_2024-22.jpg"
                    alt="Meal subscription"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/Sarah_C_C_Subscription_Photoshoot_May_2024.jpg"
                    alt="Meal subscription"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/BAG08141.jpg"
                    alt="Meal subscription"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 lg:py-11 bg-muted/30">
          <div className="container max-w-6xl">
            <h2 className="font-display text-3xl lg:text-4xl font-light text-center mb-12">
              Getting Started is Easy
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-sage/20 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-sage" />
                </div>
                <h3 className="font-display text-xl font-semibold">Choose Your Week</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Every Friday, we'll send you an exclusive menu featuring seasonal dishes, protein shakes, snacks and beverages. Simply choose what you'd like for the week ahead.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-sage/20 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-sage" />
                </div>
                <h3 className="font-display text-xl font-semibold">Fit It Around Your Schedule</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Select the days, delivery times and address that work best for you. Whether you're at home or in the office, we'll deliver when you need us.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-sage/20 flex items-center justify-center">
                  <TruckIcon className="w-8 h-8 text-sage" />
                </div>
                <h3 className="font-display text-xl font-semibold">We'll Take Care of the Rest</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Your meals arrive fresh, ready to eat and delivered straight to your door, so there's no shopping, cooking or meal prep to think about.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-sage/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-sage" />
                </div>
                <h3 className="font-display text-xl font-semibold">Enjoy More, Think Less</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  With healthy meals already sorted, you can spend less time deciding what to eat and more time enjoying your week. Healthy eating becomes one less thing to think about.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Copper + Cloves */}
        <section className="py-8 lg:py-11">
          <div className="container max-w-4xl">
            <div className="bg-muted/50 border-2 border-sage rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-light mb-6">
                Why Copper + Cloves?
              </h2>
              <p className="text-xs lg:text-sm text-foreground/80 leading-relaxed mb-8 italic">
                Everything we make is designed to help you eat well without compromising on flavour, quality or convenience.
              </p>
              <div className="max-w-2xl mx-auto text-left space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl">✓</span>
                  <p className="text-base text-foreground/80">Made from scratch every day</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl">✓</span>
                  <p className="text-base text-foreground/80">12+ ingredients in every salad</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl">✓</span>
                  <p className="text-base text-foreground/80">Seasonal produce sourced from trusted farms</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl">✓</span>
                  <p className="text-base text-foreground/80">Premium ingredients and house-made sauces</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl">✓</span>
                  <p className="text-base text-foreground/80">Cold-pressed oils only</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl">✓</span>
                  <p className="text-base text-foreground/80">No refined sugar or maida</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl">✓</span>
                  <p className="text-base text-foreground/80">100% plant-based</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl">✓</span>
                  <p className="text-base text-foreground/80">Gluten-free options available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credit System */}
        <section className="py-8 lg:py-11 bg-muted/30">
          <div className="container max-w-4xl text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-light mb-6">
              A Simple Credit System
            </h2>
            <div className="space-y-4 text-foreground/80 mb-10">
              <p className="text-base lg:text-lg leading-relaxed">
                Healthy eating doesn't need to be complicated.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                Choose the pack of credits that suits you best and use them however you'd like.
              </p>
              <p className="text-base lg:text-lg leading-relaxed font-bold text-sage italic">
                1 credit = Any meal (warm bowls, salads, smoothie bowls or sourdough bowls)
              </p>
              <p className="text-base lg:text-lg leading-relaxed font-bold text-sage italic">
                0.5 credits = Protein shakes, snacks, hydrating juices and other nourishing extras
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                Each week you get to choose innovative meals using seasonal ingredients, rotating snacks and fresh juices and shakes so you never get bored.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-4">
              <Card className="bg-card border-2 border-sage">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-display text-xl font-semibold">Weekday Essentials</h3>
                  <p className="text-2xl font-bold text-sage">20 Credits</p>
                  <p className="text-base text-foreground/80">₹7,999</p>
                  <div className="border-t border-border my-3"></div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Perfect for weekday lunches or dinners, with the flexibility to choose exactly which days you need us. we can deliver directly to your office if that is what works for you.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-sage">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-display text-xl font-semibold">Everyday Balance</h3>
                  <p className="text-2xl font-bold text-sage">30 Credits</p>
                  <p className="text-base text-foreground/80">₹11,499</p>
                  <div className="border-t border-border my-3"></div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Ideal if you'd like one nourishing meal most days, with the freedom to add a few snacks, protein boosters or drinks throughout the month.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-sage">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-display text-xl font-semibold">Daily Nourishment</h3>
                  <p className="text-2xl font-bold text-sage">40 Credits</p>
                  <p className="text-base text-foreground/80">₹14,399</p>
                  <div className="border-t border-border my-3"></div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Designed for those who enjoy a nourishing meal each day, with room to add protein shakes, bliss balls and other snacks to keep you fuelled between meals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-sage">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-display text-xl font-semibold">Fully Nourished</h3>
                  <p className="text-2xl font-bold text-sage">60 Credits</p>
                  <p className="text-base text-foreground/80">₹20,999</p>
                  <div className="border-t border-border my-3"></div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Our best value plan for those who want Copper + Cloves to become part of their everyday routine, with enough credits for multiple meals and daily extras throughout the week.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-xs text-foreground/60 italic">
              *prices do not include delivery costs or applicable taxes
            </p>
          </div>
        </section>

        {/* Trial Pack CTA */}
        <section className="py-6 lg:py-8 bg-background">
          <div className="container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-4xl font-light">
                  Try Before You Subscribe
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Three meals for ₹999, including delivery. Experience the food, portion sizes and service before choosing the credit package that's right for you.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                    <a
                      href="https://wa.me/919008454373?text=Hey%20I'd%20like%20to%20try%20the%20Trial%20Pack%20-%20three%20meals%20for%20%E2%82%B9999."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Your Trial Pack
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/Sarah_C_C_Subscription_Photoshoot_May_2024-42_1_.jpg"
                  alt="Trial meal pack"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-wider text-sage font-semibold mb-3">
                ANSWERS TO YOUR QUESTIONS
              </p>
              <h2 className="font-display text-3xl lg:text-5xl font-light mb-4">
                Everything you need to know about your daily ritual.
              </h2>
              <p className="text-base text-foreground/70 max-w-2xl mx-auto">
                Have a specific question about our hyper-local delivery, menus, or pausing your plan? We've got you covered.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 border-b border-border pb-4">
              {Object.entries(faqCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setOpenFaq(null);
                  }}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === key
                      ? "bg-copper text-white"
                      : "bg-transparent text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Accordion Questions */}
            <div className="space-y-0 bg-card rounded-xl overflow-hidden border border-border">
              {faqCategories[activeTab as keyof typeof faqCategories].questions.map((faq, index) => (
                <div key={faq.id} className={index !== 0 ? "border-t border-border" : ""}>
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex justify-between items-start gap-4 text-left hover:bg-muted/50 transition-colors normal-case faq-question"
                  >
                    <span className="font-display text-base lg:text-lg font-medium pr-4 leading-relaxed">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-copper flex-shrink-0 transition-transform duration-200" style={{
                      transform: openFaq === faq.id ? "rotate(45deg)" : "rotate(0deg)"
                    }}>
                      +
                    </span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-6 pt-2 text-sm text-foreground/70 leading-relaxed whitespace-pre-line animate-in fade-in slide-in-from-top-2 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Support CTA Block */}
            <div className="mt-10 bg-sage text-white rounded-xl p-8 text-center space-y-4">
              <h3 className="font-display text-2xl font-light">
                Still have a question about your specific area or meal needs?
              </h3>
              <p className="text-base opacity-90">
                Our concierge team is here to help you design your ideal plan.
              </p>
              <div className="flex flex-col items-center gap-3 pt-2">
                <Button asChild size="lg" className="bg-white text-sage hover:bg-white/90">
                  <a
                    href="https://wa.me/919008454373?text=I%20have%20some%20questions%20about%20the%20meal%20subscription%2C%20was%20hoping%20you%20could%20help%20me!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with Us on WhatsApp
                  </a>
                </Button>
                <p className="text-sm italic opacity-90">
                  We'll help you choose the right credit package, answer any questions and get you set up in just a few minutes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Sample Menu Modal */}
      <Dialog open={showMenuModal} onOpenChange={setShowMenuModal}>
        <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-3 border-b">
            <DialogTitle className="text-xl font-display">Sample Menu</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto p-4" style={{ maxHeight: 'calc(85vh - 80px)' }}>
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/WhatsApp_Image_2026-07-23_at_15.36.03.jpeg"
                alt="Sample meal subscription menu"
                fill
                className="object-contain rounded-lg shadow-sm"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}