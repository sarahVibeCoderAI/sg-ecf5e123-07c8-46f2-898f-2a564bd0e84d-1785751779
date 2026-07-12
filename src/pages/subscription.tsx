import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Check, Calendar, TruckIcon, ChefHat, Heart, Pause, Leaf, Sparkles } from "lucide-react";

export default function Subscription() {
  return (
    <>
      <SEO
        title="Meal Subscription | Copper + Cloves"
        description="We've got the right solution for you. Our meal subscription is designed to make healthy eating easy, convenient, and delicious."
      />
      <Navigation />
      <main>
        <section className="section-padding pt-16 md:pt-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
                Meal Subscription
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We've got the right solution for you. Our meal subscription is designed to make healthy eating easy, convenient, and delicious.
              </p>
            </div>

            <div className="aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl mb-20">
              <img
                src="/generated/meal-prep-bowls.png"
                alt="Fresh meal subscription bowls"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Flexible System Section */}
        <section className="section-padding bg-oat">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-display text-3xl lg:text-4xl font-light">
                    Designed to Fit Your Lifestyle
                  </h2>
                  <div className="space-y-4 text-foreground/80 leading-relaxed">
                    <p>
                      Our meal subscription is designed to be totally flexible to fit in with your lifestyle. The C+C meal subscription is a credit based system which allows you to pick the meals you want and need, and not get tied in to a certain number of meals per day.
                    </p>
                    <p>
                      Our daily range of add-ons means it's easy to guarantee 35g of protein per meal, and we can handle your healthy snacks and protein shakes.
                    </p>
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/generated/subscription-flexible-meals.png"
                    alt="Flexible meal subscription bowls"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding">
          <div className="container">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-center mb-16">
              How It Works
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <Card className="border-mushroom/30 bg-white text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <ChefHat className="h-8 w-8 text-sage" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center mx-auto font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-display text-xl font-light">Select Your Preferred Meals</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    There's a new exclusive menu sent out every Friday from which you can select your meals for the week.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-mushroom/30 bg-white text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <Calendar className="h-8 w-8 text-sage" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center mx-auto font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-display text-xl font-light">Pick Your Days and Time-Slots</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Customize your delivery schedule by selecting the days and time slots that best suit your daily routine.
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
                  <h3 className="font-display text-xl font-light">Delivered to Your Doorstep</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    We deliver your selected meals on the dates chosen, and all of them come ready-to-eat for your convenience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-mushroom/30 bg-white text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mx-auto">
                    <Sparkles className="h-8 w-8 text-sage" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center mx-auto font-bold text-sm">
                    4
                  </div>
                  <h3 className="font-display text-xl font-light">Dig In & Enjoy Your Meals!</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    We make healthy eating fun and our meals will leave you feeling so great that you'll crave them repeatedly!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
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

        <section className="section-padding">
          <div className="container">
            <Card className="max-w-3xl mx-auto border-mushroom/30 bg-white overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto overflow-hidden">
                  <img
                    src="/generated/subscription-trial-pack.png"
                    alt="Trial pack meals"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-8 lg:p-10 flex flex-col justify-center space-y-6">
                  <Badge className="w-fit bg-sage/10 text-sage border-sage/20">
                    Try Before You Commit
                  </Badge>
                  <h3 className="font-display text-3xl font-light">
                    Still uncertain? Sign up for our trial pack!!
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Experience our chef-crafted meals with a 5-day trial. Perfect for testing how our subscription fits into your lifestyle.
                  </p>
                  <Button className="bg-sage text-white hover:bg-sage/90 w-fit">
                    Get Trial Pack
                  </Button>
                </CardContent>
              </div>
            </Card>
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
    </>
  );
}