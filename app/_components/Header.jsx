"use client";

import {
  RedirectToSignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <div>
      <header className="bg-white shadow-md sticky top-0">
        <div className="w-full justify-between flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link href="/" className=" cursor-pointer block text-teal-600">
            <Image alt="" src={"/1_socials.png"} height={40} width={60} />
          </Link>

          <div className="flex flex-0 gap-6 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 items-center">
                {isSignedIn ? (
                  <>
                    <Link href={"/dashboard"}>
                      <LayoutDashboard />
                    </Link>
                    <UserButton />
                  </>
                ) : (
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="block rounded-md  px-5 py-2.5 text-sm font-medium "
                      href="#"
                    >
                      LogIn
                    </Button>
                  </SignInButton>
                )}
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
