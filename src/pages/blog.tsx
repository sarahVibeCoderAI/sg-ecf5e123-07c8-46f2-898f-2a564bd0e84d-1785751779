import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Recipes", "Nutrition", "Lifestyle"];

  const articles = [
    {
      id: 1,
      title: "Sri Lankan Coconut Dal",
      excerpt: "My mum is from Sri Lanka and this is one of the dishes she cooked for us when we were young - a really comforting dal that tastes a little different than South Indian dals.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/08/e840610bd7468226aa6d296e90c65a2e-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "March 12, 2026",
      featured: true,
      slug: "sri-lankan-coconut-dal",
    },
    {
      id: 2,
      title: "Breakfast Smoothie Bowl",
      excerpt: "Dessert for breakfast? Yas! Rich in antioxidants from raw cacao and full of fibre - the cold brew gives you that caffeine kick!",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/07/0371145292de0f8341535e3601ab5c1d-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "4 min read",
      date: "January 28, 2026",
      featured: false,
      slug: "breakfast-smoothie-bowl",
    },
    {
      id: 3,
      title: "Charred Tomato + Bell Pepper Soup",
      excerpt: "Charring the tomatoes and bell peppers transforms this simple soup into something extraordinary. The smoky, caramelized flavors create depth that you just can't get any other way.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/Tomato-soup_01-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "January 2026",
      featured: false,
      slug: "charred-tomato-bell-pepper-soup",
    },
    {
      id: 4,
      title: "Avocado Lime Vegan Cheesecake",
      excerpt: "This no-bake vegan cheesecake is pure magic! Creamy avocado and bright lime come together in a luscious filling that's naturally sweetened.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/cheesecake4-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "December 2025",
      featured: false,
      slug: "avocado-lime-cheesecake",
    },
    {
      id: 5,
      title: "Vegan Protein Cookie Dough",
      excerpt: "Yes, you can eat cookie dough straight from the bowl! This protein-packed version is completely safe to eat raw and tastes just like the real thing.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/dough5-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "November 2025",
      featured: false,
      slug: "vegan-protein-cookie-dough",
    },
    {
      id: 6,
      title: "Chai Spiced Granola",
      excerpt: "This granola brings all the warming spices of a perfect cup of chai to your breakfast bowl. Crunchy clusters of oats, nuts, and coconut are infused with cinnamon, cardamom, ginger, and cloves.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/granola_04-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "November 2024",
      featured: false,
      slug: "chai-spiced-granola",
    },
    {
      id: 7,
      title: "Beetroot, Orange + Coconut Salad",
      excerpt: "This stunning salad is all about contrast - earthy roasted beetroot meets bright, juicy orange segments and toasted coconut flakes. Visually striking, refreshingly light, and packed with nutrients.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/beet-salad_05-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "December 2024",
      featured: false,
      slug: "beetroot-orange-coconut-salad",
    },
    {
      id: 8,
      title: "One Pot Coconut Pumpkin Soup",
      excerpt: "This creamy coconut pumpkin soup is comfort in a bowl. Made in just one pot with simple ingredients, it's warming, nourishing, and perfect for cooler Bangalore evenings.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/pumpkin-soup_02-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "October 2025",
      featured: false,
      slug: "coconut-pumpkin-soup",
    },
    {
      id: 9,
      title: "Aromatic Cowpea Hummus",
      excerpt: "A protein-rich twist on classic hummus! Cowpeas (black-eyed peas) create a creamy, earthy base that's elevated with aromatic spices and fresh herbs.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/rectangle_02-1-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "September 2025",
      featured: false,
      slug: "aromatic-cowpea-hummus",
    },
    {
      id: 10,
      title: "Lemon + Coconut Oatmeal Cookies",
      excerpt: "Bright lemon zest meets tropical coconut in these perfectly chewy oatmeal cookies - naturally sweetened and irresistibly delicious.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/08/8a0f7b89e524bdb05a21065a97d760a6-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "August 15, 2025",
      featured: false,
      slug: "lemon-coconut-cookies",
    },
    {
      id: 11,
      title: "Chocolate Dipped Banana + Almond Butter Skewers",
      excerpt: "A fun, healthy dessert that kids and adults love! Frozen banana skewers with almond butter and dark chocolate make the perfect naturally sweet treat.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/skewer3-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "July 2025",
      featured: false,
      slug: "chocolate-dipped-banana-skewers",
    },
    {
      id: 12,
      title: "Vegan 'bounty' Bars",
      excerpt: "Sweet, sticky coconut covered with chocolate - a vegan and healthier version of this classic. With far less sugar and saturated fats, these don't have that sickly-sweet vibe.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/bar2-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "June 2025",
      featured: false,
      slug: "vegan-bounty-bars",
    },
    {
      id: 13,
      title: "Smoky Brinjal Dip",
      excerpt: "A rich, smoky eggplant dip inspired by baba ganoush. The creamy texture and smoky flavour contrasts with the tangy pomegranate sauce.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/webp-express/webp-images/uploads/2024/04/brinjaldip5-1.png.webp",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "May 2025",
      featured: false,
      slug: "smoky-brinjal-dip",
    },
    {
      id: 14,
      title: "Homemade Pomegranate Molasses",
      excerpt: "Making your own pomegranate molasses is surprisingly simple and far more affordable than buying it. A culinary game changer with tart yet sweet flavour.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/Molasses-5_02-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "April 2025",
      featured: false,
      slug: "homemade-pomegranate-molasses",
    },
    {
      id: 15,
      title: "No-Bake Carrot Bites",
      excerpt: "These wholesome no-bake carrot bites taste just like carrot cake but are naturally sweetened and packed with nutrition. Perfect for a healthy snack or pre-workout fuel.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/carrot-bites_05-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "March 2025",
      featured: false,
      slug: "no-bake-carrot-bites",
    },
    {
      id: 16,
      title: "Pea Smash",
      excerpt: "This vibrant pea smash is a celebration of spring in a bowl. Fresh green peas get a quick blanch, then are roughly mashed with mint, lemon, and good olive oil.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/pea-smash_05-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "February 2025",
      featured: false,
      slug: "pea-smash",
    },
    {
      id: 17,
      title: "Jamun Compote",
      excerpt: "Jamun, also known as Indian blackberry or java plum, is a beloved monsoon fruit in India. This simple compote captures its sweet-tart essence with a hint of warm spices.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2024/04/jamun_04-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "January 2025",
      featured: false,
      slug: "jamun-compote",
    },
  ];

  const featuredArticle = articles.find((article) => article.featured);
  const gridArticles = articles.filter((article) => !article.featured);

  const filteredArticles =
    activeCategory === "All"
      ? gridArticles
      : gridArticles.filter((article) => article.category === activeCategory);

  return (
    <>
      <SEO
        title="The Notebook | Copper + Cloves - Plant-Based Recipes"
        description="Plant-based recipes, baking, and culinary creations from Sarah Nicole Edwards and the Copper + Cloves kitchen."
      />
      <Navigation />
      <main>
        <section className="section-padding">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                The Notebook
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Plant-based recipes crafted with intention. From indulgent treats to nourishing everyday meals, each recipe is a celebration of whole foods and thoughtful cooking.
              </p>
            </div>

            {featuredArticle && (
              <Link href={featuredArticle.slug ? `/blog/${featuredArticle.slug}` : "#"} className="block">
                <Card className="border-mushroom/30 bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-lg">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto overflow-hidden">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                      <Badge className="w-fit bg-sage/10 text-sage border-sage/20 text-xs uppercase tracking-wide">
                        {featuredArticle.category}
                      </Badge>
                      <h2 className="font-display text-2xl font-light sm:text-3xl lg:text-4xl tracking-tight leading-tight">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-foreground/70 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{featuredArticle.author}</p>
                          <div className="flex items-center space-x-4 text-xs text-foreground/60">
                            <span>{featuredArticle.date}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{featuredArticle.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="link" className="text-sage hover:text-sage/80">
                          View Recipe
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full text-xs uppercase tracking-wide ${
                    activeCategory === category
                      ? "bg-sage text-white hover:bg-sage/90"
                      : "border-mushroom text-foreground hover:bg-kale hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

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