import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Leaf, Calendar, Package, MapPin, X } from "lucide-react";
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

export default function Subscription() {
  const [showMenuModal, setShowMenuModal] = useState(false);

  return (
    <>
      <SEO
        title="Meal Subscription - Copper + Cloves"
        description="Nourishing plant-based meal subscriptions delivered to your Bangalore doorstep. Flexible plans, hyper-local ingredients, zero compromise on taste."
        image="/og-image.png"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding pt-40 pb-24 bg-gradient-to-b from-oat to-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
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
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/Sarah_C_C_Subscription_Photoshoot_May_2024-31.jpg"
                  alt="Healthy meal subscription bowls"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Designed to Fit Your Lifestyle */}
        <section className="py-6 lg:py-8">
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
                    From Korean and Mexican to Moroccan and Mediterranean, our menu changes every week, bringing fresh flavours from around the world to your table.
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
          <div className="container max-w-6xl">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-center mb-4">
              Why Copper + Cloves?
            </h2>
            <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
              Let us take care of your meals and help you save time!
            </p>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-mushroom/30 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <Pause className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="font-display text-xl font-light">Flexible Scheduling</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    If you travel often, you can pause your monthly meals while away. Schedule meals flexibly, whether it's a daily lunch on weekdays or three meals a day for a month.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-mushroom/30 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <Heart className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="font-display text-xl font-light">Total Convenience</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Take your pick from our weekly menus, and let us deliver our meals directly to you - no need for daily planning and arranging delivery!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-mushroom/30 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <Leaf className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="font-display text-xl font-light">Zero Plastic</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    We don't use any plastic whatsoever in our packages – everything is biodegradable and can be torn up and composted.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Credit System Section */}
        <section className="py-8 lg:py-11 bg-sage/10">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-light mb-6">
                A simple credit system
              </h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Healthy eating doesn't need to be complicated. Choose a monthly pack of credits and use them however you'd like.
              </p>
              <div className="space-y-2 text-foreground/70 text-base mb-4">
                <p><strong>1 credit</strong> = Any meal (warm bowls, salads, smoothie bowls or sourdough bowls)</p>
                <p><strong>0.5 credits</strong> = Protein shakes, snacks, hydrating juices and other nourishing extras</p>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed">
                Every Friday, we'll send you a new menu for the following week with innovative meals using seasonal ingredients, rotating snacks and beverages so you never get bored. Simply choose the meals, snacks and shakes you'd like, decide when you'd like them delivered, and we'll take care of the rest.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="font-display text-lg font-semibold h-14 flex items-center">Weekday Essentials</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-xl font-semibold text-sage">20 Credits</p>
                    <p className="text-2xl font-display font-light">₹7,999</p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    This is the plan for you if you mostly want weekday lunches or dinners, with the flexibility to choose exactly which days you need us. Meals can be delivered to your office directly as well as your home!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="font-display text-lg font-semibold h-14 flex items-center">Everyday Balance</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-xl font-semibold text-sage">30 Credits</p>
                    <p className="text-2xl font-display font-light">₹11,499</p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Ideal if you'd like one nourishing meal most days, with the freedom to add a few snacks or protein shakes throughout the month.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="font-display text-lg font-semibold h-14 flex items-center">Daily Nourishment</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-xl font-semibold text-sage">40 Credits</p>
                    <p className="text-2xl font-display font-light">₹14,399</p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Designed for those who might need more than one nourishing meal each day, with room to add protein add-ons, shakes and other snacks to keep you fuelled between meals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="font-display text-lg font-semibold h-14 flex items-center">Fully Nourished</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-xl font-semibold text-sage">60 Credits</p>
                    <p className="text-2xl font-display font-light">₹20,999</p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Our best value plan for those who want Copper + Cloves to become part of their everyday routine, with enough credits for multiple meals and protein add-ons, shakes and snacks throughout the week.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-xs text-center text-foreground/50 italic">
              *applicable taxes and delivery charges are additional
            </p>
          </div>
        </section>

        {/* Trial Pack CTA */}
        <section className="py-8 lg:py-11">
          <div className="container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/Sarah_C_C_Subscription_Photoshoot_May_2024-42_1_.jpg"
                  alt="Trial pack meals"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-4xl font-light">
                  Try Before You Commit
                </h2>
                <p className="text-base text-foreground/80 leading-relaxed">
                  Experience our chef-crafted meals with a 3-day trial. A chance to see how our subscription fits in with your lifestyle.
                </p>
                <p className="text-sm text-foreground/60 italic">
                  *only available to customers who live in the CBD or Indiranagar area of Bangalore.
                </p>
                <Button asChild size="lg" className="bg-sage hover:bg-sage/90 text-white uppercase">
                  <a
                    href="https://wa.me/919008454373?text=Hey%20there%2C%20I%20am%20interested%20in%20taking%20a%203-credit%20trial%20pack%20of%20the%20meal%20subscription.%20How%20can%20I%20avail%20this%20offer%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Your Trial Pack
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Do You Have Questions?
            </h2>
            <p className="text-foreground/70 mb-8">
              We've answered them here
            </p>
            <Button asChild className="bg-sage text-white hover:bg-sage/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
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
            <img
              src="/WhatsApp_Image_2026-07-23_at_15.36.03.jpeg"
              alt="Sample meal subscription menu"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}