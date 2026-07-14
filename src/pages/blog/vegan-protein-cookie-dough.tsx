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
        description="Edible cookie dough that's packed with plant protein and naturally sweetened - guilt-free indulgence you can eat by the spoonful!"
        image="https://copperandcloves.com/wp-content/uploads/2020/07/a43f7dbbf9058c2e04aec04aa8ffbb90-1.png"
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
              src="https://copperandcloves.com/wp-content/uploads/2020/07/a43f7dbbf9058c2e04aec04aa8ffbb90-1.png"
              alt="Vegan Protein Cookie Dough"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Yes, you can eat cookie dough straight from the bowl! This protein-packed version is completely safe to eat raw and tastes just like the real thing. Perfect as a post-workout snack or guilt-free dessert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                Ingredients
              </h2>
              <div className="space-y-6">
                <div>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 cup chickpeas, cooked and drained</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>¼ cup almond butter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>3 tablespoons maple syrup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tablespoons vanilla protein powder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 teaspoons vanilla extract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>¼ teaspoon salt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>⅓ cup dark chocolate chips</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2-3 tablespoons plant milk (as needed)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                Storage & Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Prep Time:</span>
                  <span className="text-foreground/70 text-sm">10 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Yield:</span>
                  <span className="text-foreground/70 text-sm">Serves 4-6</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70">
                    Store in an airtight container in the refrigerator for up to 5 days. Can also be frozen in portions for up to 1 month.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="bg-white p-8 md:p-12 rounded-lg border border-border mb-12">
            <h2 className="font-display text-3xl font-light tracking-tight mb-8">
              Method
            </h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  1
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Rinse and drain chickpeas thoroughly. Pat dry with a clean kitchen towel to remove excess moisture.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  2
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  In a food processor, combine chickpeas, almond butter, maple syrup, protein powder, vanilla extract, and salt.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  3
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Blend until completely smooth, scraping down sides as needed. Add plant milk 1 tablespoon at a time if the mixture is too thick.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  4
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Transfer to a bowl and fold in chocolate chips by hand.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  5
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Chill in the refrigerator for 30 minutes for best texture, or enjoy immediately! Eat with a spoon straight from the bowl.
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