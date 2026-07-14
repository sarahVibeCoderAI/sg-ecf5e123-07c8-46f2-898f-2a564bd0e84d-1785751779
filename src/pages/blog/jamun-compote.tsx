import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";

export default function JamunCompote() {
  return (
    <>
      <SEO
        title="Jamun Compote | The Notebook | Copper + Cloves"
        description="Sweet-tart jamun (Indian blackberry) compote with warm spices. Perfect over yogurt, ice cream, or stirred into oatmeal."
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
                Jamun Compote
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span>Sarah Nicole Edwards</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <span>•</span>
                <span>January 2025</span>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/jamun_01-1.png.webp"
                alt="Jamun Compote"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                Jamun, also known as Indian blackberry or java plum, is a beloved monsoon fruit in India. This simple compote captures its sweet-tart essence with a hint of warm spices, creating a versatile topping that elevates breakfast bowls, desserts, and more.
              </p>

              <Card className="border-mushroom/30 bg-kale/5 p-8 rounded-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Time</p>
                      <p className="font-medium">20 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Makes</p>
                      <p className="font-medium">About 2 cups</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Ingredients
                </h2>
                <ul className="space-y-2 ml-6">
                  <li>500g fresh jamun (Indian blackberries), pitted</li>
                  <li>1/4 cup jaggery or coconut sugar</li>
                  <li>2 tbsp water</li>
                  <li>1 cinnamon stick</li>
                  <li>3-4 cardamom pods, lightly crushed</li>
                  <li>1 tbsp fresh lemon juice</li>
                  <li>Pinch of black salt (kala namak, optional but traditional)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Method
                </h2>
                <ol className="space-y-6 ml-6">
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Prepare jamun:</span> Wash the jamun thoroughly. Cut them in half and remove the pits. The flesh will stain your hands purple - this is normal!
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Cook:</span> In a medium saucepan, combine pitted jamun, jaggery, water, cinnamon stick, and crushed cardamom. Bring to a gentle simmer over medium heat.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Simmer:</span> Reduce heat to low and cook for 12-15 minutes, stirring occasionally. The jamun will release their juices and soften, creating a thick, syrupy consistency.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Finish:</span> Remove from heat and stir in lemon juice and a pinch of black salt if using. The salt enhances the fruit's natural sweetness. Remove the cinnamon stick and cardamom pods (though they can be left in for serving if you prefer).
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Cool and store:</span> Let cool to room temperature. The compote will thicken further as it cools. Transfer to a clean glass jar and refrigerate. Will keep for up to 2 weeks.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Serving Suggestions
                </h2>
                <ul className="space-y-3 ml-6">
                  <li>Swirl into yogurt or coconut yogurt for breakfast</li>
                  <li>Spoon over vanilla ice cream or coconut ice cream</li>
                  <li>Stir into overnight oats or chia pudding</li>
                  <li>Use as a topping for pancakes or waffles</li>
                  <li>Mix into smoothies for a unique flavor twist</li>
                  <li>Serve alongside cheese boards for a sweet-tart contrast</li>
                </ul>
              </div>

              <Card className="border-sage/30 bg-sage/5 p-6 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-sage">Note on jamun:</span> Jamun season in India is typically June-August. If you can't find fresh jamun, this recipe works beautifully with blackberries or a mix of blackberries and blueberries. The flavor will be slightly different but equally delicious.
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