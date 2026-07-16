import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Users } from "lucide-react";
import Link from "next/link";

export default function PeaSmash() {
  return (
    <>
      <SEO
        title="Pea Smash - The Notebook | Copper + Cloves"
        description="Give this a shot and it'll become a staple in your fridge. We just love it when you have something simple, delicious and versatile in the fridge that makes meal times easy."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/peasmash5-1.png"
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
              Pea Smash
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>2-3 Min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2-4 Serves</span>
              </div>
            </div>
          </header>

          <div className="mb-12">
            <img
              src="https://copperandcloves.com/wp-content/uploads/2024/04/peasmash5-1.png"
              alt="Pea Smash"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Give this a shot and it'll become a staple in your fridge. We just love it when you have something simple, delicious and versatile in the fridge that makes meal times easy. This pea smash is our go-to recipe.
            </p>

            <section className="mb-12 bg-card p-8 rounded-lg border border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Ingredients
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>500g peas – frozen or removed from pod</li>
                <li>2 large handfuls of dill or coriander or mint (or a mix of both also works)</li>
                <li>Juice of one lemon</li>
                <li>2 tbsp hemp hearts (You can buy hemp hearts here. if you can't get hold of hemp hearts, substitute for pumpkin seeds or sunflower seeds)</li>
                <li>3 small garlic cloves</li>
                <li>50 ml extra virgin olive oil (3-4 tbsp)</li>
                <li>About 1 tsp each salt and freshly cracked black pepper, plus more to taste</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What To Do
              </h2>
              <ol className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">1.</strong> Pour boiling water over the peas, leave for 2-3 minutes and drain. The peas should be just cooked and still a bright, vibrant green colour.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">2.</strong> Put all the ingredients in a mixer and pulse until you have a rough, bright green paste, flecked with the herbs and pepper.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">3.</strong> This will keep in the fridge for up to a week.
                </li>
              </ol>
            </section>

            <section className="mb-8 bg-muted/30 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Nutrition Profile
              </h3>
              <p className="text-foreground/80 mb-4">
                Green peas are packed full of nutrients. Their protein content is high and alongside their high fibre levels, they help manage the body's glycemic response. They are also powerhouses of vitamin K, vitamin A and copper. Along with the hemp hearts, this recipe is a great source of plant-based protein.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Serving ideas
              </h3>
              <p className="text-foreground/80">
                Spread it on sourdough and top with cherry tomatoes and you have the quick perfect lunch! Serve it as a dip in a big bowl alongside crackers. Make a delicious wrap by spreading it on a ragi roti and adding roast vegetables or serve it piled on top of sweet potato toasts!
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