import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function NoBakeCarrotBites() {
  return (
    <>
      <SEO
        title="No-bake Carrot Bites | The Notebook"
        description="This is a great no-cook recipe to make ahead of time, so you have a go-to healthy dessert in the fridge."
        image="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/bites4-1.png.webp"
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
                No-bake Carrot Bites
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-xl">👩‍🍳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">March 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-foreground/70">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>15 Min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Makes 12 bites</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/bites4-1.png.webp"
                alt="No-bake Carrot Bites"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                This is a great no-cook recipe to make ahead of time, so you have a go-to healthy dessert in the fridge. It is packed full of healthy nourishing ingredients, but the taste is great! These taste like carrot cake and we've not met anyone yet who doesn't love these!
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 cup almonds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 cup cashews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 cup pitted dates (soaked in hot water for 10 minutes, then drained)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 cup shredded carrot (packed)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>¼ cup desiccated coconut</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 teaspoon cinnamon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>½ teaspoon nutmeg</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>½ teaspoon ginger powder</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>Pinch of salt</span>
                    </li>
                  </ul>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Nutrition Profile
                  </h2>
                  <div className="space-y-4 text-sm">
                    <p className="text-foreground/70">
                      <span className="font-medium text-sage">High in:</span> Healthy fats, protein, fiber
                    </p>
                    <p className="text-foreground/70">
                      <span className="font-medium text-sage">Rich in:</span> Vitamin A (from carrots), vitamin E (from nuts), magnesium, potassium
                    </p>
                    <p className="text-foreground/70">
                      <span className="font-medium text-sage">Benefits:</span> These bites provide sustained energy from natural sugars and healthy fats. The combination of nuts and dates offers a good balance of protein, healthy fats, and fiber.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/70">
                        Store in an airtight container in the refrigerator for up to 2 weeks, or freeze for up to 3 months.
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
                        In a food processor, pulse the almonds and cashews until they are finely chopped but not turned into flour. You want some texture remaining.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Add the soaked and drained dates to the food processor along with the shredded carrot, desiccated coconut, cinnamon, nutmeg, ginger powder, and a pinch of salt.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Process the mixture until everything is well combined and the mixture holds together when pressed. This should take about 1-2 minutes. You may need to scrape down the sides of the food processor a few times to ensure even mixing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Using your hands or a small cookie scoop, roll the mixture into bite-sized balls, about 1 inch (2.5 cm) in diameter. You should get approximately 12-15 bites, depending on the size.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Optional: Roll the bites in extra desiccated coconut or finely chopped nuts for a decorative coating.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Place the bites on a parchment-lined tray and refrigerate for at least 30 minutes to firm up before serving.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      7
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Store in an airtight container in the refrigerator for up to 2 weeks, or freeze for longer storage.
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