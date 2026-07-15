import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function BeetrootOrangeCoconutSalad() {
  return (
    <>
      <SEO
        title="Beetroot, Orange + Coconut Salad | The Notebook"
        description="A stunning salad with earthy roasted beetroot, bright orange segments, and toasted coconut."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/beet-salad_05-1.png"
      />
      <Navigation />
      <main>
        <article className="section-padding">
          <div className="container max-w-4xl">
            <Button
              asChild
              variant="ghost"
              className="mb-8 text-sage hover:text-sage/80"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to The Notebook
              </Link>
            </Button>

            <header className="space-y-6 mb-12">
              <Badge className="bg-kale/10 text-kale border-kale/20 text-xs uppercase tracking-wide">
                Recipe
              </Badge>
              <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                Beetroot, Orange + Coconut Salad
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-xl">👩‍🍳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Nicole Edwards</p>
                    <p className="text-xs text-foreground/60">December 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-foreground/70">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>45 Min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>2-4 Serves</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-xl">
              <img
                src="https://copperandcloves.com/wp-content/uploads/2024/04/beet-salad_05-1.png"
                alt="Beetroot, Orange + Coconut Salad"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                This stunning salad is all about contrast—earthy roasted beetroot meets bright, juicy orange segments and toasted coconut flakes. Visually striking, refreshingly light, and packed with nutrients, it's the perfect side dish or light lunch that brings color and vitality to your plate.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Ingredients
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>4 medium beetroots</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>2 large oranges</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/2 cup coconut flakes, toasted</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>2 cups mixed salad greens (arugula, spinach, or baby lettuce)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1/4 cup fresh mint leaves</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>2 tablespoons extra virgin olive oil</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 tablespoon apple cider vinegar or lemon juice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>1 teaspoon honey or maple syrup</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-sage">•</span>
                          <span>Sea salt and black pepper to taste</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                    Nutrition Highlights
                  </h2>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/70">
                      Beetroot is rich in folate, fiber, and manganese, and contains betalains—powerful antioxidants that give beets their deep red color. Oranges provide vitamin C and add brightness, while coconut offers healthy fats and a satisfying crunch. This combination supports immune function, heart health, and sustained energy.
                    </p>
                  </div>
                </section>
              </div>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-light tracking-tight mb-6">
                  What To Do
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Preheat your oven to 200°C (400°F). Wash the beetroots well and wrap each one individually in aluminum foil. Place on a baking tray and roast for 45-60 minutes, depending on size, until tender when pierced with a knife.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        While the beetroots are roasting, toast the coconut flakes in a dry pan over medium heat for 2-3 minutes, stirring constantly, until golden brown. Watch carefully as they can burn quickly! Set aside to cool.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Peel the oranges and segment them by cutting between the membranes with a sharp knife. Do this over a bowl to catch any juice for the dressing. Set the segments aside.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Once the beetroots are cool enough to handle, peel them (the skins should slip off easily) and cut into wedges or cubes. Don't worry if your hands turn pink—it washes off!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        Make the dressing by whisking together the olive oil, apple cider vinegar (or lemon juice), honey, any reserved orange juice, salt, and pepper.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      <p className="text-foreground/70">
                        To assemble: Spread the salad greens on a large platter. Arrange the roasted beetroot wedges and orange segments on top. Scatter with torn mint leaves and toasted coconut flakes. Drizzle the dressing over everything just before serving.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <footer className="pt-12 border-t border-border">
              <div className="flex items-center justify-between">
                <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to The Notebook
                  </Link>
                </Button>
                <Button asChild className="bg-sage text-white hover:bg-sage/90">
                  <Link href="/subscription">
                    Try Our Meal Plans
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}