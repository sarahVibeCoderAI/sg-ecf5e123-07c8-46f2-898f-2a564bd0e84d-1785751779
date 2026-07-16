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
                    <span>15 Min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>1-2 Serves</span>
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
                The beauty of this recipe is that you can play around with the ingredients so much. If you prefer walnuts to almonds- just swap them in! If you happen to have watermelon seeds instead of sunflower seeds, make the sub! I've put the measurements in mugs so if you want more variety, just mix up the nuts and keep the quantity roughly the same.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1/2 fresh coconut, thinly sliced</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>2 mugs rolled oats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 mug almonds, chopped</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 mug pistas, chopped</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 mug pumpkin seeds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 mug sunflower seeds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>3 tablespoons flax seeds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>3 tablespoons extra virgin coconut oil</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1/2 mug of liquid jaggery or honey</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>3 tsp. cinnamon powder</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>3 tsp. green cardamom powder</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 tsp. sea salt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 mug raisins</span>
                    </li>
                  </ul>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Details
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Prep Time:</span>
                      <span className="text-foreground/70 text-sm">15 minutes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Serves:</span>
                      <span className="text-foreground/70 text-sm">1-2</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/70">
                        Store in a sealed, clean jar for up to 3 weeks.
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
                        First slice the coconut into this slices and lightly toast in the oven (around 180C) until starting to turn golden brown at the edges. Set aside.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Put the oats and all the chopped nuts and whole seeds into a mixing bowl. Mix together the coconut oil, the honey/jaggery liquid and the salt and spices and then pour into the dry oaty-nutty-seedy mixture. Mix well until everything is well coated and sticky.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Transfer the sticky mixture into a wide flat baking tray and ensure it is even spread across. Toast in the oven at 180C for between 25-45 minutes (it totally depends on the strength of your oven). Take it out and stir it once after 15 minutes to ensure it toasts evenly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Take it out and let it cool down. Once cool, add the raisins and the pre-toasted coconut. Store in a sealed, clean jar for up to 3 weeks.
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