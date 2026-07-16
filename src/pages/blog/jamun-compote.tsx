import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function JamunCompote() {
  return (
    <>
      <SEO
        title="Jamun Compote | The Notebook"
        description="Summers bring mangoes and when they go, they leave us with jamuns. This jamun compote helps to extend the season."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/compote4-1.png"
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
                Jamun Compote
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-xl">👩‍🍳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">January 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-foreground/70">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>20 Min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Makes 2 cups</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/compote4-1.png"
                alt="Jamun Compote"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                Summers bring mangoes and when they go, they leave us with jamuns. This jamun compote helps to extend the season. It's super versatile and can be used in so many ways. We love to drizzle it over our cashew yoghurt or swirl it into our overnight oats. It's also delicious spooned over pancakes or stirred into chia pudding.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>2 cups fresh jamuns (Indian blackberries), washed and pitted</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>¼ cup jaggery or coconut sugar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>2 tablespoons water</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>1 tablespoon lemon juice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-sage">•</span>
                      <span>½ teaspoon cinnamon</span>
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
                      <span className="font-medium text-sage">High in:</span> Antioxidants, vitamin C, iron
                    </p>
                    <p className="text-foreground/70">
                      <span className="font-medium text-sage">Rich in:</span> Polyphenols, particularly anthocyanins that give jamuns their deep purple color
                    </p>
                    <p className="text-foreground/70">
                      <span className="font-medium text-sage">Benefits:</span> Jamuns are known to help regulate blood sugar levels, improve digestion, and boost immunity. The antioxidants support heart health and may have anti-inflammatory properties.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/70">
                        Store in an airtight container in the refrigerator for up to 1 week.
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
                        Wash the jamuns thoroughly and remove the pits. You can do this by gently pressing each jamun to pop out the pit, or by cutting them in half and removing the pit with a small spoon or knife.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        In a medium saucepan, combine the pitted jamuns, jaggery (or coconut sugar), water, lemon juice, cinnamon, and a pinch of salt.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Place the saucepan over medium heat and bring the mixture to a gentle boil, stirring occasionally to help dissolve the jaggery.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Once boiling, reduce the heat to low and simmer for 10-15 minutes, stirring occasionally. The jamuns will break down and release their juices, and the mixture will thicken slightly. You can use a potato masher to gently mash some of the jamuns if you prefer a smoother consistency, or leave them whole for a chunkier compote.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Remove from heat and allow the compote to cool. As it cools, it will thicken further. Transfer to a clean jar or airtight container and refrigerate.
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