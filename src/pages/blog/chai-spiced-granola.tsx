import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Users } from "lucide-react";
import Link from "next/link";

export default function ChaiSpicedGranola() {
  return (
    <>
      <SEO
        title="Chai Spiced Granola - The Notebook | Copper + Cloves"
        description="The beauty of this recipe is that you can play around with the ingredients so much. If you prefer walnuts to almonds- just swap them in!"
        image="https://copperandcloves.com/wp-content/uploads/2024/04/granola3-1.png"
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
              Chai Spiced Granola
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 Min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>1-2 Serves</span>
              </div>
            </div>
          </header>

          <div className="mb-12">
            <img
              src="https://copperandcloves.com/wp-content/uploads/2024/04/granola3-1.png"
              alt="Chai Spiced Granola"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              The beauty of this recipe is that you can play around with the ingredients so much. If you prefer walnuts to almonds- just swap them in! If you happen to have watermelon seeds instead of sunflower seeds, make the sub! I've put the measurements in mugs so if you want more variety, just mix up the nuts and keep the quantity roughly the same.
            </p>

            <section className="mb-12 bg-card p-8 rounded-lg border border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Ingredients
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>1/2 fresh coconut, thinly sliced</li>
                <li>2 mugs rolled oats</li>
                <li>1 mug almonds, chopped</li>
                <li>1 mug pistas, chopped</li>
                <li>1 mug pumpkin seeds</li>
                <li>1 mug sunflower seeds</li>
                <li>3 tablespoons flax seeds</li>
                <li>3 tablespoons extra virgin coconut oil</li>
                <li>1/2 mug of liquid jaggery or honey</li>
                <li>3 tsp. cinnamon powder</li>
                <li>3 tsp. green cardamom powder</li>
                <li>1 tsp. sea salt</li>
                <li>1 mug raisins</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What To Do
              </h2>
              <ol className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">1.</strong> First slice the coconut into this slices and lightly toast in the oven (around 180C) until starting to turn golden brown at the edges. Set aside.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">2.</strong> Put the oats and all the chopped nuts and whole seeds into a mixing bowl. Mix together the coconut oil, the honey/jaggery liquid and the salt and spices and then pour into the dry oaty-nutty-seedy mixture. Mix well until everything is well coated and sticky.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">3.</strong> Transfer the sticky mixture into a wide flat baking tray and ensure it is even spread across. Toast in the oven at 180C for between 25-45 minutes (it totally depends on the strength of your oven). Take it out and stir it once after 15 minutes to ensure it toasts evenly.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">4.</strong> Take it out and let it cool down. Once cool, add the raisins and the pre-toasted coconut. Store in a sealed, clean jar for up to 3 weeks.
                </li>
              </ol>
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