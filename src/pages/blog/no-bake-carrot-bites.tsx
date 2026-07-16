import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Users } from "lucide-react";
import Link from "next/link";

export default function NoBakeCarrotBites() {
  return (
    <>
      <SEO
        title="No-bake Carrot Bites - The Notebook | Copper + Cloves"
        description="This is a great no-cook recipe to make ahead of time, so you have a go-to healthy dessert in the fridge. It is packed full of healthy nourishing ingredients."
        image="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/bites4-1.png.webp"
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
              No-bake Carrot Bites
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>4 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2-4 Serves</span>
              </div>
            </div>
          </header>

          <div className="mb-12">
            <img
              src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/bites4-1.png.webp"
              alt="No-bake Carrot Bites"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              This is a great no-cook recipe to make ahead of time, so you have a go-to healthy dessert in the fridge. It is packed full of healthy nourishing ingredients, and kids seem to love it! It's also really easy to make, and it's fun to get them involved in making it too. A dessert that can double as a snack, full of nourishing, whole ingredients
            </p>

            <section className="mb-12 bg-card p-8 rounded-lg border border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Ingredients
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>5 medium organic carrots, tops cut off and scrubbed clean (no need to peel)</li>
                <li>1 cup walnut pieces</li>
                <li>1 cup whole almonds</li>
                <li>1 cup whole pitted dates</li>
                <li>1 cup rolled oats</li>
                <li>1/2 cup raisins</li>
                <li>3 tbsp jaggery syrup</li>
                <li>1 tsp cinnamon</li>
                <li>1 tsp Himalayan salt</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-4">
                For the Frosting
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>1 cup cashews</li>
                <li>1 teaspoon vanilla extract</li>
                <li>1 tbsp Jaggery syrup</li>
                <li>1 tbsp coconut oil</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What To Do
              </h2>
              <ol className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">1.</strong> Finely shred your carrots on a grater
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">2.</strong> In a processor add walnuts, almonds, and dates. Blitz until you have a crumbly mixture.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">3.</strong> Add in the grated carrots and pulse to mix.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">4.</strong> Add the oats, jaggery syrup, raisins and cinnamon and pulse until everything is well mixed but it is not a smooth paste- it should be like a rough, sticky dough.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">5.</strong> Line a baking tray parchment paper and pile the carrot mixture into the tray and spread it out. Put it in the freezer while you make the frosting.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">6.</strong> To make the frosting, add the creamy soaked cashews, coconut oil, vanilla and jaggery syrup into the blender and grind until you get a smooth, creamy paste.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">7.</strong> Take the carrot bites out of the freezer and use a spatula to spread the frosting on top of the carrot cake bites. Freeze for around 4 hours to set.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">8.</strong> Cut into bite sized pieces and enjoy with a lovely cup of hot tea. These no-bake bite can be made in advance and stored in the freezer for weeks. Make a big batch and keep for ages for when you want a healthy snack.
                </li>
              </ol>
              <p className="mt-6 text-foreground/80">
                Tag us in your photos if you make a batch <strong>@copperandcloves.</strong>
              </p>
            </section>

            <section className="mb-8 bg-muted/30 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Nutrition profile
              </h3>
              <p className="text-foreground/80">
                carrots are a particularly good source of beta carotene, fibre and vitamin K1. Carrots get their bright orange colour from beta carotene, an antioxidant that our bodies convert into vitamin A. The nuts deliver essential fatty acids and dates and oats provide slow-release energy, as well as more fibre.
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