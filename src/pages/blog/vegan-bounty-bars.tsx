import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";

export default function VeganBountyBars() {
  return (
    <>
      <SEO
        title="Vegan Bounty Bars | The Notebook | Copper + Cloves"
        description="Homemade vegan bounty bars with a creamy coconut filling and rich dark chocolate coating. A healthier take on the classic candy bar."
      />
      <Navigation />
      <main>
        <article className="section-padding">
          <div className="container max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-sage hover:text-sage/80 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to The Notebook
            </Link>

            <header className="mb-12 space-y-6">
              <Badge className="bg-kale/10 text-kale border-kale/20 text-xs uppercase tracking-wide">
                Recipes
              </Badge>
              <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                Vegan Bounty Bars
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span>Sarah Nicole Edwards</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <span>•</span>
                <span>June 2025</span>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/bounty_02-1.png"
                alt="Vegan Bounty Bars"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                Homemade vegan bounty bars with a creamy coconut filling and rich dark chocolate coating. A healthier take on the classic candy bar that tastes even better than the original.
              </p>

              <Card className="border-mushroom/30 bg-kale/5 p-8 rounded-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Prep Time</p>
                      <p className="font-medium">15 minutes + chilling</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Makes</p>
                      <p className="font-medium">8-10 bars</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Ingredients
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-sage">For the Coconut Filling:</h3>
                    <ul className="space-y-2 ml-6">
                      <li>2 cups desiccated coconut</li>
                      <li>1/2 cup coconut cream (thick part from a can)</li>
                      <li>1/4 cup maple syrup or agave</li>
                      <li>1/4 cup coconut oil, melted</li>
                      <li>1 tsp vanilla extract</li>
                      <li>Pinch of salt</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-sage">For the Chocolate Coating:</h3>
                    <ul className="space-y-2 ml-6">
                      <li>200g dark chocolate (70% cacao)</li>
                      <li>1 tbsp coconut oil</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Method
                </h2>
                <ol className="space-y-6 ml-6">
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Make the filling:</span> In a large bowl, mix desiccated coconut, coconut cream, maple syrup, melted coconut oil, vanilla, and salt until well combined. The mixture should hold together when pressed.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Shape the bars:</span> Line a small baking pan or tray with parchment paper. Press the coconut mixture evenly into the pan, about 1-2 cm thick. Freeze for 30 minutes to firm up.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Cut into bars:</span> Remove from freezer and cut into rectangular bars (about 8-10 pieces). Return to freezer for another 15 minutes.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Melt the chocolate:</span> Create a double boiler by placing a heatproof bowl over a pot of simmering water. Add dark chocolate and coconut oil, stirring until completely smooth and melted.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Coat the bars:</span> Using two forks, dip each frozen coconut bar into the melted chocolate, coating completely. Let excess chocolate drip off, then place on a parchment-lined tray.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Set and store:</span> Refrigerate for 20-30 minutes until chocolate is completely set. Store in an airtight container in the refrigerator for up to 2 weeks, or freeze for up to 3 months.
                  </li>
                </ol>
              </div>

              <Card className="border-sage/30 bg-sage/5 p-6 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-sage">Sarah's Tip:</span> Work quickly when coating with chocolate as the frozen bars can cause the chocolate to set fast. If the chocolate starts to thicken, gently reheat it. For extra decadence, drizzle with white chocolate or sprinkle with flaky sea salt before the coating sets.
                </p>
              </Card>
            </div>

            <div className="mt-16 pt-8 border-t border-mushroom">
              <Link
                href="/blog"
                className="inline-flex items-center text-sage hover:text-sage/80"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to The Notebook
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}