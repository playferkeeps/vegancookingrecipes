import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Noah - The Story Behind vegancooking.recipes',
  description: 'Meet Noah, the barefoot chef behind vegancooking.recipes. Learn about his journey, his food philosophy, and why he believes the kitchen is a sacred space.',
  openGraph: {
    title: 'About Noah - The Story Behind vegancooking.recipes',
    description: 'Meet Noah, the barefoot chef behind vegancooking.recipes. Learn about his journey, his food philosophy, and why he believes the kitchen is a sacred space.',
    images: [
      {
        url: 'https://vegancooking.recipes/img/vcr-noah.png',
        width: 400,
        height: 400,
        alt: 'Noah - Barefoot Chef',
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
                  alt="Noah - Barefoot Chef and Creator of vegancooking.recipes"
                  width={250}
                  height={250}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Hi, I&apos;m Noah 🌻
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
              Welcome to my kitchen—where plants are our medicine, cooking is a prayer, and every meal is a love letter to this beautiful earth.
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
                If you had told me ten years ago that I&apos;d be here, sharing recipes from my kitchen with beautiful souls all over the world, I probably would have laughed. Not because I didn&apos;t want to—but because I never imagined my little corner of the internet could become this sacred space where we all gather around the virtual table.
              </p>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                But here we are. And I&apos;m so grateful you&apos;re here with me.
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
                My journey to plant-based cooking wasn&apos;t exactly planned. I didn&apos;t wake up one day and decide to become a vegan chef. Instead, it happened slowly, like the way morning light fills a room—one gentle moment at a time.
              </p>
              <p>
                I was working a job that left me exhausted, eating whatever was fastest, and feeling disconnected from my body. You know that feeling? When you&apos;re so busy taking care of everything else that you forget to take care of yourself? That was me.
              </p>
              <p>
                Then one Sunday, I found myself in my kitchen—barefoot, with music playing, chopping vegetables for what felt like the first time in months. And something shifted. I felt... <em>alive</em>. Not just physically, but in a way that made me remember who I was before life got so complicated.
              </p>
              <p>
                That afternoon, I made a simple lentil soup. Nothing fancy. But as I stood there, stirring and tasting and adjusting, I realized I was doing more than just cooking. I was <strong>healing</strong>. I was reconnecting with myself, with the earth, with the simple joy of creating something nourishing with my own two hands.
              </p>
              <p>
                That&apos;s when I knew. This wasn&apos;t just about food. This was about coming home to myself.
              </p>
            </div>
          </section>

          {/* The Philosophy */}
          <section className="mb-12 sm:mb-16 bg-green-50 rounded-2xl p-8 sm:p-10 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              What VCR Really Means
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                You might have noticed the letters <strong className="text-green-700">VCR</strong> on my apron. They stand for three things that guide everything I do in the kitchen:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-green-700">
                    Vibrant
                  </h3>
                  <p>
                    Life is meant to be lived in full color. I believe our food should reflect that. When I&apos;m cooking, I&apos;m not just making something to eat—I&apos;m creating something that makes my whole being light up. Vibrant food feeds more than our bodies; it feeds our souls. It&apos;s the difference between surviving and <em>thriving</em>.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-green-700">
                    Conscious
                  </h3>
                  <p>
                    Every choice we make matters. Every ingredient we choose, every meal we prepare—it all ripples out into the world. I cook with intention, knowing that what I put on my plate affects not just my body, but the earth, the animals, and the future. Being conscious means being awake to the impact of our choices, and choosing love over convenience, even when it&apos;s harder.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-green-700">
                    Roots
                  </h3>
                  <p>
                    We all come from somewhere. My roots are in whole foods, in the wisdom of plants, in the simple act of cooking with my hands. But roots also mean connection—to the earth, to our ancestors, to each other. When I&apos;m in my kitchen, I&apos;m connected to every person who has ever cooked with love, to every plant that has grown from the soil, to every moment of grace that brought me here.
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
                Let me be honest with you: my kitchen is not Instagram-perfect. There are usually dishes in the sink. My spice rack is organized in a way that only makes sense to me. And yes, I cook barefoot most of the time—there&apos;s something about feeling the ground beneath my feet that keeps me grounded, literally and figuratively.
              </p>
              <p>
                But here&apos;s what my kitchen <em>is</em>: it&apos;s warm. It&apos;s real. It&apos;s a place where I&apos;ve cried over failed recipes and danced when something turned out perfectly. It&apos;s where I&apos;ve had deep conversations with friends while chopping vegetables, where I&apos;ve found peace on hard days, and where I&apos;ve celebrated small victories with a perfectly baked loaf of bread.
              </p>
              <p>
                This kitchen has seen me at my most vulnerable and my most joyful. It&apos;s where I learned that cooking isn&apos;t about perfection—it&apos;s about presence. It&apos;s about showing up, even when you&apos;re tired, even when you don&apos;t know what you&apos;re doing, even when everything else feels chaotic.
              </p>
              <p>
                And that&apos;s what I want to share with you. Not just recipes, but this feeling. This knowing that you can create something beautiful and nourishing, right here, right now, with what you have.
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
                When I first went plant-based, I was overwhelmed. Every recipe seemed complicated. Every ingredient felt foreign. I spent hours scrolling through blogs, trying to find something that felt <em>doable</em>, something that didn&apos;t require a culinary degree or a pantry full of expensive ingredients.
              </p>
              <p>
                I remember the frustration. The feeling of wanting to nourish my body but not knowing where to start. The fear that plant-based food would be boring, or complicated, or just... not as good.
              </p>
              <p>
                <strong>I was so wrong.</strong>
              </p>
              <p>
                And that&apos;s why I&apos;m here. Because I don&apos;t want anyone else to feel that way. I want you to know that plant-based cooking can be simple. It can be quick. It can be absolutely delicious. And most importantly, it can be <em>yours</em>.
              </p>
              <p>
                Every recipe I share is one I&apos;ve made countless times. They&apos;re the ones I turn to when I&apos;m tired, when I&apos;m celebrating, when I need comfort, when I want to try something new. They&apos;re tested. They&apos;re real. And they&apos;re shared with so much love.
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8">
                Because food is love. And love is meant to be shared.
              </p>
            </div>
          </section>

          {/* My Food Philosophy */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              My Food Philosophy (The Simple Version)
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                It&apos;s really just three things:
              </p>
              <div className="space-y-4 pl-4 border-l-4 border-green-600">
                <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Nourish your body.
                </p>
                <p>
                  Your body is your home. Treat it with the same care you&apos;d give a beloved friend. Feed it whole foods, give it what it needs, and listen when it tells you something.
                </p>
                
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6">
                  Respect Mother Earth.
                </p>
                <p>
                  We&apos;re all connected. The choices we make about what we eat ripple out into the world. When we choose plant-based foods, we&apos;re choosing to honor the earth that sustains us. We&apos;re choosing compassion. We&apos;re choosing a future where our children can still breathe clean air and drink clean water.
                </p>
                
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6">
                  Eat with joy.
                </p>
                <p>
                  Food isn&apos;t just fuel. It&apos;s celebration. It&apos;s connection. It&apos;s memory. It&apos;s love made tangible. So eat with joy. Savor every bite. Share meals with people you love. And never, ever feel guilty about nourishing yourself.
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
                Every single recipe has been tested in my actual kitchen, with my actual hands, probably multiple times. They&apos;re not perfect—but they&apos;re real. And that&apos;s what matters.
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
              With so much love from my kitchen to yours,<br />
              <span className="text-xl sm:text-2xl font-semibold text-gray-900 not-italic">Noah 🌻</span>
            </p>
            <p className="text-sm text-gray-500 mt-4">
              P.S. If you ever have questions, want to share a recipe you made, or just want to say hi—I&apos;d love to hear from you. This is a community, and you&apos;re part of it.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

