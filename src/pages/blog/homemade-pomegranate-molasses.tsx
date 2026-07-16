import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Users } from "lucide-react";
import Link from "next/link";

export default function HomemadePomegranateMolasses() {
  return (
    <>
      <SEO
        title="Homemade Pomegranate Molasses - The Notebook | Copper + Cloves"
        description="Making your own pomegranate molasses is surprisingly simple and far more affordable than buying it. A culinary game changer with tart yet sweet flavour."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/Molasses-5_02-1.png"
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
              Homemade Pomegranate Molasses
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>1.5 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2-4 Serves</span>
              </div>
            </div>
          </header>

          <div className="mb-12">
            <img
              src="https://copperandcloves.com/wp-content/uploads/2024/04/Molasses-5_02-1.png"
              alt="Homemade Pomegranate Molasses"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              "Pomegranate molasses is a culinary game changer. With the consistency of runny honey, it is a typical Middle-Eastern ingredient used for savoury and sweet cooking, has a tart yet sweet flavour and rich, deep red colour- making it a beautiful ingredient to cook with and garnish with. In a nutshell, you NEED this ingredient in your pantry."
            </p>

            <p className="text-foreground/80 mb-8">
              This is not an ingredient we traditionally have in India- but an imported bottle can be as much as 1000 bucks (no jokes, I've seen this – for 300ml!). India is the largest producer of pomegranates in the world, and all year round at that- so think local and homemade, Copper + Cloves style! The good news is, it's easy and cheap to make it at home. You only need two ingredients. It is a bit messy to work with pomegranates, so please do not wear white when squeezing the juice from your pomegranates! Alternatively, you can buy freshly squeezed pomegranate juice. If you go with this, skip steps 1-3. Just remember to recycle that plastic bottle!
            </p>

            <section className="mb-12 bg-card p-8 rounded-lg border border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Ingredients
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>4 kg fresh pomegranates or 1 litre of pomegranate juice</li>
                <li>1/2 tsp Himalayan salt</li>
                <li>A sieve</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What To Do
              </h2>
              <ol className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">1.</strong> Wash pomegranates, cut them all in half and tip the jewels into a bowl. Remove any white pith that also falls into the bowl. Repeat the same for all pomegranate halves.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">2.</strong> When all jewels are in the bowl, squeeze them with your hands or a masher until all the juice has come out.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">3.</strong> Strain the mulched jewels through a sieve into a saucepan. Use the back of a spoon and extract as much juice as possible.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">4.</strong> Boil the strained juice over a high heat for 20 minutes until it reaches a boil.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">5.</strong> Once the juice is boiling, add in the salt and bring it down to medium low heat and simmer for around 1 hour to 1.5 hours, until thickened. You want it to be the consistency of a very runny honey. Keep an eye on it to ensure it doesn't burn!
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">6.</strong> Let it cool and pour into a sterilised jar or bottle. This can be stored for months in the fridge and poured over anything!
                </li>
              </ol>
            </section>

            <section className="mb-8 bg-muted/30 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                How to use
              </h3>
              <p className="text-foreground/80">
                Pomegranate molasses can be used to add a tangy sweetness to rich stews, add depth of flavour to Persian-style dips (see recipe here) and as part of a salad dressing for hearty grain bowls and salads. In sweet dishes, it can be used on top of pancakes, or smoothie bowls. We love it drizzled over baked Kashmiri apricots with cinnamon and jaggery.
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