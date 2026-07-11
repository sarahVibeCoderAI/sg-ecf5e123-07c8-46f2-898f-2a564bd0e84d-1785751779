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

  const categories = ["All", "Recipes", "Nutrition", "Lifestyle", "Community"];

  const articles = [
    {
      id: 1,
      title: "The Science of Plant-Based Protein: Everything You Need to Know",
      excerpt: "Discover how to meet your protein needs on a plant-based diet, backed by nutrition science and practical meal strategies.",
      category: "Nutrition",
      image: "/generated/blog-featured-nutrition.png",
      author: "Dr. Priya Sharma",
      readTime: "8 min read",
      date: "June 15, 2026",
      featured: true,
    },
    {
      id: 2,
      title: "5 Quick Plant-Based Breakfast Bowls for Busy Mornings",
      excerpt: "Start your day right with these nutrient-dense, make-ahead breakfast recipes that fuel your morning routine.",
      category: "Recipes",
      image: "/generated/blog-recipe.png",
      author: "Chef Arjun Menon",
      readTime: "5 min read",
      date: "June 12, 2026",
      featured: false,
    },
    {
      id: 3,
      title: "How Mindful Eating Transformed My Relationship with Food",
      excerpt: "A personal journey exploring the intersection of wellness, mindfulness, and plant-based nourishment.",
      category: "Lifestyle",
      image: "/generated/blog-lifestyle.png",
      author: "Ananya Krishnan",
      readTime: "6 min read",
      date: "June 10, 2026",
      featured: false,
    },
    {
      id: 4,
      title: "Building Community Through Shared Meals: Our Story",
      excerpt: "How Copper + Cloves became a gathering space for Bangalore's wellness community, one meal at a time.",
      category: "Community",
      image: "/generated/community-gathering.png",
      author: "C+C Team",
      readTime: "4 min read",
      date: "June 8, 2026",
      featured: false,
    },
    {
      id: 5,
      title: "The Ultimate Guide to Meal Prep for Plant-Based Athletes",
      excerpt: "Optimize your performance with strategic meal planning, macro balancing, and recovery nutrition.",
      category: "Nutrition",
      image: "/generated/meal-prep-bowls.png",
      author: "Coach Rahul Verma",
      readTime: "10 min read",
      date: "June 5, 2026",
      featured: false,
    },
    {
      id: 6,
      title: "Seasonal Summer Salads: Fresh, Local, Nourishing",
      excerpt: "Celebrate Bangalore's summer harvest with these vibrant, cooling salad recipes featuring hyper-local produce.",
      category: "Recipes",
      image: "/generated/blog-recipe.png",
      author: "Chef Arjun Menon",
      readTime: "5 min read",
      date: "June 3, 2026",
      featured: false,
    },
    {
      id: 7,
      title: "The Gut-Brain Connection: How Food Shapes Your Mood",
      excerpt: "Exploring the science behind nutritional psychiatry and how plant-based eating supports mental wellness.",
      category: "Nutrition",
      image: "/generated/blog-featured-nutrition.png",
      author: "Dr. Priya Sharma",
      readTime: "7 min read",
      date: "June 1, 2026",
      featured: false,
    },
    {
      id: 8,
      title: "Creating Rituals Around Food: Slow Living in Fast Cities",
      excerpt: "Reclaim intention in your daily meals with simple rituals that honor nourishment beyond nutrition.",
      category: "Lifestyle",
      image: "/generated/blog-lifestyle.png",
      author: "Ananya Krishnan",
      readTime: "6 min read",
      date: "May 29, 2026",
      featured: false,
    },
    {
      id: 9,
      title: "Behind the Scenes: A Day in Our Hyper-Local Kitchen",
      excerpt: "Join our chefs as they source, prep, and craft your daily meals from sunrise to delivery.",
      category: "Community",
      image: "/generated/hero-cafe-interior.png",
      author: "C+C Team",
      readTime: "5 min read",
      date: "May 27, 2026",
      featured: false,
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
        title="The Notebook | Copper + Cloves - Plant-Based Wellness Blog"
        description="Insights on plant-based nutrition, recipes, mindful living, and community wellness from Bangalore's premium wellness cafe."
      />
      <Navigation />
      <main>
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 lg:py-28">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                The Notebook
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Insights on plant-based nutrition, movement, and mindful living from our community of wellness practitioners, chefs, and thoughtful eaters.
              </p>
            </div>

            {featuredArticle && (
              <Card className="border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    <Badge variant="default" className="w-fit">
                      {featuredArticle.category}
                    </Badge>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{featuredArticle.author}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{featuredArticle.date}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{featuredArticle.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <h3 className="font-display text-xl font-semibold line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="pt-4 border-t border-border/40 space-y-2">
                      <p className="text-sm font-medium">{article.author}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
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
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Want to Contribute?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We welcome guest articles from wellness practitioners, nutritionists, and community members. Share your insights on plant-based living with our community.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Submit Your Story
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