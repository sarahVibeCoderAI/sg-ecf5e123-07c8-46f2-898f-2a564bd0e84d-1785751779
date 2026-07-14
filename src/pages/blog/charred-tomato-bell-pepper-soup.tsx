import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CharredTomatoBellPepperSoup() {
  return (
    <>
      <SEO
        title="Charred Tomato + Bell Pepper Soup | The Notebook"
        description="The monsoons are finally here with their gloomy skies and chilly winds and there's nothing better than cosying up with a good book and a hot bowl of soup in this weather! This soup is full of fibre, vitamin C and healthy fats."
        image="https://copperandcloves.com/wp-content/uploads/2024/04/Tomato-soup_01-1.png"
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
              Charred Tomato + Bell Pepper Soup
            </h1>
            <div className="flex items-center gap-6 text-sm text-charcoal/60">
              <span>By Sarah Nicole Edwards</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>January 2026</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://copperandcloves.com/wp-content/uploads/2024/04/Tomato-soup_01-1.png"
              alt="Charred Tomato + Bell Pepper Soup"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              The monsoons are finally here with their gloomy skies and chilly winds and there's nothing better than cosying up with a good book and a hot bowl of soup in this weather! This soup is full of fibre, vitamin C and healthy fats.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mt-4">
              The key to this deep-flavoured soup is not to boil the vegetables but roast them. Roast them in the oven until nicely caramelised, a little charred even, and then blend them up with their roasting juices.
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
                      <span>5 large tomatoes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 handful cherry tomatoes (or use 2 extra tomatoes if you can't find cherry tomatoes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 onions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 red capsicum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>5 sprigs of thyme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>4 cloves garlic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 tsp salt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>1 tsp black pepper</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>2 tbsp extra virgin olive oil</span>
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
                  <span className="text-foreground/70 text-sm">20 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage font-medium text-sm">Serves:</span>
                  <span className="text-foreground/70 text-sm">2-4</span>
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
                  Preheat your oven to 180°C.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  2
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Wash all the vegetables. Cut the large tomatoes into quarters.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  3
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Slice the onions and cut open the red peppers, remove the stalk, seeds and white pith inside, and roughly chop into slices.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  4
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Place all chopped vegetables and the cherry tomatoes in a baking tray and mix in the thyme, salt, pepper, garlic and olive oil.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  5
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Place the vegetables in the oven for 25 minutes until the tomatoes and peppers char slightly- meaning there are some brown sections- and the onions caramelise into a golden brown colour.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  6
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Once your times beeps, check the veggies. Stir them to mix everything up and roast for a further 20 minutes.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  7
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  Once they look lovely and caramelised allow them to cool down. Remove any tough stalks of thyme, and then blend using a hand blender until smooth or tip the vegetables into a mixie, seal the lid carefully and pulse until smooth. Add a splash of water if it is too thick- but this is supposed to hearty. Check salt and adjust to taste.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  8
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  When you want to serve, heat gently over a low-medium heat until piping hot but not boiling. Ladle the soup into bowls and garnish with some extra thyme leaves and a drizzle of olive oil and crack of black pepper. Serve with slices of toasted wholegrain sourdough bread – or tear them into small squares and throw into the bowl to have some rough croutons.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-copper/10 text-copper flex items-center justify-center font-medium text-sm">
                  9
                </span>
                <p className="text-charcoal/70 leading-relaxed pt-1">
                  <span className="font-medium text-copper">Meal Prep Tip:</span> As part of your meal prep, you could double these quantities to make a big batch and freeze in single portions. When you're tired after a long day of work, you can thaw it, heat it up and you have a comforting bowl of soup ready without any hassle! This soup can also be served cold if you want a gazpacho- just add a tbsp of apple cider vinegar and stir through.
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