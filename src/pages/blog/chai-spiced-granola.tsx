import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";

export default function ChaiSpicedGranola() {
  return (
    <>
      <SEO
        title="Chai Spiced Granola | The Notebook | Copper + Cloves"
        description="Homemade granola infused with warming chai spices. Crunchy, naturally sweetened clusters perfect for breakfast or snacking."
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
                Chai Spiced Granola
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span>Sarah Nicole Edwards</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>7 min read</span>
                </div>
                <span>•</span>
                <span>November 2024</span>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/chai-granola_01-1.png.webp"
                alt="Chai Spiced Granola"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                This granola brings all the warming spices of a perfect cup of chai to your breakfast bowl. Crunchy clusters of oats, nuts, and coconut are infused with cinnamon, cardamom, ginger, and cloves - a cozy start to any morning.
              </p>

              <Card className="border-mushroom/30 bg-kale/5 p-8 rounded-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Time</p>
                      <p className="font-medium">40 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Makes</p>
                      <p className="font-medium">About 6 cups</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Ingredients
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-sage">Dry Ingredients:</h3>
                    <ul className="space-y-2 ml-6">
                      <li>3 cups rolled oats</li>
                      <li>1 cup mixed nuts (almonds, cashews, pecans), roughly chopped</li>
                      <li>1/2 cup unsweetened coconut flakes</li>
                      <li>1/4 cup pumpkin seeds</li>
                      <li>1/4 cup sunflower seeds</li>
                      <li>2 tsp ground cinnamon</li>
                      <li>1 tsp ground ginger</li>
                      <li>1 tsp ground cardamom</li>
                      <li>1/4 tsp ground cloves</li>
                      <li>1/4 tsp black pepper</li>
                      <li>1/2 tsp salt</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-sage">Wet Ingredients:</h3>
                    <ul className="space-y-2 ml-6">
                      <li>1/3 cup coconut oil, melted</li>
                      <li>1/3 cup maple syrup or honey</li>
                      <li>2 tbsp molasses or jaggery syrup</li>
                      <li>1 tsp vanilla extract</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-sage">Optional Add-ins (after baking):</h3>
                    <ul className="space-y-2 ml-6">
                      <li>1/2 cup dried fruit (raisins, cranberries, or chopped dates)</li>
                      <li>1/4 cup cacao nibs or dark chocolate chips</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Method
                </h2>
                <ol className="space-y-6 ml-6">
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Preheat:</span> Preheat oven to 160°C (325°F). Line two large baking trays with parchment paper.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Mix dry ingredients:</span> In a large bowl, combine oats, chopped nuts, coconut flakes, pumpkin seeds, sunflower seeds, cinnamon, ginger, cardamom, cloves, black pepper, and salt. Mix well to distribute spices evenly.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Combine wet ingredients:</span> In a small bowl, whisk together melted coconut oil, maple syrup, molasses, and vanilla until smooth.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Mix together:</span> Pour the wet mixture over the dry ingredients. Mix thoroughly with a wooden spoon or your hands until everything is evenly coated. The mixture should clump together slightly when pressed.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Bake:</span> Spread the granola evenly across the prepared baking trays in a single layer. Don't spread it too thin - you want clusters. Bake for 30-35 minutes, stirring gently every 10 minutes to ensure even browning.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Cool completely:</span> Remove from oven when golden brown and fragrant. Let cool completely on the trays without stirring - this is when the clusters form. Once cool, break into desired chunk sizes.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Add extras:</span> If using dried fruit or chocolate, stir them in after the granola has cooled completely.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Store:</span> Transfer to an airtight container and store at room temperature for up to 3 weeks, or in the freezer for up to 3 months.
                  </li>
                </ol>
              </div>

              <Card className="border-sage/30 bg-sage/5 p-6 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-sage">Serving ideas:</span> Enjoy with coconut yogurt and fresh fruit, sprinkle over smoothie bowls, or eat by the handful as a snack. For a chai latte-inspired breakfast, pour over warm oat milk and top with a pinch of cinnamon.
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