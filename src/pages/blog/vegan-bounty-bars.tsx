import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function VeganBountyBars() {
  return (
    <>
      <SEO
        title="Vegan 'bounty' Bars | The Notebook"
        description="Do you remember Bounty bars? We decided to make a vegan and healthier version of this classic, using local, Indian ingredients."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/bar2-1.png"
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
                Vegan 'bounty' Bars
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-xl">👩‍🍳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">June 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-foreground/70">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>1 hour (+ 2 hours chill time)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Makes 12 bars</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/bar2-1.png"
                alt="Vegan 'bounty' Bars"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                Do you remember Bounty bars? We decided to make a vegan and healthier version of this classic, using local, Indian ingredients. Sweet, sticky coconut covered with chocolate- these are very rich and should be quite small in size! With far less sugar and saturated fats, these don't have that sickly-sweet vibe. We use khopra or fresh coconut, and jaggery which are local ingredients that can be used to sweeten things.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-wide text-sage mb-3 font-medium">
                        For the Coconut Filling
                      </h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 ½ cup fresh coconut, grated</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>⅓ cup jaggery powder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>3 tablespoons coconut oil</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 teaspoon vanilla extract</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>Pinch of salt</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-wide text-sage mb-3 font-medium">
                        For the Chocolate Coating
                      </h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>200g dark chocolate (70% cocoa or higher), chopped</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 tablespoon coconut oil</span>
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
                      <span className="text-sage font-medium text-sm">Prep Time:</span>
                      <span className="text-foreground/70 text-sm">1 hour</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Chill Time:</span>
                      <span className="text-foreground/70 text-sm">2 hours</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Yield:</span>
                      <span className="text-foreground/70 text-sm">Makes 12 bars</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground/70">
                        Store in an airtight container in the refrigerator for up to 1 week, or freeze for up to 3 months.
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
                        In a food processor, blend the grated coconut, jaggery powder, coconut oil, vanilla extract, and a pinch of salt until the mixture is well combined and holds together when pressed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Line a small rectangular baking tin (about 8x8 inches or 20x20 cm) with parchment paper. Press the coconut mixture firmly into the tin to create an even layer. Place the tin in the freezer for at least 30 minutes, or until the mixture is firm.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Once the coconut layer is firm, remove it from the tin and cut it into 12 equal bars. Place the bars back in the freezer while you prepare the chocolate coating.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Melt the chopped dark chocolate and coconut oil together using a double boiler or in short bursts in the microwave, stirring frequently until smooth.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Using a fork or a dipping tool, dip each coconut bar into the melted chocolate, ensuring it's fully coated. Allow any excess chocolate to drip off, then place the coated bar on a parchment-lined baking sheet.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Once all the bars are coated, return the baking sheet to the freezer for another 30 minutes, or until the chocolate is fully set. Store in the refrigerator and enjoy!
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