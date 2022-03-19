import { Disclosure, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.svg"

export const Nav = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-slate-900 pt-0 sm:pt-6 sticky top-0 z-50 transition-all ease-in-out"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* desktop menu */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <a className="h-11 w-11 items-center">
                        <Image src={logo} alt="portfolio logo" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-6">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 font-mono">
                    <Link href="#about">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        About
                      </a>
                    </Link>
                    <Link href="#experience">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Experience
                      </a>
                    </Link>
                    <Link href="#projects">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Projects
                      </a>
                    </Link>
                    <Link href="#contact">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                      </a>
                    </Link>
                    <Link href="/resume.pdf">
                      <a className="text-[#7851a9] outline outline-1 outline-[#7851a9] hover:bg-opacity-10 hover:bg-purple-500 px-3 py-2 rounded-md text-sm font-medium">
                        Resume
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden w-full">
              <div className="w-full h-screen bg-slate-800 px-2 space-y-6 mx-auto flex flex-col">
                <Disclosure.Button>
                  <Link href="#about">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="#experience">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Experience
                    </a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="#projects">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Projects
                    </a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="#contact">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Contact
                    </a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="/resume.pdf">
                    <a className="text-[#7851a9] outline outline-1 outline-[#7851a9] hover:bg-opacity-10 hover:bg-purple-100 px-3 py-2 rounded-md text-sm font-medium">
                      Resume
                    </a>
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
