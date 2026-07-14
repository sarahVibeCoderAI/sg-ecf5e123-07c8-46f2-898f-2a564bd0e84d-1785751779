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
        description="A creamy, no-bake vegan cheesecake with bright lime and rich avocado - naturally sweetened and incredibly indulgent."
        image="https://copperandcloves.com/wp-content/uploads/2020/08/IMG_6979-819x1024.jpg"
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
              src="https://copperandcloves.com/wp-content/uploads/2020/08/IMG_6979-819x1024.jpg"
              alt="Avocado Lime Vegan Cheesecake"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This no-bake vegan cheesecake is pure magic! Creamy avocado and bright lime come together in a luscious filling that's naturally sweetened and sits on a date-nut crust. You won't believe it's plant-based!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                Ingredients
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sage font-medium text-sm mb-3">CRUST</h3>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1½ cups raw cashews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 cup medjool dates, pitted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>¼ cup desiccated coconut</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Pinch of salt</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sage font-medium text-sm mb-3">FILLING</h3>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 ripe avocados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>½ cup coconut cream</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>⅓ cup maple syrup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Zest and juice of 2 limes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>¼ cup coconut oil, melted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 teaspoon vanilla extract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Pinch of salt</span>
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
                  <span className="text-foreground/70 text-sm">20 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Chill Time:</span>
                  <span className="text-foreground/70 text-sm">4 hours minimum</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Serves:</span>
                  <span className="text-foreground/70 text-sm">8-10 slices</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70">
                    Store covered in the refrigerator for up to 5 days. Can be frozen for up to 1 month - thaw in the fridge overnight before serving.
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
                  Line a 20cm springform pan with parchment paper.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  2
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  For the crust: In a food processor, pulse cashews until finely ground. Add dates, coconut, and salt. Pulse until mixture sticks together when pressed.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  3
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Press crust mixture firmly into the bottom of the prepared pan. Place in freezer while making filling.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  4
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  For the filling: Blend avocados, coconut cream, maple syrup, lime zest and juice, melted coconut oil, vanilla, and salt in a high-speed blender until completely smooth.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  5
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Pour filling over crust and smooth the top with a spatula.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  6
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Freeze for at least 4 hours or overnight until firm. Remove from freezer 10 minutes before serving to allow it to soften slightly.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  7
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Garnish with lime slices, extra lime zest, or fresh berries before serving. Slice with a hot knife for clean cuts.
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