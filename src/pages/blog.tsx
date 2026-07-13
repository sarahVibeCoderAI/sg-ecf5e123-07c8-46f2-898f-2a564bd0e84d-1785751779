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
      title: "Lemon + Coconut Oatmeal Cookies",
      excerpt: "Bright lemon zest meets tropical coconut in these perfectly chewy oatmeal cookies - naturally sweetened and irresistibly delicious.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/08/8a0f7b89e524bdb05a21065a97d760a6-1.png",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "August 15, 2025",
      featured: true,
      slug: "lemon-coconut-cookies",
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