import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { AllColors } from "../constants/allColors";



function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

  const navigation = [
    { name: "About", href: "/", current: true },
    { name: "Skills", href: "#skills", current: false },
    { name: "Work", href: "#work", current: false }
  ];

  const [navigationState, setNavigationState] = useState(navigation);


  const updateNavigationState = (name : string) => {
    const updatedArray = navigationState.map((item) => ({
      ...item,
      current: item.name === name
    }));

    setNavigationState(updatedArray);    
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 shadow-lg ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                {/* <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/">
                    <Image
                      className="block h-8 w-auto"
                      src="/images/logos/logo-rose.svg"
                      alt="Logo Your Company"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />
                  </Link>
                </div> */}

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5 items-center">
                    {navigationState.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? `text-neutral-900 border border-t-0 border-l-0 border-r-0 border-b-4 ${AllColors.borderColor} dark:text-neutral-400 `
                            : "text-neutral-900 dark:text-neutral-400 hover:underline",
                          "text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        style={{textDecoration: 'none'}}
                        onClick={() => updateNavigationState(item.name)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2">
                  <Link
                    href="https://github.com/IvanGael"
                    target="_blank"
                    className="hidden sm:block"
                  >
                    <button className={`bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:${AllColors.mainBgColor} hover:${AllColors.mainBgColor} hover:text-white dark:hover:text-black rounded-full`}>
                      GitHub
                    </button>
                  </Link>
                  <ThemeSwitchButton />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-neutral-900 dark:text-neutral-400"
                      : "text-neutral-900 dark:text-neutral-400",
                    "block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link href="https://github.com/IvanGael" target="_blank">
                <button className={`mt-12 ${AllColors.mainBgColor} text-white px-4 p-3 font-medium rounded-full w-full`}>
                  GitHub
                </button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
