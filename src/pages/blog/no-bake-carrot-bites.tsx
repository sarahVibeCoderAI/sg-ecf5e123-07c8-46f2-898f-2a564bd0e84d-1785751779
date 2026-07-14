import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";

export default function NoBakeCarrotBites() {
  return (
    <>
      <SEO
        title="No-Bake Carrot Bites | The Notebook | Copper + Cloves"
        description="Wholesome no-bake energy bites packed with carrots, dates, and warm spices. Perfect healthy snack that tastes like carrot cake."
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
                No-Bake Carrot Bites
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span>Sarah Nicole Edwards</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <span>•</span>
                <span>March 2025</span>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/carrot-bites_01-1.png.webp"
                alt="No-Bake Carrot Bites"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                These wholesome no-bake carrot bites taste just like carrot cake but are naturally sweetened and packed with nutrition. Perfect for a healthy snack or pre-workout fuel, they come together in minutes with no oven required.
              </p>

              <Card className="border-mushroom/30 bg-kale/5 p-8 rounded-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Time</p>
                      <p className="font-medium">15 minutes + chilling</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Makes</p>
                      <p className="font-medium">16-18 bites</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Ingredients
                </h2>
                <ul className="space-y-2 ml-6">
                  <li>1 cup medjool dates, pitted (about 12-14 dates)</li>
                  <li>1 cup finely grated carrots, packed (about 2 medium carrots)</li>
                  <li>1 cup rolled oats</li>
                  <li>1/2 cup almond flour or ground almonds</li>
                  <li>1/4 cup unsweetened shredded coconut</li>
                  <li>2 tbsp almond or cashew butter</li>
                  <li>1 tsp cinnamon</li>
                  <li>1/2 tsp ground ginger</li>
                  <li>1/4 tsp nutmeg</li>
                  <li>1/4 tsp salt</li>
                  <li>1 tsp vanilla extract</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Method
                </h2>
                <ol className="space-y-6 ml-6">
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Prepare dates:</span> If your dates are dry, soak them in warm water for 10 minutes to soften, then drain well and pat dry.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Grate carrots:</span> Use the fine side of a box grater to grate the carrots. Squeeze out any excess moisture with your hands or a clean kitchen towel.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Process base:</span> Add dates, oats, almond flour, coconut, cinnamon, ginger, nutmeg, and salt to a food processor. Pulse until the mixture is finely chopped and starts to come together.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Add wet ingredients:</span> Add the grated carrots, nut butter, and vanilla. Process until the mixture forms a sticky dough that holds together when pressed. If too dry, add a teaspoon of water at a time.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Shape bites:</span> Using clean hands or a cookie scoop, roll the mixture into balls about 1 inch in diameter. Place on a parchment-lined plate or tray.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Chill and serve:</span> Refrigerate for at least 30 minutes to firm up. Store in an airtight container in the refrigerator for up to 1 week, or freeze for up to 3 months.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Nutrition Profile
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  These bites are naturally rich in fiber from the oats and dates, provide sustained energy from complex carbohydrates, and contain beta-carotene from the carrots. The nuts and seeds add healthy fats and protein, while the warm spices not only add flavor but also provide anti-inflammatory benefits. A perfect balance of nutrients in every bite.
                </p>
              </div>

              <Card className="border-sage/30 bg-sage/5 p-6 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-sage">Variations:</span> Roll the bites in extra shredded coconut, crushed nuts, or cacao powder for different coatings. You can also add a handful of raisins or chopped walnuts to the mixture for extra texture.
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