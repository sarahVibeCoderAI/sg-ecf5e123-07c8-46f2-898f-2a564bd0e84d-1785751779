import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function BeetrootOrangeCoconutSalad() {
  return (
    <>
      <SEO
        title="Beetroot, Orange + Coconut Salad | The Notebook"
        description="For the hot summer days, we've come up with a quick and easy recipe- beetroots, oranges and coconuts come together in this refreshing, colourful salad."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/salad4-1.png"
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
                Beetroot, Orange + Coconut Salad
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-xl">👩‍🍳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">December 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-foreground/70">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>45 Min (30 min roasting)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Serves 4</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/salad4-1.png"
                alt="Beetroot, Orange + Coconut Salad"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                For the hot summer days, we've come up with a quick and easy recipe- beetroots, oranges and coconuts come together in this refreshing, colourful salad. It's light, vibrant, and packed with nutrients. The earthiness of roasted beetroot pairs beautifully with the bright citrus notes of orange and the subtle sweetness of toasted coconut.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-wide text-sage mb-3 font-medium">
                        For the Salad
                      </h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>4 medium beetroots, washed and trimmed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>2 large oranges, peeled and segmented</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>½ cup fresh coconut, thinly sliced or grated (or desiccated coconut, toasted)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>4 cups mixed salad greens (arugula, spinach, or lettuce)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>¼ cup fresh mint leaves, roughly chopped</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>2 tablespoons pumpkin seeds (optional, for extra crunch)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-wide text-sage mb-3 font-medium">
                        For the Dressing
                      </h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>3 tablespoons extra virgin olive oil</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 tablespoon apple cider vinegar</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 tablespoon orange juice (from the segmented oranges)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 teaspoon jaggery or maple syrup</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>½ teaspoon Dijon mustard</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>Salt and black pepper to taste</span>
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
                      <span className="text-sage font-medium text-sm">Roast Time:</span>
                      <span className="text-foreground/70 text-sm">30-40 minutes at 200°C</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Prep Time:</span>
                      <span className="text-foreground/70 text-sm">15 minutes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Serves:</span>
                      <span className="text-foreground/70 text-sm">4 as a side salad</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/70">
                        This salad is best enjoyed fresh. Roasted beetroot can be prepared up to 2 days in advance and stored in the refrigerator. Assemble the salad just before serving for optimal freshness.
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
                        Preheat your oven to 200°C (400°F). Wrap each beetroot individually in aluminum foil and place them on a baking tray.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Roast the beetroots for 30-40 minutes, or until they are tender when pierced with a fork. The exact time will depend on the size of your beetroots.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Once the beetroots are cooked, remove them from the oven and let them cool slightly. When cool enough to handle, peel off the skin (it should come off easily) and cut the beetroots into bite-sized wedges or slices.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        While the beetroots are roasting, prepare the dressing by whisking together the olive oil, apple cider vinegar, orange juice, jaggery (or maple syrup), Dijon mustard, salt, and black pepper in a small bowl until well combined. Set aside.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Segment the oranges by cutting away the peel and pith with a sharp knife, then carefully cutting between the membranes to release each segment. Collect any juice that drips out and add it to the dressing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        If using fresh coconut, toast the slices in a dry pan over medium heat for 2-3 minutes until lightly golden and fragrant. If using desiccated coconut, toast it in the same way until golden brown. Watch carefully to prevent burning.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      7
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        In a large serving bowl, arrange the mixed salad greens as a base. Top with the roasted beetroot wedges, orange segments, toasted coconut, and chopped mint leaves.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      8
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Drizzle the prepared dressing over the salad and toss gently to combine. Sprinkle with pumpkin seeds if using.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      9
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Serve immediately and enjoy this vibrant, refreshing salad!
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