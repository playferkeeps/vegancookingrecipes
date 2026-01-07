import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Noah - The Story Behind vegancooking.recipes',
  description: 'Meet Noah, a badass vegan cook who thrives outside the box. Learn about his journey, his experimental cooking style, and why he believes in pushing boundaries in plant-based cuisine.',
  openGraph: {
    title: 'About Noah - The Story Behind vegancooking.recipes',
    description: 'Meet Noah, a badass vegan cook who thrives outside the box. Learn about his journey, his experimental cooking style, and why he believes in pushing boundaries in plant-based cuisine.',
    images: [
      {
        url: 'https://vegancooking.recipes/img/vcr-noah.png',
        width: 400,
        height: 400,
        alt: 'Noah - Badass Vegan Cook',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-50 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 sm:mb-10">
              <div className="inline-block rounded-full overflow-hidden shadow-2xl ring-4 ring-green-200 hover:ring-green-300 transition-all duration-300">
                <Image
                  src="/img/vcr-noah.png"
                  alt="Noah - Badass Vegan Cook and Creator of vegancooking.recipes"
                  width={250}
                  height={250}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Hi, I&apos;m Noah 🔥
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
              Welcome to my kitchen—where I push boundaries, experiment fearlessly, and create plant-based magic that breaks all the rules. Outside the box? That&apos;s where I&apos;m most comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Opening Story */}
          <section className="mb-12 sm:mb-16">
            <div className="prose prose-lg sm:prose-xl max-w-none">
              <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 font-light">
                If you had told me ten years ago that I&apos;d be here, sharing my wildest vegan experiments with people all over the world, I probably would have said &quot;hell yeah, that sounds like me.&quot; Because here&apos;s the thing—I&apos;ve never been one to follow the rules, especially when it comes to food.
              </p>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                I&apos;m Noah, and I&apos;m a badass vegan cook. Outside the box is where I&apos;m most comfortable, and that&apos;s exactly where I want to take you.
              </p>
            </div>
          </section>

          {/* The Journey */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              How I Got Here
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                My journey to plant-based cooking wasn&apos;t exactly conventional. I didn&apos;t follow a cookbook or stick to what everyone else was doing. Instead, I saw plant-based cooking as a challenge—a chance to break all the rules and see what was possible.
              </p>
              <p>
                I was always the one asking &quot;what if?&quot; What if I could make a vegan version of that dish everyone said was impossible? What if I combined flavors that &quot;shouldn&apos;t&quot; go together? What if I threw out the traditional methods and tried something completely different?
              </p>
              <p>
                That&apos;s when I realized: <strong>outside the box is where I&apos;m most comfortable.</strong> While others were following recipes, I was experimenting. While others were playing it safe, I was pushing boundaries. And you know what? That&apos;s when the magic happened.
              </p>
              <p>
                I started creating dishes that made people stop and say &quot;wait, this is vegan?&quot; Not because I was trying to trick them, but because I was proving that plant-based cooking doesn&apos;t have to be limited or boring. It can be bold, experimental, and absolutely badass.
              </p>
              <p>
                That&apos;s when I knew. This wasn&apos;t just about food. This was about showing people what&apos;s possible when you refuse to be boxed in.
              </p>
            </div>
          </section>

          {/* The Philosophy */}
          <section className="mb-12 sm:mb-16 bg-green-50 rounded-2xl p-8 sm:p-10 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              My Cooking Philosophy
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m not here to follow the rules. I&apos;m here to break them, experiment with them, and see what happens when you throw the rulebook out the window. Here&apos;s what drives me:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-green-700">
                    Push Boundaries
                  </h3>
                  <p>
                    The best recipes come from asking &quot;what if?&quot; I&apos;m constantly experimenting with unexpected flavor combinations, unconventional techniques, and ingredients that make people raise an eyebrow. That&apos;s where the magic happens—when you step outside your comfort zone and into uncharted territory.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-green-700">
                    No Limits
                  </h3>
                  <p>
                    Plant-based cooking doesn&apos;t mean limited. I&apos;m here to prove that vegan food can be bold, experimental, and absolutely badass. Whether it&apos;s recreating a classic dish in a completely new way or inventing something that&apos;s never been done before, I don&apos;t believe in limits.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-green-700">
                    Own Your Kitchen
                  </h3>
                  <p>
                    Your kitchen is your lab. Experiment. Fail. Try again. The best dishes I&apos;ve created came from mistakes that turned into discoveries. Don&apos;t be afraid to break the rules, because sometimes that&apos;s exactly what you need to create something incredible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Kitchen */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              My Kitchen (The Real One)
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Let me be honest with you: my kitchen is a controlled chaos. There are usually dishes in the sink, ingredients scattered across the counter, and experiments in various stages of completion. My spice rack? It&apos;s organized by what makes sense to me, not by any conventional system.
              </p>
              <p>
                But here&apos;s what my kitchen <em>is</em>: it&apos;s a laboratory. It&apos;s where I test wild ideas, combine flavors that shouldn&apos;t work but somehow do, and push the boundaries of what plant-based cooking can be. It&apos;s where I&apos;ve had epic failures that taught me more than any success, and where I&apos;ve created dishes that made me stop and think &quot;holy shit, this actually worked.&quot;
              </p>
              <p>
                This kitchen has seen me at my most experimental and my most determined. It&apos;s where I learned that cooking isn&apos;t about following rules—it&apos;s about breaking them. It&apos;s about trying something completely insane and seeing what happens. It&apos;s about being comfortable outside the box because that&apos;s where the real magic happens.
              </p>
              <p>
                And that&apos;s what I want to share with you. Not just recipes, but this mindset. This knowing that you can experiment fearlessly, break the rules, and create something incredible that no one else has thought of.
              </p>
            </div>
          </section>

          {/* Why I Share */}
          <section className="mb-12 sm:mb-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 sm:p-10 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Why I Share These Recipes
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                When I first went plant-based, I was frustrated. Every recipe I found was safe, predictable, and honestly... kind of boring. I wanted something that would make people stop and say &quot;wait, that&apos;s vegan?&quot; I wanted to push boundaries and experiment, but everything I found was playing it way too safe.
              </p>
              <p>
                I remember thinking: <em>Why is everyone following the same rules? Why isn&apos;t anyone trying something completely different?</em> The fear that plant-based food had to be limited, or that it couldn&apos;t be bold and experimental.
              </p>
              <p>
                <strong>I was so wrong.</strong>
              </p>
              <p>
                And that&apos;s why I&apos;m here. Because I don&apos;t want anyone else to feel boxed in. I want you to know that plant-based cooking can be wild, experimental, and absolutely badass. It doesn&apos;t have to follow the rules. It can break them, twist them, and create something completely new.
              </p>
              <p>
                Every recipe I share is one I&apos;ve experimented with, tweaked, and pushed beyond the conventional. They&apos;re the ones that made me think &quot;holy shit, this actually works.&quot; They&apos;re shared because I believe in showing people what&apos;s possible when you refuse to be limited.
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8">
                Because cooking should be fearless. And fearlessness is meant to be shared.
              </p>
            </div>
          </section>

          {/* My Food Philosophy */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              My Food Philosophy (The Real Version)
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                It&apos;s really just three things:
              </p>
              <div className="space-y-4 pl-4 border-l-4 border-green-600">
                <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Break the rules.
                </p>
                <p>
                  Don&apos;t follow recipes blindly. Don&apos;t stick to what everyone else is doing. Experiment. Combine flavors that shouldn&apos;t work. Try techniques that make people raise an eyebrow. The best dishes come from breaking the rules and seeing what happens.
                </p>
                
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6">
                  Own your kitchen.
                </p>
                <p>
                  Your kitchen is your laboratory. It&apos;s where you get to experiment, fail, and try again. Don&apos;t be afraid to push boundaries. Don&apos;t be limited by what others say is possible. Plant-based cooking doesn&apos;t mean playing it safe—it means owning your space and creating something incredible.
                </p>
                
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6">
                  Be comfortable outside the box.
                </p>
                <p>
                  That&apos;s where I&apos;m most comfortable, and that&apos;s where the magic happens. When you step outside conventional boundaries, that&apos;s when you discover something no one else has thought of. That&apos;s when you create dishes that make people stop and say &quot;wait, this is vegan?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* What You'll Find Here */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              What You&apos;ll Find Here
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                This isn&apos;t just a recipe site. It&apos;s a collection of the meals that have become part of my life. The ones I make when I need comfort. The ones I share with friends. The ones that make me excited to get in the kitchen.
              </p>
              <p>
                You&apos;ll find recipes for every moment:
              </p>
              <ul className="list-none space-y-3 pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl mt-1">🌱</span>
                  <span><strong>Quick weeknight dinners</strong> for when you&apos;re tired but still want something good</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl mt-1">🥖</span>
                  <span><strong>Weekend baking projects</strong> that fill your home with the most incredible smells</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl mt-1">🌍</span>
                  <span><strong>International flavors</strong> that let you travel the world from your kitchen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl mt-1">💚</span>
                  <span><strong>Simple, whole-food recipes</strong> that make you feel amazing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl mt-1">✨</span>
                  <span><strong>Tips and tricks</strong> I&apos;ve learned from years of trial and error (and lots of mistakes)</span>
                </li>
              </ul>
              <p className="mt-6">
                Every single recipe is shared with the hope that it brings you joy in your kitchen. They&apos;re not perfect—but they&apos;re real. And that&apos;s what matters.
              </p>
            </div>
          </section>

          {/* A Note About Perfection */}
          <section className="mb-12 sm:mb-16 bg-gray-50 rounded-2xl p-8 sm:p-10 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              A Note About Perfection (Spoiler: It&apos;s Not Required)
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                I want you to know something important: <strong>you don&apos;t have to be perfect.</strong>
              </p>
              <p>
                I&apos;ve burned things. I&apos;ve over-salted things. I&apos;ve made recipes that were... well, let&apos;s just say they didn&apos;t make it to the website. And you know what? That&apos;s okay. That&apos;s more than okay—that&apos;s how we learn.
              </p>
              <p>
                Cooking isn&apos;t about perfection. It&apos;s about showing up. It&apos;s about trying. It&apos;s about the beautiful, messy process of creating something with your own hands.
              </p>
              <p>
                So if you try one of my recipes and it doesn&apos;t turn out exactly like the picture? That&apos;s fine. If you substitute an ingredient because it&apos;s what you have? Perfect. If you make it your own? Even better.
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 italic">
                The best recipe is the one you actually make. The one that nourishes you. The one that brings you joy.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-12 sm:mb-16 text-center">
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8 sm:p-10 md:p-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Thank You for Being Here
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 font-light max-w-3xl mx-auto">
                Every time someone tries one of my recipes, shares it with a friend, or finds a moment of joy in their kitchen because of something I shared—that&apos;s why I do this. That&apos;s the whole point.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                So thank you. Thank you for trusting me with your time, your kitchen, and your meals. Thank you for being part of this community. Thank you for choosing to nourish yourself and the earth.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
                You belong here. You&apos;re welcome here. And I&apos;m so glad you found your way to my kitchen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/recipes"
                  className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                >
                  Browse My Recipes
                </Link>
                <Link
                  href="/meal-prep"
                  className="inline-block bg-green-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-800"
                >
                  Check Out Meal Prep Guide
                </Link>
              </div>
            </div>
          </section>

          {/* Personal Note */}
          <section className="text-center border-t-2 border-gray-200 pt-12">
              <p className="text-gray-600 text-base sm:text-lg italic max-w-2xl mx-auto">
              Keep pushing boundaries,<br />
              <span className="text-xl sm:text-2xl font-semibold text-gray-900 not-italic">Noah 🔥</span>
            </p>
            <p className="text-sm text-gray-500 mt-4">
              P.S. If you ever have questions, want to share a recipe you made, or just want to say hi—I&apos;d love to hear from you. This is a community, and you&apos;re part of it.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="mt-12 pt-8 border-t-2 border-gray-300">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 max-w-3xl mx-auto">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Disclaimer:</strong> Noah is an AI character loosely based on the developer of this site. The recipes, stories, and content on this website are generated with the assistance of artificial intelligence and should be used at your own discretion. Experiment at your own risk—that&apos;s kind of the point.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

