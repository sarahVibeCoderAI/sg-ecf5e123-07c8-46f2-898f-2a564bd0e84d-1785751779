import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function BreakfastSmoothieBowl() {
  return (
    <>
      <SEO
        title="Breakfast Smoothie Bowl | The Notebook - Copper + Cloves"
        description="Dessert for breakfast? Yas! This is our favourite type of smoothie bowl for breakfast- the cold brew gives you that caffeine kick! Rich in antioxidants from raw cacao and full of fibre."
      />
      <Navigation />
      <main>
        <article className="section-padding">
          <div className="container max-w-4xl">
            <Button
              asChild
              variant="ghost"
              className="mb-8 -ml-4 text-sage hover:text-sage/80 hover:bg-sage/5"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to The Notebook
              </Link>
            </Button>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <span className="font-medium text-sage">Recipes</span>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>15 minutes</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Serves 1-2</span>
                  </div>
                </div>

                <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                  Breakfast Smoothie Bowl
                </h1>

                <div className="flex items-center gap-3 pt-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">January 28, 2026</p>
                  </div>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  Dessert for breakfast? Yas! This is our favourite type of smoothie bowl for breakfast- the cold brew gives you that caffeine kick! Rich in antioxidants from raw cacao and full of fibre, this is a great healthy option.
                </p>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://copperandcloves.com/wp-content/uploads/2020/07/0371145292de0f8341535e3601ab5c1d-1.png"
                  alt="Breakfast Smoothie Bowl"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <section className="bg-card p-8 rounded-lg border border-border space-y-6">
                  <h2 className="font-display text-2xl font-light tracking-tight">
                    Ingredients
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>2 ripe small bananas, peeled, cut into chunks, and frozen</li>
                        <li>1 tbsp almond butter or peanut butter</li>
                        <li>2 tbsp cacao powder</li>
                        <li>150ml cold brew or cooled coffee</li>
                        <li>50ml filtered water</li>
                        <li>1 tsp cinnamon powder</li>
                        <li>pinch salt</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-sage mb-3 text-sm uppercase tracking-wide">
                        Toppings
                      </h3>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>Chopped nuts</li>
                        <li>Seeds</li>
                        <li>Sliced banana</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Details
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Time:</span>
                      <span className="text-foreground/70 text-sm">15 minutes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Serves:</span>
                      <span className="text-foreground/70 text-sm">1-2 people</span>
                    </div>
                  </div>
                </section>
              </div>

              <section className="space-y-8 pt-8">
                <h2 className="font-display text-3xl font-light tracking-tight">
                  What To Do
                </h2>

                <ol className="space-y-8">
                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      1
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Remove your bananas from the freezer and drop them into the blender
                    </p>
                  </li>

                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      2
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Add in the nut butter, cold coffee, cacao powder and cinnamon. Blend until it reaches a thick, smooth, creamy consistency. If it is too lumpy and keeps catching- add a splash more water. If it is too liquid, you can add a bit more frozen banana and some more cacao powder
                    </p>
                  </li>

                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      3
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Scoop it out into a bowl and top with some sliced banana, granola and nuts. Check out the video below!
                    </p>
                  </li>
                </ol>

                <div className="bg-sage/5 p-6 rounded-lg border border-sage/20 mt-8">
                  <h3 className="font-medium text-sage mb-2 text-sm uppercase tracking-wide">Tip</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    In this recipe we have used frozen bananas because that gives a creamy, ice-cream-like texture and prevents the smoothie becoming warm due to the heat generated from blending. Slice overripe bananas into a dabba and keep in the freezer so they are on hand and ready for smoothies.
                  </p>
                </div>
              </section>

              <footer className="pt-12 border-t border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6 bg-card border-border">
                    <h3 className="font-display text-xl font-light mb-3">
                      More Recipes
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      Explore more plant-based recipes in The Notebook
                    </p>
                    <Button asChild variant="outline" className="w-full border-sage text-sage hover:bg-sage hover:text-white">
                      <Link href="/blog">View All Recipes</Link>
                    </Button>
                  </Card>

                  <Card className="p-6 bg-sage text-white border-sage">
                    <h3 className="font-display text-xl font-light mb-3">
                      Meal Subscriptions
                    </h3>
                    <p className="text-sm text-white/90 mb-4">
                      Enjoy dishes like this delivered fresh to your door
                    </p>
                    <Button asChild variant="secondary" className="w-full bg-white text-sage hover:bg-white/90">
                      <Link href="/subscription">Explore Plans</Link>
                    </Button>
                  </Card>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}