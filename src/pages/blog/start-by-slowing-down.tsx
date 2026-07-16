import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StartBySlowingDown() {
  return (
    <>
      <SEO
        title="Start by Slowing Down — Mindful Eating Part 1 | Copper + Cloves"
        description="Before we ever talk about what to eat, there is a quieter, more powerful place to begin — the simple act of eating slowly, and actually being there while you do it."
        image="/Sarah_C_C_Subscription_Photoshoot_May_2024-22_1_.jpg"
      />
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to The Notebook
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-foreground/60 mb-4">
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary font-medium">
                Mindful Eating
              </span>
              <span>Part 1</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Start by Slowing Down
            </h1>
            <p className="text-xl text-foreground/70 mb-6">
              Before we ever talk about what to eat, there is a quieter, more powerful place to begin — the simple act of eating slowly, and actually being there while you do it.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground/60">
              <span className="font-medium text-foreground">By Sarah</span>
              <span>·</span>
              <span>Founder & Certified Health Coach, Copper + Cloves</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/Sarah_C_C_Subscription_Photoshoot_May_2024-22_1_.jpg"
              alt="Mindful eating at Copper + Cloves"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="border-t border-border pt-8 mb-8" />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Almost everyone who comes to me for help with their eating arrives expecting a diet. They've usually tried a few before — felt healthy for a while, drifted back, and now they want to "get back on track." So when I tell them the first thing we're going to work on isn't a food list at all, but the pace at which they eat, I'm often met with a puzzled look, and sometimes a little frustration. It feels too simple to matter.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              But this is genuinely where I begin with every client, and I begin here on purpose. We've all been quietly convinced — largely by the diet industry — that getting healthier has to mean something hard: a strict new plan we white-knuckle our way through and, if we're disciplined enough, stick to forever. The truth is gentler and far more sustainable. The most useful first step is also the most accessible one, available at your very next meal: slow down, and pay attention.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Mindful eating simply means being fully present with your food — tuning in to the flavours, the textures, the aromas, and moving through the meal slowly and consciously. It isn't a technique reserved for special occasions or "clean" food. It's a way of relating to eating itself.
            </p>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
              Why slowing down changes everything
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              The first reason is the most joyful one: food tastes better when you slow down. When you savour each mouthful instead of rushing through it, an ordinary meal becomes something you actually experience rather than something you get through on the way to the next thing. Taking the time to enjoy your food is one of the simplest, most reliable pleasures of a life well lived — and it's free.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              The second reason is quietly practical. When you eat slowly and with awareness, you're far more likely to eat the right amount for your body and to make good, unforced decisions about what serves you. Your body has an intelligent feedback system, but it works on a gentle delay. Eat fast enough and you'll sail straight past the signals telling you you've had enough. Slow down, and you give those signals time to reach you.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              And here's the part that surprises people: none of this depends on the food being "healthy." A nourishing way of eating has room for a wide variety of foods, including the ones we've been taught to think of as indulgent. Eat slowly and consciously whatever is on your plate, and take real satisfaction from it. The pleasure is the point.
            </p>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
              Four small practices to begin with
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Pick just one of these to try this week — the one that feels easiest, the one you can imagine actually doing. That's not a compromise; it's the method. Small, repeatable shifts are what change how we eat, not grand overhauls we abandon by Thursday.
            </p>

            <div className="space-y-8 mb-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  1. Three breaths and a moment of gratitude
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Take thirty seconds before you eat to arrive. Close your eyes, inhale deeply and exhale slowly. On the second breath, notice your body and let your shoulders drop. On the third, open your eyes, look at the food in front of you, and feel genuinely grateful it's there. Consider the journey it took to reach you, and the hands involved — a farmer, a cook, your mother. Then smile, and begin.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  2. Count your chews
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Counting is a simple scaffold while your body relearns a slower rhythm. Aim to chew each mouthful around twenty times. It will seem like a lot at first — keep going, and keep your attention on the actual experience of eating. Chewing well is also where good digestion begins.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  3. Put your fork down between bites
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Rest your hand on the table while you chew, and give the flavour your full attention. Most of us are already loading the next forkful before we've swallowed the last — which quietly pulls us out of the moment. Chew, swallow, take a conscious breath, and only then reach for the next bite.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  4. Eat without the screen
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  When you're eating alone, try not to do it in front of the television or with your phone in hand. This is the fastest route to mindless eating. Set your place nicely, even for one, and simply eat — no scrolling, no reading, no email. Just your own company, or someone else's. It's remarkable how much more satisfying a meal becomes when it's the only thing you're doing.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 border-l-4 border-primary rounded-r-lg p-6 my-12">
              <p className="text-lg text-foreground/80 leading-relaxed italic">
                "This one has been a genuine game-changer for me — though it takes practice, and there are still days I catch myself eating on autopilot. That's fine. You're not aiming for perfect; you're aiming for present."
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              If any of this resonates and you'd like to go deeper, I'd point you towards the world of Intuitive Eating — a warm, non-diet approach to nourishing your body and rebuilding trust with food. It sits at the heart of everything I teach.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Start small. Choose one practice, keep it for a week, and notice what shifts. You may find that the simplest change of all — slowing down — quietly rearranges your whole relationship with the table.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              With warmth,<br />
              Sarah
            </p>

            <div className="border-t border-border pt-8 mt-12" />

            <div className="bg-card rounded-2xl p-8 mt-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                The Copper + Cloves way
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Slowing down is exactly the feeling we build our cafés around. Every plate is made to be lingered over, not rushed — colourful, plant-forward food that rewards your full attention. Come in, sit down, put the phone away, and let a meal be just a meal again.
              </p>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to The Notebook
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}