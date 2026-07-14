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
        title="One Pot Coconut Pumpkin Soup | The Notebook"
        description="A creamy, warming soup that's perfect for cooler evenings - made with pumpkin, coconut milk, and aromatic spices in just one pot."
        image="https://copperandcloves.com/wp-content/uploads/2020/07/e22d5b4c7c6e0d90f5ffbb11e3745a21-1.png"
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
              One Pot Coconut Pumpkin Soup
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
              src="https://copperandcloves.com/wp-content/uploads/2020/07/e22d5b4c7c6e0d90f5ffbb11e3745a21-1.png"
              alt="One Pot Coconut Pumpkin Soup"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This creamy coconut pumpkin soup is comfort in a bowl. Made in just one pot with simple ingredients, it's warming, nourishing, and perfect for those cooler Bangalore evenings.
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
                      <span>2 tablespoons coconut oil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 onion, diced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>3 cloves garlic, minced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 tablespoon fresh ginger, grated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>800g pumpkin, peeled and cubed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>400ml coconut milk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>500ml vegetable stock</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 teaspoon cumin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 teaspoon coriander</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Salt and pepper to taste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Fresh coriander for garnish</span>
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
                  <span className="text-sage font-medium text-sm">Cook Time:</span>
                  <span className="text-foreground/70 text-sm">30 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Serves:</span>
                  <span className="text-foreground/70 text-sm">4-6 people</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70">
                    Store in an airtight container in the refrigerator for up to 4 days. Freezes well for up to 3 months.
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
                  Heat coconut oil in a large pot over medium heat. Add diced onion and sauté until softened, about 5 minutes.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  2
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Add minced garlic and grated ginger, cooking for another minute until fragrant.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  3
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Stir in cumin and coriander, toasting the spices for 30 seconds.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  4
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Add cubed pumpkin, coconut milk, and vegetable stock. Bring to a boil, then reduce heat and simmer for 20 minutes until pumpkin is tender.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  5
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Use an immersion blender to blend until smooth and creamy. Alternatively, carefully transfer to a blender in batches.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  6
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Season with salt and pepper to taste. Serve hot, garnished with fresh coriander leaves.
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