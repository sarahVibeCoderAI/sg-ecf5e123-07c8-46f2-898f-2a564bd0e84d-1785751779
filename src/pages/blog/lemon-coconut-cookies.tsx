import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function LemonCoconutCookies() {
  return (
    <>
      <SEO
        title="Lemon + Coconut Oatmeal Cookies | The Notebook"
        description="These cookies are full of flavour and whole ingredients – perfect for sharing with friends."
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
                    <span>13-15 Min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Makes 12 cookies</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2020/08/8a0f7b89e524bdb05a21065a97d760a6-1.png"
                alt="Lemon + Coconut Oatmeal Cookies"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                These cookies are full of flavour and whole ingredients – perfect for sharing with friends. We created this recipe for Friendship Day, encouraging everyone to box them up and send to a friend along with a handwritten note. But that is a good idea any day!
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
                          <span>1 cup oats</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 cup wholewheat atta</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>¾ cup coconut sugar or jaggery powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>⅓ cup freshly grated coconut (or ¼ cup desiccated coconut)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>½ teaspoon baking soda</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>½ teaspoon salt</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>¼ teaspoon cardamom powder</span>
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
                          <span>½ cup extra virgin coconut oil</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>¼ cup coconut milk</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>3 tablespoons of freshly squeezed lemon juice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1½ tsp lemon zest</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Storage & Details
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Bake Time:</span>
                      <span className="text-foreground/70 text-sm">13-15 minutes at 180°C</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Yield:</span>
                      <span className="text-foreground/70 text-sm">Makes 12 cookies</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/70">
                        Store in an airtight container and they will keep for 5-7 days. Share with friends and spread the love!
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
                        Preheat your oven to 180 degrees and line a baking sheet with butter paper or rub with a little coconut oil.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        First, take the oats, and grind in a mixie to a fine powder. This is now oat flour!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        In a large bowl add all the dry ingredients and stir to mix well.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Add in the wet ingredients, and stir until everything is combined.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Roll the dough into 10-12 equal-sized balls and place on a baking sheet. Flatten each ball slightly with a fork. Bake for 13-15 minutes (rotating the pan halfway through) or until golden brown. The exact amount of time in the oven will depend on the type of oven you have, so it's best to use how it looks (the dough will no longer look raw and will take on a golden brown colour).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        When the cookies are done, remove from the oven and allow them to cool on the baking sheet for 10 minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      7
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Allow them to cool before eating. Store in an airtight container and they will keep for 5-7 days. Share with friends and spread the love!
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