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
        title="No-Bake Carrot Bites | The Notebook"
        description="These carrot bites are a nourishing little energy ball, perfect for taking on the go."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/carrot-bites_05-1.png"
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
                No-Bake Carrot Bites
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
                    <span>10 Min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Makes 10-12 bites</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/carrot-bites_05-1.png"
                alt="No-Bake Carrot Bites"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                These carrot bites are a nourishing little energy ball, perfect for taking on the go. Made with whole food ingredients, they're naturally sweetened and packed with nutrients. Whether you need a pre-workout snack or an afternoon pick-me-up, these bites deliver sustained energy without the sugar crash.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 cup grated carrot (about 2 medium carrots)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 cup dates, pitted</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 cup raw cashews</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/2 cup desiccated coconut</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 tsp cinnamon powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/4 tsp nutmeg powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/4 tsp ginger powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>Pinch of sea salt</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>Extra desiccated coconut for rolling (optional)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Nutrition Profile
                  </h2>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/70">
                      Carrots are rich in beta-carotene, which converts to vitamin A in the body—essential for eye health and immune function. The dates provide natural sweetness and fiber, while cashews add healthy fats and protein. The warming spices (cinnamon, nutmeg, ginger) not only taste amazing but also support digestion and have anti-inflammatory properties.
                    </p>
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
                        Grate the carrots finely and set aside. If using fresh dates, pit them first.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        In a food processor, add the cashews and pulse until they form a coarse meal. Don't over-process or they'll turn into cashew butter!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Add the dates, grated carrot, desiccated coconut, cinnamon, nutmeg, ginger, and salt to the food processor. Process until everything is well combined and the mixture starts to stick together. The mixture should hold its shape when pressed between your fingers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Using your hands, roll the mixture into small balls, about the size of a walnut (roughly 1 tablespoon of mixture per ball).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Optional: Roll each ball in extra desiccated coconut for a pretty finish.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Store in an airtight container in the fridge for up to a week, or freeze for longer storage. These are best enjoyed cold!
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