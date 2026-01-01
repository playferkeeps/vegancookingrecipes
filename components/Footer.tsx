import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Section with Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/img/vcr-white-logo-150x150.webp"
                alt="vegancooking.recipes"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20"
                priority
              />
            </Link>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Hey there! I&apos;m Katie, and I&apos;m so glad you&apos;re here. I believe the kitchen is a sacred space, and plants are our best medicine. Let&apos;s cook something amazing together.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://x.com/vegancookin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X (Twitter)"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586056221592"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/vegancooking.recipes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/recipes"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 min-h-[44px] flex items-center"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 min-h-[44px] flex items-center"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 min-h-[44px] flex items-center"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/meal-prep"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 min-h-[44px] flex items-center"
                >
                  Meal Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 min-h-[44px] flex items-center"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 min-h-[44px] flex items-center"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter/Connect */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Want to stay in the loop? Follow us on social media or drop us a line. We love hearing from you!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-300 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} vegancooking.recipes. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

