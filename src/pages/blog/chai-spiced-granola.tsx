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
        description="The beauty of this recipe is that you can play around with the ingredients so much. If you prefer walnuts to almonds- just swap them in!"
        image="https://copperandcloves.com/wp-content/uploads/2024/04/granola3-1.png"
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
                    <span>Makes 6 cups</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/granola3-1.png"
                alt="Chai Spiced Granola"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                The beauty of this recipe is that you can play around with the ingredients so much. If you prefer walnuts to almonds- just swap them in! Don't like raisins? Use dried cranberries instead. This granola is infused with warming chai spices that make your kitchen smell amazing as it bakes. It's perfect with yoghurt, milk, or just by the handful as a snack.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>3 cups rolled oats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 cup almonds, roughly chopped</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>½ cup cashews, roughly chopped</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>½ cup desiccated coconut</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>¼ cup pumpkin seeds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>¼ cup sunflower seeds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>2 teaspoons cinnamon</span>
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
                      <span>½ teaspoon nutmeg</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>¼ teaspoon cloves</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>½ teaspoon salt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>⅓ cup coconut oil, melted</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>⅓ cup jaggery or maple syrup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 teaspoon vanilla extract</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>½ cup raisins or dried cranberries (added after baking)</span>
                    </li>
                  </ul>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Storage & Details
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Bake Time:</span>
                      <span className="text-foreground/70 text-sm">30-35 minutes at 160°C</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Yield:</span>
                      <span className="text-foreground/70 text-sm">Makes about 6 cups</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/70">
                        Store in an airtight container at room temperature for up to 2 weeks, or in the refrigerator for up to 1 month. The granola will stay crispy if stored properly.
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
                        Preheat your oven to 160°C (320°F). Line a large baking tray with parchment paper or lightly grease it with coconut oil.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        In a large mixing bowl, combine the rolled oats, chopped almonds, cashews, desiccated coconut, pumpkin seeds, sunflower seeds, cinnamon, cardamom, ginger powder, nutmeg, cloves, and salt. Stir well to evenly distribute the spices.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        In a small saucepan or microwave-safe bowl, gently warm the coconut oil, jaggery (or maple syrup), and vanilla extract together until the jaggery has dissolved and the mixture is well combined. If using maple syrup, you can simply stir everything together without heating.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Pour the wet mixture over the dry ingredients and stir thoroughly until everything is evenly coated. Make sure all the oats and nuts are coated with the oil and sweetener.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Spread the granola mixture evenly on the prepared baking tray in a single layer. Try not to stir or disturb the granola too much during baking to help it form nice clusters.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Bake for 30-35 minutes, stirring gently halfway through, until the granola is golden brown and fragrant. Keep an eye on it during the last 10 minutes to prevent burning, as the edges can brown quickly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      7
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Remove the granola from the oven and let it cool completely on the baking tray. As it cools, it will become crispy and form clusters. Don't stir it while it's cooling!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      8
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Once completely cool, break the granola into clusters and stir in the raisins or dried cranberries. Transfer to an airtight container and store.
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