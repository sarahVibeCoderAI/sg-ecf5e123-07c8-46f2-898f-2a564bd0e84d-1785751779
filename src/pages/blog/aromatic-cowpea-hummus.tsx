import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AromaticCowpeaHummus() {
  return (
    <>
      <SEO
        title="Aromatic Cowpea Hummus | The Notebook"
        description="This is a little twist on classic hummus- we swapped chickpeas for cowpeas, or lobia, a widely available pulse in India that is a powerhouse of nutrition."
        image="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/rectangle_02-1-1.png.webp"
      />
      <Navigation />
      <main className="min-h-screen bg-sand pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 -ml-3 hover:bg-mushroom/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to The Notebook
            </Button>
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage text-sm font-medium rounded-full mb-4">
              Recipes
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-light tracking-tight text-charcoal mb-4">
              Aromatic Cowpea Hummus
            </h1>
            <div className="flex items-center gap-6 text-sm text-charcoal/60">
              <span>By Sarah Nicole Edwards</span>
              <span>•</span>
              <span>6 min read</span>
              <span>•</span>
              <span>September 2025</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/rectangle_02-1-1.png.webp"
              alt="Aromatic Cowpea Hummus"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This is a little twist on classic hummus- we swapped chickpeas for cowpeas, or lobia, a widely available pulse in India that is a powerhouse of nutrition. We flavoured it with some aromatic roasted coriander seeds and lots of citrus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                Ingredients
              </h2>
              <div className="space-y-6">
                <div>
                  <ul className="space-y-2 text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>150g soaked cowpeas (minimum 4 hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tbsp tahini</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 1/2 tsp salt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 tbsp lemon juice (about one small Indian lemon)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>6 tbsp extra virgin olive oil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 handful of fresh coriander leaves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 tsp orange zest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 tsp lemon zest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tbsp roasted coriander seeds (dry toasted)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>4 tbsp ice cold water or ice cubes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Freshly cracked pepper</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-copper mb-2">Garnish:</p>
                  <ul className="space-y-2 text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Coriander leaves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Extra virgin olive oil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Toasted coriander seeds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Chilli flakes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Serves:</span>
                  <span className="text-foreground/70 text-sm">2-4</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-copper font-medium mb-2">Tip:</p>
                  <p className="text-sm text-foreground/70">
                    Make double these quantities on the weekend, so that the whole family has a healthy go-to snack and toast-topper in the fridge. Having healthy options ready made makes it easier to make good choices even when short on time during the week.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="bg-white p-8 md:p-12 rounded-lg border border-border mb-12">
            <h2 className="font-display text-3xl font-light tracking-tight mb-8">
              What To Do
            </h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  1
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  First cook the cowpeas until soft- drain the soaking water, and pressure cook for 3 whistles. Allow to cool down fully.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  2
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Put the cooked cowpeas into the food processor and pulse until it forms a crumbly mix.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  3
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Add in the tahini, lemon juice, water/ice, 2 tbsp olive oil and coriander seeds and blend until it becomes smooth (this may take longer than you think! Be patient and allow it become nice and smooth).
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  4
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Once it becomes a smooth paste, add in the rest of the oil, salt, black pepper, zest and fresh coriander leaves and pulse a few times until everything comes together. Taste and adjust salt, lemon and black pepper so it is tangy and delicious.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  5
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Scoop into a bowl, drizzle some more olive oil on top and sprinkle with some more coriander seeds and leaves and maybe some chilli flakes. Serve as a dip with crackers or sourdough, or cut vegetables like carrots and cucumbers. Alternatively spread a thick layer on toast and top with roast veggies and some fresh herb leaves.
                </p>
              </li>
            </ol>
          </section>

          <div className="border-t border-mushroom/30 pt-8">
            <Link href="/blog">
              <Button variant="outline" className="border-copper/30 text-copper hover:bg-copper/5">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Read More Recipes
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}