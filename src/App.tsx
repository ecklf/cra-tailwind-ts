import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";

function DarkToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
}

interface Props {}

const App = (props: Props) => {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 dark:bg-gray-900">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 dark:bg-gray-700">
            <div className="max-w-md mx-auto">
              <div>
                <img
                  alt="logo"
                  src="https://play.tailwindcss.com/img/logo.svg"
                  className="h-7 sm:h-8"
                />
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
                  <p>
                    An advanced online playground for Tailwind CSS, including
                    support for things like:
                  </p>
                  <ul className="list-disc space-y-2">
                    <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Customizing your{" "}
                        <code className="text-sm font-bold text-gray-900 dark:text-gray-400">
                          tailwind.config.js
                        </code>{" "}
                        file
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Extracting classes with{" "}
                        <code className="text-sm font-bold text-gray-900 dark:text-gray-400">
                          @apply
                        </code>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Code completion with instant preview
                      </p>
                    </li>
                  </ul>
                  <p>
                    Perfect for learning how the framework works, prototyping a
                    new idea, or creating a demo to share online.
                  </p>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7 dark:text-gray-200">
                  <p>Want to dig deeper into Tailwind?</p>
                  <p>
                    <a
                      href="https://tailwindcss.com/docs"
                      className="text-cyan-600 hover:text-cyan-700"
                    >
                      {" "}
                      Read the docs &rarr;{" "}
                    </a>
                  </p>
                  <div className="mt-2" />
                  <DarkToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
