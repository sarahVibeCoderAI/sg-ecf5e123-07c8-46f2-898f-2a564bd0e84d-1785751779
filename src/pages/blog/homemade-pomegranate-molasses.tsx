import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";

export default function HomemadePomegranateMolasses() {
  return (
    <>
      <SEO
        title="Homemade Pomegranate Molasses | The Notebook | Copper + Cloves"
        description="Learn to make your own pomegranate molasses with just two ingredients. This sweet-tart syrup is essential in Middle Eastern cooking."
      />
      <Navigation />
      <main>
        <article className="section-padding">
          <div className="container max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-sage hover:text-sage/80 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to The Notebook
            </Link>

            <header className="mb-12 space-y-6">
              <Badge className="bg-kale/10 text-kale border-kale/20 text-xs uppercase tracking-wide">
                Recipes
              </Badge>
              <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                Homemade Pomegranate Molasses
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span>Sarah Nicole Edwards</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <span>•</span>
                <span>April 2025</span>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/molasses_01-1.png.webp"
                alt="Homemade Pomegranate Molasses"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                Making your own pomegranate molasses is surprisingly simple and far more affordable than buying it. With just pomegranate juice and a touch of sweetness, you can create this essential Middle Eastern ingredient that adds sweet-tart complexity to countless dishes.
              </p>

              <Card className="border-mushroom/30 bg-kale/5 p-8 rounded-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Time</p>
                      <p className="font-medium">40-50 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Makes</p>
                      <p className="font-medium">About 1 cup</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Ingredients
                </h2>
                <ul className="space-y-2 ml-6">
                  <li>4 cups (1 liter) 100% pure pomegranate juice (no added sugar)</li>
                  <li>2-3 tbsp sugar or maple syrup (adjust to taste)</li>
                  <li>1 tbsp fresh lemon juice (optional, for extra tang)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Method
                </h2>
                <ol className="space-y-6 ml-6">
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Combine ingredients:</span> Pour pomegranate juice into a wide, heavy-bottomed pot or large saucepan. Add sugar and lemon juice if using.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Bring to simmer:</span> Heat over medium-high heat until the mixture begins to bubble. Stir to dissolve the sugar completely.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Reduce:</span> Lower heat to medium-low and let simmer gently, uncovered. The juice will gradually reduce and thicken. Stir occasionally to prevent burning, especially toward the end.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Monitor consistency:</span> After about 40-50 minutes, the juice should reduce to about 1 cup and have a syrupy consistency. It should coat the back of a spoon and leave a trail when you run your finger through it. Remember, it will thicken further as it cools.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Cool and store:</span> Remove from heat and let cool completely. The molasses will thicken to a syrup-like consistency. Transfer to a clean glass jar or bottle and store in the refrigerator.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  How to Use
                </h2>
                <ul className="space-y-3 ml-6">
                  <li>Drizzle over roasted vegetables, especially eggplant, cauliflower, or carrots</li>
                  <li>Use in salad dressings for a sweet-tart dimension</li>
                  <li>Glaze for grilled proteins or tofu</li>
                  <li>Stir into hummus or labneh</li>
                  <li>Add to marinades for depth of flavor</li>
                  <li>Mix into cocktails or mocktails</li>
                  <li>Drizzle over yogurt parfaits or ice cream</li>
                </ul>
              </div>

              <Card className="border-sage/30 bg-sage/5 p-6 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-sage">Storage:</span> Homemade pomegranate molasses will keep in the refrigerator for up to 6 months. The high acidity and sugar content act as natural preservatives. If it crystallizes, gently warm it in a water bath to re-liquefy.
                </p>
              </Card>
            </div>

            <div className="mt-16 pt-8 border-t border-mushroom">
              <Link
                href="/blog"
                className="inline-flex items-center text-sage hover:text-sage/80"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to The Notebook
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}