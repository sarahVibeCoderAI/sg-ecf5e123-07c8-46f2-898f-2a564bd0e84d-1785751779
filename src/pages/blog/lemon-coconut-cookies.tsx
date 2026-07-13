import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";

export default function LemonCoconutCookies() {
  return (
    <>
      <SEO
        title="Lemon + Coconut Oatmeal Cookies | The Notebook"
        description="Bright lemon meets tropical coconut in these chewy oatmeal cookies - the perfect balance of tart and sweet."
        image="https://copperandcloves.com/wp-content/uploads/2020/08/8a0f7b89e524bdb05a21065a97d760a6-1.png"
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
                Lemon + Coconut Oatmeal Cookies
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Bright lemon zest meets tropical coconut in these perfectly chewy oatmeal cookies. They're naturally sweetened, wholesome, and irresistibly delicious - the kind of cookie that disappears from the cooling rack before dinner.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-xl">👩‍🍳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">August 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-foreground/70">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>35 min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Makes 18 cookies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ChefHat className="h-4 w-4" />
                    <span>Easy</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2020/08/8a0f7b89e524bdb05a21065a97d760a6-1.png"
                alt="Lemon coconut oatmeal cookies"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                  Why You'll Love These Cookies
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  These aren't your average oatmeal cookies. The bright pop of lemon zest cuts through the richness of coconut oil, while shredded coconut adds texture and tropical sweetness. They're chewy in the center with slightly crisp edges - that perfect cookie texture we all crave.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  What makes these special is how they balance indulgence with wholesome ingredients. Whole grain oats, coconut sugar for natural sweetness, and bright citrus make every bite feel nourishing without sacrificing flavor.
                </p>
              </section>

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
                          <span>2 cups old-fashioned rolled oats</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 cup whole wheat flour (or all-purpose)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 cup unsweetened shredded coconut</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 teaspoon baking soda</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>½ teaspoon sea salt</span>
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
                          <span>½ cup coconut oil, melted</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>¾ cup coconut sugar</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>¼ cup maple syrup</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>2 tablespoons lemon juice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>Zest of 2 lemons</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 teaspoon vanilla extract</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-8">
                  <div className="bg-kale/5 p-8 rounded-lg border border-kale/20">
                    <h3 className="font-display text-lg font-light mb-4">
                      Chef's Notes
                    </h3>
                    <ul className="space-y-3 text-sm text-foreground/70">
                      <li className="flex items-start">
                        <span className="mr-2 text-kale">✓</span>
                        <span>Use fresh lemon zest for the brightest flavor - bottled zest doesn't compare</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-kale">✓</span>
                        <span>Don't skip the sea salt on top - it enhances the lemon and balances the sweetness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-kale">✓</span>
                        <span>Cookies will look slightly underdone when you pull them out - they firm up as they cool</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg border border-border">
                    <h3 className="font-display text-lg font-light mb-4">
                      Storage
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Store in an airtight container at room temperature for up to 5 days. These also freeze beautifully - layer between parchment paper and freeze for up to 3 months.
                    </p>
                  </div>
                </section>
              </div>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                  Instructions
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Preheat & Prep</h3>
                      <p className="text-foreground/70">
                        Preheat your oven to 350°F (175°C). Line two baking sheets with parchment paper and set aside. This ensures your cookies won't stick and makes cleanup a breeze.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Mix Dry Ingredients</h3>
                      <p className="text-foreground/70">
                        In a large bowl, whisk together the oats, flour, shredded coconut, baking soda, and salt until well combined. The coconut should be evenly distributed throughout.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Combine Wet Ingredients</h3>
                      <p className="text-foreground/70">
                        In a separate bowl, whisk together the melted coconut oil, coconut sugar, maple syrup, lemon juice, lemon zest, and vanilla extract until smooth. The mixture should be fragrant and glossy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Bring It Together</h3>
                      <p className="text-foreground/70">
                        Pour the wet ingredients into the dry ingredients. Stir with a wooden spoon or spatula until just combined. Don't overmix - a few flour streaks are fine. The dough will be slightly sticky and fragrant with lemon.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Shape & Bake</h3>
                      <p className="text-foreground/70">
                        Using a cookie scoop or tablespoon, drop rounded balls of dough onto your prepared baking sheets, spacing them about 2 inches apart. Gently flatten each cookie slightly with your palm - they won't spread much on their own. Sprinkle with a pinch of flaky sea salt.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Bake to Perfection</h3>
                      <p className="text-foreground/70">
                        Bake for 12-14 minutes, until the edges are golden but the centers still look slightly soft. They'll continue to cook on the baking sheet after you remove them from the oven. Let them cool on the baking sheet for 5 minutes before transferring to a wire rack.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      7
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Cool & Enjoy</h3>
                      <p className="text-foreground/70">
                        Transfer to a wire rack to cool completely. The cookies will firm up as they cool, developing that perfect chewy-crisp texture. Try to resist eating them all while they're warm (but we won't judge if you do).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-card p-8 rounded-lg border border-border mb-12">
                <h2 className="font-display text-2xl font-light tracking-tight mb-4">
                  Variations
                </h2>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start">
                    <span className="mr-2 text-sage">•</span>
                    <span><strong>Lemon Coconut Cranberry:</strong> Add ½ cup dried cranberries to the dough for a tart contrast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-sage">•</span>
                    <span><strong>White Chocolate Version:</strong> Fold in ½ cup vegan white chocolate chips after mixing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-sage">•</span>
                    <span><strong>Lime Twist:</strong> Swap lemon for lime zest and juice for a more tropical flavor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-sage">•</span>
                    <span><strong>Gluten-Free:</strong> Use certified gluten-free oat flour and gluten-free oats</span>
                  </li>
                </ul>
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