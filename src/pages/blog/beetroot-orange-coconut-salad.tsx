import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Users } from "lucide-react";
import Link from "next/link";

export default function BeetrootOrangeCoconutSalad() {
  return (
    <>
      <SEO
        title="Beetroot, Orange + Coconut Salad - The Notebook | Copper + Cloves"
        description="For the hot summer days, we've come up with a quick and easy recipe- beetroots, oranges and coconuts come together in this refreshing, colourful salad."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/salad4-1.png"
      />
      <Navigation />
      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            ← Back to The Notebook
          </Link>

          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Beetroot, Orange + Coconut Salad
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>20 Min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>1-2 Serves</span>
              </div>
            </div>
          </header>

          <div className="mb-12">
            <img
              src="https://copperandcloves.com/wp-content/uploads/2024/04/salad4-1.png"
              alt="Beetroot, Orange + Coconut Salad"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              For the hot summer days, we've come up with a quick and easy recipe- beetroots, oranges and coconuts come together in this refreshing, colourful salad.
            </p>

            <section className="mb-12 bg-card p-8 rounded-lg border border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Ingredients
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>2 small beetroot, skin scrubbed and cut into 8 wedges</li>
                <li>1 tbsp cold-pressed oil</li>
                <li>1/2 orange (other half is squeezed to make the dressing)</li>
                <li>80g fresh coconut (about 1/4 of a coconut)</li>
                <li>Handful dill leaves</li>
                <li>Himalayan salt</li>
                <li>Cracked black pepper</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-4">
                Dressing
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>Juice of 1/2 orange</li>
                <li>2 tablespoons extra virgin olive oil</li>
                <li>1 tablespoon apple cider vinegar (with the mother)</li>
                <li>1 teaspoon jaggery liquid</li>
                <li>1 good grind of black pepper</li>
                <li>1/2 tsp Himalayan salt</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What To Do
              </h2>
              <ol className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">1.</strong> Prepare the beetroot by scrubbing the skin well, and cutting into 8 wedges. Whenever possible, don't peel root veggies. A lot of the nutrition and fibre is contained in the skin.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">2.</strong> Place in a baking tray with a little oil, and a good crack of salt and pepper, cover with foil and roast at 180 C for 20 minutes
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">3.</strong> After 20 minutes, the beetroots should feel soft- uncover the foil and roast for a further 20 minutes without foil to allow them to crisp up at the edges.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">4.</strong> Meanwhile cut the orange in half- keep one for the dressing. Take the remaining half, cut into slices and remove the segments (keep peel to make homemade marmalade or to zest into marinades). Discard white pith.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">5.</strong> Cut the coconut into thin flakes and toast in the oven for 5 minutes until some parts have told golden brown.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">6.</strong> Meanwhile make the dressing- mix all ingredients in a cup and whisk with a fork until combined.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">7.</strong> Once beetroot is nicely caramelised, arrange on a large plate evenly and place the orange segments in between., scatter the coconut on top and the torn mint leaves.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">8.</strong> Pour the dressing over the top and allow all the flavours to marinate for 5 minutes or so.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">9.</strong> Garnish with torn dill leaves.
                </li>
              </ol>
            </section>

            <section className="mb-8 bg-muted/30 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Nutrition profile
              </h3>
              <p className="text-foreground/80">
                Beetroot and orange are high in vitamin C and coconuts are loaded with nourishing and anti oxidant properties- this salad is full of ingredients that are good for your skin. It's a good balance of hydrating citrus, colourful vegetables and healthy fats.
              </p>
            </section>

            <footer className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Recipe by Sarah Nicole Edwards
              </p>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}