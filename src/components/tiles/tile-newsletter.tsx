import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Tile } from '@/components/tiles/tile-base';
import A from '@/components/layouts/links';
import H from '@/components/layouts/headings';

export const TileNewsletter = ({ className }: ComponentProps<'div'>) => {
  return (
    <Tile className={cn('border border-gray-200 h-full bg-gray-50', className)}>
      <div
        className="place-self-center p-3 sm:p-4"
        aria-label="Subscribe to the Flowbite newsletter"
      >
        <H as="h3" className="mb-3 text-gray-900 dark:text-white">
          Get more updates...
        </H>
        <p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
          Subscribe to our <A to="/">newsletter</A> and get 20% off your first
          order.
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
              <button className="px-5 py-3 text-sm font-medium text-center text-white bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800  hover:rotate-2 transition-[rotate]">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </Tile>
  );
};
