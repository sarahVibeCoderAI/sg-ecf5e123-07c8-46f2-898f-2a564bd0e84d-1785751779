import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Users } from "lucide-react";
import Link from "next/link";

export default function VeganBountyBars() {
  return (
    <>
      <SEO
        title="Vegan 'bounty' Bars - The Notebook | Copper + Cloves"
        description="Do you remember Bounty bars? We decided to make a vegan and healthier version of this classic, using local, Indian ingredients."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/bar2-1.png"
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
              Vegan 'bounty' Bars
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>20 Min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2-4 Serves</span>
              </div>
            </div>
          </header>

          <div className="mb-12">
            <img
              src="https://copperandcloves.com/wp-content/uploads/2024/04/bar2-1.png"
              alt="Vegan 'bounty' Bars"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Do you remember Bounty bars? Sweet, sticky coconut covered with milk chocolate, wrapped in those blue and white wrappers? We decided to make a vegan and healthier version of this classic, using local, Indian ingredients. We think these are even better than the original! With far less sugar and saturated fats, they don't have that sickly-sweet vibe going on. Plus no plastic wrapper!
            </p>

            <section className="mb-12 bg-card p-8 rounded-lg border border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Ingredients
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>120g Dessicated coconut</li>
                <li>3 tbsps jaggery liquid or runny honey</li>
                <li>1 tbsp vanilla extract</li>
                <li>3 tbsp extra virgin cold-pressed coconut oil</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-4">
                For the Chocolate
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>5 tbsp Mason & Co. raw cacao powder</li>
                <li>2 tablespoons homemade almond butter</li>
                <li>3 tbsp extra virgin cold-pressed coconut oil</li>
                <li>1 tbsp jaggery liquid or honey</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What To Do
              </h2>
              <p className="mb-4 text-foreground/90">
                For this recipe we made our own chocolate using the organic cacao powder from <strong>Mason & Co.</strong> It was delicious, and surprisingly simple.
              </p>
              <ol className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">1.</strong> First make the coconut filling. In a bowl, combine the coconut, jaggery liquid, vanilla, coconut oil and almond butter and stir through well until it becomes sticky.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">2.</strong> Line a baking tray with parchment paper and spread the coconut mix onto it and pop it in the freezer for 20 minutes.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">3.</strong> While it hardens up in the freezer, mix all the ingredients for the raw chocolate together in a pan over a very low flame, and whisk vigorously. After a while it should form a smooth liquid like melted chocolate.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">4.</strong> Remove the tray from the freezer and pour the prepared chocolate over the filling, and put it back in the freezer for another 20 minutes. The chocolate layer should have hardened.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">5.</strong> Remove from freezer and cut into slabs or just break it into pieces. This dish is perfect for when you are having friends over- put the plate in the middle and watch it disappear!
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">6.</strong> Take pictures of your bounty bars, tag us and tell us how you liked them!
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