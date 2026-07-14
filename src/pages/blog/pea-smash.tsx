import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";

export default function PeaSmash() {
  return (
    <>
      <SEO
        title="Pea Smash | The Notebook | Copper + Cloves"
        description="A vibrant, fresh pea smash with mint and lemon. Perfect on toast, as a dip, or tossed with pasta. Ready in 10 minutes."
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
                Pea Smash
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span>Sarah Nicole Edwards</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <span>•</span>
                <span>February 2025</span>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/pea-smash_01-1.png.webp"
                alt="Pea Smash"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                This vibrant pea smash is a celebration of spring in a bowl. Fresh green peas get a quick blanch, then are roughly mashed with mint, lemon, and good olive oil for a versatile spread that works on everything from toast to pasta.
              </p>

              <Card className="border-mushroom/30 bg-kale/5 p-8 rounded-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-sage" />
                    <div>
                      <p className="text-sm text-foreground/60">Time</p>
                      <p className="font-medium">10 minutes</p>
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
                <ul className="space-y-2 ml-6">
                  <li>2 cups fresh or frozen green peas (about 300g)</li>
                  <li>1/4 cup fresh mint leaves, roughly chopped</li>
                  <li>2 tbsp extra virgin olive oil, plus extra for drizzling</li>
                  <li>Zest and juice of 1 lemon</li>
                  <li>1 small clove garlic, minced (optional)</li>
                  <li>Sea salt and black pepper to taste</li>
                  <li>Chili flakes (optional, for heat)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Method
                </h2>
                <ol className="space-y-6 ml-6">
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Blanch peas:</span> Bring a pot of salted water to a boil. Add peas and cook for 2-3 minutes (frozen) or 3-4 minutes (fresh) until bright green and tender. Drain and immediately rinse under cold water to stop cooking and preserve the vibrant color.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Smash:</span> Transfer peas to a bowl. Using a fork or potato masher, roughly mash about half the peas, leaving some whole for texture. You want a chunky, rustic consistency, not a smooth puree.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Mix in flavors:</span> Add chopped mint, olive oil, lemon zest, lemon juice, and minced garlic if using. Mix well to combine. Season generously with salt and pepper. Taste and adjust - you want bright, punchy flavors.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-sage">Serve:</span> Transfer to a serving bowl, drizzle with extra olive oil, and finish with chili flakes if desired. Best served immediately while still slightly warm, or at room temperature.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-display text-2xl font-light mb-6 pb-3 border-b border-mushroom">
                  Serving Ideas
                </h2>
                <ul className="space-y-3 ml-6">
                  <li>Spread on sourdough toast and top with radishes and microgreens</li>
                  <li>Toss with hot pasta and a splash of pasta water for an instant sauce</li>
                  <li>Use as a dip for crudités or pita chips</li>
                  <li>Serve alongside grilled vegetables or roasted cauliflower steaks</li>
                  <li>Mix into grain bowls for a fresh, protein-rich addition</li>
                  <li>Dollop onto baked sweet potatoes</li>
                </ul>
              </div>

              <Card className="border-sage/30 bg-sage/5 p-6 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-sage">Make ahead:</span> This pea smash is best fresh but will keep in an airtight container in the refrigerator for up to 2 days. The color may darken slightly, but the flavor remains delicious. Add a squeeze of fresh lemon before serving to brighten it up.
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