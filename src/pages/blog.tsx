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
      title: "Mint Chocolate Chip Smoothie Bowl",
      excerpt: "A refreshing blend of mint and chocolate that tastes like ice cream but fuels your body with whole foods goodness.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2023/10/mint-chocolate-chip-smoothie-bowl-1-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "February 18, 2026",
      featured: true,
      slug: null,
    },
    {
      id: 2,
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
      id: 3,
      title: "Salted Chocolate Chip Cookie",
      excerpt: "Perfectly chewy, loaded with chocolate chips, and finished with flaky sea salt for the ultimate indulgence.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2023/09/salted-chocolate-chip-cookie-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "January 12, 2026",
      featured: false,
    },
    {
      id: 3,
      title: "Banana Walnut Pancakes",
      excerpt: "Fluffy whole-grain pancakes with caramelized bananas and crunchy walnuts - the perfect weekend breakfast.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2023/08/Banana-Walnut-Pancakes-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "December 28, 2025",
      featured: false,
    },
    {
      id: 4,
      title: "Vegan Cinnamon Rolls",
      excerpt: "Soft, pillowy cinnamon rolls with a luscious cream cheese frosting - proof that plant-based can be indulgent.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2023/05/Vegan-Cinnamon-Rolls-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "November 15, 2025",
      featured: false,
    },
    {
      id: 5,
      title: "Dark Chocolate Peanut Butter Cups",
      excerpt: "Rich dark chocolate meets creamy peanut butter in these homemade cups that rival any store-bought version.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2023/04/dark-chocolate-peanut-butter-cups-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "October 22, 2025",
      featured: false,
    },
    {
      id: 6,
      title: "Loaded Veggie Lasagna",
      excerpt: "Layers of pasta, rich marinara, creamy cashew ricotta, and roasted vegetables come together in this comfort food classic.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2023/03/loaded-veggie-lasagna-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "10 min read",
      date: "September 8, 2025",
      featured: false,
    },
    {
      id: 7,
      title: "Vegan Pumpkin Mac n Cheese",
      excerpt: "Creamy, dreamy pasta meets autumn vibes with this nutritional yeast and pumpkin-based sauce.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2022/11/vegan-pumpkin-mac-n-cheese-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "August 19, 2025",
      featured: false,
    },
    {
      id: 8,
      title: "Golden Milk Chia Seed Pudding",
      excerpt: "Anti-inflammatory turmeric meets omega-3 rich chia seeds in this make-ahead breakfast that tastes like dessert.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2022/10/golden-milk-chia-seed-pudding-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "July 30, 2025",
      featured: false,
    },
    {
      id: 9,
      title: "Healthy Vegan Pumpkin Chocolate Chip Cookies",
      excerpt: "Soft, cakey cookies packed with warm spices, pumpkin puree, and melty chocolate chips.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2022/09/healthy-vegan-pumpkin-chocolate-chip-cookies-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "June 25, 2026",
      featured: false,
    },
    {
      id: 10,
      title: "Grilled Tofu Summer Salad",
      excerpt: "Perfectly marinated grilled tofu over crisp greens with a tangy tahini dressing - summer on a plate.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2022/06/grilled-tofu-summer-salad-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "June 10, 2026",
      featured: false,
    },
    {
      id: 11,
      title: "Blood Orange Rosemary Upside Down Cake",
      excerpt: "Stunning citrus meets fragrant rosemary in this show-stopping dessert that tastes as good as it looks.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2022/02/blood-orange-rosemary-upside-down-cake-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "May 18, 2026",
      featured: false,
    },
    {
      id: 12,
      title: "Vegan Fettuccine Alfredo",
      excerpt: "Ultra-creamy cashew-based sauce coats tender fettuccine for the ultimate comfort food experience.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2022/01/vegan-fettuccine-alfredo-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "April 29, 2026",
      featured: false,
    },
    {
      id: 13,
      title: "Easy Vegan White Bean Soup",
      excerpt: "Hearty, nourishing, and ready in under 30 minutes - the perfect weeknight dinner.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/11/easy-vegan-white-bean-soup-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "April 5, 2026",
      featured: false,
    },
    {
      id: 14,
      title: "Vegan Chocolate Chunk Brownies",
      excerpt: "Fudgy, decadent brownies with pools of melted chocolate - these will convert any skeptic.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/09/vegan-chocolate-chunk-brownies-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "March 22, 2026",
      featured: false,
    },
    {
      id: 15,
      title: "Vegan Caramel Apple Cinnamon Rolls",
      excerpt: "Tender cinnamon rolls meet caramelized apples and a drizzle of date caramel for autumn perfection.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/09/vegan-caramel-apple-cinnamon-rolls-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "9 min read",
      date: "March 8, 2026",
      featured: false,
    },
    {
      id: 16,
      title: "Dark Chocolate Peanut Butter Overnight Oats",
      excerpt: "Wake up to a jar of chocolatey, protein-packed oats that taste like dessert for breakfast.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/08/dark-chocolate-peanut-butter-overnight-oats-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "February 28, 2026",
      featured: false,
    },
    {
      id: 17,
      title: "Vegan Chocolate Chip Zucchini Muffins",
      excerpt: "Moist, tender muffins hiding vegetables and loaded with chocolate chips - perfect for sneaky nutrition.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/08/vegan-chocolate-chip-zucchini-muffins-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "February 5, 2026",
      featured: false,
    },
    {
      id: 18,
      title: "Vegan Strawberry Crumble Bars",
      excerpt: "Buttery oat crust meets jammy strawberry filling and a crisp crumble topping - summer in bar form.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/06/vegan-strawberry-crumble-bars-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "January 20, 2026",
      featured: false,
    },
    {
      id: 19,
      title: "Vegan Blueberry Coffee Cake",
      excerpt: "Tender cake studded with juicy blueberries and topped with a cinnamon streusel - perfect with morning coffee.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/05/vegan-blueberry-coffee-cake-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "January 3, 2026",
      featured: false,
    },
    {
      id: 20,
      title: "Tahini Chocolate Chip Cookies",
      excerpt: "Nutty tahini adds depth to these chewy cookies loaded with dark chocolate chips.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/05/tahini-chocolate-chip-cookies-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "December 15, 2025",
      featured: false,
    },
    {
      id: 21,
      title: "Vegan French Silk Pie",
      excerpt: "Silky smooth chocolate mousse in a buttery crust, topped with coconut whipped cream - pure elegance.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/03/vegan-french-silk-pie-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "December 2, 2025",
      featured: false,
    },
    {
      id: 22,
      title: "Healthy Vegan Carrot Muffins",
      excerpt: "Naturally sweetened, perfectly spiced, and packed with shredded carrots for a nutritious morning treat.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/02/healthy-vegan-carrot-muffins-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "November 28, 2025",
      featured: false,
    },
    {
      id: 23,
      title: "Vegan Red Velvet Cupcakes",
      excerpt: "Rich, velvety cocoa cupcakes with a hint of tang, topped with fluffy cream cheese frosting.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2021/01/vegan-red-velvet-cupcakes-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "November 10, 2025",
      featured: false,
    },
    {
      id: 24,
      title: "Vegan Gingerbread Cookies",
      excerpt: "Perfectly spiced, subtly sweet, and beautifully decorated - a holiday tradition made plant-based.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/12/vegan-gingerbread-cookies-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "October 30, 2025",
      featured: false,
    },
    {
      id: 25,
      title: "Vegan Sweet Potato Casserole",
      excerpt: "Creamy sweet potato base topped with a crunchy pecan streusel - the ultimate holiday side dish.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/11/vegan-sweet-potato-casserole-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "8 min read",
      date: "October 12, 2025",
      featured: false,
    },
    {
      id: 26,
      title: "Apple Cider Donuts",
      excerpt: "Baked not fried, these cake donuts are infused with apple cider and rolled in cinnamon sugar.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/10/apple-cider-donuts-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "September 25, 2025",
      featured: false,
    },
    {
      id: 27,
      title: "Vegan Pumpkin Bread",
      excerpt: "Moist, perfectly spiced pumpkin bread that fills your kitchen with the aroma of autumn.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/09/vegan-pumpkin-bread-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "September 5, 2025",
      featured: false,
    },
    {
      id: 28,
      title: "Vegan Banana Bread",
      excerpt: "The ultimate classic, made with overripe bananas and a hint of cinnamon for the perfect snack.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/08/vegan-banana-bread-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "5 min read",
      date: "August 28, 2025",
      featured: false,
    },
    {
      id: 29,
      title: "Vegan Lemon Poppy Seed Muffins",
      excerpt: "Bright, tangy lemon and crunchy poppy seeds make these muffins irresistibly refreshing.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/07/vegan-lemon-poppy-seed-muffins-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "August 10, 2025",
      featured: false,
    },
    {
      id: 30,
      title: "Vegan Lemon Bars",
      excerpt: "Tart, creamy lemon filling on a buttery shortbread crust - sunshine in every bite.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/05/vegan-lemon-bars-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "7 min read",
      date: "July 22, 2025",
      featured: false,
    },
    {
      id: 31,
      title: "Vegan Lemon Blueberry Scones",
      excerpt: "Flaky, buttery scones bursting with blueberries and kissed with lemon zest - perfect for afternoon tea.",
      category: "Recipes",
      image: "https://copperandcloves.com/wp-content/uploads/2020/05/vegan-lemon-blueberry-scones-819x1024.jpg",
      author: "Sarah Nicole Edwards",
      readTime: "6 min read",
      date: "July 8, 2025",
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