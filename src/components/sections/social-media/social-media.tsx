import { Link } from 'waku';
import { TileInstagram } from './tile-instagram';
import { TileTikTok } from './tile-tiktok';
import { TileTelegram } from './tile-telegram';
import { TileEmoji } from './tile-emoji';
import { ExternalLink } from 'lucide-react';

export const SocialMedia = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-3 sm:gap-4 px-2 sm:px-4 py-8 sm:py-12">
      <div className="col-span-1 row-span-2">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-md"
        >
          <source src="/videos/teach.mp4" type="video/mp4" />
        </video>
      </div>
      <Link to="/" className="col-span-1 row-span-1 relative">
        <TileTelegram className="aspect-square" />
        <ExternalLink
          className="text-white absolute bottom-2 right-2"
          size={16}
        />
      </Link>
      <Link to="/" className="col-span-1 row-span-1 relative">
        <TileInstagram className="aspect-square" />
        <ExternalLink
          className="text-white absolute bottom-2 right-2"
          size={16}
        />
      </Link>
      <Link to="/" className="col-span-1 row-span-1 relative">
        <TileTikTok className="aspect-square" />
        <ExternalLink
          className="text-white absolute bottom-2 right-2"
          size={16}
        />
      </Link>
      <div className="col-span-2 md:col-span-2 row-span-1">
        <div
          className="h-full p-4 bg-white border border-gray-200 rounded-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Subscribe to the Flowbite newsletter"
        >
          <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
            Get more updates...
          </h3>
          <p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
            Sign up for our newsletter and you'll be among the first to find out
            about new features.
          </p>
          <form>
            <div data-style="clean" className="flex items-end mb-3">
              <div
                data-element="fields"
                data-stacked="false"
                className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields"
              >
                <div className="relative w-full mr-3 formkit-field">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    id="member_email"
                    className="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    name="email_address"
                    aria-label="Email Address"
                    placeholder="Your email address..."
                    type="email"
                  />
                </div>
                <span className="px-5 py-3 text-sm font-medium text-center text-white bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Subscribe
                </span>
              </div>
            </div>
          </form>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            By subscribing, you agree with ConvertKit's{' '}
            <a
              href="#"
              className="text-orange-400 hover:underline dark:text-orange-500"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              className="text-orange-400 hover:underline dark:text-orange-500"
              href="#"
            >
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-1 relative">
        <TileEmoji className="aspect-square" />
      </div>
    </section>
  );
};
