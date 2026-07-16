import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function SriLankanCoconutDal() {
  return (
    <>
      <SEO
        title="Sri Lankan Coconut Dal | The Notebook - Copper + Cloves"
        description="My mum is from Sri Lanka and this is one of the dishes she cooked for us when we were young - a really comforting dish with familiar South Indian ingredients."
      />
      <Navigation />
      <main>
        <article className="section-padding">
          <div className="container max-w-4xl">
            <Button
              asChild
              variant="ghost"
              className="mb-8 -ml-4 text-sage hover:text-sage/80 hover:bg-sage/5"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to The Notebook
              </Link>
            </Button>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <span className="font-medium text-sage">Recipes</span>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>15-20 minutes</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Serves 2-4</span>
                  </div>
                </div>

                <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                  Sri Lankan Coconut Dal
                </h1>

                <div className="flex items-center gap-3 pt-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">March 12, 2026</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                    My mum is from Sri Lanka and this is one of the dishes she cooked for us when we were young— and now it is part of C+C's famous Sri Lankan Thali which is our bestseller across our cafes! A really comforting dal that tastes a little different than South Indian dals, this version uses coconut milk for a creamy richness that makes it absolutely irresistible.
                  </p>
                </div>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://copperandcloves.com/wp-content/uploads/2020/08/e840610bd7468226aa6d296e90c65a2e-1.png"
                  alt="Sri Lankan Coconut Dal"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <section className="bg-card p-8 rounded-lg border border-border space-y-6">
                  <h2 className="font-display text-2xl font-light tracking-tight">
                    Ingredients
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-sage mb-3 text-sm uppercase tracking-wide">
                        The Masala Onions Part
                      </h3>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>2 onions, thinly sliced</li>
                        <li>4 garlic cloves, finely chopped</li>
                        <li>2 green chillies, finely chopped</li>
                        <li>2 tsp mustard seeds</li>
                        <li>2 tsp jeera seeds</li>
                        <li>2 tsp fennel seeds</li>
                        <li>2 tbsp extra virgin coconut oil</li>
                        <li>The leaves from a sprig of curry leaves- washed</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-sage mb-3 text-sm uppercase tracking-wide">
                        To Make the Red Lentils
                      </h3>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>200g red masoor dal</li>
                        <li>1 tsp turmeric powder</li>
                        <li>2 tsp cumin powder</li>
                        <li>1 tsp Himalayan pink salt (or other natural salt)</li>
                        <li>180ml coconut milk</li>
                        <li>Handful palak leaves, washed</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-sage mb-3 text-sm uppercase tracking-wide">
                        Garnish
                      </h3>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>Fresh coriander leaves</li>
                        <li>About a tbsp grated coconut</li>
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
                      <span className="text-foreground/70 text-sm">15-20 minutes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sage font-medium text-sm">Serves:</span>
                      <span className="text-foreground/70 text-sm">2-4 people</span>
                    </div>
                  </div>
                </section>
              </div>

              <section className="space-y-8 pt-8">
                <h2 className="font-display text-3xl font-light tracking-tight">
                  What To Do
                </h2>

                <ol className="space-y-8">
                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      1
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      First wash the lentils – place in a bowl full of water, at first the water will turn super cloudy. Move them around with your hands and then drain the water out. Repeat this again, until the water is clear. This is an important step as it not only washes away dirt, but reduces how starchy the lentils will be- which would impact the texture of the dish! So don't skip this step 😊
                    </p>
                  </li>

                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      2
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Once washed, place the lentils in a pot, add 1 tsp of salt, turmeric and jeera powder and add 500ml of water. Stir together and place on a high flame, allow the water to boil, then turn down the flame and allow to simmer for 10 minutes. After 10 minutes you will add the coconut milk, and continue to allow to simmer.
                    </p>
                  </li>

                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      3
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Meanwhile, start preparing the onions. Thinly slice (not dice) the onions, and finely chop the chillies and garlic. Warm the coconut oil in a flat pan on a medium heat, and add the mustard seeds, fennel seeds and jeera seeds. When the mustard seeds start to pop, and in the curry leaves, onions, garlic and chillies. Stir well so everything is evenly distributed. The aim here is to really let these onions cook down until they are lovely and caramelised- which means they will shrink to about half their size as the water is lost from the onions, concentrating sweetness and flavour. You want them to turn golden brown colour and become a little sticky. To do this you need to cook them <strong>slow and low</strong>– for a long(ish) time and on a low heat. It could take between 15-20 minutes. Don't rush this part by cooking them on a high heat to cut down cooking time, it won't taste the same!
                    </p>
                  </li>

                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      4
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Back to the lentils- check the lentils have become soft, and increase the heat just a little to allow them to thicken. This is a very thick dal, not a watery dal. This might take another 10-15 minutes after you added the coconut milk. Therefore the lentils in total will take between 20-25 minutes – 10 minutes cooking in the water, and then another 10-15 minutes after you add the coconut milk. The onions should take about the same time, so everything comes together at the end nicely!
                    </p>
                  </li>

                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      5
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Once the dal is nice and thick and yellow colour, stir through the handful of spinach leaves- they will cook and wilt directly inside the dal, they may release a little water – give them 2 minutes and stir well. Then stir through about 80% of the caramelised, spiced onions into the coconut dal. The remaining 20% you can use as a garnish- pile up in the centre of the dal and don't stir it in.
                    </p>
                  </li>

                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      6
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Further garnish with some fresh coriander leaves and some freshly grated coconut. ( or a scattering of the sambol, recipe here)
                    </p>
                  </li>

                  <li className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-medium text-sm">
                      7
                    </span>
                    <p className="text-foreground/80 leading-relaxed pt-1">
                      Serve in a big pot on the table with red rice (which is also lovely if you grate some coconut over the top), alongside the coconut + carrot sambol (recipe here)
                    </p>
                  </li>
                </ol>
              </section>

              <footer className="pt-12 border-t border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6 bg-card border-border">
                    <h3 className="font-display text-xl font-light mb-3">
                      More Recipes
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      Explore more plant-based recipes in The Notebook
                    </p>
                    <Button asChild variant="outline" className="w-full border-sage text-sage hover:bg-sage hover:text-white">
                      <Link href="/blog">View All Recipes</Link>
                    </Button>
                  </Card>

                  <Card className="p-6 bg-sage text-white border-sage">
                    <h3 className="font-display text-xl font-light mb-3">
                      Meal Subscriptions
                    </h3>
                    <p className="text-sm text-white/90 mb-4">
                      Enjoy dishes like this delivered fresh to your door
                    </p>
                    <Button asChild variant="secondary" className="w-full bg-white text-sage hover:bg-white/90">
                      <Link href="/subscription">Explore Plans</Link>
                    </Button>
                  </Card>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}