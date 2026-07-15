import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function ChaiSpicedGranola() {
  return (
    <>
      <SEO
        title="Chai Spiced Granola | The Notebook"
        description="Warming spices of chai meet crunchy clusters of oats, nuts, and coconut."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/granola_04-1.png"
      />
      <Navigation />
      <main>
        <article className="section-padding">
          <div className="container max-w-4xl">
            <Button
              asChild
              variant="ghost"
              className="mb-8 text-sage hover:text-sage/80"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to The Notebook
              </Link>
            </Button>

            <header className="space-y-6 mb-12">
              <Badge className="bg-kale/10 text-kale border-kale/20 text-xs uppercase tracking-wide">
                Recipe
              </Badge>
              <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                Chai Spiced Granola
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-xl">👩‍🍳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">November 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-foreground/70">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>35 Min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Makes 4 cups</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/granola_04-1.png"
                alt="Chai Spiced Granola"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                This granola brings all the warming spices of a perfect cup of chai to your breakfast bowl. Crunchy clusters of oats, nuts, and coconut are infused with cinnamon, cardamom, ginger, and cloves for an aromatic start to your day that makes your kitchen smell absolutely amazing.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-wide text-sage mb-3 font-medium">
                        Dry Ingredients
                      </h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>3 cups rolled oats</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 cup mixed nuts (almonds, cashews, walnuts), roughly chopped</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/2 cup coconut flakes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>2 teaspoons cinnamon powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 teaspoon cardamom powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 teaspoon ginger powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/2 teaspoon clove powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/2 teaspoon sea salt</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-wide text-sage mb-3 font-medium">
                        Wet Ingredients
                      </h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/3 cup coconut oil, melted</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/3 cup maple syrup or honey</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 teaspoon vanilla extract</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Storage & Tips
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Storage:</span>
                      <span className="text-foreground/70 text-sm">Store in an airtight container at room temperature for up to 2 weeks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Cluster Secret:</span>
                      <span className="text-foreground/70 text-sm">Don't stir while baking! Let it cool completely before breaking into clusters</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/70">
                        The warming chai spices not only taste amazing but also support digestion and have anti-inflammatory properties—making this granola as nourishing as it is delicious.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                  What To Do
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Preheat your oven to 160°C (325°F) and line a large baking tray with parchment paper.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        In a large bowl, combine all the dry ingredients: oats, chopped nuts, coconut flakes, and all the spices (cinnamon, cardamom, ginger, cloves) plus salt. Mix well to distribute the spices evenly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        In a small saucepan over low heat, melt the coconut oil. Remove from heat and stir in the maple syrup and vanilla extract.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Pour the wet ingredients over the dry ingredients and stir thoroughly until everything is well coated. The mixture should look slightly damp and sticky.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Spread the granola mixture evenly on the prepared baking tray in a single layer. Press it down gently with the back of a spatula—this helps create those lovely clusters.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Bake for 30-35 minutes, rotating the tray halfway through. The granola is done when it's golden brown and smells irresistibly fragrant. IMPORTANT: Do not stir the granola while it's baking—this is the secret to getting good clusters!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      7
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Remove from the oven and let cool COMPLETELY on the tray—this is crucial for achieving crunchy clusters. As it cools, it will crisp up. Once fully cooled, break into clusters and store in an airtight container.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      8
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Enjoy with plant-based yogurt, fresh fruit, or simply as a snack straight from the jar. The chai spices make it especially perfect for cooler mornings!
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <footer className="pt-12 border-t border-border">
              <div className="flex items-center justify-between">
                <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to The Notebook
                  </Link>
                </Button>
                <Button asChild className="bg-sage text-white hover:bg-sage/90">
                  <Link href="/subscription">
                    Try Our Meal Plans
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}