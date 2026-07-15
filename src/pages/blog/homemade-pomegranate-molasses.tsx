import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function HomemadePomegranateMolasses() {
  return (
    <>
      <SEO
        title="Homemade Pomegranate Molasses | The Notebook"
        description="A culinary game changer with tart yet sweet flavour and rich, deep red colour."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/Molasses-5_02-1.png"
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
                Homemade Pomegranate Molasses
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-xl">👩‍🍳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">April 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-foreground/70">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>1.5 Hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>2-4 Serves</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/Molasses-5_02-1.png"
                alt="Homemade Pomegranate Molasses"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                "Pomegranate molasses is a culinary game changer. With the consistency of runny honey, it is a typical Middle-Eastern ingredient used for savoury and sweet cooking, has a tart yet sweet flavour and rich, deep red colour- making it a beautiful ingredient to cook with and garnish with. In a nutshell, you NEED this ingredient in your pantry."
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
                          <span>4 kg fresh pomegranates or 1 litre of pomegranate juice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/2 tsp Himalayan salt</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>A sieve</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    About This Recipe
                  </h2>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/70">
                      This is not an ingredient we traditionally have in India- but an imported bottle can be as much as 1000 bucks (no jokes, I've seen this – for 300ml!). India is the largest producer of pomegranates in the world, and all year round at that- so think local and homemade, Copper + Cloves style! The good news is, it's easy and cheap to make it at home. You only need two ingredients.
                    </p>
                    <p className="text-sm text-foreground/70">
                      It is a bit messy to work with pomegranates, so please do not wear white when squeezing the juice from your pomegranates! Alternatively, you can buy freshly squeezed pomegranate juice. If you go with this, skip steps 1-3. Just remember to recycle that plastic bottle!
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
                        Wash pomegranates, cut them all in half and tip the jewels into a bowl. Remove any white pith that also falls into the bowl. Repeat the same for all pomegranate halves.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        When all jewels are in the bowl, squeeze them with your hands or a masher until all the juice has come out.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Strain the mulched jewels through a sieve into a saucepan. Use the back of a spoon and extract as much juice as possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Boil the strained juice over a high heat for 20 minutes until it reaches a boil.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Once the juice is boiling, add in the salt and bring it down to medium low heat and simmer for around 1 hour to 1.5 hours, until thickened. You want it to be the consistency of a very runny honey. Keep an eye on it to ensure it doesn't burn!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Let it cool and pour into a sterilised jar or bottle. This can be stored for months in the fridge and poured over anything!
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-muted/30 p-8 rounded-lg mb-12">
                <h3 className="font-display text-xl font-light tracking-tight mb-4">
                  How to use
                </h3>
                <p className="text-foreground/70">
                  Pomegranate molasses can be used to add a tangy sweetness to rich stews, add depth of flavour to Persian-style dips (see recipe here) and as part of a salad dressing for hearty grain bowls and salads. In sweet dishes, it can be used on top of pancakes, or smoothie bowls. We love it drizzled over baked Kashmiri apricots with cinnamon and jaggery.
                </p>
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