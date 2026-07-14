import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VeganProteinCookieDough() {
  return (
    <>
      <SEO
        title="Vegan Protein Cookie Dough | The Notebook"
        description="We used to love licking the bowl when baking, it can be such a joyful moment that brings out our inner child! This recipe aims to give you that nostalgic moment, without the uncomfortable feeling that can come from eating raw dough."
        image="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/dough5-1.png.webp"
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
              Vegan Protein Cookie Dough
            </h1>
            <div className="flex items-center gap-6 text-sm text-charcoal/60">
              <span>By Sarah Nicole Edwards</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>November 2025</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/dough5-1.png.webp"
              alt="Vegan Protein Cookie Dough"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              We used to love licking the bowl when baking, it can be such a joyful moment that brings out our inner child! This recipe aims to give you that nostalgic moment, without the uncomfortable feeling that can come from eating raw dough. This vegan cookie dough is healthy, yet feels indulgent – and is full of protein rich ingredients.
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
                      <span>400g boiled chickpeas (cooked for 4 whistles without salt)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tbsp coconut milk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>100g nut butter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>6 tbsp jaggery liquid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 tbsp vanilla extract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tbsp hemp seeds (or sunflower seeds or watermelon seeds soaked in water for an hour)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>3 tbsp Mason & Co. cacao nibs</span>
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
                  <span className="text-sage font-medium text-sm">Time:</span>
                  <span className="text-foreground/70 text-sm">5-10 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Serves:</span>
                  <span className="text-foreground/70 text-sm">2-4</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-copper font-medium mb-2">Meal prep tip:</p>
                  <p className="text-sm text-foreground/70">
                    Roll out the cookie dough into balls and freeze them in batches of 4 in small dabbas. Grab the dabba in the morning and take to work as a snack or as pre or post workout fuel!
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
                  Drain the boiled chickpeas (they should be fully cool) and tip them into a food processor and pulse to form a dry crumbly paste.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  2
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Add in the nut butter, jaggery liquid, vanilla and coconut milk until everything incorporates and is a very smooth paste.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  3
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Add in the hemp hearts (or other seed of your choice) and blitz for 10 seconds. Try and get hold of hemp seeds- grown in India, often organic and a fantastic source of protein. Our favourite brand is India Hemp & Co. You can use the code 'copperandcloves' to get a 10% discount at checkout.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  4
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Scoop the smooth blend into a bowl using a spatula to make sure you get all the last bits! Stir through the cacao nibs. We love using these cacao nibs from Mason & Co. because they're organic, grown in India and they taste amazing!
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  5
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  A great way to eat this protein and fibre rich 'cookie dough' is to roll them into balls with your hands. Lay them out for your kids when they get home from school and watch them disappear in no time!
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