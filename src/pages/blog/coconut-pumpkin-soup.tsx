import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CoconutPumpkinSoup() {
  return (
    <>
      <SEO
        title="One-pot Coconut Pumpkin Soup | The Notebook"
        description="Simmering vegetables with fragrant spices altogether in one pot makes an easy and hassle-free comforting dinner. This filling soup has a creamy texture with deep flavours."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/pumpkin-soup_02-1.png"
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
              One-pot Coconut Pumpkin Soup
            </h1>
            <div className="flex items-center gap-6 text-sm text-charcoal/60">
              <span>By Sarah Nicole Edwards</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>October 2025</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://copperandcloves.com/wp-content/uploads/2024/04/pumpkin-soup_02-1.png"
              alt="One-pot Coconut Pumpkin Soup"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Simmering vegetables with fragrant spices altogether in one pot makes an easy and hassle-free comforting dinner. This filling soup has a creamy texture with deep flavours.
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
                      <span>1 tbsp cold pressed oil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tbsp coriander seeds, lightly crushed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 finely chopped red onions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tbsp of ginger, finely chopped</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>5 cloves of garlic, finely chopped</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>750g red pumpkin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>250 ml coconut milk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>300ml boiling water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Salt and pepper</span>
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
                  <span className="text-foreground/70 text-sm">10-15 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Serves:</span>
                  <span className="text-foreground/70 text-sm">1-2</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-copper font-medium mb-2">Tip:</p>
                  <p className="text-sm text-foreground/70">
                    You can make a big batch of this one pot coconut pumpkin soup in advance over the weekend as part of your meal prep, store it in your fridge and warm on the stove until it is piping hot for a super easy dinner.
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
                  Peel the pumpkin and chop it into pieces. Set a deep, large pot onto a high heat.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  2
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Dry toast the coriander seeds for 1 minute until fragrant. Heat the oil and add in onions and sauté them until they caramelise (turn golden brown and shrivel up a little)
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  3
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Once the onions have caramelised, add in the chopped ginger and garlic and sauté until for 1 minute.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  4
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Next, drop in the pumpkin and stir-fry for 3 minutes then add 300ml vegetable stock and 1 tsp salt.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  5
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Keep the heat on a medium flame. Let it simmer for 20 minutes with a lid, stirring occasionally.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  6
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Check the pumpkin to see if it's cooked. Press a piece of pumpkin with the back of your spatula to see if it's soft. Cook until it is soft enough to press a piece into a paste easily.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  7
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Turn down the heat and pour in the coconut milk. Stir everything together. Simmer for 10-15 minutes on a low heat- don't allow the coconut milk to reach a boil. Taste it and adjust salt and pepper.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  8
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Switch off the flame, let it cool for 20 mins and then blend it to a smooth paste using a hand blender.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  9
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Warm up the soup gently when you are ready to serve. Ladle the hot soup into bowls and garnish with some fresh coriander leaves, roasted coriander seeds and freshly ground pepper, and a drizzle of olive oil. Chilli flakes also look wonderful as a garnish. Serve with a thick slice of sourdough.
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