import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";

export default function SmokyBrinjalDip() {
  return (
    <>
      <SEO
        title="Smoky Brinjal Dip | The Notebook | Copper + Cloves"
        description="A rich, smoky eggplant dip with Mediterranean flavors. Roasted brinjal (eggplant) blended with tahini, lemon, and spices for the perfect mezze spread."
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
                Smoky Brinjal Dip
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span>Sarah Nicole Edwards</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>7 min read</span>
                </div>
                <span>•</span>
                <span>May 2025</span>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/brinjal_02-1.png.webp"
                alt="Smoky Brinjal Dip"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                A rich, smoky eggplant dip inspired by baba ganoush. The brinjal is roasted until soft and caramelized, then blended with tahini, lemon, and aromatic spices for a deeply flavorful mezze spread.
              </p>

              <Card className="border-mushroom/30 bg-kale/5 p-8 rounded-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Time</p>
                      <p className="font-medium">45 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Serves</p>
                      <p className="font-medium">4-6 as a dip</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Ingredients
                </h2>
                <ul className="space-y-2 ml-6">
                  <li>2 large brinjals (eggplants), about 800g total</li>
                  <li>3 tbsp tahini</li>
                  <li>2 cloves garlic, minced</li>
                  <li>3 tbsp fresh lemon juice</li>
                  <li>2 tbsp extra virgin olive oil, plus extra for drizzling</li>
                  <li>1/2 tsp ground cumin</li>
                  <li>1/4 tsp smoked paprika</li>
                  <li>Salt and black pepper to taste</li>
                  <li>Fresh parsley, chopped (for garnish)</li>
                  <li>Pomegranate seeds (optional, for garnish)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Method
                </h2>
                <ol className="space-y-6 ml-6">
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Roast the brinjal:</span> Preheat oven to 220°C (425°F). Pierce the brinjals all over with a fork. Place directly on oven rack with a baking tray underneath to catch drips. Roast for 35-40 minutes, turning once halfway, until completely soft and the skin is charred.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Cool and peel:</span> Remove from oven and let cool for 10 minutes. Once cool enough to handle, cut open and scoop out the soft flesh into a colander. Discard the charred skin. Let the flesh drain for 5 minutes to remove excess liquid.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Blend:</span> Transfer the drained brinjal flesh to a food processor. Add tahini, minced garlic, lemon juice, olive oil, cumin, smoked paprika, salt, and pepper.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Process:</span> Pulse until you reach your desired consistency - either smooth or slightly chunky. Taste and adjust seasoning, adding more lemon juice, salt, or tahini as needed.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Serve:</span> Transfer to a serving bowl. Make a well in the center and drizzle with extra virgin olive oil. Garnish with chopped parsley and pomegranate seeds if using. Serve with warm pita bread, crackers, or fresh vegetables.
                  </li>
                </ol>
              </div>

              <Card className="border-sage/30 bg-sage/5 p-6 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-sage">Storage:</span> This dip tastes even better the next day as the flavors develop. Store in an airtight container in the refrigerator for up to 5 days. Bring to room temperature before serving for the best flavor.
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