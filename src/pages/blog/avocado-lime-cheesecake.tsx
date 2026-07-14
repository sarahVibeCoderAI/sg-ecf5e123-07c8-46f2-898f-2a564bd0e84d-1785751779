import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AvocadoLimeCheesecake() {
  return (
    <>
      <SEO
        title="Avocado Lime Vegan Cheesecake | The Notebook"
        description="This no-bake cheesecake is super easy to make and packed full of healthy fats and antioxidants. Perfect for when you have people coming over- it's the kind of dessert that leaves an impression!"
        image="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/cheesecake4-1.png.webp"
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
              Avocado Lime Vegan Cheesecake
            </h1>
            <div className="flex items-center gap-6 text-sm text-charcoal/60">
              <span>By Sarah Nicole Edwards</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>December 2025</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/cheesecake4-1.png.webp"
              alt="Avocado Lime Vegan Cheesecake"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              With avocados being in season, we were sent a huge basketful by Kerehaklu Farms. After we had our fill of avocado smash on sourdough and avocado salads, we decided to try something new. This recipe is perfect for when you have people coming over- it's the kind of dessert that leaves an impression! This no-bake cheesecake is super easy to make and packed full of healthy fats and antioxidants. You can use this recipe to make one large cheesecake using a loose-bottomed tart case or cake tin, or make individual cupcakes if you have silicon cupcake moulds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                Ingredients
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-copper mb-2">For the base:</p>
                  <ul className="space-y-2 text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>600 gms pitted dates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tbsp coconut oil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>400 gms Almonds</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-copper mb-2">For the filling:</p>
                  <ul className="space-y-2 text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>5 very ripe avocados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 tbsp coconut oil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>6 tbsp coconut milk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>250 ml Jaggery syrup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>40 ml lemon juice</span>
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
                  <span className="text-foreground/70 text-sm">10 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Serves:</span>
                  <span className="text-foreground/70 text-sm">3-4</span>
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
                  Start by making the base. Pulse the almonds in a food processor until it breaks down, then add in the dates and coconut oil until it all starts to form a ball together.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  2
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Using a spatula press the mix into a tin and leave it in the freezer for 10 minutes.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  3
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Let's start the filling now. Scoop out the flesh of the avocados and blend it with lime juice, jaggery syrup and coconut milk until it becomes smooth and creamy.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  4
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Take your base out of the oven and pour the filling into the tin gradually. Once you have tipped in the filling, grate the zest of a lime and scatter some grated fresh coconut on top. Tap it down to even it out and pop it in the freezer for another 90 minutes and you have yourself a delicious and creamy vegan cheesecake which is definitely going to win you a lot of compliments.
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