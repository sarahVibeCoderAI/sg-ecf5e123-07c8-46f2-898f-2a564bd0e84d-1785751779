import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Users } from "lucide-react";
import Link from "next/link";

export default function SmokyBrinjalDip() {
  return (
    <>
      <SEO
        title="Smoky Brinjal Dip - The Notebook | Copper + Cloves"
        description="Dips are the perfect sharing food for when you have guests, and are easy to make in batches. This smoky brinjal dip will be the star of your next dinner party."
        image="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/brinjaldip5-1.png.webp"
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
              Smoky Brinjal Dip
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>30 Min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>1-2 Serves</span>
              </div>
            </div>
          </header>

          <div className="mb-12">
            <img
              src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/brinjaldip5-1.png.webp"
              alt="Smoky Brinjal Dip"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Dips are the perfect sharing food for when you have guests, and are easy to make in batches. This smoky brinjal dip will be the star of your next dinner party. The creamy texture and smoky flavour contrasts with the tangy pomegranate sauce.
            </p>

            <section className="mb-12 bg-card p-8 rounded-lg border border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Ingredients
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>1 large balloon brinjal</li>
                <li>1/3 cup organic tahini paste (80ml)</li>
                <li>1/3 cup extra virgin olive oil (80ml)</li>
                <li>2 tbsp. of homemade pomegranate molasses</li>
                <li>1/2 tbsp lemon</li>
                <li>2 garlic cloves, chopped really finely</li>
                <li>Handful of mint leaves, chopped</li>
                <li>Sea salt and cracked black pepper</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-4">
                Garnish
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>A few whole mint leaves</li>
                <li>Seeds from 1/2 pomegranate</li>
                <li>Drizzle extra virgin olive oil</li>
                <li>1/2 tsp pomegranate molasses</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What To Do
              </h2>
              <ol className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">1.</strong> First you need to char the brinjal. You do this by burning the whole brinjal on a gas flame. Put the brinjal directly on a moderate flame for around 15 minutes, turning frequently with metal tongs, until the flesh is soft and collapsing, and the skin is totally burnt all over.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">2.</strong> When it's cool enough to touch, cut the brinjal open and scoop out the flesh and drain in a sieve over a bowl (the burnt brinjal will release a lot of water as it cools). Discard the burnt skin. Around 30 minutes should do the trick.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">3.</strong> Chop the brinjal flesh roughly and put in a big bowl. Add the tahini, oil, lemon juice, homemade pomegranate molasses, chopped garlic cloves, mint leaves, and a pinch of salt and pepper. Mix well with a wooden spoon. Take a hand blender and blend roughly half the mix- so half is really smooth and half still has texture. Then mix it all up again with the wooden spoon so it is evenly mixed.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">4.</strong> If it is too thick, add a touch more olive oil and a splash of water before stirring again. You want to be able to dip some lavaash or fresh sourdough into it to scoop it up. Taste and check the salt and pepper – adjust to your preferences.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">5.</strong> Transfer the mixture into a nice serving bowl and smooth out the surface with the back of a spoon in a circular motion, starting in the middle towards the edge of the bowl. Drizzle over a little extra virgin olive oil and homemade molasses, and scatter over a handful of pomegranate seeds, torn mint leaves.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">6.</strong> This can be stored in the fridge for about a week – perfect leftovers to make your very own buddha bowl the next day (stay tuned for our guide to build-your-own-buddha-bowl).
                </li>
              </ol>
            </section>

            <section className="mb-8 bg-muted/30 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Nutrition credentials
              </h3>
              <p className="text-foreground/80">
                Brinjals are great for health. The levels of fibre, vitamin C and B6 are excellent for heart health and their high levels of antioxidants are great for the liver.
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