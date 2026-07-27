import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Recipes", "Mindful Eating", "Nutrition", "Lifestyle"];

  const articles = [
    {
      id: 1,
      title: "Start by Slowing Down",
      excerpt: "Before we ever talk about what to eat, there is a quieter, more powerful place to begin — the simple act of eating slowly, and actually being there while you do it.",
      category: "Mindful Eating",
      categories: ["Mindful Eating", "Lifestyle"],
      image: "/Sarah_C_C_Subscription_Photoshoot_May_2024-22_1_.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "July 16, 2026",
      featured: true,
      slug: "start-by-slowing-down",
    },
    {
      id: 2,
      title: "Avocado Lime Vegan Cheesecake",
      excerpt: "This no-bake vegan cheesecake is pure magic! Creamy avocado and bright lime come together in a luscious filling that's naturally sweetened.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/cheesecake4-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "December 2025",
      featured: false,
      slug: "avocado-lime-cheesecake",
    },
    {
      id: 3,
      title: "Sri Lankan Coconut Dal",
      excerpt: "My mum is from Sri Lanka and this is one of the dishes she cooked for us when we were young - a really comforting dal that tastes a little different than South Indian dals.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2020/08/e840610bd7468226aa6d296e90c65a2e-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "March 12, 2026",
      featured: false,
      slug: "sri-lankan-coconut-dal",
    },
    {
      id: 4,
      title: "Breakfast Smoothie Bowl",
      excerpt: "Dessert for breakfast? Yas! Rich in antioxidants from raw cacao and full of fibre - the cold brew gives you that caffeine kick!",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2020/07/0371145292de0f8341535e3601ab5c1d-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "4 min read",
      date: "January 28, 2026",
      featured: false,
      slug: "breakfast-smoothie-bowl",
    },
    {
      id: 5,
      title: "Charred Tomato + Bell Pepper Soup",
      excerpt: "Charring the tomatoes and bell peppers transforms this simple soup into something extraordinary. The smoky, caramelized flavors create depth that you just can't get any other way.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/Tomato-soup_01-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "January 2026",
      featured: false,
      slug: "charred-tomato-bell-pepper-soup",
    },
    {
      id: 6,
      title: "Vegan Protein Cookie Dough",
      excerpt: "Yes, you can eat cookie dough straight from the bowl! This protein-packed version is completely safe to eat raw and tastes just like the real thing.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/dough5-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "November 2025",
      featured: false,
      slug: "vegan-protein-cookie-dough",
    },
    {
      id: 7,
      title: "Chai Spiced Granola",
      excerpt: "The beauty of this recipe is that you can play around with the ingredients so much. If you prefer walnuts to almonds- just swap them in!",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/granola3-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "November 2024",
      featured: false,
      slug: "chai-spiced-granola",
    },
    {
      id: 8,
      title: "Beetroot, Orange + Coconut Salad",
      excerpt: "For the hot summer days, we've come up with a quick and easy recipe- beetroots, oranges and coconuts come together in this refreshing, colourful salad.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/salad4-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "December 2024",
      featured: false,
      slug: "beetroot-orange-coconut-salad",
    },
    {
      id: 9,
      title: "One Pot Coconut Pumpkin Soup",
      excerpt: "This creamy coconut pumpkin soup is comfort in a bowl. Made in just one pot with simple ingredients, it's warming, nourishing, and perfect for cooler Bangalore evenings.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/pumpkin-soup_02-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "October 2025",
      featured: false,
      slug: "coconut-pumpkin-soup",
    },
    {
      id: 10,
      title: "Aromatic Cowpea Hummus",
      excerpt: "A protein-rich twist on classic hummus! Cowpeas (black-eyed peas) create a creamy, earthy base that's elevated with aromatic spices and fresh herbs.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/rectangle_02-1-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "September 2025",
      featured: false,
      slug: "aromatic-cowpea-hummus",
    },
    {
      id: 11,
      title: "Lemon + Coconut Oatmeal Cookies",
      excerpt: "Bright lemon zest meets tropical coconut in these perfectly chewy oatmeal cookies - naturally sweetened and irresistibly delicious.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2020/08/8a0f7b89e524bdb05a21065a97d760a6-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "August 15, 2025",
      featured: false,
      slug: "lemon-coconut-cookies",
    },
    {
      id: 12,
      title: "Chocolate Dipped Banana + Almond Butter Skewers",
      excerpt: "A fun, healthy dessert that kids and adults love! Frozen banana skewers with almond butter and dark chocolate make the perfect naturally sweet treat.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/skewer3-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "July 2025",
      featured: false,
      slug: "chocolate-dipped-banana-skewers",
    },
    {
      id: 13,
      title: "Vegan 'bounty' Bars",
      excerpt: "Do you remember Bounty bars? We decided to make a vegan and healthier version of this classic, using local, Indian ingredients.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/bar2-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "June 2025",
      featured: false,
      slug: "vegan-bounty-bars",
    },
    {
      id: 14,
      title: "Smoky Brinjal Dip",
      excerpt: "Dips are the perfect sharing food for when you have guests, and are easy to make in batches. This smoky brinjal dip will be the star of your next dinner party.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/brinjaldip5-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "May 2025",
      featured: false,
      slug: "smoky-brinjal-dip",
    },
    {
      id: 15,
      title: "Homemade Pomegranate Molasses",
      excerpt: "Making your own pomegranate molasses is surprisingly simple and far more affordable than buying it. A culinary game changer with tart yet sweet flavour.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/Molasses-5_02-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "April 2025",
      featured: false,
      slug: "homemade-pomegranate-molasses",
    },
    {
      id: 16,
      title: "No-bake Carrot Bites",
      excerpt: "This is a great no-cook recipe to make ahead of time, so you have a go-to healthy dessert in the fridge. It is packed full of healthy nourishing ingredients.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/bites4-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "March 2025",
      featured: false,
      slug: "no-bake-carrot-bites",
    },
    {
      id: 17,
      title: "Pea Smash",
      excerpt: "Give this a shot and it'll become a staple in your fridge. We just love it when you have something simple, delicious and versatile in the fridge that makes meal times easy.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/peasmash5-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "February 2025",
      featured: false,
      slug: "pea-smash",
    },
    {
      id: 18,
      title: "Jamun Compote",
      excerpt: "Summers bring mangoes and when they go, they leave us with jamuns. This jamun compote helps to extend the season.",
      category: "Recipes",
      categories: ["Recipes"],
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/compote4-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "January 2025",
      featured: false,
      slug: "jamun-compote",
    },
  ];

  const featuredArticle = articles.find((article) => article.featured);
  const gridArticles = articles.filter((article) => !article.featured);

  const filteredArticles = articles.filter((article) => {
    if (activeCategory === "All") return true;
    return article.categories.includes(activeCategory);
  });

  return (
    <>
      <SEO
        title="The Notebook | Copper + Cloves - Plant-Based Recipes"
        description="Plant-based recipes, baking, and culinary creations from Sarah Nicole Edwards and the Copper + Cloves kitchen."
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-copper/10 border border-copper/20">
                <BookOpen className="h-4 w-4 text-copper" />
                <span className="text-sm font-medium text-copper uppercase tracking-wide">The Journal</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
                The Journal
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Recipes you'll actually make.<br />
                Nutrition without the noise.<br />
                Thoughtful articles on food, habits and wellbeing.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 lg:py-16">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-muted text-foreground/70 hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={article.slug ? `/blog/${article.slug}` : "#"}
                  className="block"
                >
                  <Card className="border-mushroom/30 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer rounded-lg">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <Badge className="text-xs bg-kale/10 text-kale border-kale/20 uppercase tracking-wide">
                        {article.category}
                      </Badge>
                      <h3 className="font-display text-xl font-light line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-foreground/70 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="pt-4 border-t border-border space-y-2">
                        <p className="text-sm font-medium">{article.author}</p>
                        <div className="flex items-center space-x-4 text-xs text-foreground/60">
                          <span>{article.date}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                More Recipes Coming Soon
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Follow along on Instagram <a href="https://www.instagram.com/copperandcloves/" target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">@copperandcloves</a> for behind-the-scenes kitchen moments and recipe previews.
              </p>
              <Button asChild size="lg" className="bg-sage text-white hover:bg-sage/90">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}