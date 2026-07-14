import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";

export default function BeetrootOrangeCoconutSalad() {
  return (
    <>
      <SEO
        title="Beetroot Orange Coconut Salad | The Notebook | Copper + Cloves"
        description="A vibrant, refreshing salad combining earthy roasted beetroot with bright citrus and toasted coconut. Simple, colorful, nourishing."
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
                Beetroot, Orange + Coconut Salad
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span>Sarah Nicole Edwards</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <span>•</span>
                <span>December 2024</span>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/beet-salad_01-1.png.webp"
                alt="Beetroot Orange Coconut Salad"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                This stunning salad is all about contrast - earthy roasted beetroot meets bright, juicy orange segments and toasted coconut flakes. It's visually striking, refreshingly light, and packed with nutrients. Perfect as a side or light lunch.
              </p>

              <Card className="border-mushroom/30 bg-kale/5 p-8 rounded-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Time</p>
                      <p className="font-medium">50 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Serves</p>
                      <p className="font-medium">4 as a side</p>
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
                    <h3 className="font-semibold text-lg mb-3 text-sage">For the Salad:</h3>
                    <ul className="space-y-2 ml-6">
                      <li>4 medium beetroots (about 600g)</li>
                      <li>3 large oranges (or 4 mandarins)</li>
                      <li>1/2 cup coconut flakes, lightly toasted</li>
                      <li>Handful of fresh mint leaves, torn</li>
                      <li>2 cups mixed greens (arugula, spinach, or watercress)</li>
                      <li>1/4 red onion, thinly sliced (optional)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-sage">For the Dressing:</h3>
                    <ul className="space-y-2 ml-6">
                      <li>3 tbsp extra virgin olive oil</li>
                      <li>2 tbsp orange juice (from the oranges you're using)</li>
                      <li>1 tbsp apple cider vinegar or white wine vinegar</li>
                      <li>1 tsp maple syrup or honey</li>
                      <li>1/2 tsp Dijon mustard</li>
                      <li>Salt and black pepper to taste</li>
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
                    <span className="font-semibold text-sage">Roast beetroot:</span> Preheat oven to 200°C (400°F). Scrub beetroots and wrap individually in foil. Place on a baking tray and roast for 40-50 minutes until tender when pierced with a knife. Let cool, then peel and cut into wedges.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Prepare oranges:</span> While beetroot roasts, supreme the oranges: cut off the top and bottom, then carefully slice away the peel and white pith. Working over a bowl to catch the juice, cut between the membranes to release the segments.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Toast coconut:</span> In a dry pan over medium heat, toast coconut flakes for 2-3 minutes, stirring constantly, until golden and fragrant. Set aside to cool.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Make dressing:</span> In a small bowl or jar, whisk together olive oil, orange juice, vinegar, maple syrup, mustard, salt, and pepper until emulsified.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Assemble:</span> On a large serving platter, arrange mixed greens as a base. Top with roasted beetroot wedges and orange segments. Scatter with toasted coconut flakes, torn mint leaves, and thinly sliced red onion if using.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Dress and serve:</span> Drizzle with the citrus dressing just before serving. Toss gently if desired, or let guests serve themselves directly from the platter.
                  </li>
                </ol>
              </div>

              <Card className="border-sage/30 bg-sage/5 p-6 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-sage">Make ahead tip:</span> Roast the beetroot up to 2 days ahead and store peeled in the fridge. Prepare the orange segments and dressing the day before. Assemble just before serving to keep the greens fresh and coconut crispy.
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